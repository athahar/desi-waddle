# How to Add Charades Words

This folder contains the data files for all 10 charades categories. Each category has a template file with 3 sample entries to show you the format.

## Files

1. **bollywoodStarsItems.ts** - Bollywood actors and actresses
2. **iconicCharactersItems.ts** - Famous movie characters
3. **songDanceItems.ts** - Popular Bollywood songs
4. **comediansVillainsItems.ts** - Comedians and villains
5. **cricketPlayersItems.ts** - Famous cricket players
6. **famousMatchesItems.ts** - Memorable cricket matches
7. **adsMomentsItems.ts** - Iconic TV ads and moments
8. **desiStreetFoodItems.ts** - Indian street foods
9. **indianLandmarksItems.ts** - Famous landmarks
10. **indianBrandsItems.ts** - Indian brands

## Data Format

Each entry must follow this format:

```typescript
{
  id: "category-id_unique-term-id",    // Unique ID: category-id + underscore + term in kebab-case
  term: "Display Name",                 // The word/phrase players will act out
  category: "category-id",              // Must match the category ID
  difficulty: 1,                        // 1 = easy, 2 = medium, 3 = hard
  ageBands: ["18+"],                    // Age groups (can have multiple)
  alt: [],                              // Alternative names (optional)
  hints: [],                            // Hints to show (optional)
  locale: "en-IN",                      // Language locale
  tags: []                              // Tags for filtering (optional)
}
```

## Example

```typescript
{
  id: "bollywood-stars_shah-rukh-khan",
  term: "Shah Rukh Khan",
  category: "bollywood-stars",
  difficulty: 1,
  ageBands: ["18+"],
  alt: ["SRK", "King Khan"],
  hints: ["King of Bollywood"],
  locale: "en-IN",
  tags: []
}
```

## Steps to Add Words

1. Open the category file you want to add words to
2. Find the comment "ADD MORE ... HERE"
3. Copy one of the existing entries
4. Update all fields:
   - Change the `id` (must be unique!)
   - Change the `term` to the word you want
   - Adjust `difficulty` if needed (1, 2, or 3)
   - Add alternative names in `alt` array if applicable
   - Add helpful hints in `hints` array
5. Add a comma after the previous entry
6. Save the file

## Tips

- **Aim for 30-50 words per category** for a good game experience
- Use descriptive IDs (no spaces, use hyphens)
- Set difficulty based on how well-known the term is:
  - **1 (easy)**: Everyone knows (Sachin Tendulkar, Taj Mahal)
  - **2 (medium)**: Most people know (Kapil Dev, Qutub Minar)
  - **3 (hard)**: Only fans know (Javagal Srinath, Charminar)
- Add alternative names in `alt` for terms with multiple names
- Add hints to make acting easier

## Verifying Your Changes

After adding words, the app will automatically reload. Check:
1. No TypeScript errors in the terminal
2. Category shows the new count of words
3. Words appear when you play the game

## Need Help?

If you see errors:
- Check for missing commas between entries
- Ensure all fields are properly formatted
- Make sure IDs are unique
- Verify category IDs match exactly

The app should automatically refresh once you save the files!
