// Simon Says Commands for the Simon Says game
// 150 total commands: 100 "Simon Says" commands + 50 trick commands
// Family-friendly, ages 5-12

type Tag = 'physical' | 'silly' | 'leftRight' | 'balance' | 'sequence';
type Difficulty = 'easy' | 'medium';

export interface SimonSaysCommand {
  id: number;
  command: string;
  isSimonSays: boolean; // true for "Simon Says..." commands, false for trick commands
  tags?: Tag[];
  difficulty?: Difficulty;
}

export const simonSaysCommands: SimonSaysCommand[] = [
  // Original 50 commands (IDs 1-50)
  // Regular Simon Says commands
  {
    id: 1,
    command: "Simon says touch your nose",
    isSimonSays: true
  },
  {
    id: 2,
    command: "Simon says pat your head",
    isSimonSays: true
  },
  {
    id: 3,
    command: "Simon says jump up and down",
    isSimonSays: true
  },
  {
    id: 4,
    command: "Simon says wiggle your fingers",
    isSimonSays: true
  },
  {
    id: 5,
    command: "Simon says spin around once",
    isSimonSays: true
  },
  {
    id: 6,
    command: "Simon says clap three times",
    isSimonSays: true
  },
  {
    id: 7,
    command: "Simon says make a funny face",
    isSimonSays: true
  },
  {
    id: 8,
    command: "Simon says touch your toes",
    isSimonSays: true
  },
  {
    id: 9,
    command: "Simon says flap your arms like a bird",
    isSimonSays: true
  },
  {
    id: 10,
    command: "Simon says wiggle like a worm",
    isSimonSays: true
  },
  {
    id: 11,
    command: "Simon says balance on one foot",
    isSimonSays: true
  },
  {
    id: 12,
    command: "Simon says pretend to be a robot",
    isSimonSays: true
  },
  {
    id: 13,
    command: "Simon says hop like a bunny",
    isSimonSays: true
  },
  {
    id: 14,
    command: "Simon says wave hello",
    isSimonSays: true
  },
  {
    id: 15,
    command: "Simon says shake your whole body",
    isSimonSays: true
  },
  {
    id: 16,
    command: "Simon says point to the ceiling",
    isSimonSays: true
  },
  {
    id: 17,
    command: "Simon says pretend to be a monkey",
    isSimonSays: true
  },
  {
    id: 18,
    command: "Simon says stomp your feet",
    isSimonSays: true
  },
  {
    id: 19,
    command: "Simon says rub your tummy",
    isSimonSays: true
  },
  {
    id: 20,
    command: "Simon says show your teeth like a tiger",
    isSimonSays: true
  },
  {
    id: 21,
    command: "Simon says give a thumbs up",
    isSimonSays: true
  },
  {
    id: 22,
    command: "Simon says march in place",
    isSimonSays: true
  },
  {
    id: 23,
    command: "Simon says make a circle with your arms",
    isSimonSays: true
  },
  {
    id: 24,
    command: "Simon says pretend to swim",
    isSimonSays: true
  },
  {
    id: 25,
    command: "Simon says pretend to read a book",
    isSimonSays: true
  },
  {
    id: 26,
    command: "Simon says count to three",
    isSimonSays: true
  },
  {
    id: 27,
    command: "Simon says sit down",
    isSimonSays: true
  },
  {
    id: 28,
    command: "Simon says stand up straight",
    isSimonSays: true
  },
  {
    id: 29,
    command: "Simon says act like you're eating an ice cream cone",
    isSimonSays: true
  },
  {
    id: 30,
    command: "Simon says scratch your ear",
    isSimonSays: true
  },

  // Trick commands (without "Simon Says")
  {
    id: 31,
    command: "Touch your shoulder",
    isSimonSays: false
  },
  {
    id: 32,
    command: "Stand on one leg",
    isSimonSays: false
  },
  {
    id: 33,
    command: "Cover your eyes",
    isSimonSays: false
  },
  {
    id: 34,
    command: "Tap your head",
    isSimonSays: false
  },
  {
    id: 35,
    command: "Jump three times",
    isSimonSays: false
  },
  {
    id: 36,
    command: "Stick out your tongue",
    isSimonSays: false
  },
  {
    id: 37,
    command: "Point to your nose",
    isSimonSays: false
  },
  {
    id: 38,
    command: "Spin around in a circle",
    isSimonSays: false
  },
  {
    id: 39,
    command: "Touch your knees",
    isSimonSays: false
  },
  {
    id: 40,
    command: "Wave goodbye",
    isSimonSays: false
  },
  {
    id: 41,
    command: "Pretend to play a piano",
    isSimonSays: false
  },
  {
    id: 42,
    command: "Snap your fingers",
    isSimonSays: false
  },
  {
    id: 43,
    command: "Make a silly noise",
    isSimonSays: false
  },
  {
    id: 44,
    command: "Take three steps forward",
    isSimonSays: false
  },
  {
    id: 45,
    command: "Raise your hand",
    isSimonSays: false
  },
  {
    id: 46,
    command: "Nod your head",
    isSimonSays: false
  },
  {
    id: 47,
    command: "Shake your head",
    isSimonSays: false
  },
  {
    id: 48,
    command: "Close your eyes",
    isSimonSays: false
  },
  {
    id: 49,
    command: "Turn around",
    isSimonSays: false
  },
  {
    id: 50,
    command: "Tilt your head to the side",
    isSimonSays: false
  },

  // Additional 100 commands (IDs 51-150)
  {
    id: 51,
    command: "Simon says swim like a fish",
    isSimonSays: true
  },
  {
    id: 52,
    command: "Simon says play air guitar",
    isSimonSays: true
  },
  {
    id: 53,
    command: "Simon says waddle like a penguin",
    isSimonSays: true
  },
  {
    id: 54,
    command: "Simon says quack like a duck",
    isSimonSays: true
  },
  {
    id: 55,
    command: "Simon says balance like a flamingo",
    isSimonSays: true
  },
  {
    id: 56,
    command: "Simon says pretend to shoot a basketball",
    isSimonSays: true
  },
  {
    id: 57,
    command: "Simon says hoot like an owl",
    isSimonSays: true
  },
  {
    id: 58,
    command: "Simon says walk like a crab",
    isSimonSays: true
  },
  {
    id: 59,
    command: "Simon says whisper your name",
    isSimonSays: true
  },
  {
    id: 60,
    command: "Simon says stand on your tiptoes",
    isSimonSays: true
  },
  {
    id: 61,
    command: "Simon says march in place, then salute",
    isSimonSays: true
  },
  {
    id: 62,
    command: "Simon says hop like a kangaroo",
    isSimonSays: true
  },
  {
    id: 63,
    command: "Simon says put your left hand on your right knee",
    isSimonSays: true
  },
  {
    id: 64,
    command: "Simon says touch your toes then reach for the sky",
    isSimonSays: true
  },
  {
    id: 65,
    command: "Simon says spin around twice",
    isSimonSays: true
  },
  {
    id: 66,
    command: "Simon says count backwards from five",
    isSimonSays: true
  },
  {
    id: 67,
    command: "Simon says trumpet like an elephant",
    isSimonSays: true
  },
  {
    id: 68,
    command: "Simon says wiggle your right fingers",
    isSimonSays: true
  },
  {
    id: 69,
    command: "Simon says make a surprised face",
    isSimonSays: true
  },
  {
    id: 70,
    command: "Simon says reach to the left, then to the right",
    isSimonSays: true
  },
  {
    id: 71,
    command: "Simon says jump three times",
    isSimonSays: true
  },
  {
    id: 72,
    command: "Simon says high-five the air, then sit down",
    isSimonSays: true
  },
  {
    id: 73,
    command: "Simon says bark like a dog",
    isSimonSays: true
  },
  {
    id: 74,
    command: "Simon says tap your left foot",
    isSimonSays: true
  },
  {
    id: 75,
    command: "Simon says walk in slow motion",
    isSimonSays: true
  },
  {
    id: 76,
    command: "Simon says jump then spin around",
    isSimonSays: true
  },
  {
    id: 77,
    command: "Simon says run in place for three seconds",
    isSimonSays: true
  },
  {
    id: 78,
    command: "Simon says pretend to climb a ladder",
    isSimonSays: true
  },
  {
    id: 79,
    command: "Simon says crawl like a turtle",
    isSimonSays: true
  },
  {
    id: 80,
    command: "Simon says pretend to yawn",
    isSimonSays: true
  },
  {
    id: 81,
    command: "Simon says buzz like a bee",
    isSimonSays: true
  },
  {
    id: 82,
    command: "Simon says pretend to sneeze",
    isSimonSays: true
  },
  {
    id: 83,
    command: "Simon says touch your right ear with your left hand",
    isSimonSays: true
  },
  {
    id: 84,
    command: "Simon says tiptoe in place",
    isSimonSays: true
  },
  {
    id: 85,
    command: "Simon says touch your nose then clap twice",
    isSimonSays: true
  },
  {
    id: 86,
    command: "Simon says do five jumping jacks",
    isSimonSays: true
  },
  {
    id: 87,
    command: "Simon says play air piano",
    isSimonSays: true
  },
  {
    id: 88,
    command: "Simon says wiggle your left fingers",
    isSimonSays: true
  },
  {
    id: 89,
    command: "Simon says do a tiny jump",
    isSimonSays: true
  },
  {
    id: 90,
    command: "Simon says raise your right hand high",
    isSimonSays: true
  },
  {
    id: 91,
    command: "Simon says spin around once",
    isSimonSays: true
  },
  {
    id: 92,
    command: "Simon says reach up high",
    isSimonSays: true
  },
  {
    id: 93,
    command: "Simon says stretch like a star",
    isSimonSays: true
  },
  {
    id: 94,
    command: "Simon says hiss like a snake",
    isSimonSays: true
  },
  {
    id: 95,
    command: "Simon says touch your left knee, then your right knee",
    isSimonSays: true
  },
  {
    id: 96,
    command: "Simon says march like a soldier",
    isSimonSays: true
  },
  {
    id: 97,
    command: "Simon says take one step forward then one step back",
    isSimonSays: true
  },
  {
    id: 98,
    command: "Simon says crawl like a baby",
    isSimonSays: true
  },
  {
    id: 99,
    command: "Simon says clap twice then stomp once",
    isSimonSays: true
  },
  {
    id: 100,
    command: "Simon says make a sleepy face",
    isSimonSays: true
  },
  {
    id: 101,
    command: "Simon says squat then stand",
    isSimonSays: true
  },
  {
    id: 102,
    command: "Simon says stomp like a dinosaur",
    isSimonSays: true
  },
  {
    id: 103,
    command: "Simon says jump once",
    isSimonSays: true
  },
  {
    id: 104,
    command: "Simon says neigh like a horse",
    isSimonSays: true
  },
  {
    id: 105,
    command: "Simon says spin once, then clap three times",
    isSimonSays: true
  },
  {
    id: 106,
    command: "Simon says raise your left hand high",
    isSimonSays: true
  },
  {
    id: 107,
    command: "Simon says jump twice, then freeze",
    isSimonSays: true
  },
  {
    id: 108,
    command: "Simon says swing an imaginary bat",
    isSimonSays: true
  },
  {
    id: 109,
    command: "Simon says take two steps back",
    isSimonSays: true
  },
  {
    id: 110,
    command: "Simon says do a shoulder roll",
    isSimonSays: true
  },
  {
    id: 111,
    command: "Simon says tap your right foot",
    isSimonSays: true
  },
  {
    id: 112,
    command: "Simon says put your right hand on your left knee",
    isSimonSays: true
  },
  {
    id: 113,
    command: "Simon says roar like a lion",
    isSimonSays: true
  },
  {
    id: 114,
    command: "Simon says take three tiny steps forward",
    isSimonSays: true
  },
  {
    id: 115,
    command: "Simon says snap then clap",
    isSimonSays: true
  },
  {
    id: 116,
    command: "Simon says say the alphabet slowly",
    isSimonSays: true
  },
  {
    id: 117,
    command: "Simon says touch the floor",
    isSimonSays: true
  },
  {
    id: 118,
    command: "Simon says stand as tall as you can",
    isSimonSays: true
  },
  {
    id: 119,
    command: "Simon says tap your left foot then your right foot",
    isSimonSays: true
  },
  {
    id: 120,
    command: "Simon says pretend to open a door, then wave hello",
    isSimonSays: true
  },
  {
    id: 121,
    command: "Simon says touch your ankles",
    isSimonSays: true
  },
  {
    id: 122,
    command: "Simon says meow like a cat",
    isSimonSays: true
  },
  {
    id: 123,
    command: "Simon says pretend to row a boat",
    isSimonSays: true
  },
  {
    id: 124,
    command: "Simon says pat your head and rub your tummy",
    isSimonSays: true
  },
  {
    id: 125,
    command: "Simon says dribble an imaginary ball",
    isSimonSays: true
  },
  {
    id: 126,
    command: "Clap twice",
    isSimonSays: false
  },
  {
    id: 127,
    command: "Touch your left ear",
    isSimonSays: false
  },
  {
    id: 128,
    command: "Whisper your name",
    isSimonSays: false
  },
  {
    id: 129,
    command: "Tap your left foot",
    isSimonSays: false
  },
  {
    id: 130,
    command: "Balance on one foot",
    isSimonSays: false
  },
  {
    id: 131,
    command: "Take one step forward",
    isSimonSays: false
  },
  {
    id: 132,
    command: "Reach up high",
    isSimonSays: false
  },
  {
    id: 133,
    command: "Make a silly face",
    isSimonSays: false
  },
  {
    id: 134,
    command: "Rub your tummy",
    isSimonSays: false
  },
  {
    id: 135,
    command: "Touch your elbows",
    isSimonSays: false
  },
  {
    id: 136,
    command: "Wave your hands",
    isSimonSays: false
  },
  {
    id: 137,
    command: "Stomp your feet",
    isSimonSays: false
  },
  {
    id: 138,
    command: "Take one step back",
    isSimonSays: false
  },
  {
    id: 139,
    command: "Spin around",
    isSimonSays: false
  },
  {
    id: 140,
    command: "Sit down",
    isSimonSays: false
  },
  {
    id: 141,
    command: "Pretend to swim",
    isSimonSays: false
  },
  {
    id: 142,
    command: "Raise your left hand",
    isSimonSays: false
  },
  {
    id: 143,
    command: "Blink three times",
    isSimonSays: false
  },
  {
    id: 144,
    command: "Touch your right ear",
    isSimonSays: false
  },
  {
    id: 145,
    command: "Pat your head",
    isSimonSays: false
  },
  {
    id: 146,
    command: "Touch your knees",
    isSimonSays: false
  },
  {
    id: 147,
    command: "Freeze like a statue",
    isSimonSays: false
  },
  {
    id: 148,
    command: "Pretend to fly",
    isSimonSays: false
  },
  {
    id: 149,
    command: "Touch your toes",
    isSimonSays: false
  },
  {
    id: 150,
    command: "Snap your fingers",
    isSimonSays: false
  }
];

// Helper function to get random shuffled commands
export const getRandomSimonSaysCommands = (): SimonSaysCommand[] => {
  // Fisher-Yates shuffle algorithm
  const shuffled = [...simonSaysCommands];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Get commands by type
export const getSimonSaysCommandsByType = (isSimonSays: boolean): SimonSaysCommand[] => {
  return simonSaysCommands.filter(cmd => cmd.isSimonSays === isSimonSays);
};

// Get count of commands
export const getCommandCounts = () => {
  const simonSaysCount = simonSaysCommands.filter(cmd => cmd.isSimonSays).length;
  const trickCount = simonSaysCommands.filter(cmd => !cmd.isSimonSays).length;

  return {
    total: simonSaysCommands.length,
    simonSays: simonSaysCount,
    tricks: trickCount
  };
};
