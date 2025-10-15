Product Spec — “Guess the Movie”
A Bollywood Dialogues Challenge (Team or Solo)
🎯 Goal

Create a high-energy, 30-second challenge game where players guess the movie name from famous Bollywood dialogues.
Unlike Charades (which is acted out), this mode is about recognition + recall — fast, funny, nostalgic.

This mode should:

Bring instant laughter and memory triggers (“OMG that’s from Hera Pheri!”)

Work in both team and solo setups

Be easy to play anywhere (restaurant, living room, road trip)

Drive repeat play via randomization and variety (100+ dialogues)

🧩 Game Overview
Feature	Description
Game Name	Guess the Movie
Tagline	“Bollywood’s most iconic lines — can you guess the movie before the timer runs out?”
Category	Party / Trivia / Nostalgia
Player Modes	👥 Team Play (2+ people) / 👤 Solo Mode
Play Duration	30 seconds per round
Deck Source	Bollywood Iconic Dialogues dataset (guess-dialogue.json)
🕹️ Core Gameplay Loop
1️⃣ Setup

Player chooses Team Mode or Solo Mode

Option to select difficulty:

Casual (most famous lines)

Filmy Expert (deep cuts)

Mixed Bag

2️⃣ Play Round

Each round = 30 seconds timer ⏱️

App displays a dialogue (large text, high contrast, Hindi transliteration optional).

Team guesses the movie aloud.

Tap Reveal or auto-reveal after 5s.

Show:

🎬 Movie name

👤 Actor / Scene hint (“SRK train scene with Kajol”)

💡 “Did you know?” fact (optional, phase 2)

3️⃣ Scorekeeping

Team Mode:

1 point for each correct guess before reveal

Bonus +1 if guessed under 3 seconds

Lose -1 for skipping

Solo Mode:

30s rapid fire (auto-advance after reveal)

Leaderboard (local for now)

🧠 Data Model (guess-dialogue.json)
{
  "id": "guess-dialogue",
  "name": "Guess the Movie",
  "description": "Can you guess which movie gave us these legendary lines?",
  "cards": [
    {
      "id": "gd001",
      "dialogue": "Mogambo khush hua!",
      "answer": "Mr. India",
      "hint": "Amrish Puri as the ultimate villain",
      "difficulty": "casual"
    },
    {
      "id": "gd002",
      "dialogue": "Jaa Simran, jee le apni zindagi.",
      "answer": "Dilwale Dulhania Le Jayenge",
      "hint": "Train scene with SRK & Kajol",
      "difficulty": "casual"
    },
    {
      "id": "gd003",
      "dialogue": "Tareekh pe tareekh!",
      "answer": "Damini",
      "hint": "Sunny Deol courtroom rant",
      "difficulty": "expert"
    }
  ]
}

🧭 UI & UX Flow
Screen	Functionality
Game Intro	Title, short explainer (“30 seconds, guess the movie!”), Start button
Gameplay Screen	Large dialogue text center screen, Timer bar top-right, “Reveal” button bottom-center, “Skip” left, “Next” right
Reveal State	Movie name appears with mini trivia and optional poster thumbnail
Score Screen (Team)	Points summary, “Play Again” button
Solo Leaderboard (optional)	Display recent high scores or streaks

Design Feel:

Cinematic dark background 🎞️ (deep maroon / gold)

Timer ring animation for pressure

Subtle Bollywood audio sting on correct guess

⚙️ Technical Implementation
Module	Description
Data	guess-dialogue.json (stored locally or Supabase table)
Game State	currentIndex, score, timeLeft, teamMode
Timer	30-second countdown; resets per round
Reveal Logic	Manual or auto-after 5s
Randomizer	Shuffle dialogues per session (no repeats until deck ends)
Analytics	Track accuracy %, fastest correct time, category played
🌟 Future Upgrades
Phase	Feature	Description
2	Audio Mode	App plays dialogue line in voice actor style
2	Poster Reveal	Movie poster animation after reveal
3	Leaderboard	Cross-device high scores via Supabase
3	Multi-Deck Mode	Add “Guess the Ad” and “Guess the Song Lyric” modes
4	Daily Challenge	One dialogue per day (push notification)
❤️ Emotional Target

“Oh my god, I know this one!” → dopamine rush

“I can see the scene!” → nostalgia

“How did you forget that?” → laughter + playful teasing

Ideal social context: group of 3–6 people, after dinner or while waiting.