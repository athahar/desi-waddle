# Desi Waddle - Project Plan & Roadmap

**Version**: 0.1.0
**Status**: 🚧 Phase 1 Complete - Repository Setup
**Last Updated**: 2025-10-13

---

## 📋 Project Overview

**Goal**: Create a standalone iOS charades app for Indian grown-up audiences with 11 themed packs, advanced deck management, and dev tools.

**Key Differentiators**:
- Culturally relevant content (Bollywood, Cricket, Street Food, etc.)
- Multi-level navigation (Pack → Subcategory → Cards)
- Advanced deck management (30-day cooldown, ≥50% refresh rule)
- Dev Console with CSV export
- Grown-up audience (witty/edgy but App Store safe)

---

## 🎯 Phase Breakdown

### ✅ Phase 1: Repository & Project Setup (COMPLETE)

**Goal**: Create clean standalone repo with proper identity

**Tasks Completed**:
- ✅ Created `/desi-charades/` folder at project root
- ✅ Copied WaddlePlay structure (excluded git history, node_modules)
- ✅ Initialized git repo with proper .gitignore
- ✅ Updated app.config.js:
  - App name: "Desi Waddle"
  - Bundle ID: `com.desiwaddle.charades`
  - Version: 0.1.0 (initial development)
  - Build number: 1
  - Removed old Expo project ID (user will create new one)
- ✅ Updated package.json:
  - Name: `desi-waddle-charades`
  - Verified all required dependencies (uuid, expo-sharing, expo-file-system, etc.)
  - Added typecheck script
- ✅ Created README.md with project overview
- ✅ Created DESI-WADDLE-PROJECT-PLAN.md (this file)
- ✅ Initial commit: "chore: initialize Desi Waddle app"

**Deliverables**:
- Clean standalone repo ready for development
- All dependencies configured
- Git tracking enabled
- Documentation in place

**Next Step**: Create GitHub remote at `github.com/athahar/desi-waddle`

---

### 🚧 Phase 2: Strip Down to Charades Only (NEXT)

**Goal**: Remove all non-charades games and simplify to single-game app

**Tasks**:
1. **Delete unused game screens** (9 files):
   - [ ] GuessAnimalScreen.tsx
   - [ ] GuessCountryScreen.tsx
   - [ ] WouldYouRatherScreen.tsx
   - [ ] StoryStarterScreen.tsx
   - [ ] ScavengerHuntModePickerScreen.tsx
   - [ ] ScavengerHuntPlayScreen.tsx
   - [ ] SimonSaysHomeScreen.tsx
   - [ ] SimonSaysPlayScreen.tsx
   - [ ] InfoScreen.tsx (replace with simple About modal)

2. **Delete unused game data** (7 files + 1 folder):
   - [ ] animalData.ts
   - [ ] countryData.ts
   - [ ] wouldYouRatherData.ts
   - [ ] storyStarterData.ts
   - [ ] scavengerHuntData.ts + scavengerHunt/ folder
   - [ ] simonSaysData.ts
   - [ ] seasonalSystem.ts

3. **Keep only Charades files**:
   - [ ] CharadesCategoryScreen.tsx (will rename to SubcategoryScreen.tsx)
   - [ ] CharadesScreen.tsx (main gameplay)
   - [ ] CharadesResultsScreen.tsx
   - [ ] charadesData.ts (will replace with pack system)
   - [ ] charades/ folder (will reorganize to data/packs/)

4. **Update HomeScreen → PackListScreen**:
   - [ ] Rename HomeScreen.tsx to PackListScreen.tsx
   - [ ] Remove all non-charades game cards
   - [ ] Show 11 pack cards (placeholder data)
   - [ ] Update navigation references

5. **Clean up Navigation (App.tsx)**:
   - [ ] Remove unused routes (GuessAnimal, GuessCountry, etc.)
   - [ ] Keep only: PackList, Subcategory, Charades, CharadesResults, Dev, Info
   - [ ] Update navigation types

6. **Remove unused utilities**:
   - [ ] Keep gameSessionService.ts (reuse for session tracking)
   - [ ] deckBuilder.ts functionality will move to core/deckManager.ts
   - [ ] Delete dealSimonRound.ts

7. **Commit**: "refactor: strip down to charades-only app"

**Deliverables**:
- Minimal charades-only app
- No dead code or unused files
- Clean navigation structure
- TypeScript compiles without errors

**Estimated Time**: 1-2 hours

---

### 📦 Phase 3: Implement Pack System

**Goal**: Build pack-based content architecture with multi-level navigation

#### Step 3.1: Create Type System
- [ ] Create `src/types/content.ts` with interfaces:
  ```typescript
  interface CharadeCard
  interface Subcategory
  interface Pack
  ```
- [ ] Update `src/types/game.ts` to remove old types

#### Step 3.2: Organize Data Structure
- [ ] Create `src/data/packs/` folder structure:
  ```
  data/packs/
  ├── bollywood/          # Multi-level pack
  │   ├── 90s-movies.ts
  │   ├── modern-movies.ts
  │   ├── stars.ts
  │   ├── comedy.ts
  │   ├── villains.ts
  │   ├── dialogues.ts
  │   ├── songs.ts
  │   ├── scenes.ts
  │   ├── item-songs.ts
  │   └── behind-scenes.ts
  ├── cricket/
  │   ├── legends.ts
  │   ├── matches.ts
  │   ├── ipl.ts
  │   ├── commentary.ts
  │   ├── ads.ts
  │   ├── gully-cricket.ts
  │   └── nicknames.ts
  ├── street-food/
  ├── places/
  ├── desi-life/
  ├── pop-culture/
  ├── travel/
  ├── slang.ts           # Flat pack
  ├── special-themes.ts  # Flat pack
  ├── characters.ts      # Flat pack
  └── meme-life.ts       # Flat pack
  ```

#### Step 3.3: Create Sample Data
- [ ] Bollywood pack with 2 subcategories, 10 placeholder cards each
- [ ] Slang pack (flat) with 15 placeholder cards
- [ ] Purpose: Test navigation flow before user provides real data

#### Step 3.4: Create Data Aggregator
- [ ] Create `src/data/index.ts`:
  - `getAllPacks()` - Returns all 11 packs
  - `getPackById(id)` - Get specific pack
  - `getSubcategoryById(packId, subcategoryId)` - Get subcategory
  - `getCardsByPack(packId, subcategoryId?)` - Get all cards

#### Step 3.5: Build PackListScreen
- [ ] Display all 11 packs as cards (similar to current HomeScreen)
- [ ] Each pack shows: emoji, name, description
- [ ] Handle paid packs (show lock icon, but don't implement IAP yet)
- [ ] Navigation logic:
  - If pack has `subcategories`: navigate to SubcategoryScreen
  - If pack has `cards` only: navigate to CharadesInstructionsScreen

#### Step 3.6: Build SubcategoryScreen
- [ ] Rename CharadesCategoryScreen.tsx to SubcategoryScreen.tsx
- [ ] Update to work with new Pack/Subcategory data model
- [ ] Display subcategories within a multi-level pack
- [ ] Navigation: `onPress` → CharadesInstructionsScreen

#### Step 3.7: Extract CharadesInstructionsScreen
- [ ] Extract instructions UI from CharadesScreen.tsx
- [ ] Create standalone CharadesInstructionsScreen.tsx
- [ ] Show 3 icons: Hold at forehead, Tilt up, Tilt down
- [ ] "Start" button → CharadesScreen

#### Step 3.8: Update CharadesScreen
- [ ] Accept route params: `{ packId: string; subcategoryId?: string }`
- [ ] Load cards from new pack system:
  ```typescript
  const cards = subcategoryId
    ? getCardsByPack(packId, subcategoryId)
    : getCardsByPack(packId);
  ```
- [ ] Keep existing gameplay logic (accelerometer, timer, scoring)
- [ ] Update session tracking: `gameId = "charades_${packId}_${subcategoryId || 'all'}"`

#### Step 3.9: Update Navigation
- [ ] Update App.tsx navigation stack:
  ```typescript
  <Stack.Screen name="PackList" component={PackListScreen} />
  <Stack.Screen name="Subcategory" component={SubcategoryScreen} />
  <Stack.Screen name="CharadesInstructions" component={CharadesInstructionsScreen} />
  <Stack.Screen name="Charades" component={CharadesScreen} />
  <Stack.Screen name="CharadesResults" component={CharadesResultsScreen} />
  <Stack.Screen name="Dev" component={DevConsoleScreen} />
  <Stack.Screen name="Info" component={InfoScreen} />
  ```

#### Step 3.10: Test Navigation Flows
- [ ] Multi-level: PackList → Subcategory → Instructions → Play → Results
- [ ] Flat: PackList → Instructions → Play → Results
- [ ] Back button navigation works correctly
- [ ] No crashes or TypeScript errors

#### Step 3.11: Commit
- [ ] "feat: implement pack-based content system"

**Deliverables**:
- Working pack navigation with placeholder data
- 11 packs configured (7 multi-level, 4 flat)
- Smart navigation based on pack type
- Ready for real card data import

**Estimated Time**: 4-6 hours

---

### 🔧 Phase 4: Enhanced Deck Manager

**Goal**: Implement advanced deck management with ≥50% refresh rule

#### Step 4.1: Create core/deckManager.ts
- [ ] Blend ChatGPT spec + WaddlePlay deckBuilder.ts:
  - Reuse seeded shuffle from deckBuilder.ts
  - Reuse 30-day cooldown logic from deckBuilder.ts
  - Add ≥50% rule: Don't refresh until 50% of category shown
  - Add session rotation: `startNewSession()` rotates seed
  - Add pack-level tracking: Each pack/subcategory = separate game_id

#### Step 4.2: Key Functions
```typescript
// Get next card with advanced logic
async function getNextCard(opts: {
  categoryCards: CharadeCard[];
  packId: string;
  subcategoryId?: string;
  cooldownMs?: number;
}): Promise<{ card: CharadeCard | null; reason: string }>

// Session management
async function startNewSession(packId: string, subcategoryId?: string)
async function getSessionId(packId: string, subcategoryId?: string)
async function getDevHistory(packId: string, subcategoryId?: string)
async function exportHistoryCsv(packId: string, subcategoryId?: string): Promise<string>
```

#### Step 4.3: Integration with Existing Systems
- [ ] Use `AsyncStorage` (not SecureStore) for consistency
- [ ] Use existing `DevPanel` logging (logSessionStart, logCardShown, etc.)
- [ ] Use existing `gameSessionService` for `markItemSeen()` tracking
- [ ] Generate session ID per game (existing pattern)

#### Step 4.4: Add Session ID Tracking
- [ ] Generate unique session ID in CharadesScreen state
- [ ] Pass to deckManager functions
- [ ] Log to DevPanel for debugging

#### Step 4.5: Test Deck Refresh Logic
- [ ] Use `simulateDeckUsage()` from deckBuilder.ts
- [ ] Verify no repeats until ≥50% seen
- [ ] Verify 30-day cooldown works across sessions
- [ ] Test with small card set (10 cards) to validate behavior

#### Step 4.6: Commit
- [ ] "feat: enhanced deck manager with 50% refresh rule"

**Deliverables**:
- Robust deck management preventing repetition
- 30-day cooldown + ≥50% refresh enforced
- Session-stable shuffling
- Pack-level tracking

**Estimated Time**: 3-4 hours

---

### 🛠️ Phase 5: Dev Console

**Goal**: Build developer tools for debugging and CSV export

#### Step 5.1: Create DevConsoleScreen.tsx
- [ ] Basic screen layout with sections:
  - Session Stats
  - Event Log
  - Plays History
  - Actions (Export CSV, Reset Session, Clear All Data)

#### Step 5.2: Triple-Tap Activation
- [ ] In App.tsx header, detect 3 taps within 800ms on title
- [ ] Navigate to DevConsoleScreen
- [ ] Test activation works reliably

#### Step 5.3: Display Session Stats
- [ ] Current session ID
- [ ] Current seed
- [ ] Cards shown this session
- [ ] Total cards in deck
- [ ] Percentage used
- [ ] Days until cooldown reset

#### Step 5.4: Event Log Display
- [ ] Show last 50 events from DevPanel logger
- [ ] Event types: SESSION_START, DECK_BUILT, CARD_SHOWN, CARD_SKIPPED, SEED_ROTATED
- [ ] Format: timestamp, event type, payload (JSON)
- [ ] Auto-scroll to latest event

#### Step 5.5: CSV Export Functionality
- [ ] Verify `expo-sharing` and `expo-file-system` installed
- [ ] Format: `card_id, card_text, shown_at_iso, session_id, pack_id, subcategory_id`
- [ ] Save to FileSystem cache directory
- [ ] Use `Sharing.shareAsync()` to open share sheet
- [ ] Test on physical device (simulator may not support sharing)

#### Step 5.6: Reset/Clear Buttons
- [ ] **Reset Session**: Clear current session, rotate seed, refresh screen
- [ ] **Clear All Data**: Nuclear option, clears all AsyncStorage keys with prefix
- [ ] Add confirmation dialogs for destructive actions

#### Step 5.7: Test on Device
- [ ] Verify CSV export opens share sheet
- [ ] Verify can save/share CSV file
- [ ] Verify reset buttons work without crashes
- [ ] Verify event log updates in real-time

#### Step 5.8: Commit
- [ ] "feat: dev console with CSV export and session management"

**Deliverables**:
- Functional dev tools for debugging
- CSV export working on device
- Session management tools
- Real-time event logging

**Estimated Time**: 3-4 hours

---

### 🎨 Phase 6: Polish & Prepare for Data Import

**Goal**: Finalize app scaffold and prepare for user-provided card data

#### Step 6.1: Update Branding
- [ ] Colors: Update pastel colors to match grown-up theme
  - Consider warmer, more sophisticated palette
  - Update colors.ts with new scheme
- [ ] Fonts: Keep Sansation + Inter (already good)
- [ ] Icons: Review existing icon set, keep relevant ones
- [ ] Remove kidsy language/descriptions

#### Step 6.2: Create Data Import Script
- [ ] Create `src/utils/importCards.ts`:
  - Accept CSV format: `pack_id, subcategory_id, card_text, hints, difficulty, tags, is_spicy`
  - Convert to TypeScript pack files
  - Validate structure (required fields, data types)
  - Generate UUIDs for cards
  - Output formatted TypeScript files

#### Step 6.3: CSV Template
- [ ] Create `data/csv-template.csv` with examples
- [ ] Document CSV format in README.md
- [ ] Provide sample rows for each pack type

#### Step 6.4: Documentation
- [ ] Update README.md:
  - Document pack structure
  - CSV import instructions
  - How to add new packs
- [ ] Create DATA-FORMAT.md:
  - Detailed schema documentation
  - Examples for each pack type
  - Best practices for card creation

#### Step 6.5: Quality Checks
- [ ] Run `npx tsc --noEmit` (0 errors)
- [ ] Run `npx expo-doctor` (0 issues)
- [ ] Verify all console statements wrapped in `if (__DEV__)`
- [ ] Test app launches without crashes
- [ ] Test navigation flows work end-to-end

#### Step 6.6: Prepare for Expo Project
- [ ] Document in README: "Need Expo project ID for builds"
- [ ] Create EAS build profiles in eas.json:
  ```json
  {
    "build": {
      "development": { ... },
      "preview": { ... },
      "production": { ... }
    }
  }
  ```

#### Step 6.7: Final Commit
- [ ] "chore: polish app and prepare for data import"

**Deliverables**:
- Production-ready app scaffold
- Data import script and CSV template
- Complete documentation
- Ready for user-provided card data

**Estimated Time**: 2-3 hours

---

### 🧪 Phase 7: Testing & Validation

**Goal**: Thoroughly test all features before user provides data

#### Step 7.1: Navigation Testing
- [ ] Multi-level pack navigation (3 screens)
- [ ] Flat pack navigation (2 screens)
- [ ] Back button from all screens
- [ ] Deep linking (if needed)
- [ ] Dev console access (triple-tap)

#### Step 7.2: Deck Management Testing
- [ ] Play through 50% of category
- [ ] Verify no repeats until refresh triggers
- [ ] Verify 30-day cooldown respected
- [ ] Test session rotation
- [ ] Test with multiple packs

#### Step 7.3: CSV Export Testing
- [ ] Export history after playing 10 cards
- [ ] Open in Files app
- [ ] Verify data format correct
- [ ] Verify all columns present
- [ ] Test with empty history

#### Step 7.4: Gameplay Testing
- [ ] Accelerometer tilt up = correct (green flash + haptic)
- [ ] Accelerometer tilt down = pass (red flash + haptic)
- [ ] Verify timer counts down correctly
- [ ] Verify results screen shows correct score
- [ ] Test finish button mid-game

#### Step 7.5: Performance Testing
- [ ] App launch < 2s
- [ ] Game start < 1s
- [ ] No memory leaks (use Xcode Instruments)
- [ ] Smooth animations (60fps)
- [ ] Test on older iPhone (iPhone 8 or similar)

#### Step 7.6: Error Handling
- [ ] Test with empty pack (no cards)
- [ ] Test with malformed data
- [ ] Test haptics error (simulator)
- [ ] Test AsyncStorage errors

#### Step 7.7: Commit
- [ ] "test: validate all features and fix bugs"

**Deliverables**:
- Bug-free, tested app
- Performance benchmarks met
- All edge cases handled
- Ready for production use

**Estimated Time**: 3-4 hours

---

### 📝 Phase 8: User-Provided Data Import (WAITING ON USER)

**Goal**: Import real card data from user

**Prerequisites**:
- User provides CSV or JSON data for all 11 packs
- Data follows documented format

**Tasks**:
1. [ ] User provides card data (CSV/JSON)
2. [ ] Run import script: `npm run import-cards path/to/data.csv`
3. [ ] Review generated TypeScript files
4. [ ] Test each pack/subcategory in app
5. [ ] Fix any data issues (typos, formatting, etc.)
6. [ ] Commit: "content: import all 11 packs with real card data"

**Deliverables**:
- All 11 packs populated with real content
- App ready for beta testing

**Estimated Time**: 2-3 hours (depends on data quality)

---

### 🚀 Phase 9: Deployment Preparation (FUTURE)

**Goal**: Prepare for TestFlight and App Store

**Tasks**:
1. [ ] User creates Expo project ID in dashboard
2. [ ] Update app.config.js with projectId
3. [ ] Run `npx expo-doctor` (must show 0 issues)
4. [ ] Bump version to 1.0.0, buildNumber to 1
5. [ ] Create app icon (1024x1024)
6. [ ] Create splash screen
7. [ ] Test build: `npx eas build --platform ios --profile preview --local`
8. [ ] Submit to TestFlight: `npx eas build --platform ios --profile preview`
9. [ ] Internal testing (3-5 testers)
10. [ ] Fix bugs from testing
11. [ ] Production build: `npx eas build --platform ios --profile production`
12. [ ] App Store submission

**Deliverables**:
- App live on TestFlight
- Ready for App Store review

**Estimated Time**: 1-2 days (including Apple review time)

---

## 📊 Current Status Summary

### Completed ✅
- Phase 1: Repository & Project Setup

### In Progress 🚧
- None (waiting for user direction)

### Next Up ⏭️
- Phase 2: Strip Down to Charades Only

### Blocked 🚫
- Phase 8: User-Provided Data Import (waiting on user data)
- Phase 9: Deployment (waiting on Expo project ID)

---

## 🎯 Success Criteria

### Technical
- ✅ TypeScript strict mode, 0 errors
- ✅ All dependencies installed and working
- 🔲 Expo-doctor shows 0 issues
- 🔲 App launches in <2s
- 🔲 No crashes or white screens
- 🔲 30-day cooldown working correctly
- 🔲 CSV export working on device

### User Experience
- 🔲 Intuitive pack navigation
- 🔲 Smooth animations (60fps)
- 🔲 Clear instructions screen
- 🔲 Reliable accelerometer controls
- 🔲 Dev console accessible and useful

### Content
- 🔲 11 packs configured
- 🔲 Multi-level and flat navigation working
- 🔲 Sample data for testing (before user provides real data)
- 🔲 Real card data imported (when user provides)

### Documentation
- ✅ README.md complete
- ✅ Project plan complete (this file)
- 🔲 DATA-FORMAT.md created
- 🔲 CSV template provided
- 🔲 CLAUDE.md references project plan

---

## 🛠️ Tools & Commands

### Development
```bash
# Start development server
npm start

# Type checking
npm run typecheck

# Build locally (test)
npx eas build --platform ios --profile preview --local
```

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/phase-2-strip-charades

# Commit with conventional format
git commit -m "refactor: remove non-charades games"

# Push to remote (after creating GitHub repo)
git push origin feature/phase-2-strip-charades
```

### Testing
```bash
# Run on iOS simulator
npm run ios

# Run on physical device
# Use Expo Go app or development build
```

---

## 📞 TODO: User Actions Required

1. **Create GitHub Remote**:
   - Go to github.com/athahar
   - Create new repository: `desi-waddle`
   - Add remote: `git remote add origin git@github.com:athahar/desi-waddle.git`
   - Push: `git push -u origin main`

2. **Create Expo Project**:
   - Go to expo.dev
   - Create new project
   - Copy project ID
   - Update `app.config.js` with projectId

3. **Provide Card Data** (Phase 8):
   - Prepare CSV or JSON data for all 11 packs
   - Follow format in CSV template
   - Share with Claude for import

4. **TestFlight Testing** (Phase 9):
   - Invite 3-5 internal testers
   - Test on different iOS devices
   - Report bugs/feedback

---

## 📈 Timeline Estimate

| Phase | Estimated Time | Status |
|-------|---------------|--------|
| Phase 1: Setup | 1 hour | ✅ Complete |
| Phase 2: Strip Down | 1-2 hours | ⏭️ Next |
| Phase 3: Pack System | 4-6 hours | 🔲 Pending |
| Phase 4: Deck Manager | 3-4 hours | 🔲 Pending |
| Phase 5: Dev Console | 3-4 hours | 🔲 Pending |
| Phase 6: Polish | 2-3 hours | 🔲 Pending |
| Phase 7: Testing | 3-4 hours | 🔲 Pending |
| Phase 8: Data Import | 2-3 hours | 🚫 Blocked (waiting on user) |
| Phase 9: Deployment | 1-2 days | 🚫 Blocked (waiting on Expo ID) |
| **Total** | **~20-30 hours** | **5% complete** |

---

## 📝 Notes & Decisions

### Key Architectural Decisions
1. **Pack System**: Hybrid multi-level + flat navigation based on pack type
2. **Deck Manager**: Blend ChatGPT spec with WaddlePlay's proven deckBuilder.ts
3. **Dev Console**: Triple-tap activation (hidden from regular users)
4. **Data Format**: TypeScript files (not JSON) for type safety
5. **Session Tracking**: Pack-level, not global (each pack/subcategory = separate session)

### Learnings from WaddlePlay
- ✅ Console guards mandatory (`if (__DEV__)`)
- ✅ Haptics must be wrapped in try-catch
- ✅ Array bounds checking before access
- ✅ useMemo/useCallback for heavy operations
- ✅ React.memo for component optimization

### Future Enhancements (Not in Current Plan)
- RevenueCat integration for monetization
- Android version
- Social sharing features
- Custom pack creation by users
- Cloud sync across devices

---

**Last Updated**: 2025-10-13
**Next Review**: After Phase 2 completion
