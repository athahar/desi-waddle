# Claude Code Development Guidelines - Desi Waddle

> **Quick Context**: Dual-game Bollywood party app (Charades + Movie Dialogues). Phase 6-7: 75% done, needs 8 more packs + final polish.

> **IMPORTANT**: Always refer to [DESI-WADDLE-PROJECT-PLAN.md](./DESI-WADDLE-PROJECT-PLAN.md) as the single source of truth for project roadmap, phases, and implementation details.

## 📖 Table of Contents
1. [Current Task](#-current-task)
2. [Changelog](#-changelog)
3. [Project Plan Reference](#-project-plan-reference)
4. [Key File Locations](#-key-file-locations)
5. [Critical Safety Rules](#-critical-safety-rules)
6. [Common Mistakes to Avoid](#-common-mistakes-to-avoid)
7. [Critical Performance & Crash Prevention](#-critical-performance--crash-prevention)
8. [Quick Start Commands](#-quick-start-commands)
9. [Project Status](#-project-status)
10. [Pre-Deployment Checklist](#-pre-deployment-checklist)

---

## 🎯 Current Task

**Phase**: 6-7 - UI/UX Polish + Testing
**Sprint Goal**: Polish dual-game implementation and prepare for TestFlight
**Status**: ~75% complete (functional MVP, needs content + final polish)
**Last Session**: 2025-10-15 - Fixed text colors in Charades, navigation animations in Guess the Movie, countdown timer UX
**Next Session**: Complete UI polish, run comprehensive testing suite

### Next 3 Tasks
1. [ ] Complete UI/UX polish for Charades and Guess the Movie
2. [ ] Run comprehensive testing on both game modes
3. [ ] Prepare for TestFlight build (pending remaining content)

### Current Blockers
- ❌ Need 8 more charades packs (currently have 3/11)
- ❌ Need complete Guess the Movie dialogues (currently have samples only)

### What's Working ✅
- ✅ Dual-game architecture complete (GameModeScreen operational)
- ✅ Both game modes fully functional
- ✅ 3 packs with 560+ cards (Bollywood Universe: 500, Street Food: 30, Cricket Fever: 30)
- ✅ Multi-level navigation (GameMode → PackList → PackDetail → Category → Play → Results)
- ✅ Accelerometer controls in Charades (tilt up/down)
- ✅ Timer + reveal mechanic in Guess the Movie (30s rounds)
- ✅ Advanced deck manager operational (30-day cooldown)
- ✅ Dev console with CSV export (triple-tap to access)
- ✅ Scoring and results screens
- ✅ Error boundaries, performance optimizations, TypeScript strict mode

**Working On**: UI/UX improvements (text colors, animations, navigation glitches)

---

## 📝 Changelog

> **IMPORTANT**: Update this section AFTER EVERY COMMIT with a brief summary of changes.

### 2025-10-15 - UI/UX Improvements (WIP)
- **Commit**: `0d943f3` - "WIP: Charades and Guess the Movie UI/UX improvements"
- **Changes**:
  - 🎨 Improved text color handling in Charades (dynamic based on background)
  - 🔧 Fixed countdown timer text color
  - 🚀 Improved navigation animations in Guess the Movie
  - 🎯 Prevented navigation glitches during gameplay
- **Next**: Complete UI polish, run full testing suite

### 2025-10-13 - Dual-Game Architecture Complete
- **Commit**: `1d44f07` - "docs: update project plan for dual-game architecture"
- **Major Milestone**: Phase 3 complete - both game modes operational
- **Changes**:
  - ✅ GameModeScreen built and integrated
  - ✅ Charades: Multi-level navigation (GameMode → PackList → PackDetail → Category → Play → Results)
  - ✅ Guess the Movie: Flat navigation (GameMode → Instructions → Play → Results)
  - ✅ 3 packs imported: Bollywood Universe (500 cards), Street Food (30 cards), Cricket Fever (30 cards)
  - ✅ Advanced deck manager with 30-day cooldown implemented
  - ✅ Dev console with DevPanel overlay operational

### 2025-10-13 - Repository Setup Complete
- **Commit**: `25e30ff` - "refactor: strip down to charades-only app"
- **Changes**:
  - ✅ Removed 8 unused game screens (17,179 lines deleted)
  - ✅ Cleaned up navigation structure
  - ✅ GitHub remote configured: `github.com/athahar/desi-waddle`
  - ✅ EAS project ID: `850609f7-3aa4-443c-99f0-0561fd1858cc`

---

## 📋 Project Plan Reference

> **SINGLE SOURCE OF TRUTH**: [docs/specs/project-plan.md](./docs/specs/project-plan.md)

**ALWAYS refer to project plan for:**
- Current phase and progress (Phases 1-5 complete, Phase 6-7 in progress)
- Detailed task breakdowns and acceptance criteria
- Timeline estimates (30-40 hours total, ~23-28 hours invested)
- Success metrics and user action items

**Project Overview**:
- **Two game modes**: Charades (acting) + Guess the Movie (dialogue trivia)
- **Target audience**: Indian grown-ups (Bollywood, Cricket, Street Food, Desi Life)
- **Platform**: iOS only (React Native + Expo)
- **Content**: 11 charades packs planned (3 complete with 560+ cards), 1 guess-movie pack (samples)
- **Current Status**: Phases 1-5 complete (75% done), Phase 6-7 UI polish + testing in progress

---

## 📁 Key File Locations

### Configuration
- `app.config.js` - Expo config (bundle ID: `com.desiwaddle.charades`, version: 0.1.0, buildNumber: 1)
- `eas.json` - EAS build profiles (development, preview, production)
- `package.json` - Dependencies and scripts

### Navigation
- `App.tsx` - Main navigation stack (10 screens: GameMode, PackList, PackDetail, CharadesCategory, Charades, CharadesResults, GuessMovieInstructions, GuessMoviePlay, GuessMovieResults, Info)

### Screens (Charades Game)
- `src/screens/GameModeScreen.tsx` - Entry point (2 game cards: Charades vs Guess the Movie)
- `src/screens/PackListScreen.tsx` - Shows 3 charades packs
- `src/screens/PackDetailScreen.tsx` - Shows categories within selected pack
- `src/screens/CharadesCategoryScreen.tsx` - Instructions screen before gameplay
- `src/screens/CharadesScreen.tsx` - Main gameplay (accelerometer, 60s timer, scoring)
- `src/screens/CharadesResultsScreen.tsx` - Score display after game

### Screens (Guess the Movie Game)
- `src/screens/GuessMovieInstructionsScreen.tsx` - Game rules and instructions
- `src/screens/GuessMoviePlayScreen.tsx` - 30s timer + reveal mechanic
- `src/screens/GuessMovieResultsScreen.tsx` - Score display with navigation

### Data (Content Packs)
- `src/data/packs/charades/bollywood-universe.ts` - 500 cards, 5 categories (90s Movies, Stars, Songs, Villains, Dialogues)
- `src/data/packs/charades/street-food-drinks.ts` - 30 cards, 3 categories (Mumbai, Delhi, South Indian)
- `src/data/packs/charades/cricket-fever.ts` - 30 cards, 3 categories (Legends, Matches, IPL)
- `src/data/packs/guess-movie/bollywood-dialogues.ts` - Sample dialogue cards
- `src/data/index.ts` - Data aggregator (`getAllPacks()`, `getPackById()`, `getCardsByPackAndCategory()`)

### Types
- `src/types/content.ts` - `CharadesPack`, `GuessMoviePack`, `DialogueCard`, `CharadeCard` interfaces
- `src/types/game.ts` - Navigation types and game state interfaces

### Core Logic
- `src/core/deckManager.ts` - Advanced deck management (30-day cooldown, 50% refresh rule, session-based shuffle)
- `src/utils/deckBuilder.ts` - Seeded shuffle algorithm (deterministic randomization)

### Dev Tools
- `src/devlog/DevPanel.tsx` - Dev console overlay (triple-tap on title to access)
- `src/devlog/logger.ts` - Event logging system (SESSION_START, CARD_SHOWN, etc.)
- `src/devlog/repeatTracker.ts` - Card repeat detection

### Components
- `src/components/ErrorBoundary.tsx` - Crash prevention wrapper (required for production)
- `src/components/Icon.tsx` - Icon system with IconName types
- `src/components/ProgressBar.tsx` - Timer UI component (circular progress)

### Hooks
- `src/hooks/useAccelerometer.ts` - Accelerometer gesture detection (tilt up/down)

### Documentation Structure
**All project documentation lives in `/docs` with organized subfolders:**
- `/docs/specs/` - Product specs, project plans, implementation guides
  - `project-plan.md` - Single source of truth for roadmap and phases
  - `implementation-plan.md` - Technical implementation details
  - `guess-the-movie.md` - Guess the Movie game specification
- `/docs/design/` - Design docs, architecture, future features
  - `future-games.md` - Ideas for future game modes
- `/docs/architecture/` - System architecture and technical design docs
  - `deck-shuffling-system.md` - Comprehensive deck management architecture (seeded PRNG, 30-day cooldown, 50% refresh rule)
- `/docs/deploy/` - Deployment guides, build processes
- `/docs/analytics/` - Analytics requirements, tracking plans
- `/docs/marketing/` - Marketing materials, app store content
  - `original-app-description.md` - Original app concept description
- `/docs/testing/` - Test plans, QA documentation

**Root-level docs (only 2 allowed):**
- `README.md` - Project overview and quick start
- `CLAUDE.md` - Development guidelines (this file)

**Rule**: When creating new documentation, always place in appropriate `/docs` subfolder, never at root.

### Scripts & Utilities
**All build/utility scripts live in `/scripts` folder:**
- `/scripts/` - Build scripts, generators, utilities
  - `create-splash.js` - Generates splash screen image from assets

**Root-level JS files (config only):**
- `app.config.js` - Expo configuration
- `babel.config.js` - Babel configuration
- `jest.config.js` - Jest test configuration
- `jest.setup.js` - Jest setup and mocks

**Rule**: When creating utility scripts, test runners, or build tools, always place in `/scripts` folder, never at root.

---

## 🚨 Critical Safety Rules

### Rule #0: React JSX Fragment Syntax in Ternary Operators

**MANDATORY**: When returning multiple elements in a ternary operator, ALWAYS wrap them in a React Fragment (`<>...</>`).

```typescript
// ❌ WRONG - Syntax Error: Multiple elements without wrapper
condition ? (
  <View>...</View>
  <TouchableOpacity>...</TouchableOpacity>
) : <View>...</View>

// ✅ CORRECT - Wrapped in Fragment
condition ? (
  <>
    <View>...</View>
    <TouchableOpacity>...</TouchableOpacity>
  </>
) : <View>...</View>
```

**Why This Matters:**
- JSX requires a single root element
- Ternary operators can only return ONE element per branch
- Missing Fragment causes "Unexpected token" syntax errors
- This breaks the entire build

### Rule #1: Never Leave Orphaned References

**MANDATORY PROCESS**: When removing any code element:

1. **Search entire codebase** for ALL references using Grep tool
2. **Remove or update ALL references** - never leave dangling calls
3. **Test compilation** immediately after removal
4. **Verify with Grep** that no references remain

```bash
# Always search before removing
Grep pattern="functionName|variableName|className"
# Remove ALL found references
# Test with: npx tsc --noEmit
```

**❌ Wrong:** Remove function but leave calls → immediate crash
**✅ Right:** Remove function AND all calls → clean codebase

### Rule #2: Console Statements (Automated Protection)

**Status:** ✅ **Protected by Babel Plugin**

This project uses `babel-plugin-transform-remove-console` which automatically removes ALL console statements in production builds. No manual wrapping required!

```typescript
// ✅ BOTH ARE FINE - Plugin removes console in production
console.log('Debug info');  // Removed automatically

if (__DEV__) {
  console.log('Debug info');  // Double protection (optional)
}
```

**Configuration:**
```javascript
// babel.config.js
plugins: [
  process.env.NODE_ENV === 'production' && 'transform-remove-console',
].filter(Boolean),
```

**Why This Matters:**
- Babel plugin automatically strips console.* in production
- Preserves `console.error` for actual error handling
- EAS Build sets NODE_ENV=production automatically
- Many statements already wrapped with `if (__DEV__)` for extra safety

### Rule #3: Wrap Haptics in Try-Catch

```typescript
// ❌ WRONG: Crashes on devices without haptics support
await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

// ✅ CORRECT: Safe error handling
try {
  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
} catch (error) {
  if (__DEV__) {
    console.log('Haptics error (non-critical):', error);
  }
}
```

### Rule #4: Check Array Bounds Before Access

```typescript
// ❌ WRONG: Crashes if array is empty
const firstCard = cards[0];
setCurrentCard(firstCard.text); // CRASH if cards.length === 0

// ✅ CORRECT: Safe array access
if (cards.length > 0) {
  const firstCard = cards[0];
  setCurrentCard(firstCard.text);
}
// OR: Use optional chaining
const firstCard = cards[0]?.text;
```

---

## ⚠️ Common Mistakes to Avoid

### Before Every Commit
1. **Multiple JSX in ternary?** → Wrap in `<>...</>` Fragment
2. **Array access?** → Check `.length > 0` first or use optional chaining
3. **Removing code?** → Grep for ALL references FIRST
4. **Apple build?** → Increment `buildNumber` in `app.config.js`
5. **Haptics?** → Wrap in try-catch (older devices don't support)
6. **Heavy operations?** → Use `useMemo` for expensive calculations
7. **Event handlers?** → Use `useCallback` to prevent re-renders

**Note:** Console.log statements are automatically removed by babel plugin in production - no manual wrapping needed!

### Pre-Commit Validation (MANDATORY)

```bash
# TypeScript check - must pass with 0 errors in src/
npx tsc --noEmit
```

**Note:** Babel plugin (`transform-remove-console`) automatically strips all console.* statements in production builds.

---

## 🚨 Critical Performance & Crash Prevention

### Performance Killers We Fixed (Never Repeat!)

#### 1. Massive Synchronous Data Loading
```typescript
// ❌ WRONG: 485KB loaded synchronously at startup
const animals = [...animalData]; // 261KB
const countries = [...countryData]; // 224KB
// Blocks main thread for 2-3 seconds!

// ✅ RIGHT: Memoize expensive operations
const memoizedShuffledAnimals = useMemo(() => {
  const animals = [...animalData];
  return shuffleArray(animals);
}, []); // Runs once only
```

#### 2. Unoptimized Re-renders
```typescript
// ❌ WRONG: Function recreated on every render
export default function GameScreen() {
  const renderCard = (item) => { /* expensive render */ };
}

// ✅ RIGHT: Memoized callbacks
const renderCard = useCallback((item) => {
  /* expensive render */
}, []); // Stable reference

export default React.memo(GameScreen);
```

#### 3. Unguarded Console Statements
```typescript
// ❌ WRONG: White screen in production
console.log('Debug info'); // CRASHES on iOS!

// ✅ RIGHT: Always guard
if (__DEV__) {
  console.log('Debug info');
}
```

### Mobile Performance Best Practices (MANDATORY)

#### Data Loading
```typescript
// ✅ Lazy loading for large datasets
const memoizedData = useMemo(() => processLargeDataset(rawData), [rawData]);
```

#### Memory Management
```typescript
// ✅ Memoize expensive calculations
const expensiveValue = useMemo(() => heavyCalculation(data), [data]);

// ✅ Stable event handlers
const handlePress = useCallback((item) => {
  // Handle item press
}, []); // Prevents child re-renders
```

#### Component Optimization
```typescript
// ✅ Memoize components rendering large lists
const GameCard = React.memo(({ game, onPress }) => {
  return <TouchableOpacity onPress={() => onPress(game)}>...</TouchableOpacity>;
});
```

### Performance Standards (ENFORCED)

| Metric | Threshold | Current |
|--------|-----------|---------|
| App Launch | <2s | ✅ ~1.5s |
| Screen Transition | <300ms | ✅ ~200ms |
| Memory Usage | <100MB | ✅ ~60MB |
| Bundle Size | <2MB | ✅ ~1.8MB |
| Render Time | <16ms | ✅ ~10ms |

### Anti-Patterns (NEVER DO THIS)

1. ❌ Heavy operations in render functions
2. ❌ Unguarded console statements
3. ❌ Array access without bounds checking
4. ❌ Ignoring haptics/async errors
5. ❌ Skipping useMemo for expensive calculations
6. ❌ Creating functions inside render without useCallback
7. ❌ Forgetting React.memo for heavy components

---

## 🚀 Quick Start Commands

### Development
```bash
# Start development server
npm start

# Type checking (ALWAYS run before commit)
npm run typecheck

# Install dependencies
npm install
```

### Testing & Validation
```bash
# TypeScript validation (must pass)
npx tsc --noEmit

# Verify babel plugin installed (handles console.log removal)
grep "babel-plugin-transform-remove-console" package.json

# Expo Doctor check
npx expo-doctor

# Performance pattern check
grep -r "useMemo\|useCallback\|React.memo" src/ --include="*.tsx" --include="*.ts"

# Error handling check
grep -r "try.*catch\|Haptics" src/ --include="*.tsx" --include="*.ts"
```

### Git Workflow
```bash
# Conventional commit format
git commit -m "feat: add new feature"
git commit -m "fix: resolve bug"
git commit -m "docs: update documentation"
git commit -m "refactor: improve code structure"
```

### EAS Build (When Ready)
```bash
# 🚨 ALWAYS increment build number in app.config.js first!
grep -A 10 "ios" app.config.js | grep buildNumber

# Development build (debugging enabled)
npx eas build --platform ios --profile development

# TestFlight build
npx eas build --platform ios --profile preview

# Production build
npx eas build --platform ios --profile production
```

---

## 🎯 Project Status

### Current Implementation: Desi Waddle
- **Status**: 🚧 75% Complete (Functional MVP, needs content + polish)
- **Last Updated**: 2025-10-15
- **Games**: 2 complete (Charades + Guess the Movie)
- **Content**: 3/11 charades packs (560+ cards), sample dialogue pack
- **Platform**: iOS (Expo React Native + TypeScript)
- **Repository**: `github.com/athahar/desi-waddle`
- **EAS Project**: `850609f7-3aa4-443c-99f0-0561fd1858cc`

### Phases Complete ✅
- ✅ **Phase 1-2**: Repository setup, stripped to charades-only (17,179 lines deleted)
- ✅ **Phase 3**: Dual-game architecture with GameModeScreen
- ✅ **Phase 4**: Advanced deck manager (30-day cooldown, 50% refresh rule)
- ✅ **Phase 5**: Dev console with CSV export (triple-tap to access)
- 🚧 **Phase 6**: UI/UX polish (in progress - text colors, animations)
- 🔲 **Phase 7**: Comprehensive testing (pending)
- 🚫 **Phase 8**: Data import (blocked - need 8 more packs)
- 🔲 **Phase 9**: TestFlight + App Store deployment (pending)

### What's Complete ✅
- ✅ **Dual-game architecture**: GameModeScreen → Charades OR Guess the Movie flows
- ✅ **Charades game**: Multi-level navigation, accelerometer controls, 60s timer, scoring
- ✅ **Guess the Movie game**: 30s timer, reveal mechanic, scoring, results
- ✅ **Advanced deck manager**: 30-day cooldown, session-based shuffle, ≥50% refresh rule
- ✅ **Dev console**: DevPanel overlay, CSV export, event logging, repeat tracking
- ✅ **3 content packs**:
  - Bollywood Universe: 500 cards, 5 categories
  - Street Food & Drinks: 30 cards, 3 categories
  - Cricket Fever: 30 cards, 3 categories
- ✅ **Production-ready**:
  - TypeScript strict mode (0 errors)
  - Error boundaries implemented
  - Performance optimizations (useMemo, useCallback, React.memo)
  - Haptics error handling
  - Console guards (`if (__DEV__)`)
  - EAS project configured
  - GitHub repo pushed

### What's Left 🔲
- 🔲 **UI/UX polish** (in progress): Text color fixes, animation improvements, navigation glitches
- 🔲 **8 more charades packs** (blocked on user providing content):
  - Places & City Life
  - Desi Life & Everyday Humor
  - Pop Culture & Ads
  - Travel & Holidays
  - Indian Slang & Sayings
  - Characters & Emotions
  - Meme & Modern Internet Life
  - Special Themed Packs
- 🔲 **Complete Guess the Movie dialogues** (need 100-200 cards, currently have samples)
- 🔲 **Comprehensive testing** (navigation flows, deck management, performance)
- 🔲 **TestFlight beta testing** (pending content completion)
- 🔲 **App Store submission** (pending all above)

### Key Technical Achievements
1. **Advanced deck management**: Prevents card repeats with 30-day cooldown, session-stable shuffling
2. **Dual-game architecture**: Shared pack infrastructure, separate navigation flows
3. **Performance optimized**: Memoization throughout, <2s launch time, <100MB memory
4. **Production-ready**: Error boundaries, haptics handling, console guards, strict TypeScript
5. **Type-safe**: Strict TypeScript with 0 errors, comprehensive type system

---

## ✅ Pre-Deployment Checklist

### Before Every Apple Build

#### 1. Increment Build Number (CRITICAL!)
```bash
# Check current build number
grep -A 10 "ios" app.config.js | grep buildNumber

# Increment in app.config.js:
# "buildNumber": "1" → "buildNumber": "2"

# Verify the change
grep -A 10 "ios" app.config.js | grep buildNumber
```

**❌ WRONG**: Reusing same build number → "You've already submitted this build"
**✅ CORRECT**: Always increment before each submission

#### 2. Code Quality Gates
- [ ] TypeScript compiles: `npx tsc --noEmit` (0 errors in src/)
- [ ] Babel plugin installed: `grep "babel-plugin-transform-remove-console" package.json`
- [ ] All tests passing (when implemented)
- [ ] No orphaned references
- [ ] Error boundaries implemented
- [ ] Haptics wrapped in try-catch

#### 3. Performance Checks
- [ ] App launches in <2s
- [ ] Screen transitions <300ms
- [ ] Memory usage <100MB
- [ ] Bundle size <2MB
- [ ] No memory leaks (test with Xcode Instruments)

#### 4. Content & Assets
- [ ] App icon (1024x1024) present
- [ ] Splash screen configured
- [ ] All pack data validated
- [ ] No placeholder text remaining

#### 5. App Store Compliance
- [ ] Bundle ID correct: `com.desiwaddle.charades`
- [ ] Version incremented (semantic versioning)
- [ ] Age rating appropriate
- [ ] Privacy policy ready (if required)

---

## 🚀 iOS Deployment & Pre-Flight Checks

### Trigger Keywords

When you say **any of these phrases**, I will automatically run the complete pre-flight check:
- "testflight ready"
- "pre-flight check"
- "deploy for ios"
- "ready for ios"
- "ios deploy"
- "build for testflight"

### Automated Pre-Flight Checklist

I will run these checks in order and report results:

#### 1. ✅ Build Number Check
```bash
grep -A 10 "ios" app.config.js | grep buildNumber
```
- Verify current build number
- Remind you to increment if deploying

#### 2. ✅ Console.log Safety Check (Automated by Babel)
```bash
grep "babel-plugin-transform-remove-console" package.json
```
- **Status:** ✅ Handled automatically by babel plugin
- **What it does:** Removes ALL console.* statements in production builds
- **No manual wrapping needed:** Plugin strips console at build time
- **Configured in:** `babel.config.js` (runs when NODE_ENV=production)
- **Note:** Many statements already have `if (__DEV__)` as double protection, but not required

#### 3. ✅ TypeScript Compilation
```bash
npx tsc --noEmit
```
- Must pass with 0 errors
- Catches type safety issues before build

#### 4. ✅ Expo Doctor
```bash
npx expo-doctor
```
- Must pass with 0 critical issues
- Checks dependencies, config, and compatibility

#### 5. ✅ Bundle ID & Version Verification
```bash
grep -A 10 "ios" app.config.js
```
- Verify bundleIdentifier: `com.desiwaddle.charades`
- Verify version follows semantic versioning
- Check EAS project ID: `850609f7-3aa4-443c-99f0-0561fd1858cc`

### Build Number Tracking

**Current Build:** 1 (not yet deployed)

**Build History:**
| Build # | Version | Date | Status | Deployment | Notes |
|---------|---------|------|--------|------------|-------|
| 1 | 0.1.0 | 2025-10-16 | Ready | - | Initial setup, not deployed |

**Next Build Number:** 2

> **Reference:** See [docs/deploy/apple-deployment-guide.md](./docs/deploy/apple-deployment-guide.md) for detailed deployment instructions and build number history.

### Deployment Commands (After Pre-Flight Check Passes)

```bash
# 1. Increment build number in app.config.js
# 2. Update build history tables (CLAUDE.md + deployment guide)
# 3. Commit changes
git add app.config.js docs/deploy/apple-deployment-guide.md CLAUDE.md
git commit -m "chore: increment build number to X for iOS deployment"
git push origin main

# 4. Build for TestFlight (preview profile)
npx eas build --platform ios --profile preview

# 5. Submit to App Store Connect
npx eas submit --platform ios --latest
```

---

## 📊 Architecture Summary

```typescript
// Content system (pack-based architecture)
interface CharadesPack {
  id: string;
  name: string;
  gameType: 'charades';
  categories: CharadesCategory[];  // Multi-level navigation
}

interface GuessMoviePack {
  id: string;
  name: string;
  gameType: 'guess-movie';
  cards: DialogueCard[];  // Flat structure
}

// Deck management (30-day cooldown + 50% refresh rule)
async function getNextCard(opts: {
  categoryCards: CharadeCard[];
  packId: string;
  categoryId: string;
  sessionId: string;
  cooldownDays?: number;
}): Promise<{ card: CharadeCard | null; deckExhausted: boolean }>
```

### File Structure
```
desi-charades/
├── src/
│   ├── components/      # ErrorBoundary, Icon, ProgressBar
│   ├── core/            # deckManager.ts (30-day cooldown)
│   ├── data/packs/      # Charades (3 packs) + Guess Movie (1 pack)
│   ├── devlog/          # DevPanel, logger, repeatTracker
│   ├── screens/         # 10 screens (GameMode, PackList, Charades, GuessMovie, etc.)
│   ├── types/           # content.ts, game.ts
│   └── utils/           # deckBuilder.ts, helpers
├── App.tsx              # Navigation stack
├── app.config.js        # Expo config
└── package.json         # Dependencies
```

---

*This document serves as the project-specific reference for development practices, safety rules, and crash prevention. Update after every significant change.*

**Last Updated**: 2025-10-16 | **Next Review**: Before first TestFlight deployment
