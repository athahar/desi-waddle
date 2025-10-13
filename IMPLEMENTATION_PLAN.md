# Desi Charades MVP Implementation Plan

## Overview

Transform the existing charades app into a culturally relevant Desi version with pack-based content system, multi-level navigation, and advanced deck management to prevent card repeats.

## Data Structure Provided

- **3 Packs**: Bollywood Universe (5 categories, 500 cards), Street Food & Drinks (3 categories, 30 cards), Cricket Fever (3 categories, 30 cards)
- **Total**: 11 categories, 560+ cards ready to import
- **Format**: JSON with pack → categories → cards hierarchy

## Implementation Phases

### Phase 1: Create Type System & Data Models

**Files**: `src/types/content.ts`, update `src/types/game.ts`

Define TypeScript interfaces for the new pack-based structure:

- `CharadeCard` - individual card with id, text
- `PackCategory` - subcategory within a pack (e.g., "90s & 2000s Movies")
- `Pack` - top-level pack (e.g., "Bollywood Universe")

Update navigation types to support pack/category routing.

### Phase 2: Convert JSON Data to TypeScript Files

**Files**: `src/data/packs/`, data aggregator at `src/data/index.ts`

Create organized pack structure:

```
src/data/packs/
├── bollywood/
│   ├── 90s-and-2000s-movies.ts (100 cards)
│   ├── evergreen-stars.ts (100 cards)
│   ├── bollywood-songs.ts (100 cards)
│   ├── villains-and-side-characters.ts (100 cards)
│   └── iconic-dialogues.ts (100 cards)
├── street-food/
│   ├── mumbai-specials.ts
│   ├── delhi-delights.ts
│   └── south-indian-staples.ts
├── cricket/
│   ├── indian-cricket-legends.ts
│   ├── famous-matches-and-moments.ts
│   └── ipl-madness.ts
└── index.ts (aggregator with getAllPacks(), getPackById(), etc.)
```

Convert JSON to typed TypeScript arrays, generate UUIDs where needed.

### Phase 3: Update PackListScreen

**File**: `src/screens/PackListScreen.tsx`

Transform to show 3 pack cards instead of single Charades game:

- Display: Bollywood Universe, Street Food & Drinks, Cricket Fever
- Each pack shows emoji/icon, name, description
- Navigation: All packs have subcategories → navigate to `SubcategoryScreen`
- Reuse existing card styling from current HomeScreen

### Phase 4: Rename & Update CharadesCategoryScreen → SubcategoryScreen

**File**: Rename `CharadesCategoryScreen.tsx` → `SubcategoryScreen.tsx`

Update to display subcategories within selected pack:

- Accept route params: `{ packId: string }`
- Load categories from pack data
- Display category cards (e.g., "90s & 2000s Movies", "Evergreen Stars")
- Navigation: `onPress` → `CharadesScreen` with `{ packId, categoryId }`
- Reuse existing grid layout and card styling

### Phase 5: Update CharadesScreen for Pack-Based Play

**File**: `src/screens/CharadesScreen.tsx`

Modify to work with new data structure:

- Accept route params: `{ packId: string, categoryId: string }`
- Load cards using `getCardsByPackAndCategory(packId, categoryId)`
- Integrate with enhanced deck manager (Phase 6)
- Keep existing gameplay: accelerometer controls, 60s timer, scoring
- Update session tracking: `gameId = "charades_{packId}_{categoryId}"`

### Phase 6: Implement Enhanced Deck Manager

**File**: `src/core/deckManager.ts` (new), update `src/utils/deckBuilder.ts`

Build sophisticated deck management system blending existing `deckBuilder.ts` logic with new requirements:

**Core Features**:

1. **30-day cooldown per card** - Don't show same card for 30 days
2. **50% refresh rule** - Don't refresh deck until ≥50% of category shown
3. **Seeded deterministic shuffle** - Session-stable ordering
4. **Pack/category-level tracking** - Each pack+category = separate deck state

**Key Functions**:

```typescript
async function getNextCard(opts: {
  categoryCards: CharadeCard[];
  packId: string;
  categoryId: string;
  sessionId: string;
  cooldownDays?: number;
}): Promise<{ card: CharadeCard | null; deckExhausted: boolean }>

async function shouldRefreshDeck(packId: string, categoryId: string): Promise<boolean>
async function refreshDeck(packId: string, categoryId: string): Promise<void>
async function markCardShown(cardId: string, packId: string, categoryId: string, sessionId: string): Promise<void>
```

**Storage Strategy**:

- Use AsyncStorage for card history tracking
- Store per pack+category: `charades_{packId}_{categoryId}_history`
- Track: cardId, shownAt timestamp, sessionId
- Check cooldown before serving card

**Reuse from existing deckBuilder.ts**:

- Seeded shuffle algorithm (`mulberry32` or similar)
- Session ID generation
- History tracking patterns

### Phase 7: Update Navigation Stack

**File**: `App.tsx`

Update navigation to support new flow:

```typescript
<Stack.Screen name="Home" component={PackListScreen} />
<Stack.Screen name="Subcategory" component={SubcategoryScreen} />
<Stack.Screen name="Charades" component={CharadesScreen} />
<Stack.Screen name="CharadesResults" component={CharadesResultsScreen} />
<Stack.Screen name="Info" component={InfoScreen} />
```

Remove old `CharadesCategory` route, add `Subcategory` route.

Update navigation types in `src/types/game.ts`.

### Phase 8: Update Branding & Polish

**Files**: `app.config.js`, `App.tsx`, style files

- App title: "Desi Waddle" or "Waddle Play — Desi Edition"
- Keep existing pastel color scheme (already grown-up friendly)
- Verify all placeholder text updated to reflect desi theme
- Update Info screen with app description

### Phase 9: Testing & Validation

**Test Navigation Flows**:

1. PackList → Bollywood → 90s Movies → Play → Results ✓
2. PackList → Street Food → Mumbai Specials → Play → Results ✓
3. PackList → Cricket → IPL Madness → Play → Results ✓
4. Back button navigation works correctly ✓

**Test Deck Management**:

1. Play through 10 cards from "90s Movies" category
2. Verify no repeats within same session
3. Restart app, play again - verify 30-day cooldown works
4. Play through 50%+ of small category (e.g., Mumbai Specials with 10 cards)
5. Verify deck refreshes only after 50% threshold

**Test Gameplay**:

1. Accelerometer tilt up = correct (green flash + haptic)
2. Accelerometer tilt down = pass (red flash + haptic)
3. Timer counts down correctly
4. Results screen shows accurate score
5. No crashes or white screens

**Code Quality Checks**:

```bash
npx tsc --noEmit  # 0 TypeScript errors
```

- All console.log wrapped in `if (__DEV__)`
- No orphaned references to old code
- Haptics wrapped in try-catch

### Phase 10: Final Cleanup & Documentation

- Remove old charades data files (animals, food, etc. - the basic kid-focused ones)
- Update README.md with new pack structure
- Document how to add more packs in future
- Clean up unused imports
- Final commit: "feat: desi charades MVP with 3 packs and 560+ cards"

## Success Criteria

**Functional**:

- ✓ 3 packs with 11 categories fully playable
- ✓ 560+ cards properly imported
- ✓ Navigation flows smoothly (3-screen: PackList → Subcategory → Play)
- ✓ No card repeats within session
- ✓ 30-day cooldown prevents repeats across sessions
- ✓ Deck only refreshes after 50%+ cards seen

**Technical**:

- ✓ TypeScript compiles with 0 errors
- ✓ No crashes or white screens
- ✓ App launches < 2s
- ✓ Gameplay smooth, no lag

**User Experience**:

- ✓ Clear pack/category selection
- ✓ Culturally relevant desi content
- ✓ Existing familiar charades gameplay retained
- ✓ Professional, grown-up presentation

## Files to Create

- `src/types/content.ts`
- `src/core/deckManager.ts`
- `src/data/packs/bollywood/*.ts` (5 files)
- `src/data/packs/street-food/*.ts` (3 files)
- `src/data/packs/cricket/*.ts` (3 files)
- `src/data/packs/index.ts`

## Files to Modify

- `src/screens/PackListScreen.tsx`
- `src/screens/CharadesCategoryScreen.tsx` → rename to `SubcategoryScreen.tsx`
- `src/screens/CharadesScreen.tsx`
- `src/screens/CharadesResultsScreen.tsx` (minor if needed)
- `App.tsx`
- `src/types/game.ts`
- `app.config.js` (branding)

## Files to Delete (After Testing)

- `src/data/charades/animals*.ts`
- `src/data/charades/foods*.ts`
- `src/data/charades/places*.ts`
- `src/data/charades/characters*.ts`
- `src/data/charades/emotions*.ts`
- `src/data/charades/sports*.ts`
- `src/data/charades/professions*.ts`
- `src/data/charades/actions*.ts`
- `src/data/charades/vehicles*.ts`
- `src/data/charades/instruments*.ts`
- `src/data/charades/nature*.ts`
- `src/data/charades/household*.ts`
- Old `src/data/charadesData.ts` (after migration complete)

## Estimated Timeline

- Phase 1-2: Type system & data conversion (2-3 hours)
- Phase 3-5: Screen updates (2-3 hours)
- Phase 6: Deck manager (3-4 hours) - Most complex
- Phase 7-8: Navigation & branding (1 hour)
- Phase 9: Testing (1-2 hours)
- Phase 10: Cleanup (30 mins)

**Total: ~10-14 hours** for complete MVP with sophisticated deck management

## Implementation Checklist

- [ ] Phase 1: Create type system (content.ts) and update game.ts with pack/category interfaces
- [ ] Phase 2: Convert JSON pack data to TypeScript files in src/data/packs/ structure
- [ ] Phase 2: Create data/packs/index.ts with getAllPacks(), getPackById(), getCardsByPackAndCategory()
- [ ] Phase 3: Update PackListScreen to show 3 pack cards (Bollywood, Street Food, Cricket)
- [ ] Phase 4: Rename CharadesCategoryScreen to SubcategoryScreen and update for pack categories
- [ ] Phase 5: Update CharadesScreen to accept packId/categoryId params and load pack-based cards
- [ ] Phase 6: Implement core/deckManager.ts with 30-day cooldown, 50% refresh rule, seeded shuffle
- [ ] Phase 6: Integrate deckManager into CharadesScreen gameplay flow
- [ ] Phase 7: Update App.tsx navigation stack and types for new pack flow
- [ ] Phase 8: Update app branding, colors, and Info screen for Desi theme
- [ ] Phase 9: Test all navigation flows (PackList → Subcategory → Play → Results)
- [ ] Phase 9: Test deck manager: no repeats, 30-day cooldown, 50% refresh rule
- [ ] Phase 10: Delete old kid-focused charades data files (animals, foods, etc.)
- [ ] Phase 10: Run TypeScript check, verify no console.log statements, update README

---

**Created**: 2025-10-13  
**Status**: Ready to Execute  
**Next Step**: Begin Phase 1 - Type System & Data Models

