import { SeasonType } from './seasonalSystem';

export interface StoryStarter {
  id: number;
  openingLine: string;
  category?: string;
  season?: SeasonType;
  ageGroup?: 'younger' | 'older' | 'all';
}

export interface StoryElement {
  category: 'characters' | 'settings' | 'problems' | 'objects';
  younger: string[];
  older: string[];
}

// Story elements to help when families get stuck
export const storyElements: StoryElement[] = [
  {
    category: 'characters',
    younger: [
      'friendly dragon', 'talking cat', 'magic fairy', 'wise owl', 'dancing bear',
      'singing bird', 'helpful robot', 'funny monkey', 'gentle giant', 'tiny mouse'
    ],
    older: [
      'mysterious detective', 'time traveler', 'alien visitor', 'secret agent',
      'brilliant inventor', 'brave explorer', 'skilled artist', 'clever scientist'
    ]
  },
  {
    category: 'settings',
    younger: [
      'enchanted forest', 'candy castle', 'rainbow bridge', 'magical garden',
      'cozy treehouse', 'floating cloud city', 'underwater palace', 'toy store'
    ],
    older: [
      'abandoned spaceship', 'hidden laboratory', 'parallel universe', 'ancient library',
      'mysterious island', 'secret underground city', 'floating space station'
    ]
  },
  {
    category: 'problems',
    younger: [
      'lost their favorite toy', 'can\'t find their way home', 'need to help a friend',
      'forgot something important', 'have to solve a puzzle'
    ],
    older: [
      'discovered a secret', 'must solve a mystery', 'need to save their town',
      'found a map to treasure', 'received a mysterious message'
    ]
  },
  {
    category: 'objects',
    younger: [
      'magic wand', 'special key', 'talking book', 'flying carpet', 'golden compass',
      'musical box', 'glowing crystal', 'magic paintbrush'
    ],
    older: [
      'ancient artifact', 'encrypted device', 'mysterious portal', 'time machine',
      'invisibility cloak', 'telepathic headset', 'dimension scanner'
    ]
  }
];

// Steering prompts to help when families are stuck
export const steeringPrompts: string[] = [
  "What is this character's biggest problem?",
  "What are their favorite things to do?",
  "Who is their best friend?",
  "What makes them happy or sad?",
  "What would happen if they found a magic object?",
  "How do they usually solve problems?",
  "What's their greatest fear?",
  "What's their secret talent?",
  "Where do they feel most safe?",
  "What do they dream about?",
  "What would make them laugh?",
  "Who do they miss the most?",
  "What's the bravest thing they've ever done?",
  "What do they wish they could change?",
  "What makes them feel proud?"
];

// Turn guidance prompts (non-intrusive suggestions)
export const turnGuidance: string[] = [
  "💡 Tip: Take turns adding to the story!",
  "🎭 Try: Let each person add one sentence",
  "⭐ Idea: Build on what the last person said",
  "🌟 Suggestion: Ask 'What happens next?'",
  "💫 Fun idea: Let the youngest go first!",
  "🎪 Try this: Each person adds a new character",
  "🎨 Creative tip: Describe what you see, hear, or smell"
];

// Evergreen story starters (work year-round)
export const evergreenStoryStarters: StoryStarter[] = [
  {
    id: 1,
    openingLine: "The old library book whispered a secret when Maya opened it for the first time...",
    ageGroup: 'all'
  },
  {
    id: 2,
    openingLine: "Every night at exactly 9 PM, the streetlight outside Alex's window flickered three times, and tonight was different...",
    ageGroup: 'older'
  },
  {
    id: 3,
    openingLine: "The teddy bear in the toy store window seemed to wave at Emma every time she walked by...",
    ageGroup: 'younger'
  },
  {
    id: 4,
    openingLine: "When the doorbell rang, nobody expected to find a package addressed to someone who had never lived there...",
    ageGroup: 'all'
  },
  {
    id: 5,
    openingLine: "The elevator in the apartment building had a button for a floor that didn't exist...",
    ageGroup: 'older'
  },
  {
    id: 6,
    openingLine: "Every morning, the school janitor found strange, colorful footprints that disappeared by lunchtime...",
    ageGroup: 'all'
  },
  {
    id: 7,
    openingLine: "The crayon box had one crayon that could make whatever you drew come to life...",
    ageGroup: 'younger'
  },
  {
    id: 8,
    openingLine: "The map that fell out of the old atlas showed places that didn't exist on any other map...",
    ageGroup: 'older'
  },
  {
    id: 9,
    openingLine: "When Sarah found the lost key in her grandmother's garden, it opened a door she'd never noticed before...",
    ageGroup: 'all'
  },
  {
    id: 10,
    openingLine: "The music box played a different song every time, and today's song made everyone who heard it smile...",
    ageGroup: 'younger'
  },
  {
    id: 11,
    openingLine: "The vending machine at school started giving out items that weren't on any of the buttons...",
    ageGroup: 'all'
  },
  {
    id: 12,
    openingLine: "Every time it rained, Max found mysterious messages written in the water on his bedroom window...",
    ageGroup: 'older'
  },
  {
    id: 13,
    openingLine: "The friendly dog at the park seemed to understand exactly what Lucy was thinking...",
    ageGroup: 'younger'
  },
  {
    id: 14,
    openingLine: "The photograph in the antique store showed a place that looked exactly like their neighborhood, but different...",
    ageGroup: 'all'
  },
  {
    id: 15,
    openingLine: "When the power went out, the flashlight beam revealed things in the house that were never there before...",
    ageGroup: 'older'
  },
  {
    id: 16,
    openingLine: "The sock that always disappeared from the laundry had been on a secret mission...",
    ageGroup: 'younger'
  },
  {
    id: 17,
    openingLine: "Every Tuesday, the mailbox received letters addressed to people from the future...",
    ageGroup: 'older'
  },
  {
    id: 18,
    openingLine: "The playground swing that nobody used started moving by itself when...",
    ageGroup: 'all'
  },
  {
    id: 19,
    openingLine: "The cat next door could speak, but only said one word each day...",
    ageGroup: 'younger'
  },
  {
    id: 20,
    openingLine: "The calculator in math class started giving answers to questions nobody asked...",
    ageGroup: 'older'
  },
  {
    id: 21,
    openingLine: "Every morning, Jake found a new drawing on his bedroom wall that he didn't remember making...",
    ageGroup: 'all'
  },
  {
    id: 22,
    openingLine: "The tree in the backyard grew something different than leaves this year...",
    ageGroup: 'younger'
  },
  {
    id: 23,
    openingLine: "The mysterious note found in the library book was written in colorful crayon...",
    ageGroup: 'all'
  },
  {
    id: 24,
    openingLine: "When Emma touched the old piano, it played a song that made everyone feel...",
    ageGroup: 'all'
  },
  {
    id: 25,
    openingLine: "The magical backpack never got heavier, no matter what you put inside it...",
    ageGroup: 'younger'
  },
  {
    id: 26,
    openingLine: "The old camera at the thrift store took pictures of things that hadn't happened yet...",
    ageGroup: 'older'
  },
  {
    id: 27,
    openingLine: "Every night, the stars in the sky seemed to rearrange themselves into messages...",
    ageGroup: 'all'
  },
  {
    id: 28,
    openingLine: "The stuffed elephant in Lucy's room came to life every time she felt scared...",
    ageGroup: 'younger'
  },
  {
    id: 29,
    openingLine: "The mysterious footprints in the garden led to a place that shouldn't exist...",
    ageGroup: 'older'
  },
  {
    id: 30,
    openingLine: "When the doorknob turned purple, it meant the house was ready for an adventure...",
    ageGroup: 'all'
  },
  {
    id: 31,
    openingLine: "The paper airplane Ben threw never landed - it just kept flying higher and higher...",
    ageGroup: 'younger'
  },
  {
    id: 32,
    openingLine: "The underground tunnel behind the school led to a completely different world...",
    ageGroup: 'older'
  },
  {
    id: 33,
    openingLine: "Every time it thundered, the family dog could suddenly speak perfect English...",
    ageGroup: 'all'
  },
  {
    id: 34,
    openingLine: "The magic marker drew pictures that came to life as soon as the ink dried...",
    ageGroup: 'younger'
  },
  {
    id: 35,
    openingLine: "The missing person poster on the bulletin board was for someone who looked exactly like...",
    ageGroup: 'older'
  },
  {
    id: 36,
    openingLine: "When Maya found the bottle on the beach, the message inside was written in her own handwriting...",
    ageGroup: 'all'
  },
  {
    id: 37,
    openingLine: "The rocking chair in the attic only rocked when someone was telling the truth...",
    ageGroup: 'younger'
  },
  {
    id: 38,
    openingLine: "The school's lost and found box contained items from students who graduated fifty years ago...",
    ageGroup: 'older'
  },
  {
    id: 39,
    openingLine: "Every full moon, the garden gnome moved to a different spot in the yard...",
    ageGroup: 'all'
  },
  {
    id: 40,
    openingLine: "The imaginary friend that Alex had when they were little came back to ask for help...",
    ageGroup: 'younger'
  },
  {
    id: 41,
    openingLine: "The time capsule they buried last year was already dug up when they went to check on it...",
    ageGroup: 'older'
  },
  {
    id: 42,
    openingLine: "The rainbow they saw this morning was still there at sunset, and it was growing brighter...",
    ageGroup: 'all'
  },
  {
    id: 43,
    openingLine: "The magic wand was really just a stick, but it worked when you believed hard enough...",
    ageGroup: 'younger'
  },
  {
    id: 44,
    openingLine: "The mysterious package delivered to the wrong address contained something impossible...",
    ageGroup: 'older'
  },
  {
    id: 45,
    openingLine: "When the family moved into the new house, they discovered a room that wasn't on the blueprint...",
    ageGroup: 'all'
  },
  {
    id: 46,
    openingLine: "The toy robot could only say one thing, but it was exactly what everyone needed to hear...",
    ageGroup: 'younger'
  },
  {
    id: 47,
    openingLine: "The vintage comic book in the basement told the story of their own family...",
    ageGroup: 'older'
  },
  {
    id: 48,
    openingLine: "Every time someone made a wish in the fountain, something unexpected happened instead...",
    ageGroup: 'all'
  },
  {
    id: 49,
    openingLine: "The friendly monster under the bed was actually there to protect them from...",
    ageGroup: 'younger'
  },
  {
    id: 50,
    openingLine: "The diary found in the old desk was still being written in, but no one knew by whom...",
    ageGroup: 'older'
  },
  {
    id: 51,
    openingLine: "When the clock tower chimed thirteen times, everyone in town knew it meant...",
    ageGroup: 'all'
  },
  {
    id: 52,
    openingLine: "The talking doll could only tell the truth, which sometimes got everyone into trouble...",
    ageGroup: 'younger'
  },
  {
    id: 53,
    openingLine: "The subway tunnel that didn't appear on any map led to a station no one had ever seen...",
    ageGroup: 'older'
  },
  {
    id: 54,
    openingLine: "Every time someone played the old piano, it transported them to a different time period...",
    ageGroup: 'all'
  },
  {
    id: 55,
    openingLine: "The magical seeds that grandmother gave them grew into something no one expected...",
    ageGroup: 'younger'
  },
  {
    id: 56,
    openingLine: "The abandoned laboratory in the woods was not as abandoned as everyone thought...",
    ageGroup: 'older'
  },
  {
    id: 57,
    openingLine: "When the family cat started leaving them daily notes, they realized their pet was...",
    ageGroup: 'all'
  },
  {
    id: 58,
    openingLine: "The friendship bracelet glowed whenever someone nearby was feeling sad...",
    ageGroup: 'younger'
  },
  {
    id: 59,
    openingLine: "The toy walkie-talkie started receiving messages from friendly space creatures...",
    ageGroup: 'all'
  },
  {
    id: 60,
    openingLine: "Every night at 3 AM, the kitchen appliances held secret meetings about...",
    ageGroup: 'all'
  },
  {
    id: 61,
    openingLine: "The magic carpet was actually just a regular rug, until someone sat on it and...",
    ageGroup: 'younger'
  },
  {
    id: 62,
    openingLine: "The message written in the condensation on the bathroom mirror appeared every morning...",
    ageGroup: 'older'
  },
  {
    id: 63,
    openingLine: "When they adopted the rescue dog, they didn't know it came with supernatural abilities...",
    ageGroup: 'all'
  },
  {
    id: 64,
    openingLine: "The crayon drawing on the refrigerator started changing by itself when no one was looking...",
    ageGroup: 'younger'
  },
  {
    id: 65,
    openingLine: "The escape room at the mall was too realistic because it was actually...",
    ageGroup: 'older'
  },
  {
    id: 66,
    openingLine: "Every time the doorbell rang at midnight, it was someone from a different century...",
    ageGroup: 'all'
  },
  {
    id: 67,
    openingLine: "The homework assignment was to write about a real adventure, but theirs actually happened...",
    ageGroup: 'younger'
  },
  {
    id: 68,
    openingLine: "The magic eight-ball toy started giving very specific and helpful answers...",
    ageGroup: 'all'
  },
  {
    id: 69,
    openingLine: "When the old music box started playing by itself, it meant someone needed their help...",
    ageGroup: 'all'
  },
  {
    id: 70,
    openingLine: "The invisible friend that only Emma could see turned out to be...",
    ageGroup: 'younger'
  },
  {
    id: 71,
    openingLine: "The geocaching coordinates led them to something much more important than treasure...",
    ageGroup: 'older'
  },
  {
    id: 72,
    openingLine: "Every time they played their favorite song, something magical happened in the room...",
    ageGroup: 'all'
  }
];

// Seasonal story starters
export const seasonalStoryStarters: StoryStarter[] = [
  // New Year (January)
  {
    id: 101,
    openingLine: "When the clock struck midnight, Maya discovered she had a special power for one whole year...",
    season: 'newYear',
    ageGroup: 'all'
  },
  {
    id: 102,
    openingLine: "The first day of the new year, everything in town was backwards and upside down...",
    season: 'newYear',
    ageGroup: 'all'
  },
  {
    id: 103,
    openingLine: "Alex decided to teach their pet hamster one new trick every month, starting with...",
    season: 'newYear',
    ageGroup: 'younger'
  },

  // Winter (February, December)
  {
    id: 201,
    openingLine: "The snowflake was different from all the others because it could...",
    season: 'winter',
    ageGroup: 'younger'
  },
  {
    id: 202,
    openingLine: "When the pond froze over, the family discovered something amazing underneath the ice...",
    season: 'winter',
    ageGroup: 'all'
  },
  {
    id: 203,
    openingLine: "The mittens in the lost and found box had special powers that only worked when...",
    season: 'winter',
    ageGroup: 'all'
  },
  {
    id: 204,
    openingLine: "Every icicle that formed on their house told a different story about winter adventures...",
    season: 'winter',
    ageGroup: 'older'
  },

  // Spring (March, April, May)
  {
    id: 301,
    openingLine: "The first flower to bloom in the garden whispered a secret to Emma...",
    season: 'spring',
    ageGroup: 'younger'
  },
  {
    id: 302,
    openingLine: "When the snow melted, it revealed a mysterious door in the backyard that led to...",
    season: 'spring',
    ageGroup: 'all'
  },
  {
    id: 303,
    openingLine: "The baby birds in the nest could talk, but only to children who...",
    season: 'spring',
    ageGroup: 'all'
  },
  {
    id: 304,
    openingLine: "The rainbow after the spring storm was different this time - it had an extra color that...",
    season: 'spring',
    ageGroup: 'older'
  },

  // Summer Start (June)
  {
    id: 401,
    openingLine: "On the first day of summer vacation, the playground equipment came to life and...",
    season: 'summerStart',
    ageGroup: 'younger'
  },
  {
    id: 402,
    openingLine: "The library book that had to be returned by the end of school contained a map to...",
    season: 'summerStart',
    ageGroup: 'older'
  },
  {
    id: 403,
    openingLine: "When school ended, the pencils and erasers decided to go on their own adventure...",
    season: 'summerStart',
    ageGroup: 'all'
  },

  // Summer (July, August)
  {
    id: 501,
    openingLine: "The ice cream truck played a melody that could transport kids to...",
    season: 'summer',
    ageGroup: 'all'
  },
  {
    id: 502,
    openingLine: "Every time lightning bugs lit up in the backyard, something magical happened...",
    season: 'summer',
    ageGroup: 'younger'
  },
  {
    id: 503,
    openingLine: "The old swimming pool had a secret: when you swam to the very bottom, you could...",
    season: 'summer',
    ageGroup: 'older'
  },
  {
    id: 504,
    openingLine: "The beach sandcastle they built yesterday was still there today, but now it was...",
    season: 'summer',
    ageGroup: 'all'
  },

  // School Start (September)
  {
    id: 601,
    openingLine: "The new student in class had a secret that only the classroom pet knew about...",
    season: 'schoolStart',
    ageGroup: 'all'
  },
  {
    id: 602,
    openingLine: "Every time someone opened their locker, instead of books, they found...",
    season: 'schoolStart',
    ageGroup: 'older'
  },
  {
    id: 603,
    openingLine: "The school's mascot costume wasn't just a costume—it was actually...",
    season: 'schoolStart',
    ageGroup: 'all'
  },

  // Fall (October)
  {
    id: 701,
    openingLine: "The scarecrow in the cornfield wasn't very good at scaring crows, but it was excellent at...",
    season: 'fall',
    ageGroup: 'younger'
  },
  {
    id: 702,
    openingLine: "When the leaves changed colors, they also changed into something nobody expected...",
    season: 'fall',
    ageGroup: 'all'
  },
  {
    id: 703,
    openingLine: "The pumpkin patch had one special pumpkin that could grant wishes, but only if...",
    season: 'fall',
    ageGroup: 'all'
  },

  // Halloween (November)
  {
    id: 801,
    openingLine: "The friendly ghost living in the attic was trying to learn how to...",
    season: 'halloween',
    ageGroup: 'younger'
  },
  {
    id: 802,
    openingLine: "The Halloween costume box in the basement had outfits that actually gave you the powers of...",
    season: 'halloween',
    ageGroup: 'all'
  },
  {
    id: 803,
    openingLine: "Every house on Maple Street was giving out something different than candy this Halloween...",
    season: 'halloween',
    ageGroup: 'older'
  }
];

// Helper functions
export const getStoriesBySeason = (season: SeasonType): StoryStarter[] => {
  return seasonalStoryStarters.filter(story => story.season === season);
};

export const getStoriesByAgeGroup = (ageGroup: 'younger' | 'older' | 'all'): StoryStarter[] => {
  return [...evergreenStoryStarters, ...seasonalStoryStarters].filter(
    story => story.ageGroup === ageGroup || story.ageGroup === 'all'
  );
};

export const getAllStories = (): StoryStarter[] => {
  return [...evergreenStoryStarters, ...seasonalStoryStarters];
};

export const getRandomSteeringPrompt = (): string => {
  return steeringPrompts[Math.floor(Math.random() * steeringPrompts.length)];
};

export const getRandomTurnGuidance = (): string => {
  return turnGuidance[Math.floor(Math.random() * turnGuidance.length)];
};