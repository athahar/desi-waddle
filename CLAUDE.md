# Claude Code Development Guidelines - Desi Waddle

> **IMPORTANT**: Always refer to [DESI-WADDLE-PROJECT-PLAN.md](./DESI-WADDLE-PROJECT-PLAN.md) as the single source of truth for project roadmap, phases, and implementation details. This file contains development guidelines and best practices.

## 📖 Table of Contents
1. [Project Plan](#project-plan)
2. [Changelog](#changelog)
3. [Critical Safety Rules](#critical-safety-rules)
4. [Best Practices from Top Users](#best-practices-from-top-users)
5. [Project Status](#project-status)
6. [Architecture Overview](#architecture-overview)
7. [Development Workflow](#development-workflow)
8. [Testing & Quality Assurance](#testing--quality-assurance)
9. [Deployment Guidelines](#deployment-guidelines)
10. [Performance Standards](#performance-standards)

---

## 📋 Project Plan

**ALWAYS refer to [DESI-WADDLE-PROJECT-PLAN.md](./DESI-WADDLE-PROJECT-PLAN.md) for:**
- Current phase and progress (Phase 2 complete, Phase 3 ready to start)
- Detailed task breakdowns and acceptance criteria
- Timeline estimates (updated: 30-40 hours total, +40% for dual-game system)
- Success metrics
- User action items (remaining pack data for 8 charades packs + dialogue cards)

**Current Status**: Phase 2 Complete - Ready for Dual-Game Implementation ✅

---

## 📝 Changelog

> **IMPORTANT**: Update this section AFTER EVERY COMMIT with a brief summary of changes.

### 2025-10-13 - Project Plan Updated for Dual-Game Architecture
- **Commit**: `1d44f07` - "docs: update project plan for dual-game architecture"
- **Changes**:
  - 🎮 **Major scope change**: Added "Guess the Movie" as second game mode
  - 📝 Rewrote Phase 3 with comprehensive dual-game implementation plan (14 steps)
  - ⏱️ Revised timeline: 30-40 hours (was 20-30 hours, +40% scope)
  - 🗺️ New navigation: GameModeScreen → Charades OR Guess Movie flows
  - 📱 New screens: GameModeScreen, PackDetailScreen, GuessMovieInstructions, GuessMoviePlay, GuessMovieResults
  - 📊 Updated: Phase 2 marked complete, Phase 3 ready to start
  - 🎯 Scope: Two games (Charades acting + Bollywood dialogue trivia)
- **Next**: Phase 3 - Build GameModeScreen, convert JSON data, implement both games (12-15 hours)
- **Data Needed**:
  - ✅ Bollywood Universe pack (500 cards) - provided
  - ✅ Street Food pack - provided
  - ✅ Cricket Fever pack - provided
  - ❌ Need 8 more charades packs
  - ❌ Need complete Guess the Movie dialogues (100-200 cards)

### 2025-10-13 - Strip Down to Charades-Only App (Phase 2 Complete)
- **Commit**: `25e30ff` - "refactor: strip down to charades-only app (Phase 2 complete)"
- **Changes**:
  - ✅ Removed 8 unused game screens (GuessAnimal, GuessCountry, WouldYouRather, StoryStarter, ScavengerHunt, SimonSays)
  - ✅ Removed unused game data files (7 files + folders): animals, countries, scavengerHunt, simonSays, storyStarter, wouldYouRather, seasonalSystem
  - ✅ Removed unused utilities: dealSimonRound.ts
  - ✅ Renamed HomeScreen.tsx → PackListScreen.tsx
  - ✅ Updated App.tsx: cleaned up imports and navigation routes (charades-only)
  - ✅ Updated PackListScreen to only show Charades game
  - ✅ Fixed TypeScript types: CharadesCategory.icon now uses IconName type
  - ✅ Installed dependencies (npm install)
  - ✅ Deleted 17,179 lines of unused code
- **Next**: Phase 3 - Implement pack-based content system
- **Action Items**:
  - User needs to create GitHub remote: `github.com/athahar/desi-waddle`
  - User needs to create Expo project ID in dashboard

### 2025-10-13 - Initial Setup (Phase 1 Complete)
- **Commit**: `bcd94bc` - "chore: initialize Desi Waddle app"
- **Changes**:
  - ✅ Created `/desi-charades/` folder at project root
  - ✅ Copied WaddlePlay structure (excluded git history, node_modules)
  - ✅ Initialized git repo with proper .gitignore
  - ✅ Updated app.config.js: "Desi Waddle", `com.desiwaddle.charades`, v0.1.0
  - ✅ Updated package.json: Added required dependencies (uuid, expo-sharing, etc.)
  - ✅ Created README.md and DESI-WADDLE-PROJECT-PLAN.md
  - ✅ Updated CLAUDE.md with project plan reference and changelog section
- **Next**: Phase 2 - Strip down to charades-only app

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

**Rule:** Before committing ANY change involving multiple JSX elements in ternary/conditional returns, verify Fragment wrapper exists.

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

### Rule #2: Validate Platform Requirements Upfront

**MANDATORY PROCESS**: Check ALL platform limits before configuration:

- **App Name**: 30 characters max (recommend 20-25)
- **Bundle ID**: Unique reverse domain format
- **Icons**: 1024x1024 for App Store
- **Version**: Semantic versioning (x.y.z)
- **Age Rating**: Match actual content

```typescript
// ❌ Wrong: Set without checking
"name": "Very Long Application Name That Exceeds Limits" // 47 chars!

// ✅ Right: Validate first
"name": "Play While You Wait" // 19 chars ✓
```

### Rule #3: Always Guard Console Statements

```typescript
// ❌ Wrong: Crashes in production
console.log('Debug info');

// ✅ Right: Development only
if (__DEV__) {
  console.log('Debug info');
}
```

---

## 🏆 Best Practices from Top Claude Code Users

### 1. **Spec-First Development**

**Top users always create specifications before coding:**

```markdown
# Feature Specification Template
## Overview
Brief description and purpose

## User Story
As a [user], I want [goal] so that [benefit]

## Acceptance Criteria
- [ ] Specific, testable requirements
- [ ] Edge cases handled
- [ ] Error states defined

## Technical Requirements
- API changes needed
- Data structure modifications
- Dependencies required

## Testing Requirements
- Key scenarios to test
- Performance benchmarks
```

### 2. **Structured File Organization**

**Elite practitioners use consistent patterns:**

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Shared across app
│   └── game-specific/   # Game-specific components
├── data/                # Static data and content
├── hooks/               # Custom React hooks
├── navigation/          # Navigation configuration
├── screens/            # Screen components
├── services/           # Business logic and APIs
├── types/              # TypeScript type definitions
└── utils/              # Helper functions
```

### 3. **Advanced Git Workflow**

**Top users leverage Git strategically:**

```bash
# Feature branch workflow
git checkout -b feature/specific-feature-name
git commit -m "feat: implement feature with clear description"
git push -u origin feature/specific-feature-name

# Atomic commits with conventional format
feat: add new payment integration
fix: resolve TypeScript compilation error
docs: update API documentation
refactor: simplify component structure
test: add unit tests for utility functions
```

### 4. **Proactive Documentation Strategy**

**Elite users document as they code:**

- **README.md**: Project overview and setup
- **CLAUDE.md**: Development guidelines and learnings
- **API.md**: Service and function documentation
- **DEPLOYMENT.md**: Build and release processes
- **TESTING.md**: Testing strategies and commands

### 5. **Performance-First Mindset**

**Top practitioners optimize from day one:**

```typescript
// ✅ Optimized patterns
const MemoizedComponent = React.memo(Component);
const { data } = useSWR(key, fetcher); // Caching
const deferredValue = useDeferredValue(searchTerm); // React 18
const [state, setState] = useState(() => expensiveInitialValue()); // Lazy initial state
```

### 6. **Type-Safe Development**

**Elite TypeScript usage:**

```typescript
// ✅ Strict typing
interface GameConfig {
  readonly name: string;
  readonly difficulty: 'easy' | 'medium' | 'hard';
  readonly maxPlayers: number;
}

// ✅ Utility types
type PartialGameConfig = Partial<GameConfig>;
type RequiredGameName = Required<Pick<GameConfig, 'name'>>;

// ✅ Generic constraints
function updateGame<T extends GameConfig>(game: T, updates: Partial<T>): T {
  return { ...game, ...updates };
}
```

### 7. **Error Handling Patterns**

**Robust error boundaries and handling:**

```typescript
// ✅ Error boundaries for React
class GameErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (__DEV__) {
      console.error('Game error:', error, errorInfo);
    }
  }
}

// ✅ Async error handling
const fetchGameData = async (): Promise<GameData | null> => {
  try {
    const response = await api.getGameData();
    return response.data;
  } catch (error) {
    if (__DEV__) {
      console.error('Failed to fetch game data:', error);
    }
    return null;
  }
};
```

### 8. **Testing Philosophy**

**Top users test at multiple levels:**

```typescript
// ✅ Unit tests for pure functions
describe('gameUtils', () => {
  test('shuffleArray returns array with same elements', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffleArray(input);
    expect(result).toHaveLength(5);
    expect(result.sort()).toEqual(input.sort());
  });
});

// ✅ Integration tests for components
describe('GameScreen', () => {
  test('displays correct number of clues', () => {
    render(<GameScreen country={mockCountry} />);
    expect(screen.getAllByTestId('clue')).toHaveLength(3);
  });
});
```

### 9. **Performance Monitoring**

**Elite users measure everything:**

```typescript
// ✅ Performance tracking
const performanceTracker = {
  startTime: (label: string) => {
    if (__DEV__) {
      console.time(label);
    }
  },

  endTime: (label: string) => {
    if (__DEV__) {
      console.timeEnd(label);
    }
  },

  measureRender: (componentName: string) => {
    React.useEffect(() => {
      if (__DEV__) {
        console.log(`${componentName} rendered at ${Date.now()}`);
      }
    });
  }
};
```

### 10. **Code Review Excellence**

**Top users maintain high standards:**

- **Pre-commit hooks**: Lint, format, and test automatically
- **TypeScript strict mode**: Zero `any` types
- **Performance budgets**: Monitor bundle size and render times
- **Accessibility compliance**: Screen reader and keyboard navigation
- **Security scanning**: Dependency vulnerabilities and code patterns

---

## 🎯 Project Status

### Current Implementation: Play While You Wait
- **Status**: ✅ Production Ready
- **Last Updated**: 2025-09-26
- **Games**: 4 complete (all free)
- **Content**: 527+ educational pieces, seasonal themes
- **Platform**: iOS (Expo React Native + TypeScript)

### Architecture Summary
```typescript
// Core game types
interface GameConfig {
  name: string;
  type: 'animal' | 'country' | 'interactive';
  difficulty: 'easy' | 'medium' | 'hard';
}

// Content management
const getSeasonalContent = (season: Season) => mixSeasonalContent(
  seasonalData[season],
  evergreenData,
  0.7 // 70% seasonal, 30% evergreen
);
```

---

## 🔧 Development Workflow

### Daily Development Process

1. **Start Session**
   ```bash
   git status                    # Check current state
   npm run typecheck            # Verify types
   npm run dev                  # Start development server
   ```

2. **Feature Development**
   ```bash
   git checkout -b feature/new-feature
   # Code with TDD approach
   npm run test                 # Run tests continuously
   npm run lint                 # Check code quality
   ```

3. **Pre-Commit Validation**
   ```bash
   npm run typecheck           # TypeScript validation
   npm run test                # Full test suite
   npm run build               # Production build test
   git add . && git commit -m "feat: descriptive message"
   ```

### Code Quality Checks

```bash
# TypeScript validation
npx tsc --noEmit

# Linting and formatting
npx eslint . --fix
npx prettier . --write

# Testing
npm run test:coverage

# Bundle analysis
npx expo export --dump-sourcemap
```

---

## 🧪 Testing & Quality Assurance

### Testing Strategy

1. **Unit Tests**: Pure functions and utilities
2. **Component Tests**: React component behavior
3. **Integration Tests**: Feature workflows
4. **E2E Tests**: Critical user journeys
5. **Performance Tests**: Render times and memory usage

### Quality Gates

```typescript
// Example quality metrics
const qualityStandards = {
  testCoverage: '>90%',
  typeScriptErrors: 0,
  lintWarnings: 0,
  bundleSize: '<2MB',
  renderTime: '<100ms',
  memoryUsage: '<50MB'
};
```

---

## 🚀 Deployment Guidelines

### Pre-Deployment Checklist

- [ ] All tests passing
- [ ] TypeScript compilation clean
- [ ] No console.log statements in production
- [ ] Error boundaries implemented
- [ ] App Store requirements validated
- [ ] Performance benchmarks met
- [ ] Accessibility standards met

### Build Commands

```bash
# Development build (with debugging)
eas build --profile development --platform ios

# Preview build (TestFlight)
eas build --profile preview --platform ios

# Production build (App Store)
eas build --profile production --platform ios
```

---

## 📊 Performance Standards

### Target Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| App Launch | <2s | Time to interactive |
| Game Load | <1s | Screen transition |
| Memory Usage | <50MB | iOS Instruments |
| Bundle Size | <2MB | Expo build output |
| Crash Rate | <0.1% | Production monitoring |

### Optimization Techniques

```typescript
// ✅ Performance optimizations implemented
const GameScreen = React.memo(({ gameConfig }) => {
  const memoizedData = useMemo(() => processGameData(gameConfig), [gameConfig]);
  const deferredSearch = useDeferredValue(searchTerm);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <GameContent data={memoizedData} />
    </Suspense>
  );
});
```

---

## 🎯 Current Focus: App Store Launch

### Immediate Tasks
1. **EAS Build Configuration**: Set up proper iOS builds
2. **TestFlight Distribution**: Internal testing with real devices
3. **App Store Connect**: Configure IAP products
4. **Final Testing**: End-to-end app functionality validation

### Success Criteria
- **Technical**: Zero crashes, <2s load times, smooth animations
- **Business**: Clear value proposition, family-friendly experience
- **User Experience**: Intuitive navigation, family-friendly design
- **App Store**: Compliance with all guidelines, optimized metadata

---

## 🚨 Critical Performance & Crash Prevention Learnings

### ⚠️ Performance Killers We Fixed (Never Repeat!)

#### 1. **Massive Synchronous Data Loading**
```typescript
// ❌ WRONG: 485KB of data loaded synchronously at startup
const animals = [...animalData]; // 261KB
const countries = [...countryData]; // 224KB
// Blocks main thread for 2-3 seconds!

// ✅ RIGHT: Memoize expensive operations
const memoizedShuffledAnimals = useMemo(() => {
  const animals = [...animalData];
  // Expensive shuffle operation only runs once
  return shuffleArray(animals);
}, []); // Empty deps = runs once only
```

#### 2. **Double Nested DEV Checks**
```typescript
// ❌ WRONG: Redundant processing
if (__DEV__) {
  if (__DEV__) { // Unnecessary double check!
    console.log('Debug info');
  }
}

// ✅ RIGHT: Single check
if (__DEV__) {
  console.log('Debug info');
}
```

#### 3. **Unoptimized Re-renders**
```typescript
// ❌ WRONG: Re-renders on every parent update
export default function GameScreen() {
  const renderCard = (item) => { /* expensive render */ };
  // Function recreated on every render!
}

// ✅ RIGHT: Memoized components and callbacks
const renderCard = useCallback((item) => {
  /* expensive render */
}, []); // Stable reference

export default React.memo(GameScreen); // Prevent unnecessary re-renders
```

### 💥 Crash Risks We Eliminated (Critical for iOS!)

#### 1. **Unguarded Console Statements**
```typescript
// ❌ WRONG: Causes white screens on iOS production
console.log('Debug info'); // CRASHES in production builds!

// ✅ RIGHT: Always guard console statements
if (__DEV__) {
  console.log('Debug info'); // Safe for production
}
```

#### 2. **Uncaught Haptics Errors**
```typescript
// ❌ WRONG: Can crash on older devices
await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
// Throws error on devices without haptics support!

// ✅ RIGHT: Wrap haptics in try-catch
try {
  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
} catch (error) {
  if (__DEV__) {
    console.log('Haptics error (non-critical):', error);
  }
  // App continues working without haptics
}
```

#### 3. **Array Access Without Bounds Checking**
```typescript
// ❌ WRONG: Can crash if array is empty
const firstAnimal = animals[0]; // TypeError if animals.length === 0
setCurrentAnimal(firstAnimal.name); // CRASH!

// ✅ RIGHT: Safe array access
if (animals.length > 0) {
  const firstAnimal = animals[0];
  setCurrentAnimal(firstAnimal.name);
}
// OR: Use optional chaining
const firstAnimal = animals[0]?.name;
```

### 📱 Mobile Performance Best Practices (MANDATORY)

#### 1. **Data Loading Strategy**
```typescript
// ✅ Lazy loading for large datasets
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  // Load data in chunks or lazily
  const loadData = async () => {
    try {
      const chunks = await loadDataInChunks();
      setData(chunks);
    } finally {
      setIsLoading(false);
    }
  };
  loadData();
}, []);
```

#### 2. **Memory Management**
```typescript
// ✅ Use useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]); // Only recalculate when data changes

// ✅ Use useCallback for event handlers
const handlePress = useCallback((item) => {
  // Handle item press
}, []); // Stable reference prevents child re-renders
```

#### 3. **Component Optimization**
```typescript
// ✅ Memoize components that render large lists
const GameCard = React.memo(({ game, onPress }) => {
  return <TouchableOpacity onPress={() => onPress(game)}>...</TouchableOpacity>;
});

// ✅ Optimize props to prevent unnecessary re-renders
const MemoizedList = React.memo(GameList, (prevProps, nextProps) => {
  return prevProps.games.length === nextProps.games.length;
});
```

### 🔧 Development Workflow (Updated)

#### Pre-Commit Performance Checklist
```bash
# 1. TypeScript strict mode check
npx tsc --noEmit

# 2. Console statement audit (CRITICAL for iOS)
grep -r "console\." src/ --include="*.tsx" --include="*.ts" | grep -v "__DEV__" | grep -v "console.error"
# Result must be 0 unguarded statements!

# 3. Performance pattern check
grep -r "useMemo\|useCallback\|React.memo" src/ --include="*.tsx" --include="*.ts"
# Ensure heavy operations are optimized

# 4. Error handling check
grep -r "try.*catch\|Haptics" src/ --include="*.tsx" --include="*.ts"
# Ensure haptics and async operations are wrapped
```

#### Pre-Deployment Apple Build Checklist (CRITICAL!)
```bash
# 🚨 MANDATORY: Always bump build number before Apple deployment
# Apple error: "You've already submitted this build of the app"

# 1. Check current build number
grep -A 10 "ios" app.json | grep buildNumber

# 2. Increment build number in app.json
# Change "buildNumber": "1" to "buildNumber": "2", etc.

# 3. Verify the change
grep -A 10 "ios" app.json | grep buildNumber

# 4. ONLY THEN proceed with EAS build
npx eas build --platform ios --profile production
```

**❌ WRONG: Reusing same build number**
```json
{
  "expo": {
    "ios": {
      "buildNumber": "1"  // Same as previous submission - WILL FAIL!
    }
  }
}
```

**✅ RIGHT: Always increment build number**
```json
{
  "expo": {
    "ios": {
      "buildNumber": "2"  // Incremented from previous - WILL SUCCEED!
    }
  }
}
```

### 📊 Performance Monitoring (Ongoing)

#### Key Metrics to Track
```typescript
// ✅ Performance measurement in development
const performanceTracker = {
  measureRender: (componentName: string) => {
    if (__DEV__) {
      const start = Date.now();
      return () => {
        const end = Date.now();
        console.log(`${componentName} render time: ${end - start}ms`);
      };
    }
    return () => {};
  },

  measureDataLoad: async (operation: string, fn: () => Promise<any>) => {
    if (__DEV__) {
      const start = Date.now();
      const result = await fn();
      const end = Date.now();
      console.log(`${operation} took: ${end - start}ms`);
      return result;
    }
    return await fn();
  }
};
```

### 🎯 Performance Standards (ENFORCED)

| Metric | Threshold | Measurement |
|--------|-----------|-------------|
| App Launch | <2s | Time to interactive |
| Screen Transition | <300ms | Navigation timing |
| Data Shuffle | <500ms | Algorithm timing |
| Memory Usage | <100MB | React DevTools |
| Bundle Size | <2MB | Build output |
| Render Time | <16ms | React Profiler |

### 🚫 Anti-Patterns to Avoid (CRITICAL)

1. **Never** put heavy operations in render functions
2. **Never** use unguarded console statements
3. **Never** access arrays without bounds checking
4. **Never** ignore haptics/async errors
5. **Never** skip useMemo for expensive calculations
6. **Never** create functions inside render without useCallback
7. **Never** forget React.memo for heavy components

### 🛡️ Error Boundaries (Required)

```typescript
// ✅ Wrap all game screens with error boundaries
<ErrorBoundary fallback={<GameErrorScreen />}>
  <GameScreen />
</ErrorBoundary>

// ✅ Implement proper error boundary
class GameErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (__DEV__) {
      console.error('Game error:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return <SafeErrorScreen />;
    }
    return this.props.children;
  }
}
```

---

*This document serves as the single source of truth for development practices, project status, and quality standards. Update regularly as the project evolves.*

**Last Updated**: 2025-09-26 | **Next Review**: Weekly during active development