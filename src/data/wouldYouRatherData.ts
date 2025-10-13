import { SeasonType } from './seasonalSystem';

export interface WouldYouRatherQuestion {
  id: number;
  option1: string;
  option2: string;
  category?: string;
  season?: SeasonType;
}

// Evergreen Would You Rather questions (work year-round)
export const evergreenQuestions: WouldYouRatherQuestion[] = [
  {
    id: 1,
    option1: "Have the ability to fly",
    option2: "Have the ability to become invisible"
  },
  {
    id: 2,
    option1: "Always have to sing instead of speak",
    option2: "Always have to dance everywhere you go"
  },
  {
    id: 3,
    option1: "Have a pet dragon",
    option2: "Have a pet unicorn"
  },
  {
    id: 4,
    option1: "Be able to talk to animals",
    option2: "Be able to speak every language in the world"
  },
  {
    id: 5,
    option1: "Have super strength",
    option2: "Have super speed"
  },
  {
    id: 6,
    option1: "Live in a tree house",
    option2: "Live in an underground home"
  },
  {
    id: 7,
    option1: "Always have messy hair",
    option2: "Always have food stuck in your teeth"
  },
  {
    id: 8,
    option1: "Be able to breathe underwater",
    option2: "Be able to climb any wall like a spider"
  },
  {
    id: 9,
    option1: "Have a magic carpet that flies",
    option2: "Have boots that let you walk on clouds"
  },
  {
    id: 10,
    option1: "Always be 10 minutes late",
    option2: "Always be 20 minutes early"
  },
  {
    id: 11,
    option1: "Have elephant ears",
    option2: "Have a monkey tail"
  },
  {
    id: 12,
    option1: "Be the smartest person in the world",
    option2: "Be the funniest person in the world"
  },
  {
    id: 13,
    option1: "Have a house made of candy",
    option2: "Have a house that can fly"
  },
  {
    id: 14,
    option1: "Only be able to whisper",
    option2: "Only be able to shout"
  },
  {
    id: 15,
    option1: "Have rainbow colored hair",
    option2: "Have hair that changes color with your mood"
  },
  {
    id: 16,
    option1: "Live where it's always sunny",
    option2: "Live where it rains gumdrops"
  },
  {
    id: 17,
    option1: "Have a robot best friend",
    option2: "Have a dinosaur best friend"
  },
  {
    id: 18,
    option1: "Be able to freeze time",
    option2: "Be able to travel back in time"
  },
  {
    id: 19,
    option1: "Have wings but can't fly",
    option2: "Be able to fly but have no wings"
  },
  {
    id: 20,
    option1: "Always smell like flowers",
    option2: "Always smell like fresh cookies"
  },
  {
    id: 21,
    option1: "Have teeth made of gold",
    option2: "Have fingernails that grow super fast"
  },
  {
    id: 22,
    option1: "Be able to read minds",
    option2: "Be able to see the future"
  },
  {
    id: 23,
    option1: "Live in a world made of LEGO",
    option2: "Live in a world made of Play-Doh"
  },
  {
    id: 24,
    option1: "Have a magic wand that only works once",
    option2: "Have three wishes from a genie"
  },
  {
    id: 25,
    option1: "Be the size of an ant",
    option2: "Be the size of an elephant"
  },
  {
    id: 26,
    option1: "Have a bed that's a trampoline",
    option2: "Have a bed that's a waterbed"
  },
  {
    id: 27,
    option1: "Never have to brush your teeth again",
    option2: "Never have to take a bath again"
  },
  {
    id: 28,
    option1: "Have a car that can drive underwater",
    option2: "Have a bicycle that can fly"
  },
  {
    id: 29,
    option1: "Be able to talk to plants",
    option2: "Be able to make plants grow instantly"
  },
  {
    id: 30,
    option1: "Have a remote control for your life",
    option2: "Have a save button for your life"
  },
  {
    id: 31,
    option1: "Only eat pizza for the rest of your life",
    option2: "Only eat ice cream for the rest of your life"
  },
  {
    id: 32,
    option1: "Have shoes that never untie",
    option2: "Have socks that never get dirty"
  },
  {
    id: 33,
    option1: "Be able to turn into any animal",
    option2: "Be able to turn into any object"
  },
  {
    id: 34,
    option1: "Have a backyard that's a jungle",
    option2: "Have a backyard that's a desert"
  },
  {
    id: 35,
    option1: "Always have to hop on one foot",
    option2: "Always have to walk backwards"
  },
  {
    id: 36,
    option1: "Have a pet that's invisible",
    option2: "Have a pet that can talk"
  },
  {
    id: 37,
    option1: "Live in a castle in the clouds",
    option2: "Live in a submarine under the ocean"
  },
  {
    id: 38,
    option1: "Have x-ray vision",
    option2: "Have super hearing"
  },
  {
    id: 39,
    option1: "Always have hiccups",
    option2: "Always have to sneeze but can't"
  },
  {
    id: 40,
    option1: "Have a stuffed animal that comes to life",
    option2: "Have toys that clean themselves up"
  },
  {
    id: 41,
    option1: "Be able to eat anything without getting full",
    option2: "Never have to eat again"
  },
  {
    id: 42,
    option1: "Have a pool filled with jello",
    option2: "Have a pool filled with marshmallows"
  },
  {
    id: 43,
    option1: "Be famous for something silly",
    option2: "Be unknown but super talented"
  },
  {
    id: 44,
    option1: "Have a magic mirror that tells jokes",
    option2: "Have a magic lamp that grants tiny wishes"
  },
  {
    id: 45,
    option1: "Live where it never gets dark",
    option2: "Live where it never gets light"
  },
  {
    id: 46,
    option1: "Have a closet full of costumes",
    option2: "Have a room full of art supplies"
  },
  {
    id: 47,
    option1: "Be able to make duplicate copies of yourself",
    option2: "Be able to make yourself disappear"
  },
  {
    id: 48,
    option1: "Have a house that moves wherever you want",
    option2: "Have a house that changes into anything"
  },
  {
    id: 49,
    option1: "Always know what time it is without looking",
    option2: "Always know what day it is without asking"
  },
  {
    id: 50,
    option1: "Have a computer that does your homework",
    option2: "Have a robot that does your chores"
  },
  {
    id: 51,
    option1: "Be able to jump as high as a building",
    option2: "Be able to run as fast as a car"
  },
  {
    id: 52,
    option1: "Have a magical paintbrush",
    option2: "Have a magical pencil"
  },
  {
    id: 53,
    option1: "Live in a world without gravity",
    option2: "Live in a world where everything floats"
  },
  {
    id: 54,
    option1: "Have a voice that sounds like music",
    option2: "Have a laugh that makes everyone happy"
  },
  {
    id: 55,
    option1: "Be able to control weather",
    option2: "Be able to control time"
  },
  {
    id: 56,
    option1: "Have a magical doorway to anywhere",
    option2: "Have a magical window to see anywhere"
  },
  {
    id: 57,
    option1: "Always have perfect hair",
    option2: "Always have perfect teeth"
  },
  {
    id: 58,
    option1: "Be able to make things bigger",
    option2: "Be able to make things smaller"
  },
  {
    id: 59,
    option1: "Have a cape that lets you glide",
    option2: "Have shoes that let you bounce super high"
  },
  {
    id: 60,
    option1: "Live in a house made of books",
    option2: "Live in a house made of games"
  },
  {
    id: 61,
    option1: "Have a magical garden that grows toys",
    option2: "Have a magical tree that grows clothes"
  },
  {
    id: 62,
    option1: "Be able to speak with your hands",
    option2: "Be able to write with your feet"
  },
  {
    id: 63,
    option1: "Have a bed that takes you to dreamland",
    option2: "Have a pillow that gives you good dreams"
  },
  {
    id: 64,
    option1: "Always find lost things instantly",
    option2: "Never lose anything ever again"
  },
  {
    id: 65,
    option1: "Have a smartphone that answers any question",
    option2: "Have a camera that takes pictures of the future"
  },
  {
    id: 66,
    option1: "Be friends with a friendly alien",
    option2: "Be friends with a time traveler"
  },
  {
    id: 67,
    option1: "Have unlimited art supplies",
    option2: "Have unlimited books to read"
  },
  {
    id: 68,
    option1: "Be able to breathe fire (safely)",
    option2: "Be able to shoot water from your hands"
  },
  {
    id: 69,
    option1: "Have a magic hat with surprises inside",
    option2: "Have magic pockets that hold anything"
  },
  {
    id: 70,
    option1: "Live in a treehouse village",
    option2: "Live in an underwater city"
  },
  {
    id: 71,
    option1: "Have a pet that changes colors",
    option2: "Have a pet that changes sizes"
  },
  {
    id: 72,
    option1: "Be able to walk through walls",
    option2: "Be able to stick to any surface"
  },
  {
    id: 73,
    option1: "Have a magic spoon that makes food taste amazing",
    option2: "Have a magic cup that's always filled with your favorite drink"
  },
  {
    id: 74,
    option1: "Always have perfect weather wherever you go",
    option2: "Always have your favorite temperature wherever you go"
  },
  {
    id: 75,
    option1: "Be able to understand any language",
    option2: "Be able to play any musical instrument perfectly"
  },
  {
    id: 76,
    option1: "Have a magical mailbox that delivers anything",
    option2: "Have a magical trash can that fixes broken things"
  },
  {
    id: 77,
    option1: "Live in a world where gravity works backwards",
    option2: "Live in a world where everything is upside down"
  },
  {
    id: 78,
    option1: "Have a magic eraser that fixes mistakes",
    option2: "Have a magic pen that writes perfect stories"
  },
  {
    id: 79,
    option1: "Be able to make rainbow bridges appear",
    option2: "Be able to make shooting stars on command"
  },
  {
    id: 80,
    option1: "Have a jacket with infinite pockets",
    option2: "Have shoes that take you anywhere instantly"
  }
];

// Seasonal Would You Rather questions
export const seasonalQuestions: WouldYouRatherQuestion[] = [
  // New Year (January)
  {
    id: 101,
    option1: "Learn a new skill this year",
    option2: "Visit a new place this year",
    season: 'newYear'
  },
  {
    id: 102,
    option1: "Stay up until midnight on New Year's",
    option2: "Sleep in super late on New Year's Day",
    season: 'newYear'
  },
  {
    id: 103,
    option1: "Make 100 paper airplanes",
    option2: "Make 100 origami animals",
    season: 'newYear'
  },
  {
    id: 104,
    option1: "Set a goal to read more books",
    option2: "Set a goal to play outside more",
    season: 'newYear'
  },

  // Winter (February, December)
  {
    id: 201,
    option1: "Build an igloo",
    option2: "Have the world's biggest snowball fight",
    season: 'winter'
  },
  {
    id: 202,
    option1: "Ice skate everywhere you go",
    option2: "Sled down every hill you see",
    season: 'winter'
  },
  {
    id: 203,
    option1: "Drink hot chocolate every day",
    option2: "Drink warm apple cider every day",
    season: 'winter'
  },
  {
    id: 204,
    option1: "Wear mittens that never come off",
    option2: "Wear boots that squeak with every step",
    season: 'winter'
  },
  {
    id: 205,
    option1: "Have snowflakes that never melt on you",
    option2: "Have icicles that follow you around",
    season: 'winter'
  },

  // Spring (March, April, May)
  {
    id: 301,
    option1: "Plant a magical garden",
    option2: "Watch baby animals being born",
    season: 'spring'
  },
  {
    id: 302,
    option1: "Have butterflies follow you everywhere",
    option2: "Have flowers bloom wherever you walk",
    season: 'spring'
  },
  {
    id: 303,
    option1: "Chase rainbows all day",
    option2: "Dance in spring rain",
    season: 'spring'
  },
  {
    id: 304,
    option1: "Have super-strong allergies but see beautiful flowers",
    option2: "Have no allergies but everything stays brown",
    season: 'spring'
  },

  // Summer Start (June)
  {
    id: 401,
    option1: "Have no homework all summer",
    option2: "Have no chores all summer",
    season: 'summerStart'
  },
  {
    id: 402,
    option1: "Go to summer camp",
    option2: "Stay home and play all day",
    season: 'summerStart'
  },
  {
    id: 403,
    option1: "Swim every single day",
    option2: "Ride bikes every single day",
    season: 'summerStart'
  },
  {
    id: 404,
    option1: "Read 100 books this summer",
    option2: "Play outside for 100 hours",
    season: 'summerStart'
  },

  // Summer (July, August)
  {
    id: 501,
    option1: "Have an ice cream truck follow you around",
    option2: "Have a pool in your backyard",
    season: 'summer'
  },
  {
    id: 502,
    option1: "Catch fireflies every night",
    option2: "Have water balloon fights every day",
    season: 'summer'
  },
  {
    id: 503,
    option1: "Go camping under the stars",
    option2: "Stay in a fancy hotel with room service",
    season: 'summer'
  },
  {
    id: 504,
    option1: "Have a picnic on the beach",
    option2: "Have a picnic in the mountains",
    season: 'summer'
  },
  {
    id: 505,
    option1: "Never get sunburned",
    option2: "Never get bug bites",
    season: 'summer'
  },

  // School Start (September)
  {
    id: 601,
    option1: "Have a locker that's magic",
    option2: "Have a backpack that carries everything",
    season: 'schoolStart'
  },
  {
    id: 602,
    option1: "Make 10 new friends",
    option2: "Become best friends with your teacher",
    season: 'schoolStart'
  },
  {
    id: 603,
    option1: "Have recess all day",
    option2: "Have lunch all day",
    season: 'schoolStart'
  },
  {
    id: 604,
    option1: "Always know the right answer",
    option2: "Never have to take a test",
    season: 'schoolStart'
  },

  // Fall (October)
  {
    id: 701,
    option1: "Jump in a giant pile of leaves",
    option2: "Go apple picking",
    season: 'fall'
  },
  {
    id: 702,
    option1: "Carve pumpkins all day",
    option2: "Bake pumpkin cookies all day",
    season: 'fall'
  },
  {
    id: 703,
    option1: "Wear cozy sweaters every day",
    option2: "Drink warm soup every day",
    season: 'fall'
  },
  {
    id: 704,
    option1: "Rake leaves into huge piles",
    option2: "Collect the most colorful autumn leaves",
    season: 'fall'
  },

  // Halloween (November)
  {
    id: 801,
    option1: "Dress as a friendly ghost",
    option2: "Dress as a silly monster",
    season: 'halloween'
  },
  {
    id: 802,
    option1: "Get candy that never runs out",
    option2: "Have costumes that change by themselves",
    season: 'halloween'
  },
  {
    id: 803,
    option1: "Trick-or-treat during the day",
    option2: "Trick-or-treat at night with flashlights",
    season: 'halloween'
  },
  {
    id: 804,
    option1: "Live in a house decorated like a castle",
    option2: "Live in a house decorated like a spaceship",
    season: 'halloween'
  }
];

// Helper function to get questions by season
export const getQuestionsBySeason = (season: SeasonType): WouldYouRatherQuestion[] => {
  return seasonalQuestions.filter(q => q.season === season);
};

// Helper function to get all questions (seasonal + evergreen)
export const getAllQuestions = (): WouldYouRatherQuestion[] => {
  return [...evergreenQuestions, ...seasonalQuestions];
};