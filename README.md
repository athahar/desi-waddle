# Charadesi

**Status**: 🚧 In Development (v0.1.0)

A standalone grown-up charades app for Indian audiences, featuring Bollywood, Cricket, Street Food, and more!

## Overview

Charadesi is a charades app built specifically for Indian families and grown-ups. Unlike traditional charades games, this app features culturally relevant content packs including:

- 🎬 Bollywood Universe (movies, stars, dialogues, songs)
- 🏏 Cricket Fever (legends, IPL, commentary)
- 🍲 Street Food & Drinks (Mumbai, Delhi, South Indian specialties)
- 🏙️ Places & City Life (Mumbai trains, Delhi autos, Bangalore traffic)
- 👨‍👩‍👧‍👦 Desi Life & Everyday Humor (moms, weddings, relatives)
- 📺 Pop Culture & Ads (90s TV, brands, YouTube culture)
- 🛫 Travel & Holidays (Goa, hill stations, honeymoon trips)
- 💬 Indian Slang & Sayings
- 🎭 Characters & Emotions
- 🤪 Meme & Modern Internet Life
- 🧩 Special Themed Packs (90s Kids, Office Party, Family Reunion)

## Project Setup

### Prerequisites
- Node.js 18+
- Expo CLI
- iOS device or simulator (iOS only for now)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run on iOS
npm run ios
```

### Required Dependencies

All dependencies are included in `package.json`:
- ✅ `expo` - React Native framework
- ✅ `expo-sharing` - CSV export functionality
- ✅ `expo-file-system` - File operations
- ✅ `uuid` + `react-native-get-random-values` - Unique ID generation
- ✅ `expo-sensors` - Accelerometer for gameplay
- ✅ `expo-haptics` - Haptic feedback
- ✅ `expo-screen-orientation` - Landscape lock
- ✅ `@react-native-async-storage/async-storage` - Session storage
- ✅ `posthog-react-native` - Analytics (optional)

## Architecture

### Content Structure

```typescript
Pack → Subcategory (optional) → Cards

// Multi-level packs (3-tier navigation)
Bollywood → 90s Movies → Cards
Cricket → IPL Madness → Cards

// Flat packs (2-tier navigation)
Slang → Cards
Meme Life → Cards
```

### Key Features

1. **Advanced Deck Management**
   - 30-day cooldown per card
   - No repeats until ≥50% of category seen
   - Session-based deterministic shuffle
   - Progressive deck refresh

2. **Dev Console**
   - Triple-tap title to access
   - CSV export of card history
   - Session management
   - Event logging

3. **Gameplay**
   - Accelerometer-based controls (tilt up = correct, tilt down = pass)
   - 60-second rounds
   - Score tracking
   - Results screen

## Development

### Structure

```
desi-charades/
├── src/
│   ├── components/      # Reusable UI components
│   ├── core/            # Deck manager logic
│   ├── data/packs/      # Content data files
│   ├── screens/         # App screens
│   ├── services/        # Analytics, sound, session
│   ├── types/           # TypeScript types
│   └── utils/           # Helper functions
├── App.tsx              # Main app entry
├── app.config.js        # Expo configuration
└── package.json         # Dependencies
```

### Commands

```bash
# Type checking
npm run typecheck

# Start development
npm start

# Build for iOS (TestFlight)
npx eas build --platform ios --profile preview

# Build for production
npx eas build --platform ios --profile production
```

## TODO

### Phase 1: Repository Setup ✅
- [x] Create folder structure
- [x] Initialize git
- [x] Update app identity
- [x] Clean dependencies

### Phase 2: Strip to Charades Only (Next)
- [ ] Remove non-charades game screens
- [ ] Remove non-charades data files
- [ ] Update HomeScreen → PackListScreen
- [ ] Clean up navigation

### Phase 3: Pack System
- [ ] Create content types
- [ ] Build pack data structure
- [ ] Implement PackListScreen
- [ ] Implement SubcategoryScreen
- [ ] Update CharadesScreen for packs

### Phase 4: Deck Manager
- [ ] Enhanced deck manager with ≥50% rule
- [ ] Pack-level session tracking
- [ ] Session rotation

### Phase 5: Dev Console
- [ ] Triple-tap activation
- [ ] CSV export
- [ ] Event logging

### Phase 6: Data Import
- [ ] Create data import script
- [ ] CSV template
- [ ] User provides card data

## Expo Project ID

**TODO**: Create new Expo project in dashboard at https://expo.dev

After creating project, update `app.config.js`:
```javascript
extra: {
  eas: {
    projectId: 'your-new-project-id'
  }
}
```

## GitHub Repository

**Repo**: `github.com/athahar/desi-waddle` (to be created)

## License

Private - All Rights Reserved
