// utils/dealSimonRound.ts
import { SimonSaysCommand } from '../data/simonSaysData';

type Difficulty = 'easy' | 'medium';
type Tag = 'physical' | 'silly' | 'leftRight' | 'balance' | 'sequence';

export interface DealOpts {
  includeTricks?: boolean;
  count?: number;
  trickRatio?: number;            // default 0.3
  firstRealCount?: number;        // default 2
  minGapBetweenTricks?: number;   // default 2
  avoidEndTrick?: boolean;        // default true
  maxSequencePerRound?: number;   // default 2
}

type Base = {
  base: string;
  tags?: Tag[];
  difficulty: Difficulty;
};

export function dealSimonRound(
  dataset: SimonSaysCommand[],
  {
    includeTricks = true,
    count = 20,
    trickRatio = 0.3,
    firstRealCount = 2,
    minGapBetweenTricks = 2,
    avoidEndTrick = true,
    maxSequencePerRound = 2,
  }: DealOpts = {}
): SimonSaysCommand[] {
  // 1) Build a clean base pool (strip any "Simon says" prefix in data)
  const basePool = dataset
    .map(normalize)
    .filter(safeFilter);

  if (basePool.length === 0) return [];

  // Light variety quotas
  const poolSeq = basePool.filter(c => c.tags?.includes('sequence'));
  const poolNonSeq = basePool.filter(c => !c.tags?.includes('sequence'));
  const seqCap = Math.min(maxSequencePerRound, poolSeq.length);

  // 2) Plan trick schedule (array of booleans)
  const plan = planTricks({
    length: Math.min(count, basePool.length >= count ? count : count),
    includeTricks,
    trickRatio,
    firstRealCount,
    minGap: minGapBetweenTricks,
    avoidEndTrick,
  });

  // 3) Pick commands while honoring simple variety constraints
  const used = new Set<string>();
  let seqUsed = 0;
  const leftRightStreak = { n: 0 };

  const deck: SimonSaysCommand[] = [];

  for (let i = 0; i < plan.length; i++) {
    const isTrick = plan[i] === true;
    const wantEasy = i < 5;

    const pick = pickCommand({
      poolSeq,
      poolNonSeq,
      used,
      wantEasy,
      leftRightStreak,
      seqCap,
      seqUsed,
    });

    if (!pick) break;

    // Track soft quotas
    if (pick.tags?.includes('sequence')) seqUsed++;
    if (pick.tags?.includes('leftRight')) leftRightStreak.n++; else leftRightStreak.n = 0;
    used.add(pick.base);

    // Format final text
    const txt = isTrick ? pick.base : `Simon says ${pick.base}`;
    deck.push({
      id: i + 1,
      command: txt,
      isSimonSays: !isTrick,
      tags: pick.tags,
      difficulty: pick.difficulty,
    });
  }

  // If we somehow came up short (tiny dataset), recycle safely
  while (deck.length < plan.length) {
    const extra = basePool[Math.floor(Math.random() * basePool.length)];
    if (!extra) break;
    const isTrick = plan[deck.length] === true;
    const txt = isTrick ? extra.base : `Simon says ${extra.base}`;
    deck.push({
      id: deck.length + 1,
      command: txt,
      isSimonSays: !isTrick,
      tags: extra.tags,
      difficulty: extra.difficulty,
    });
  }

  return deck;
}

// -------- helpers

function normalize(r: SimonSaysCommand) {
  // Accept either "Simon says ..." or base phrases in your data
  const base = r.command.replace(/^simon says\s+/i, '').trim().replace(/[.!]$/,'');
  return {
    base,
    tags: r.tags ?? [],
    difficulty: (r.difficulty ?? 'easy') as Difficulty,
  };
}

function safeFilter(r: { base: string; tags?: Tag[] }) {
  const lower = r.base.toLowerCase();
  // Basic safety pass
  const banned = [
    'run', 'sprint', 'yell', 'shout', 'scream', 'close your eyes and walk',
    'leave your seat', 'leave your table', 'touch a stranger', 'climb', 'jump off',
  ];
  if (banned.some(b => lower.includes(b))) return false;
  return true;
}

function planTricks({
  length,
  includeTricks,
  trickRatio,
  firstRealCount,
  minGap,
  avoidEndTrick,
}: {
  length: number;
  includeTricks: boolean;
  trickRatio: number;
  firstRealCount: number;
  minGap: number;
  avoidEndTrick: boolean;
}) {
  const plan = new Array<boolean>(length).fill(false); // false = real
  if (!includeTricks) return plan;

  const target = clamp(Math.round(length * trickRatio), 1, Math.max(1, Math.floor(length * 0.5)));

  const forbidden = new Set<number>();
  for (let i = 0; i < Math.min(firstRealCount, length); i++) forbidden.add(i);
  if (avoidEndTrick && length > 0) forbidden.add(length - 1);

  const candidates: number[] = [];
  for (let i = 0; i < length; i++) if (!forbidden.has(i)) candidates.push(i);
  shuffle(candidates);

  const placed: number[] = [];
  for (const idx of candidates) {
    if (placed.some(p => Math.abs(p - idx) <= minGap)) continue;
    placed.push(idx);
    plan[idx] = true;
    if (placed.length >= target) break;
  }

  return plan;
}

function pickCommand({
  poolSeq,
  poolNonSeq,
  used,
  wantEasy,
  leftRightStreak,
  seqCap,
  seqUsed,
}: {
  poolSeq: Base[];
  poolNonSeq: Base[];
  used: Set<string>;
  wantEasy: boolean;
  leftRightStreak: { n: number };
  seqCap: number;
  seqUsed: number;
}) {
  const prefer = (arr: Base[]) =>
    arr.find(c =>
      !used.has(c.base) &&
      (!wantEasy || c.difficulty === 'easy') &&
      !(leftRightStreak.n >= 2 && c.tags?.includes('leftRight'))
    );

  // Try non-sequence first to keep variety
  let pick = prefer(poolNonSeq);
  if (!pick && seqUsed < seqCap) pick = prefer(poolSeq);
  if (!pick) {
    // Relax constraints
    pick = [...poolNonSeq, ...poolSeq].find(c => !used.has(c.base));
  }
  return pick ?? null;
}

// tiny utils
function shuffle<T>(a: T[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}
