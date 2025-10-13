// Expanded list of 200 animals for the Guess in 10 game
// Each animal has an id, image name (unused), 3 clues, answer name, and emoji

export const animalData = [
  // Original animals
  {
    id: 1,
    image: "lion",
    clues: [
      "I have a mane around my neck.",
      "I am known as the king of the jungle.",
      "I make a loud roaring sound."
    ],
    answer: "Lion",
    emoji: "🦁",
    funFacts: [
      { category: 'sound', fact: "Lions have the loudest roar of any big cat - up to 114 decibels!", icon: "🔊" },
      { category: 'habitat', fact: "Lions actually live in grasslands and savannas, not jungles!", icon: "🏠" },
      { category: 'group', fact: "A group of lions is called a pride.", icon: "👥" },
      { category: 'baby', fact: "Baby lions are called cubs and are born with spots that fade as they grow.", icon: "🍼" },
      { category: 'diet', fact: "Lions can eat up to 88 pounds of meat in one meal!", icon: "🍽️" },
      { category: 'ability', fact: "Lions can run up to 50 mph in short bursts and leap 36 feet!", icon: "⭐" },
      { category: 'unique', fact: "Lions sleep up to 20 hours a day to conserve energy for hunting.", icon: "💡" }
    ]
  },
  {
    id: 2,
    image: "elephant",
    clues: [
      "I have a long trunk.",
      "I am the largest land animal.",
      "I have big, flappy ears."
    ],
    answer: "Elephant",
    emoji: "🐘",
    funFacts: [
      { category: 'ability', fact: "Elephants can recognize themselves in a mirror and remember locations of water sources for years.", icon: "⭐" },
      { category: 'baby', fact: "Baby elephants are called calves and can weigh up to 260 pounds at birth!", icon: "🍼" },
      { category: 'group', fact: "A group of elephants is called a herd, led by the oldest female.", icon: "👥" },
      { category: 'sound', fact: "Elephants communicate using infrasonic sounds below human hearing range.", icon: "🔊" },
      { category: 'diet', fact: "Elephants eat up to 300 pounds of plants every day!", icon: "🍽️" },
      { category: 'habitat', fact: "African elephants live in savannas while Asian elephants prefer forests.", icon: "🏠" },
      { category: 'unique', fact: "An elephant's trunk has over 40,000 muscles and can lift 770 pounds!", icon: "💡" }
    ]
  },
  {
    id: 3,
    image: "cheetah",
    clues: [
      "I have spots on my fur.",
      "I am the fastest land animal.",
      "I can run up to 70 mph."
    ],
    answer: "Cheetah",
    emoji: "🐆",
    funFacts: [
      { category: 'ability', fact: "Cheetahs have excellent eyesight and can spot prey from 3 miles away!", icon: "⭐" },
      { category: 'baby', fact: "Baby cheetahs are called cubs and have a mohawk-like mane for protection.", icon: "🍼" },
      { category: 'group', fact: "A group of cheetahs is called a coalition.", icon: "👥" },
      { category: 'sound', fact: "Cheetahs can't roar - they chirp, purr, and make bird-like sounds!", icon: "🔊" },
      { category: 'diet', fact: "Cheetahs hunt during the day and prefer gazelles and impalas.", icon: "🍽️" },
      { category: 'habitat', fact: "Cheetahs live in the grasslands and savannas of Africa.", icon: "🏠" },
      { category: 'unique', fact: "Cheetahs have non-retractable claws like dogs, giving them better grip while running.", icon: "💡" }
    ]
  },
  {
    id: 4,
    image: "zebra",
    clues: [
      "I have black and white stripes.",
      "I live in Africa.",
      "I look similar to a horse."
    ],
    answer: "Zebra",
    emoji: "🦓",
    funFacts: [
      { category: 'unique', fact: "Every zebra's stripe pattern is unique, like human fingerprints!", icon: "💡" },
      { category: 'baby', fact: "Baby zebras are called foals and can run within an hour of being born.", icon: "🍼" },
      { category: 'group', fact: "A group of zebras is called a dazzle when moving and a zeal when grazing.", icon: "👥" },
      { category: 'sound', fact: "Zebras make barking, whistling, and snorting sounds to communicate.", icon: "🔊" },
      { category: 'diet', fact: "Zebras spend up to 18 hours a day grazing on grass.", icon: "🍽️" },
      { category: 'habitat', fact: "Zebras live in the grasslands and savannas of eastern and southern Africa.", icon: "🏠" },
      { category: 'ability', fact: "Zebras can see in color and have excellent night vision.", icon: "⭐" }
    ]
  },
  {
    id: 5,
    image: "kangaroo",
    clues: [
      "I have a pouch for my baby.",
      "I hop on two legs.",
      "I am from Australia."
    ],
    answer: "Kangaroo",
    emoji: "🦘",
    funFacts: [
      { category: 'ability', fact: "Kangaroos can hop at speeds up to 35 mph and jump 25 feet in one bound!", icon: "⭐" },
      { category: 'baby', fact: "Baby kangaroos are called joeys and are only 2cm long at birth!", icon: "🍼" },
      { category: 'group', fact: "A group of kangaroos is called a mob or a troop.", icon: "👥" },
      { category: 'sound', fact: "Kangaroos make soft clucking sounds and can growl when threatened.", icon: "🔊" },
      { category: 'diet', fact: "Kangaroos are herbivores and can survive without water for long periods.", icon: "🍽️" },
      { category: 'habitat', fact: "Kangaroos prefer open plains and woodlands for better visibility from predators.", icon: "🏠" },
      { category: 'unique', fact: "Kangaroos can't walk backwards and use their tail as a fifth leg for balance!", icon: "💡" }
    ]
  },
  {
    id: 6,
    image: "giraffe",
    clues: [
      "I have a very long neck.",
      "I am the tallest animal in the world.",
      "I have spotted patterns on my body."
    ],
    answer: "Giraffe",
    emoji: "🦒",
    funFacts: [
      { category: 'ability', fact: "Giraffes can run up to 35 mph and have a 6-foot-long tongue!", icon: "⭐" },
      { category: 'baby', fact: "Baby giraffes are called calves and can be 6 feet tall at birth!", icon: "🍼" },
      { category: 'group', fact: "A group of giraffes is called a tower when standing or a journey when walking.", icon: "👥" },
      { category: 'sound', fact: "Giraffes make humming sounds at night that are below human hearing range.", icon: "🔊" },
      { category: 'diet', fact: "Giraffes eat up to 75 pounds of acacia leaves daily and can go weeks without drinking water.", icon: "🍽️" },
      { category: 'habitat', fact: "Giraffes live in African savannas and sleep only 30 minutes to 2 hours per day.", icon: "🏠" },
      { category: 'unique', fact: "A giraffe's heart weighs 25 pounds and pumps blood 6 feet up to their brain!", icon: "💡" }
    ]
  },
  {
    id: 7,
    image: "monkey",
    clues: [
      "I can swing from tree to tree.",
      "I love to eat bananas.",
      "I am very similar to humans."
    ],
    answer: "Monkey",
    emoji: "🐒",
    funFacts: [
      { category: 'ability', fact: "Monkeys can use tools like sticks to get insects and have excellent problem-solving skills!", icon: "⭐" },
      { category: 'baby', fact: "Baby monkeys cling to their mothers for months and learn by watching and copying.", icon: "🍼" },
      { category: 'group', fact: "A group of monkeys is called a troop, and they have complex social hierarchies.", icon: "👥" },
      { category: 'sound', fact: "Monkeys communicate with over 30 different calls including screams, grunts, and chatters.", icon: "🔊" },
      { category: 'diet', fact: "Most monkeys are omnivores eating fruits, leaves, insects, and small animals.", icon: "🍽️" },
      { category: 'habitat', fact: "Monkeys live in forests, mountains, and grasslands across Africa, Asia, and Central/South America.", icon: "🏠" },
      { category: 'unique', fact: "Monkeys have fingerprints just like humans and can recognize themselves in mirrors!", icon: "💡" }
    ]
  },
  {
    id: 8,
    image: "penguin",
    clues: [
      "I cannot fly but I can swim very well.",
      "I live in very cold places.",
      "I always look like I'm wearing a tuxedo."
    ],
    answer: "Penguin",
    emoji: "🐧",
    funFacts: [
      { category: 'ability', fact: "Penguins can swim up to 22 mph and hold their breath for 20 minutes underwater!", icon: "⭐" },
      { category: 'baby', fact: "Baby penguins are called chicks and huddle together in groups called crèches for warmth.", icon: "🍼" },
      { category: 'group', fact: "A group of penguins is called a colony on land and a raft when swimming.", icon: "👥" },
      { category: 'sound', fact: "Penguins make trumpeting calls and can recognize their mate's voice among thousands.", icon: "🔊" },
      { category: 'diet', fact: "Penguins eat fish, squid, and krill, swallowing them whole while swimming.", icon: "🍽️" },
      { category: 'habitat', fact: "Most penguins live in Antarctica, but some species live in warmer climates like South Africa.", icon: "🏠" },
      { category: 'unique', fact: "Penguins have a special gland that filters salt from seawater so they can drink it!", icon: "💡" }
    ]
  },
  {
    id: 9,
    image: "dolphin",
    clues: [
      "I am a marine mammal.",
      "I am known for being very intelligent.",
      "I make clicking sounds to communicate."
    ],
    answer: "Dolphin",
    emoji: "🐬",
    funFacts: [
      { category: 'ability', fact: "Dolphins use echolocation to navigate and hunt, creating detailed mental maps of their surroundings!", icon: "⭐" },
      { category: 'baby', fact: "Baby dolphins are called calves and stay with their mothers for 3-6 years learning essential skills.", icon: "🍼" },
      { category: 'group', fact: "A group of dolphins is called a pod, and they work together to hunt and protect each other.", icon: "👥" },
      { category: 'sound', fact: "Dolphins have signature whistles that act like names, and they can mimic other dolphin sounds.", icon: "🔊" },
      { category: 'diet', fact: "Dolphins eat fish, squid, and shrimp, and they can eat up to 30 pounds of food per day.", icon: "🍽️" },
      { category: 'habitat', fact: "Dolphins live in oceans worldwide, preferring warm, shallow coastal waters near the surface.", icon: "🏠" },
      { category: 'unique', fact: "Dolphins sleep with one eye open and half their brain awake to watch for predators!", icon: "💡" }
    ]
  },
  {
    id: 10,
    image: "koala",
    clues: [
      "I love to eat eucalyptus leaves.",
      "I sleep up to 20 hours a day.",
      "I come from Australia."
    ],
    answer: "Koala",
    emoji: "🐨",
    funFacts: [
      { category: 'ability', fact: "Koalas have special digestive systems that can break down toxic eucalyptus leaves!", icon: "⭐" },
      { category: 'baby', fact: "Baby koalas are called joeys and live in their mother's pouch for 6 months after birth.", icon: "🍼" },
      { category: 'group', fact: "Koalas are mostly solitary, but when they gather it's called a colony.", icon: "👥" },
      { category: 'sound', fact: "Male koalas make loud bellowing calls that can be heard over a mile away during mating season.", icon: "🔊" },
      { category: 'diet', fact: "Koalas eat only eucalyptus leaves and get most of their water from the leaves (koala means 'no drink').", icon: "🍽️" },
      { category: 'habitat', fact: "Koalas live in eucalyptus forests of eastern Australia and rarely come down from trees.", icon: "🏠" },
      { category: 'unique', fact: "Koalas have fingerprints almost identical to humans and two thumbs on each front paw!", icon: "💡" }
    ]
  },
  {
    id: 11,
    image: "tiger",
    clues: [
      "I have orange fur with black stripes.",
      "I am the largest cat species.",
      "I am an endangered species."
    ],
    answer: "Tiger",
    emoji: "🐅",
    funFacts: [
      { category: 'ability', fact: "Tigers can leap 30 feet in a single bound and are excellent swimmers who love water!", icon: "⭐" },
      { category: 'baby', fact: "Baby tigers are called cubs and stay with their mother for 2 years learning to hunt.", icon: "🍼" },
      { category: 'group', fact: "Tigers are solitary animals, but a group is called a streak or ambush.", icon: "👥" },
      { category: 'sound', fact: "Tigers can roar so loudly it can be heard 2 miles away, and they also chuff when happy.", icon: "🔊" },
      { category: 'diet', fact: "Tigers eat up to 88 pounds of meat in one sitting and primarily hunt deer, wild boar, and buffalo.", icon: "🍽️" },
      { category: 'habitat', fact: "Tigers live in forests, grasslands, and mangroves across Asia, from India to China.", icon: "🏠" },
      { category: 'unique', fact: "Every tiger has a unique stripe pattern, and they have night vision 6 times better than humans!", icon: "💡" }
    ]
  },
  {
    id: 12,
    image: "panda",
    clues: [
      "I have black and white fur.",
      "I love to eat bamboo.",
      "I come from China."
    ],
    answer: "Panda",
    emoji: "🐼",
    funFacts: [
      { category: 'ability', fact: "Pandas have a pseudo-thumb that helps them grip bamboo and can climb trees despite their size!", icon: "⭐" },
      { category: 'baby', fact: "Baby pandas are called cubs and are pink, hairless, and only 4 inches long at birth!", icon: "🍼" },
      { category: 'group', fact: "Pandas are solitary, but a group is called an embarrassment of pandas.", icon: "👥" },
      { category: 'sound', fact: "Pandas communicate with bleats, honks, huffs, and barks - baby pandas squeak!", icon: "🔊" },
      { category: 'diet', fact: "Pandas eat 26-84 pounds of bamboo daily but their digestive system can only digest 17% of it.", icon: "🍽️" },
      { category: 'habitat', fact: "Pandas live in bamboo forests in the mountains of central China at elevations of 5,000-10,000 feet.", icon: "🏠" },
      { category: 'unique', fact: "Pandas spend 14 hours a day eating bamboo and have been on Earth for 3 million years!", icon: "💡" }
    ]
  },
  {
    id: 13,
    image: "turtle",
    clues: [
      "I carry my home on my back.",
      "I move very slowly.",
      "I can live for over 100 years."
    ],
    answer: "Turtle",
    emoji: "🐢",
    funFacts: [
      { category: 'ability', fact: "Sea turtles can navigate thousands of miles using Earth's magnetic field as their GPS!", icon: "⭐" },
      { category: 'baby', fact: "Baby turtles are called hatchlings and instinctively head toward the brightest horizon (the ocean) when they're born.", icon: "🍼" },
      { category: 'group', fact: "A group of turtles is called a bale, and sea turtles gather in large groups called arribadas to nest.", icon: "👥" },
      { category: 'sound', fact: "Turtles make hissing, grunting, and clicking sounds, and some can hear low-frequency sounds.", icon: "🔊" },
      { category: 'diet', fact: "Turtles can be herbivores, carnivores, or omnivores depending on species - some eat jellyfish, others eat plants.", icon: "🍽️" },
      { category: 'habitat', fact: "Turtles live in oceans, ponds, rivers, and on land across every continent except Antarctica.", icon: "🏠" },
      { category: 'unique', fact: "Turtles have been around for 220 million years and can retract their heads into their shells!", icon: "💡" }
    ]
  },
  {
    id: 14,
    image: "crocodile",
    clues: [
      "I have a long snout with sharp teeth.",
      "I live in rivers and swamps.",
      "I am a reptile with a strong bite."
    ],
    answer: "Crocodile",
    emoji: "🐊",
    funFacts: [
      { category: 'ability', fact: "Crocodiles have the strongest bite force on Earth - up to 3,700 pounds per square inch!", icon: "⭐" },
      { category: 'baby', fact: "Baby crocodiles are called hatchlings and make chirping sounds from inside their eggs to call their mother.", icon: "🍼" },
      { category: 'group', fact: "A group of crocodiles is called a bask when on land and a float when in water.", icon: "👥" },
      { category: 'sound', fact: "Crocodiles roar, hiss, and make infrasonic sounds that travel through water and ground.", icon: "🔊" },
      { category: 'diet', fact: "Crocodiles eat fish, birds, mammals, and can go months without eating after a large meal.", icon: "🍽️" },
      { category: 'habitat', fact: "Crocodiles live in tropical rivers, lakes, wetlands, and coastal areas across Africa, Asia, Australia, and the Americas.", icon: "🏠" },
      { category: 'unique', fact: "Crocodiles are living dinosaurs that have remained virtually unchanged for 200 million years!", icon: "💡" }
    ]
  },
  {
    id: 15,
    image: "owl",
    clues: [
      "I can turn my head almost all the way around.",
      "I am active at night.",
      "I make a 'hoot' sound."
    ],
    answer: "Owl",
    emoji: "🦉",
    funFacts: [
      { category: 'ability', fact: "Owls can rotate their heads 270 degrees and have asymmetrical ears for precise sound location!", icon: "⭐" },
      { category: 'baby', fact: "Baby owls are called owlets and don't leave the nest for 6-10 weeks after hatching.", icon: "🍼" },
      { category: 'group', fact: "A group of owls is called a parliament, wisdom, or study.", icon: "👥" },
      { category: 'sound', fact: "Owls make hoots, screeches, whistles, and clicks - each species has distinct calls.", icon: "🔊" },
      { category: 'diet', fact: "Owls eat small mammals, birds, fish, and insects, swallowing prey whole and coughing up pellets.", icon: "🍽️" },
      { category: 'habitat', fact: "Owls live in forests, deserts, wetlands, and grasslands on every continent except Antarctica.", icon: "🏠" },
      { category: 'unique', fact: "Owls have silent flight thanks to special feathers and can see in near-total darkness!", icon: "💡" }
    ]
  },
  {
    id: 16,
    image: "butterfly",
    clues: [
      "I start life as a caterpillar.",
      "I have colorful wings.",
      "I drink nectar from flowers."
    ],
    answer: "Butterfly",
    emoji: "🦋",
    funFacts: [
      { category: 'ability', fact: "Butterflies taste with their feet and can see ultraviolet colors invisible to humans!", icon: "⭐" },
      { category: 'baby', fact: "Baby butterflies go through complete metamorphosis: egg → caterpillar → chrysalis → butterfly.", icon: "🍼" },
      { category: 'group', fact: "A group of butterflies is called a flutter, kaleidoscope, or swarm.", icon: "👥" },
      { category: 'sound', fact: "Butterflies are mostly silent, but some species make clicking sounds with their wings.", icon: "🔊" },
      { category: 'diet', fact: "Butterflies primarily drink flower nectar, but also consume tree sap, mud, and rotting fruit for minerals.", icon: "🍽️" },
      { category: 'habitat', fact: "Butterflies live in gardens, forests, meadows, and deserts worldwide, preferring warm, sunny areas.", icon: "🏠" },
      { category: 'unique', fact: "Monarch butterflies migrate up to 3,000 miles and their wing scales create their beautiful colors!", icon: "💡" }
    ]
  },
  {
    id: 17,
    image: "octopus",
    clues: [
      "I have eight arms.",
      "I can change color to match my surroundings.",
      "I live in the ocean."
    ],
    answer: "Octopus",
    emoji: "🐙",
    funFacts: [
      { category: 'ability', fact: "Octopuses have three hearts, blue blood, and can solve puzzles and open jars!", icon: "⭐" },
      { category: 'baby', fact: "Baby octopuses are tiny when born and the mother dies after protecting her eggs for months.", icon: "🍼" },
      { category: 'group', fact: "Octopuses are usually solitary, but when they gather it's called a consortium.", icon: "👥" },
      { category: 'sound', fact: "Octopuses don't make vocal sounds but communicate through color changes and body language.", icon: "🔊" },
      { category: 'diet', fact: "Octopuses eat crabs, fish, and shellfish, using their strong beak to crack open shells.", icon: "🍽️" },
      { category: 'habitat', fact: "Octopuses live in coral reefs, rocky crevices, and ocean floors from shallow waters to deep sea.", icon: "🏠" },
      { category: 'unique', fact: "Octopuses can regenerate lost arms and squeeze through any opening larger than their beak!", icon: "💡" }
    ]
  },
  {
    id: 18,
    image: "rabbit",
    clues: [
      "I have long ears.",
      "I hop around.",
      "I love to eat carrots."
    ],
    answer: "Rabbit",
    emoji: "🐰",
    funFacts: [
      { category: 'ability', fact: "Rabbits can jump 3 feet high and run up to 45 mph in zigzag patterns to escape predators!", icon: "⭐" },
      { category: 'baby', fact: "Baby rabbits are called kits and are born blind, deaf, and hairless in underground burrows.", icon: "🍼" },
      { category: 'group', fact: "A group of rabbits is called a colony, warren, or fluffle.", icon: "👥" },
      { category: 'sound', fact: "Rabbits thump their hind legs to warn others of danger and make soft grunting sounds.", icon: "🔊" },
      { category: 'diet', fact: "Rabbits eat grass, hay, vegetables, and practice cecotrophy (eating their own soft droppings for nutrients).", icon: "🍽️" },
      { category: 'habitat', fact: "Rabbits live in meadows, forests, grasslands, and deserts, creating underground tunnel systems called warrens.", icon: "🏠" },
      { category: 'unique', fact: "Rabbits can see nearly 360 degrees around them and their teeth never stop growing!", icon: "💡" }
    ]
  },
  {
    id: 19,
    image: "snail",
    clues: [
      "I move very slowly.",
      "I carry a shell on my back.",
      "I leave a slimy trail behind me."
    ],
    answer: "Snail",
    emoji: "🐌",
    funFacts: [
      { category: 'ability', fact: "Snails can sleep for up to 3 years and have thousands of tiny teeth on their tongue!", icon: "⭐" },
      { category: 'baby', fact: "Baby snails hatch from eggs with tiny shells and grow by adding new layers to their shell.", icon: "🍼" },
      { category: 'group', fact: "A group of snails is called a rout, walk, or escargatoire.", icon: "👥" },
      { category: 'sound', fact: "Snails are mostly silent but can make faint scraping sounds when moving.", icon: "🔊" },
      { category: 'diet', fact: "Snails eat plants, algae, and decomposing matter, helping recycle nutrients in ecosystems.", icon: "🍽️" },
      { category: 'habitat', fact: "Snails live in gardens, forests, ponds, and oceans worldwide, preferring moist environments.", icon: "🏠" },
      { category: 'unique', fact: "Snails produce slime that's both a lubricant and adhesive - they can crawl upside down!", icon: "💡" }
    ]
  },
  {
    id: 20,
    image: "fox",
    clues: [
      "I have a bushy tail.",
      "I am known for being clever.",
      "I make a 'yip' sound."
    ],
    answer: "Fox",
    emoji: "🦊",
    funFacts: [
      { category: 'ability', fact: "Foxes can hear low-frequency sounds and locate small animals underground using their excellent hearing!", icon: "⭐" },
      { category: 'baby', fact: "Baby foxes are called kits or cubs and are born in underground dens with their eyes closed.", icon: "🍼" },
      { category: 'group', fact: "A group of foxes is called a skulk, leash, or earth.", icon: "👥" },
      { category: 'sound', fact: "Foxes make over 40 different sounds including barks, screams, and chattering calls.", icon: "🔊" },
      { category: 'diet', fact: "Foxes are omnivores eating small animals, birds, insects, fruits, and berries.", icon: "🍽️" },
      { category: 'habitat', fact: "Foxes live in forests, grasslands, mountains, and deserts across most continents.", icon: "🏠" },
      { category: 'unique', fact: "Foxes use Earth's magnetic field to hunt and can jump 6 feet high!", icon: "💡" }
    ]
  },
  // Additional 180 animals
  {
    id: 21,
    image: "horse",
    clues: [
      "People ride on my back.",
      "I have a long mane and tail.",
      "I can gallop very fast."
    ],
    answer: "Horse",
    emoji: "🐎",
    funFacts: [
      { category: 'ability', fact: "Horses can run up to 55 mph and sleep both lying down and standing up!", icon: "⭐" },
      { category: 'baby', fact: "Baby horses are called foals and can stand and walk within hours of being born.", icon: "🍼" },
      { category: 'group', fact: "A group of horses is called a herd when wild or a string when domestic.", icon: "👥" },
      { category: 'sound', fact: "Horses neigh, whinny, snort, and nicker to communicate different emotions and messages.", icon: "🔊" },
      { category: 'diet', fact: "Horses are herbivores eating grass, hay, oats, and can drink 5-10 gallons of water daily.", icon: "🍽️" },
      { category: 'habitat', fact: "Wild horses live in grasslands and plains, while domestic horses live in pastures and stables worldwide.", icon: "🏠" },
      { category: 'unique', fact: "Horses have nearly 360-degree vision and can remember human friends after years of separation!", icon: "💡" }
    ]
  },
  {
    id: 22,
    image: "chicken",
    clues: [
      "I lay eggs that people eat.",
      "I have feathers and a beak.",
      "I say 'cluck cluck'."
    ],
    answer: "Chicken",
    emoji: "🐔",
    funFacts: [
      { category: 'ability', fact: "Chickens can recognize over 100 faces, including humans, and have excellent memories!", icon: "⭐" },
      { category: 'baby', fact: "Baby chickens are called chicks and can cheep to their mother while still inside the egg.", icon: "🍼" },
      { category: 'group', fact: "A group of chickens is called a flock, brood, or peep.", icon: "👥" },
      { category: 'sound', fact: "Chickens make over 30 different sounds including clucks, squawks, and warning calls.", icon: "🔊" },
      { category: 'diet', fact: "Chickens are omnivores eating seeds, insects, worms, and small animals like mice.", icon: "🍽️" },
      { category: 'habitat', fact: "Chickens originally lived in forests but now live on farms and backyards worldwide.", icon: "🏠" },
      { category: 'unique', fact: "Chickens can live 8-15 years and the rooster's crow is a territorial announcement!", icon: "💡" }
    ]
  },
  {
    id: 23,
    image: "pig",
    clues: [
      "I have a curly tail.",
      "People say I'm messy and like mud.",
      "I make an 'oink' sound."
    ],
    answer: "Pig",
    emoji: "🐖",
    funFacts: [
      { category: 'ability', fact: "Pigs are incredibly intelligent - smarter than dogs and can learn their names and tricks!", icon: "⭐" },
      { category: 'baby', fact: "Baby pigs are called piglets and can learn to respond to their names by 2-3 weeks old.", icon: "🍼" },
      { category: 'group', fact: "A group of pigs is called a drift, drove, or sounder.", icon: "👥" },
      { category: 'sound', fact: "Pigs grunt, squeal, and oink to communicate over 20 different emotions and messages.", icon: "🔊" },
      { category: 'diet', fact: "Pigs are omnivores with excellent senses of smell and can find truffles buried underground.", icon: "🍽️" },
      { category: 'habitat', fact: "Wild pigs live in forests and grasslands, while domestic pigs live on farms worldwide.", icon: "🏠" },
      { category: 'unique', fact: "Pigs roll in mud to cool down since they can't sweat, and they're naturally very clean!", icon: "💡" }
    ]
  },
  {
    id: 24,
    image: "sheep",
    clues: [
      "My body is covered with wool.",
      "People make sweaters from my coat.",
      "I make a 'baa' sound."
    ],
    answer: "Sheep",
    emoji: "🐑",
    funFacts: [
      { category: 'ability', fact: "Sheep have excellent memories and can remember faces for up to 2 years!", icon: "⭐" },
      { category: 'baby', fact: "Baby sheep are called lambs and can recognize their mother's voice among hundreds of sheep.", icon: "🍼" },
      { category: 'group', fact: "A group of sheep is called a flock, herd, or mob.", icon: "👥" },
      { category: 'sound', fact: "Sheep baa, bleat, and make different sounds to express emotions like hunger, fear, or happiness.", icon: "🔊" },
      { category: 'diet', fact: "Sheep are herbivores that graze on grass and can eat plants other animals can't digest.", icon: "🍽️" },
      { category: 'habitat', fact: "Sheep live in pastures, hills, and mountains worldwide, adapted to various climates.", icon: "🏠" },
      { category: 'unique', fact: "Sheep's wool grows continuously and one sheep can produce 11-17 pounds of wool per year!", icon: "💡" }
    ]
  },
  {
    id: 25,
    image: "cow",
    clues: [
      "I give milk that people drink.",
      "I am often black and white.",
      "I make a 'moo' sound."
    ],
    answer: "Cow",
    emoji: "🐄",
    funFacts: [
      { category: 'ability', fact: "Cows have excellent memories and can remember things for years, plus they have best friends!", icon: "⭐" },
      { category: 'baby', fact: "Baby cows are called calves and can stand and walk within an hour of being born.", icon: "🍼" },
      { category: 'group', fact: "A group of cows is called a herd, and they form complex social relationships.", icon: "👥" },
      { category: 'sound', fact: "Cows moo in different tones to express emotions and can recognize individual voices.", icon: "🔊" },
      { category: 'diet', fact: "Cows are herbivores with four-chambered stomachs that help them digest grass efficiently.", icon: "🍽️" },
      { category: 'habitat', fact: "Cows live in pastures and fields worldwide, preferring open grasslands with access to water.", icon: "🏠" },
      { category: 'unique', fact: "Cows can produce 6-7 gallons of milk daily and have panoramic vision of nearly 360 degrees!", icon: "💡" }
    ]
  },
  {
    id: 26,
    image: "goat",
    clues: [
      "I have horns and a beard.",
      "I can climb steep mountains.",
      "People make cheese from my milk."
    ],
    answer: "Goat",
    emoji: "🐐",
    funFacts: [
      { category: 'ability', fact: "Goats are amazing climbers with specialized hooves that can grip tiny ledges on vertical cliffs!", icon: "⭐" },
      { category: 'baby', fact: "Baby goats are called kids and can jump and play within hours of being born.", icon: "🍼" },
      { category: 'group', fact: "A group of goats is called a herd, tribe, or trip.", icon: "👥" },
      { category: 'sound', fact: "Goats bleat, baa, and make over 100 different sounds to communicate with each other.", icon: "🔊" },
      { category: 'diet', fact: "Goats are browsers that eat leaves, twigs, weeds, and can digest plants other animals can't.", icon: "🍽️" },
      { category: 'habitat', fact: "Goats live in mountains, hills, deserts, and farms worldwide, preferring rocky terrain.", icon: "🏠" },
      { category: 'unique', fact: "Goats have rectangular pupils that give them excellent peripheral vision and depth perception!", icon: "💡" }
    ]
  },
  {
    id: 27,
    image: "dog",
    clues: [
      "I am often called man's best friend.",
      "I come in many different breeds.",
      "I bark and wag my tail."
    ],
    answer: "Dog",
    emoji: "🐕",
    funFacts: [
      { category: 'ability', fact: "Dogs can smell 10,000 to 100,000 times better than humans and can be trained to detect diseases!", icon: "⭐" },
      { category: 'baby', fact: "Baby dogs are called puppies and are born blind and deaf, opening their eyes at 2 weeks old.", icon: "🍼" },
      { category: 'group', fact: "A group of dogs is called a pack, and they have complex social hierarchies.", icon: "👥" },
      { category: 'sound', fact: "Dogs bark, howl, whine, and growl to communicate different emotions and needs.", icon: "🔊" },
      { category: 'diet', fact: "Dogs are omnivores that eat meat, vegetables, and grains, though their diet varies by breed.", icon: "🍽️" },
      { category: 'habitat', fact: "Dogs live with humans worldwide and originally descended from wolves 15,000 years ago.", icon: "🏠" },
      { category: 'unique', fact: "Dogs have three eyelids and can learn over 150 words - some know up to 1,000!", icon: "💡" }
    ]
  },
  {
    id: 28,
    image: "cat",
    clues: [
      "I have whiskers and sharp claws.",
      "I purr when I'm happy.",
      "I love to chase mice."
    ],
    answer: "Cat",
    emoji: "🐈",
    funFacts: [
      { category: 'ability', fact: "Cats can rotate their ears 180 degrees and have night vision 6 times better than humans!", icon: "⭐" },
      { category: 'baby', fact: "Baby cats are called kittens and are born with blue eyes that change color as they grow.", icon: "🍼" },
      { category: 'group', fact: "A group of cats is called a clowder, and a group of kittens is called a kindle.", icon: "👥" },
      { category: 'sound', fact: "Cats make over 100 different sounds including meows, purrs, hisses, and chirps.", icon: "🔊" },
      { category: 'diet', fact: "Cats are obligate carnivores, meaning they must eat meat to survive and get essential nutrients.", icon: "🍽️" },
      { category: 'habitat', fact: "Cats live with humans worldwide and can also survive as feral cats in various environments.", icon: "🏠" },
      { category: 'unique', fact: "Cats spend 70% of their lives sleeping and always land on their feet due to their righting reflex!", icon: "💡" }
    ]
  },
  {
    id: 29,
    image: "mouse",
    clues: [
      "I am very small with a long tail.",
      "I love to eat cheese.",
      "I make a squeaking sound."
    ],
    answer: "Mouse",
    emoji: "🐁",
    funFacts: [
      { category: 'ability', fact: "Mice can squeeze through holes the size of a dime and can jump up to 12 inches high!", icon: "⭐" },
      { category: 'baby', fact: "Baby mice are called pups and are born hairless, blind, and deaf after only 19-21 days gestation.", icon: "🍼" },
      { category: 'group', fact: "A group of mice is called a mischief, and they live in family groups with complex social structures.", icon: "👥" },
      { category: 'sound', fact: "Mice communicate through ultrasonic squeaks, some too high for humans to hear.", icon: "🔊" },
      { category: 'diet', fact: "Mice are omnivores that eat seeds, fruits, grains, and insects, not just cheese!", icon: "🍽️" },
      { category: 'habitat', fact: "Mice live almost everywhere on Earth except Antarctica, adapting to many different environments.", icon: "🏠" },
      { category: 'unique', fact: "Mice have excellent memories and can learn complex mazes, plus their tails help them balance!", icon: "💡" }
    ]
  },
  {
    id: 30,
    image: "hamster",
    clues: [
      "I am a small, furry pet.",
      "I store food in my cheeks.",
      "I love running on my wheel."
    ],
    answer: "Hamster",
    emoji: "🐹",
    funFacts: [
      { category: 'ability', fact: "Hamsters can run up to 5 miles per night on their wheels and have cheek pouches that stretch to their shoulders!", icon: "⭐" },
      { category: 'baby', fact: "Baby hamsters are called pups and are born after only 16 days, with some species born every month!", icon: "🍼" },
      { category: 'group', fact: "Most hamsters are solitary and prefer to live alone, except when mating.", icon: "👥" },
      { category: 'sound', fact: "Hamsters make squeaking, chattering, and teeth grinding sounds to communicate.", icon: "🔊" },
      { category: 'diet', fact: "Hamsters are omnivores that eat seeds, fruits, vegetables, and occasionally insects.", icon: "🍽️" },
      { category: 'habitat', fact: "Wild hamsters live in burrows in dry areas of Europe and Asia, while pet hamsters live in cages worldwide.", icon: "🏠" },
      { category: 'unique', fact: "Hamsters are crepuscular (most active at dawn and dusk) and can hibernate when it gets cold!", icon: "💡" }
    ]
  },
  {
    id: 31,
    image: "frog",
    clues: [
      "I start life as a tadpole.",
      "I have long back legs for jumping.",
      "I make a 'ribbit' sound."
    ],
    answer: "Frog",
    emoji: "🐸",
    funFacts: [
      { category: 'ability', fact: "Frogs can jump up to 20 times their own body length and absorb water through their skin!", icon: "⭐" },
      { category: 'baby', fact: "Baby frogs are called tadpoles and breathe through gills before growing legs and lungs!", icon: "🍼" },
      { category: 'group', fact: "A group of frogs is called an army or a chorus when they're singing together.", icon: "👥" },
      { category: 'sound', fact: "Male frogs croak to attract mates, and each species has its own unique song!", icon: "🔊" },
      { category: 'diet', fact: "Frogs catch insects with their sticky tongues that can extend twice the length of their body!", icon: "🍽️" },
      { category: 'habitat', fact: "Frogs live near water sources like ponds, lakes, and streams all over the world except Antarctica.", icon: "🏠" },
      { category: 'unique', fact: "Some frogs can change color to match their surroundings and freeze solid in winter without dying!", icon: "💡" }
    ]
  },
  {
    id: 32,
    image: "snake",
    clues: [
      "I have no legs and slither on the ground.",
      "I shed my skin as I grow.",
      "Some of my cousins can be poisonous."
    ],
    answer: "Snake",
    emoji: "🐍",
    funFacts: [
      { category: 'ability', fact: "Snakes can unhinge their jaws to swallow prey much larger than their head!", icon: "⭐" },
      { category: 'baby', fact: "Baby snakes are called snakelets or hatchlings and can hunt on their own from birth!", icon: "🍼" },
      { category: 'group', fact: "A group of snakes is called a den, nest, or knot when they're coiled together.", icon: "👥" },
      { category: 'sound', fact: "Snakes hiss by forcing air through their mouth and some can make rattling sounds with their tails!", icon: "🔊" },
      { category: 'diet', fact: "Snakes swallow their prey whole and can go months without eating after a big meal!", icon: "🍽️" },
      { category: 'habitat', fact: "Snakes live everywhere except Antarctica, Ireland, Iceland, and New Zealand!", icon: "🏠" },
      { category: 'unique', fact: "Snakes smell with their tongues and shed their entire skin in one piece as they grow!", icon: "💡" }
    ]
  },
  {
    id: 33,
    image: "bear",
    clues: [
      "I have thick fur and am very strong.",
      "I love to eat honey.",
      "I sleep through the winter."
    ],
    answer: "Bear",
    emoji: "🐻",
    funFacts: [
      { category: 'ability', fact: "Bears can run up to 35 mph and climb trees despite their large size!", icon: "⭐" },
      { category: 'baby', fact: "Baby bears are called cubs and are born tiny, blind, and helpless, smaller than hamsters!", icon: "🍼" },
      { category: 'group', fact: "A group of bears is called a sleuth or sloth, but most bears prefer to live alone.", icon: "👥" },
      { category: 'sound', fact: "Bears make huffing, woofing, and roaring sounds, and cubs make crying sounds like human babies!", icon: "🔊" },
      { category: 'diet', fact: "Bears are omnivores that eat fish, berries, honey, and can consume up to 90 pounds of food per day!", icon: "🍽️" },
      { category: 'habitat', fact: "Bears live in forests, mountains, and tundra across North America, Europe, and Asia.", icon: "🏠" },
      { category: 'unique', fact: "Bears have an amazing sense of smell that's 7 times better than a bloodhound's!", icon: "💡" }
    ]
  },
  {
    id: 34,
    image: "polar_bear",
    clues: [
      "I live in the Arctic.",
      "My fur is white to blend with snow.",
      "I am an excellent swimmer."
    ],
    answer: "Polar Bear",
    emoji: "🐻‍❄️",
    funFacts: [
      { category: 'ability', fact: "Polar bears can swim up to 60 miles without rest and their fur is actually transparent, not white!", icon: "⭐" },
      { category: 'baby', fact: "Baby polar bears are called cubs and are born the size of guinea pigs in snow dens during Arctic winter.", icon: "🍼" },
      { category: 'group', fact: "Polar bears are mostly solitary except mothers with cubs, and rarely gather except around food sources.", icon: "👥" },
      { category: 'sound', fact: "Polar bears make chuffing sounds when content and roar when threatened or during mating season.", icon: "🔊" },
      { category: 'diet', fact: "Polar bears primarily eat seals and can fast for months when ice melts and hunting becomes difficult.", icon: "🍽️" },
      { category: 'habitat', fact: "Polar bears live on Arctic sea ice and coastal areas around the North Pole in five countries.", icon: "🏠" },
      { category: 'unique', fact: "Polar bears have black skin to absorb heat, and their paws act like snowshoes with non-slip soles!", icon: "💡" }
    ]
  },
  {
    id: 35,
    image: "eagle",
    clues: [
      "I am a bird of prey with excellent vision.",
      "I build my nest high up in trees or cliffs.",
      "I am a symbol of America."
    ],
    answer: "Eagle",
    emoji: "🦅",
    funFacts: [
      { category: 'ability', fact: "Eagles can see 4-8 times farther than humans and spot prey from 2 miles away!", icon: "⭐" },
      { category: 'baby', fact: "Baby eagles are called eaglets and stay in the nest for 10-12 weeks learning to fly!", icon: "🍼" },
      { category: 'group', fact: "A group of eagles is called a convocation or aerie when nesting together.", icon: "👥" },
      { category: 'sound', fact: "Eagles make high-pitched whistling calls and chattering sounds, not the loud screech from movies!", icon: "🔊" },
      { category: 'diet', fact: "Eagles are carnivores that hunt fish, small mammals, and birds with their powerful talons!", icon: "🍽️" },
      { category: 'habitat', fact: "Eagles live near water sources, mountains, and forests on every continent except Antarctica and South America.", icon: "🏠" },
      { category: 'unique', fact: "Eagle nests can weigh up to 2 tons and be used for many years, growing larger each season!", icon: "💡" }
    ]
  },
  {
    id: 36,
    image: "duck",
    clues: [
      "I have webbed feet for swimming.",
      "I make a 'quack' sound.",
      "I can fly, swim, and walk on land."
    ],
    answer: "Duck",
    emoji: "🦆",
    funFacts: [
      { category: 'ability', fact: "Ducks have waterproof feathers and can sleep floating on water with one eye open!", icon: "⭐" },
      { category: 'baby', fact: "Baby ducks are called ducklings and can swim and walk within hours of hatching!", icon: "🍼" },
      { category: 'group', fact: "A group of ducks is called a flock on land, raft on water, or team when flying!", icon: "👥" },
      { category: 'sound', fact: "Ducks quack, whistle, and grunt, but only female mallards make the classic 'quack' sound!", icon: "🔊" },
      { category: 'diet', fact: "Ducks are omnivores that eat aquatic plants, insects, small fish, and seeds by filtering water through their bills!", icon: "🍽️" },
      { category: 'habitat', fact: "Ducks live near wetlands, ponds, lakes, and rivers all around the world.", icon: "🏠" },
      { category: 'unique', fact: "Ducks have webbed feet for swimming and can fly at speeds up to 60 mph!", icon: "💡" }
    ]
  },
  {
    id: 37,
    image: "swan",
    clues: [
      "I have a long, curved neck.",
      "I am usually white with an orange beak.",
      "I glide gracefully on water."
    ],
    answer: "Swan",
    emoji: "🦢",
    funFacts: [
      { category: 'ability', fact: "Swans are powerful fliers that can reach speeds of 60 mph and migrate thousands of miles!", icon: "⭐" },
      { category: 'baby', fact: "Baby swans are called cygnets and ride on their parents' backs for protection!", icon: "🍼" },
      { category: 'group', fact: "A group of swans is called a bevy on water or wedge when flying in V-formation.", icon: "👥" },
      { category: 'sound', fact: "Swans make trumpeting, honking, and hissing sounds, and their wings make musical sounds in flight!", icon: "🔊" },
      { category: 'diet', fact: "Swans eat aquatic plants, algae, and small creatures by dipping their long necks underwater!", icon: "🍽️" },
      { category: 'habitat', fact: "Swans live on lakes, ponds, and wetlands in temperate regions of North America, Europe, and Asia.", icon: "🏠" },
      { category: 'unique', fact: "Swans mate for life and can live over 20 years, with some reaching 30 years old!", icon: "💡" }
    ]
  },
  {
    id: 38,
    image: "flamingo",
    clues: [
      "I have pink feathers.",
      "I stand on one long, thin leg.",
      "I live in large groups called flocks."
    ],
    answer: "Flamingo",
    emoji: "🦩",
    funFacts: [
      { category: 'ability', fact: "Flamingos can fly up to 35 mph and stand on one leg without falling over, even while sleeping!", icon: "⭐" },
      { category: 'baby', fact: "Baby flamingos are called chicks and are born gray or white, turning pink from their diet!", icon: "🍼" },
      { category: 'group', fact: "A group of flamingos is called a flamboyance, and they live in huge flocks of thousands!", icon: "👥" },
      { category: 'sound', fact: "Flamingos make honking, grunting, and growling sounds to communicate with their flock!", icon: "🔊" },
      { category: 'diet', fact: "Flamingos eat algae and tiny shrimp that contain pink pigments, which makes their feathers pink!", icon: "🍽️" },
      { category: 'habitat', fact: "Flamingos live near shallow salt lakes, lagoons, and mudflats in warm climates around the world.", icon: "🏠" },
      { category: 'unique', fact: "Flamingos filter-feed by turning their heads upside down and pumping water through special filters in their beaks!", icon: "💡" }
    ]
  },
  {
    id: 39,
    image: "peacock",
    clues: [
      "The males of my species have colorful tail feathers.",
      "I spread my tail feathers like a fan to attract a mate.",
      "I make a loud calling sound."
    ],
    answer: "Peacock",
    emoji: "🦚",
    funFacts: [
      { category: 'ability', fact: "Peacocks can fly despite their large tail feathers and run up to 10 mph on the ground!", icon: "⭐" },
      { category: 'baby', fact: "Baby peacocks are called peachicks, and males don't grow their colorful tail feathers until age 3!", icon: "🍼" },
      { category: 'group', fact: "A group of peacocks is called a muster or ostentation, fitting for such showy birds!", icon: "👥" },
      { category: 'sound', fact: "Peacocks make loud, piercing calls that can be heard from over a mile away, especially during mating season!", icon: "🔊" },
      { category: 'diet', fact: "Peacocks are omnivores that eat insects, plants, small reptiles, and even baby cobras!", icon: "🍽️" },
      { category: 'habitat', fact: "Peacocks originally come from India and Sri Lanka but now live in parks and farms worldwide.", icon: "🏠" },
      { category: 'unique', fact: "A peacock's tail has over 200 colorful eye-spots called ocelli that shimmer and seem to move!", icon: "💡" }
    ]
  },
  {
    id: 40,
    image: "parrot",
    clues: [
      "I have colorful feathers.",
      "I can mimic human speech.",
      "I use my strong beak to crack nuts."
    ],
    answer: "Parrot",
    emoji: "🦜",
    funFacts: [
      { category: 'ability', fact: "Parrots can live over 100 years and learn hundreds of words, solving puzzles like a 5-year-old child!", icon: "⭐" },
      { category: 'baby', fact: "Baby parrots are called chicks and are born completely helpless with no feathers!", icon: "🍼" },
      { category: 'group', fact: "A group of parrots is called a flock or pandemonium when they're being very noisy!", icon: "👥" },
      { category: 'sound', fact: "Parrots can mimic any sound they hear, from human speech to car alarms and phone rings!", icon: "🔊" },
      { category: 'diet', fact: "Parrots eat fruits, nuts, seeds, and flowers using their strong beaks to crack open tough shells!", icon: "🍽️" },
      { category: 'habitat', fact: "Parrots live in tropical rainforests, grasslands, and mountains mostly in the Southern Hemisphere.", icon: "🏠" },
      { category: 'unique', fact: "Parrots are one of the few animals that can understand and use tools, and they dance to music!", icon: "💡" }
    ]
  },
  {
    id: 41,
    image: "wolf",
    clues: [
      "I look similar to a large dog.",
      "I live and hunt in packs.",
      "I howl at the moon."
    ],
    answer: "Wolf",
    emoji: "🐺",
    funFacts: [
      { category: 'ability', fact: "Wolves can run up to 40 mph and have a bite force of 1,500 pounds per square inch!", icon: "⭐" },
      { category: 'baby', fact: "Baby wolves are called pups and are born deaf and blind, depending on their pack for 8 weeks!", icon: "🍼" },
      { category: 'group', fact: "A group of wolves is called a pack, led by the alpha pair who are usually the parents!", icon: "👥" },
      { category: 'sound', fact: "Wolves howl to communicate across long distances and each wolf has its own unique howl!", icon: "🔊" },
      { category: 'diet', fact: "Wolves hunt large prey like deer and elk in groups, and can eat up to 20 pounds in one meal!", icon: "🍽️" },
      { category: 'habitat', fact: "Wolves live in forests, tundra, and grasslands across North America, Europe, and Asia.", icon: "🏠" },
      { category: 'unique', fact: "Wolves have an incredible sense of smell 100 times better than humans and can track scents for miles!", icon: "💡" }
    ]
  },
  {
    id: 42,
    image: "raccoon",
    clues: [
      "I have a black mask around my eyes.",
      "I have nimble paws that can open things.",
      "I'm active at night and often look through trash."
    ],
    answer: "Raccoon",
    emoji: "🦝",
    funFacts: [
      { category: 'ability', fact: "Raccoons have incredibly sensitive paws with over 200,000 nerve endings and can open complex locks!", icon: "⭐" },
      { category: 'baby', fact: "Baby raccoons are called kits and are born blind and deaf, staying with their mother for a year!", icon: "🍼" },
      { category: 'group', fact: "A group of raccoons is called a nursery or gaze, and they often sleep together in winter.", icon: "👥" },
      { category: 'sound', fact: "Raccoons make over 200 different sounds including chirps, growls, and purring like cats!", icon: "🔊" },
      { category: 'diet', fact: "Raccoons are omnivores that 'wash' their food in water to make it easier to identify and eat!", icon: "🍽️" },
      { category: 'habitat', fact: "Raccoons live throughout North America in forests, cities, and suburbs, adapting to any environment.", icon: "🏠" },
      { category: 'unique', fact: "Raccoons are one of the few animals that can remember solutions to problems for at least three years!", icon: "💡" }
    ]
  },
  {
    id: 43,
    image: "skunk",
    clues: [
      "I am black with white stripes.",
      "I spray a very smelly liquid when scared.",
      "Other animals stay away from me."
    ],
    answer: "Skunk",
    emoji: "🦨",
    funFacts: [
      { category: 'ability', fact: "Skunks can spray their defensive musk accurately up to 10 feet and climb trees surprisingly well!", icon: "⭐" },
      { category: 'baby', fact: "Baby skunks are called kits and can't spray until they're 8 weeks old, but stomp their feet to warn predators!", icon: "🍼" },
      { category: 'group', fact: "A group of skunks is called a surfeit, and they sometimes share burrows in winter for warmth.", icon: "👥" },
      { category: 'sound', fact: "Skunks make chattering, hissing, and squealing sounds, and stomp their feet before spraying!", icon: "🔊" },
      { category: 'diet', fact: "Skunks are omnivores that love eating insects, grubs, and larvae, making them helpful garden pest controllers!", icon: "🍽️" },
      { category: 'habitat', fact: "Skunks live throughout North and South America in forests, grasslands, and suburban areas.", icon: "🏠" },
      { category: 'unique', fact: "Skunks are immune to some snake venoms and can eat venomous snakes without being harmed!", icon: "💡" }
    ]
  },
  {
    id: 44,
    image: "deer",
    clues: [
      "Males of my species have antlers.",
      "I live in forests and fields.",
      "I can jump very high."
    ],
    answer: "Deer",
    emoji: "🦌",
    funFacts: [
      { category: 'ability', fact: "Deer can jump 8 feet high and 30 feet long, and run up to 40 mph through dense forests!", icon: "⭐" },
      { category: 'baby', fact: "Baby deer are called fawns and have white spots for camouflage that disappear as they grow.", icon: "🍼" },
      { category: 'group', fact: "A group of deer is called a herd, and they communicate through body language and scent.", icon: "👥" },
      { category: 'sound', fact: "Deer make snorting, bleating, and grunting sounds, and stomp their feet when alarmed.", icon: "🔊" },
      { category: 'diet', fact: "Deer are herbivores that eat leaves, twigs, fruits, and can consume 6-8 pounds of food daily.", icon: "🍽️" },
      { category: 'habitat', fact: "Deer live in forests, grasslands, and suburban areas across most continents.", icon: "🏠" },
      { category: 'unique', fact: "Male deer shed and regrow their antlers every year, and they can weigh up to 40 pounds!", icon: "💡" }
    ]
  },
  {
    id: 45,
    image: "camel",
    clues: [
      "I can go a long time without water.",
      "I have one or two humps on my back.",
      "I live in deserts."
    ],
    answer: "Camel",
    emoji: "🐪",
    funFacts: [
      { category: 'ability', fact: "Camels can survive 10 months without water and drink 40 gallons in one sitting!", icon: "⭐" },
      { category: 'baby', fact: "Baby camels are called calves and can walk within 30 minutes of being born.", icon: "🍼" },
      { category: 'group', fact: "A group of camels is called a caravan, flock, or herd.", icon: "👥" },
      { category: 'sound', fact: "Camels grunt, moan, and make deep rumbling sounds to communicate.", icon: "🔊" },
      { category: 'diet', fact: "Camels eat thorny plants, dry grass, and saltbush that other animals can't digest.", icon: "🍽️" },
      { category: 'habitat', fact: "Camels live in hot deserts and cold steppes across Africa, Asia, and Australia.", icon: "🏠" },
      { category: 'unique', fact: "Camel humps store fat (not water) for energy, and they have three eyelids to protect from sand!", icon: "💡" }
    ]
  },
  {
    id: 46,
    image: "rhino",
    clues: [
      "I have thick skin that looks like armor.",
      "I have a horn on my nose.",
      "I'm the second largest land animal."
    ],
    answer: "Rhinoceros",
    emoji: "🦏",
    funFacts: [
      { category: 'ability', fact: "Rhinos can run up to 35 mph despite weighing up to 5,000 pounds!", icon: "⭐" },
      { category: 'baby', fact: "Baby rhinos are called calves and stay close to their mothers for 2-3 years.", icon: "🍼" },
      { category: 'group', fact: "A group of rhinos is called a crash, and they're mostly solitary except mothers with calves.", icon: "👥" },
      { category: 'sound', fact: "Rhinos snort, grunt, and make squeaking sounds, and can be surprisingly vocal!", icon: "🔊" },
      { category: 'diet', fact: "Rhinos are herbivores that eat grass, leaves, and branches, consuming 120 pounds daily.", icon: "🍽️" },
      { category: 'habitat', fact: "Rhinos live in grasslands, savannas, and forests in Africa and Asia.", icon: "🏠" },
      { category: 'unique', fact: "Rhino horns are made of keratin (like fingernails) and grow continuously throughout their lives!", icon: "💡" }
    ]
  },
  {
    id: 47,
    image: "hippopotamus",
    clues: [
      "I spend most of my time in water.",
      "I am very large with a big mouth.",
      "Despite my size, I can run very fast."
    ],
    answer: "Hippopotamus",
    emoji: "🦛",
    funFacts: [
      { category: 'ability', fact: "Hippos can run 30 mph on land and hold their breath underwater for 5 minutes!", icon: "⭐" },
      { category: 'baby', fact: "Baby hippos are called calves and can nurse underwater by closing their ears and nostrils.", icon: "🍼" },
      { category: 'group', fact: "A group of hippos is called a bloat in water or thunder on land.", icon: "👥" },
      { category: 'sound', fact: "Hippos make grunting, honking, and roaring sounds that can be heard both above and underwater!", icon: "🔊" },
      { category: 'diet', fact: "Hippos are mostly herbivores eating 80 pounds of grass nightly, but occasionally eat meat.", icon: "🍽️" },
      { category: 'habitat', fact: "Hippos live near rivers, lakes, and wetlands in sub-Saharan Africa.", icon: "🏠" },
      { category: 'unique', fact: "Hippos secrete red 'blood sweat' that acts as natural sunscreen and antibiotic!", icon: "💡" }
    ]
  },
  {
    id: 48,
    image: "gorilla",
    clues: [
      "I am the largest primate.",
      "I beat my chest when excited.",
      "I am very strong and live in Africa."
    ],
    answer: "Gorilla",
    emoji: "🦍",
    funFacts: [
      { category: 'ability', fact: "Gorillas are 10 times stronger than humans and can walk on their knuckles at 25 mph!", icon: "⭐" },
      { category: 'baby', fact: "Baby gorillas are called infants and cling to their mothers for 3-4 years.", icon: "🍼" },
      { category: 'group', fact: "A group of gorillas is called a troop or band, led by a silverback male.", icon: "👥" },
      { category: 'sound', fact: "Gorillas grunt, roar, and beat their chests to communicate, making over 25 different sounds!", icon: "🔊" },
      { category: 'diet', fact: "Gorillas are mostly herbivores eating 40 pounds of plants daily, plus occasional insects.", icon: "🍽️" },
      { category: 'habitat', fact: "Gorillas live in dense forests and mountains of central and eastern Africa.", icon: "🏠" },
      { category: 'unique', fact: "Gorillas share 98% of human DNA and can learn sign language with over 1,000 words!", icon: "💡" }
    ]
  },
  {
    id: 49,
    image: "squirrel",
    clues: [
      "I have a bushy tail.",
      "I collect and store nuts.",
      "I can climb trees very quickly."
    ],
    answer: "Squirrel",
    emoji: "🐿️",
    funFacts: [
      { category: 'ability', fact: "Squirrels can jump 10 times their body length and rotate their ankles 180 degrees to climb down trees headfirst!", icon: "⭐" },
      { category: 'baby', fact: "Baby squirrels are called kits or pups and are born blind, hairless, and only 1 inch long!", icon: "🍼" },
      { category: 'group', fact: "A group of squirrels is called a 'scurry' or 'dray', and they communicate through tail movements and chirping sounds.", icon: "👥" },
      { category: 'sound', fact: "Squirrels make chattering, barking, and clicking sounds to warn others of danger or claim territory.", icon: "🔊" },
      { category: 'diet', fact: "Squirrels eat nuts, seeds, fruits, and sometimes bird eggs, and can remember thousands of hiding spots!", icon: "🍽️" },
      { category: 'habitat', fact: "Squirrels live in trees, parks, and forests worldwide, building nests called 'dreys' high in tree branches.", icon: "🏠" },
      { category: 'unique', fact: "Squirrels' front teeth never stop growing, so they must constantly gnaw to keep them from getting too long!", icon: "💡" }
    ]
  },
  {
    id: 50,
    image: "hedgehog",
    clues: [
      "I have spikes all over my back.",
      "I roll into a ball when scared.",
      "I eat insects and worms."
    ],
    answer: "Hedgehog",
    emoji: "🦔",
    funFacts: [
      { category: 'ability', fact: "Hedgehogs can run up to 4 mph and swim surprisingly well, but they can't see very well!", icon: "⭐" },
      { category: 'baby', fact: "Baby hedgehogs are called hoglets and are born with soft white spines that harden within hours!", icon: "🍼" },
      { category: 'group', fact: "Hedgehogs are mostly solitary, but a group is called an 'array' - though they rarely gather together.", icon: "👥" },
      { category: 'sound', fact: "Hedgehogs grunt, snort, and make chirping sounds, and can even purr when content!", icon: "🔊" },
      { category: 'diet', fact: "Hedgehogs eat beetles, caterpillars, slugs, and sometimes small mice, consuming up to 200 grams nightly!", icon: "🍽️" },
      { category: 'habitat', fact: "Hedgehogs live in gardens, forests, and grasslands across Europe, Asia, and Africa.", icon: "🏠" },
      { category: 'unique', fact: "Hedgehogs have around 5,000-7,000 spines that they can raise or lower, and they hibernate in winter!", icon: "💡" }
    ]
  },
  {
    id: 51,
    image: "bat",
    clues: [
      "I am the only mammal that can truly fly.",
      "I sleep upside down.",
      "I use echolocation to find food at night."
    ],
    answer: "Bat",
    emoji: "🦇",
    funFacts: [
      { category: 'ability', fact: "Bats use echolocation like natural sonar, making up to 200 clicks per second to navigate in complete darkness!", icon: "⭐" },
      { category: 'baby', fact: "Baby bats are called pups and hang onto their mothers even during flight for the first few weeks!", icon: "🍼" },
      { category: 'group', fact: "A group of bats is called a 'colony' and can contain millions of bats living together in caves!", icon: "👥" },
      { category: 'sound', fact: "Bats make ultrasonic clicks and squeaks that are too high-pitched for humans to hear without special equipment.", icon: "🔊" },
      { category: 'diet', fact: "Most bats eat insects and can consume 1,000 mosquitoes per hour, while some eat fruit or nectar!", icon: "🍽️" },
      { category: 'habitat', fact: "Bats live on every continent except Antarctica, roosting in caves, trees, buildings, and bridges.", icon: "🏠" },
      { category: 'unique', fact: "Bats are the only mammals capable of true flight and some species can live over 30 years!", icon: "💡" }
    ]
  },
  {
    id: 52,
    image: "shark",
    clues: [
      "I am a fish with multiple rows of sharp teeth.",
      "I have to keep swimming to breathe.",
      "Many people are afraid of me."
    ],
    answer: "Shark",
    emoji: "🦈",
    funFacts: [
      { category: 'ability', fact: "Sharks can sense a single drop of blood in 25 gallons of water and detect electrical fields from other animals!", icon: "⭐" },
      { category: 'baby', fact: "Baby sharks are called pups and some species give birth to live young while others lay eggs called 'mermaid's purses'!", icon: "🍼" },
      { category: 'group', fact: "A group of sharks is called a 'shiver' and most sharks are solitary, but some species school together.", icon: "👥" },
      { category: 'sound', fact: "Sharks don't make vocal sounds but communicate through body language and can hear low-frequency sounds from miles away.", icon: "🔊" },
      { category: 'diet', fact: "Different sharks eat fish, seals, plankton, or squid - the largest sharks actually eat the smallest food (plankton)!", icon: "🍽️" },
      { category: 'habitat', fact: "Sharks live in oceans worldwide from shallow coral reefs to the deep sea, and some even swim up rivers!", icon: "🏠" },
      { category: 'unique', fact: "Sharks have existed for over 400 million years and their skeletons are made of cartilage, not bone!", icon: "💡" }
    ]
  },
  {
    id: 53,
    image: "whale",
    clues: [
      "I am the largest animal on Earth.",
      "I live in the ocean and breathe through a blowhole.",
      "I make very loud, deep sounds."
    ],
    answer: "Whale",
    emoji: "🐋",
    funFacts: [
      { category: 'ability', fact: "Blue whales can grow up to 100 feet long and weigh as much as 200 tons - as heavy as 33 elephants!", icon: "⭐" },
      { category: 'baby', fact: "Baby whales are called calves and drink up to 150 gallons of milk per day to grow quickly!", icon: "🍼" },
      { category: 'group', fact: "A group of whales is called a 'pod' and they work together to hunt, protect each other, and raise young.", icon: "👥" },
      { category: 'sound', fact: "Whales sing complex songs that can travel hundreds of miles underwater and last for hours!", icon: "🔊" },
      { category: 'diet', fact: "Some whales eat tiny krill and plankton, while others hunt fish, squid, and seals using teamwork.", icon: "🍽️" },
      { category: 'habitat', fact: "Whales live in all oceans worldwide, migrating thousands of miles between feeding and breeding areas.", icon: "🏠" },
      { category: 'unique', fact: "Whales are mammals that evolved from land animals and still have tiny hip bones from their walking ancestors!", icon: "💡" }
    ]
  },
  {
    id: 54,
    image: "ant",
    clues: [
      "I am very small but strong for my size.",
      "I live in colonies with thousands of others.",
      "I can carry objects many times my weight."
    ],
    answer: "Ant",
    emoji: "🐜",
    funFacts: [
      { category: 'ability', fact: "Ants can lift 10-50 times their own body weight and work together to carry objects 100 times heavier!", icon: "⭐" },
      { category: 'baby', fact: "Baby ants are called larvae and are fed and cared for by worker ants until they become adults.", icon: "🍼" },
      { category: 'group', fact: "An ant colony can contain millions of ants with different jobs: workers, soldiers, and one queen!", icon: "👥" },
      { category: 'sound', fact: "Ants communicate by touching antennae and leaving scent trails, but some species can make squeaking sounds!", icon: "🔊" },
      { category: 'diet', fact: "Different ants eat seeds, other insects, nectar, or even grow their own mushroom gardens underground!", icon: "🍽️" },
      { category: 'habitat', fact: "Ants live on every continent except Antarctica, building complex underground cities with tunnels and rooms.", icon: "🏠" },
      { category: 'unique', fact: "All ants together weigh about the same as all humans combined, and they've been farming food for 50 million years!", icon: "💡" }
    ]
  },
  {
    id: 55,
    image: "bee",
    clues: [
      "I make honey.",
      "I have yellow and black stripes.",
      "I can sting when I'm threatened."
    ],
    answer: "Bee",
    emoji: "🐝",
    funFacts: [
      { category: 'ability', fact: "Bees can fly up to 15 mph and beat their wings 230 times per second to create their buzzing sound!", icon: "⭐" },
      { category: 'baby', fact: "Baby bees are called larvae and are fed 'bee bread' made from pollen and honey by worker bees.", icon: "🍼" },
      { category: 'group', fact: "A bee colony can have 80,000 bees in summer, with one queen, hundreds of drones, and thousands of workers!", icon: "👥" },
      { category: 'sound', fact: "Bees buzz by beating their wings rapidly and can make different buzzing sounds to communicate with the hive.", icon: "🔊" },
      { category: 'diet', fact: "Bees collect nectar and pollen from flowers, and one bee makes only 1/12 teaspoon of honey in her lifetime!", icon: "🍽️" },
      { category: 'habitat', fact: "Bees live worldwide except Antarctica, building hexagonal wax combs in hives, trees, or beekeepers' boxes.", icon: "🏠" },
      { category: 'unique', fact: "Bees do a 'waggle dance' to tell other bees where flowers are and can see ultraviolet patterns on petals!", icon: "💡" }
    ]
  },
  {
    id: 56,
    image: "ladybug",
    clues: [
      "I have red wings with black spots.",
      "I eat garden pests like aphids.",
      "People consider me lucky."
    ],
    answer: "Ladybug",
    emoji: "🐞",
    funFacts: [
      { category: 'ability', fact: "Ladybugs can eat up to 5,000 aphids in their lifetime and can fly up to 37 miles per hour!", icon: "⭐" },
      { category: 'baby', fact: "Baby ladybugs are called larvae and look like tiny black and orange alligators with spikes!", icon: "🍼" },
      { category: 'group', fact: "A group of ladybugs is called a 'loveliness' and they hibernate together in large clusters under rocks.", icon: "👥" },
      { category: 'sound', fact: "Ladybugs don't make sounds with their voices but can create vibrations with their wing cases when flying.", icon: "🔊" },
      { category: 'diet', fact: "Ladybugs primarily eat aphids, scale insects, and mites, making them natural pest controllers for gardens!", icon: "🍽️" },
      { category: 'habitat', fact: "Ladybugs live worldwide in gardens, fields, and forests, often gathering on plants with lots of aphids.", icon: "🏠" },
      { category: 'unique', fact: "Ladybugs secrete yellow fluid from their leg joints when scared, and their bright colors warn predators they taste bad!", icon: "💡" }
    ]
  },
  {
    id: 57,
    image: "spider",
    clues: [
      "I have eight legs.",
      "I spin webs to catch my food.",
      "I am not actually an insect."
    ],
    answer: "Spider",
    emoji: "🕷️",
    funFacts: [
      { category: 'ability', fact: "Spiders can produce up to 7 different types of silk, each stronger than steel by weight!", icon: "⭐" },
      { category: 'baby', fact: "Baby spiders are called spiderlings and some mothers carry hundreds of babies on their backs!", icon: "🍼" },
      { category: 'group', fact: "Most spiders are solitary, but some species live in colonies and work together to build massive webs.", icon: "👥" },
      { category: 'sound', fact: "Spiders communicate by plucking web strands like guitar strings and through vibrations and leg movements.", icon: "🔊" },
      { category: 'diet', fact: "Spiders eat insects, and the largest ones can catch small birds, lizards, and frogs in their webs!", icon: "🍽️" },
      { category: 'habitat', fact: "Spiders live everywhere except Antarctica, from underground to treetops, and even on water surfaces!", icon: "🏠" },
      { category: 'unique', fact: "Spiders are arachnids with 8 legs (not insects with 6), and they taste and smell with their feet!", icon: "💡" }
    ]
  },
  {
    id: 58,
    image: "scorpion",
    clues: [
      "I have a stinger on my tail.",
      "I glow under ultraviolet light.",
      "I live in dry, desert areas."
    ],
    answer: "Scorpion",
    emoji: "🦂",
    funFacts: [
      { category: 'ability', fact: "Scorpions can survive a whole year without food and can live underwater for up to 48 hours!", icon: "⭐" },
      { category: 'baby', fact: "Baby scorpions are born live and ride on their mother's back for protection until their first molt!", icon: "🍼" },
      { category: 'group', fact: "Scorpions are usually solitary, but some species gather in groups during winter hibernation.", icon: "👥" },
      { category: 'sound', fact: "Scorpions make clicking, hissing, or scratching sounds by rubbing body parts together when threatened.", icon: "🔊" },
      { category: 'diet', fact: "Scorpions eat insects, spiders, lizards, and small mammals, using their pincers to grab and crush prey!", icon: "🍽️" },
      { category: 'habitat', fact: "Scorpions live in deserts, forests, and grasslands worldwide, hiding under rocks and in burrows during the day.", icon: "🏠" },
      { category: 'unique', fact: "All scorpions glow bright blue-green under UV light due to chemicals in their exoskeleton!", icon: "💡" }
    ]
  },
  {
    id: 59,
    image: "lobster",
    clues: [
      "I live in the ocean.",
      "I have a hard shell and two large claws.",
      "My color changes when I'm cooked."
    ],
    answer: "Lobster",
    emoji: "🦞",
    funFacts: [
      { category: 'ability', fact: "Lobsters can regrow lost claws, legs, and antennae, and some can live over 100 years!", icon: "⭐" },
      { category: 'baby', fact: "Baby lobsters are called larvae and float near the ocean surface before settling on the seafloor.", icon: "🍼" },
      { category: 'group', fact: "Lobsters are mostly solitary but sometimes gather in groups called 'pods' during migration.", icon: "👥" },
      { category: 'sound', fact: "Lobsters make sounds by rubbing their antennae against rough patches near their eyes to communicate.", icon: "🔊" },
      { category: 'diet', fact: "Lobsters are scavengers eating fish, crabs, clams, sea urchins, and sometimes other lobsters!", icon: "🍽️" },
      { category: 'habitat', fact: "Lobsters live on rocky ocean floors worldwide, hiding in crevices and burrows during the day.", icon: "🏠" },
      { category: 'unique', fact: "Lobsters have blue blood, taste with their feet, and were once considered 'poor people's food'!", icon: "💡" }
    ]
  },
  {
    id: 60,
    image: "crab",
    clues: [
      "I walk sideways.",
      "I have a hard shell and two claws.",
      "I can live in water and on land."
    ],
    answer: "Crab",
    emoji: "🦀",
    funFacts: [
      { category: 'ability', fact: "Crabs can walk in any direction but prefer sideways because their legs bend that way!", icon: "⭐" },
      { category: 'baby', fact: "Baby crabs are called larvae and go through many molting stages before becoming adult crabs.", icon: "🍼" },
      { category: 'group', fact: "A group of crabs is called a 'cast' and they sometimes work together to find food and protection.", icon: "👥" },
      { category: 'sound', fact: "Crabs communicate by drumming their claws, grinding their teeth, or waving their claws in patterns.", icon: "🔊" },
      { category: 'diet', fact: "Crabs are omnivores eating algae, small fish, worms, plankton, and anything they can find!", icon: "🍽️" },
      { category: 'habitat', fact: "Crabs live in oceans, freshwater, and on land in beaches, forests, and even trees worldwide!", icon: "🏠" },
      { category: 'unique', fact: "Crabs have 10 legs (8 for walking, 2 claws), breathe through gills, and shed their shells to grow!", icon: "💡" }
    ]
  },
  {
    id: 61,
    image: "lizard",
    clues: [
      "I am a reptile with scaly skin.",
      "Some of my kind can regrow their tails.",
      "I like to bask in the sun to warm up."
    ],
    answer: "Lizard",
    emoji: "🦎",
    funFacts: [
      { category: 'ability', fact: "Many lizards can detach their tails to escape predators and regrow a new one within 2 months!", icon: "⭐" },
      { category: 'baby', fact: "Baby lizards are called hatchlings and most can take care of themselves immediately after hatching!", icon: "🍼" },
      { category: 'group', fact: "Most lizards are solitary, but some species like geckos live in groups and communicate with chirps.", icon: "👥" },
      { category: 'sound', fact: "Lizards make hissing, clicking, chirping, or barking sounds, and geckos are famous for their loud calls!", icon: "🔊" },
      { category: 'diet', fact: "Different lizards eat insects, plants, small animals, or fruit - some even have specialized diets like nectar!", icon: "🍽️" },
      { category: 'habitat', fact: "Lizards live worldwide except Antarctica, from deserts to rainforests, and some even live in water!", icon: "🏠" },
      { category: 'unique', fact: "Lizards are cold-blooded and change color for communication, camouflage, or temperature regulation!", icon: "💡" }
    ]
  },
  {
    id: 62,
    image: "dinosaur",
    clues: [
      "I lived millions of years ago.",
      "I am extinct now.",
      "Some of my kind were very large."
    ],
    answer: "Dinosaur",
    emoji: "🦖",
    funFacts: [
      { category: 'ability', fact: "Some dinosaurs could run 40 mph, while others were gentle giants that ate only plants!", icon: "⭐" },
      { category: 'baby', fact: "Baby dinosaurs are called hatchlings and some were only the size of a robin when they hatched!", icon: "🍼" },
      { category: 'group', fact: "Some dinosaurs lived in herds for protection, while others were solitary hunters like T-Rex.", icon: "👥" },
      { category: 'sound', fact: "Scientists think dinosaurs made rumbling, hissing, and roaring sounds, and some may have sung like birds!", icon: "🔊" },
      { category: 'diet', fact: "Different dinosaurs ate plants, meat, fish, or insects - some even had hundreds of tiny teeth for grinding!", icon: "🍽️" },
      { category: 'habitat', fact: "Dinosaurs lived all over the world in forests, deserts, swamps, and near oceans for 165 million years!", icon: "🏠" },
      { category: 'unique', fact: "Birds are actually living dinosaurs! Some dinosaurs had feathers, and fossils show us amazing details from millions of years ago.", icon: "💡" }
    ]
  },
  {
    id: 63,
    image: "brontosaurus",
    clues: [
      "I was a very large dinosaur.",
      "I had a long neck and tail.",
      "I ate plants and leaves from tall trees."
    ],
    answer: "Brontosaurus",
    emoji: "🦕",
    funFacts: [
      { category: 'ability', fact: "Brontosaurus could reach heights of 72 feet long and used their long necks like giant cranes to reach treetops!", icon: "⭐" },
      { category: 'baby', fact: "Baby Brontosaurus hatched from eggs the size of footballs and grew incredibly fast to avoid being eaten!", icon: "🍼" },
      { category: 'group', fact: "Brontosaurus traveled in herds for protection, and their footsteps could be heard from miles away!", icon: "👥" },
      { category: 'sound', fact: "Scientists think Brontosaurus made deep rumbling sounds that could travel long distances through their herds.", icon: "🔊" },
      { category: 'diet', fact: "Brontosaurus ate up to 880 pounds of plants per day, swallowing stones to help grind food in their stomachs!", icon: "🍽️" },
      { category: 'habitat', fact: "Brontosaurus lived in warm, swampy areas with lots of ferns and tall conifer trees 150 million years ago.", icon: "🏠" },
      { category: 'unique', fact: "Brontosaurus had hearts the size of small cars to pump blood all the way up their 30-foot necks!", icon: "💡" }
    ]
  },
  {
    id: 64,
    image: "t_rex",
    clues: [
      "I was a fierce dinosaur with sharp teeth.",
      "I had small arms and powerful legs.",
      "My name means 'tyrant lizard king'."
    ],
    answer: "Tyrannosaurus Rex",
    emoji: "🦖",
    funFacts: [
      { category: 'ability', fact: "T-Rex had the strongest bite force ever recorded - powerful enough to crush a car!", icon: "⭐" },
      { category: 'baby', fact: "Baby T-Rex were covered in fuzzy feathers and were about the size of a turkey when they hatched!", icon: "🍼" },
      { category: 'group', fact: "T-Rex was mostly a solitary hunter, but some fossils suggest they may have hunted in family groups.", icon: "👥" },
      { category: 'sound', fact: "T-Rex likely made deep rumbling roars that could be felt as vibrations through the ground!", icon: "🔊" },
      { category: 'diet', fact: "T-Rex ate other dinosaurs and could consume 500 pounds of meat in one bite!", icon: "🍽️" },
      { category: 'habitat', fact: "T-Rex lived in warm, humid forests and river plains in what is now North America 68 million years ago.", icon: "🏠" },
      { category: 'unique', fact: "Despite tiny arms, T-Rex had excellent vision, could run 25 mph, and had teeth as long as bananas!", icon: "💡" }
    ]
  },
  {
    id: 65,
    image: "mosquito",
    clues: [
      "I'm a small flying insect.",
      "I make a buzzing sound.",
      "I bite people and animals to drink their blood."
    ],
    answer: "Mosquito",
    emoji: "🦟",
    funFacts: [
      { category: 'ability', fact: "Mosquitoes can detect carbon dioxide from 100 feet away and beat their wings 300-600 times per second!", icon: "⭐" },
      { category: 'baby', fact: "Baby mosquitoes are called larvae and live in water, breathing through snorkel-like tubes!", icon: "🍼" },
      { category: 'group', fact: "Mosquitoes swarm in huge clouds during mating season, but only females bite for blood to make eggs.", icon: "👥" },
      { category: 'sound', fact: "Female mosquitoes buzz at a higher pitch than males, and the buzzing sound comes from their rapid wing beats!", icon: "🔊" },
      { category: 'diet', fact: "Male mosquitoes eat flower nectar and plant juices, while females need blood protein to develop eggs.", icon: "🍽️" },
      { category: 'habitat', fact: "Mosquitoes live worldwide except Antarctica, breeding in any standing water from puddles to tree holes!", icon: "🏠" },
      { category: 'unique', fact: "Mosquitoes are the deadliest animal to humans due to diseases they spread, but they're also important pollinators!", icon: "💡" }
    ]
  },
  {
    id: 66,
    image: "fly",
    clues: [
      "I have two wings and large eyes.",
      "I can walk on walls and ceilings.",
      "People often try to swat me."
    ],
    answer: "Fly",
    emoji: "🪰",
    funFacts: [
      { category: 'ability', fact: "Flies can walk on walls and ceilings using tiny sticky pads and hooks on their feet, and they see the world in slow motion!", icon: "⭐" },
      { category: 'baby', fact: "Baby flies are called maggots and can grow from egg to adult in just 7-10 days!", icon: "🍼" },
      { category: 'group', fact: "A group of flies is called a 'swarm' or 'cloud', and they communicate through wing vibrations and pheromones.", icon: "👥" },
      { category: 'sound', fact: "Flies buzz by beating their wings 200 times per second, creating their characteristic annoying sound!", icon: "🔊" },
      { category: 'diet', fact: "House flies taste with their feet and eat sugar, rotting food, and liquids by spitting on food to dissolve it first!", icon: "🍽️" },
      { category: 'habitat', fact: "Flies live worldwide and are found everywhere humans are, thriving in warm, moist environments.", icon: "🏠" },
      { category: 'unique', fact: "Flies have compound eyes with thousands of lenses, giving them nearly 360-degree vision to spot danger!", icon: "💡" }
    ]
  },
  {
    id: 67,
    image: "beetle",
    clues: [
      "I have a hard shell covering my wings.",
      "I come in many different colors and sizes.",
      "I have six legs and antennae."
    ],
    answer: "Beetle",
    emoji: "🪲",
    funFacts: [
      { category: 'ability', fact: "Butterflies can see ultraviolet colors invisible to humans and migrate thousands of miles using the sun as their compass!", icon: "⭐" },
      { category: 'baby', fact: "Baby butterflies are called caterpillars and completely transform their bodies inside a chrysalis - it's called metamorphosis!", icon: "🍼" },
      { category: 'group', fact: "A group of butterflies is called a 'flutter' or 'rainbow', and they often migrate together in huge groups.", icon: "👥" },
      { category: 'sound', fact: "Most butterflies are silent, but some species make clicking sounds with their wings to communicate or scare predators.", icon: "🔊" },
      { category: 'diet', fact: "Butterflies drink nectar through a long tube called a proboscis, and some also drink mud, rotting fruit, or animal dung for minerals!", icon: "🍽️" },
      { category: 'habitat', fact: "Butterflies live on every continent except Antarctica, preferring gardens, meadows, and forests with lots of flowers.", icon: "🏠" },
      { category: 'unique', fact: "Butterflies taste with their feet, smell with their antennae, and some can live 8 months while others live just 2 weeks!", icon: "💡" }
    ]
  },
  {
    id: 68,
    image: "cockroach",
    clues: [
      "I can survive without my head for weeks.",
      "I can live almost anywhere.",
      "Many people don't like to see me in their house."
    ],
    answer: "Cockroach",
    emoji: "🪳",
    funFacts: [
      { category: 'ability', fact: "Caterpillars can increase their body weight 10,000 times from hatching to pupation in just a few weeks!", icon: "⭐" },
      { category: 'baby', fact: "Caterpillars ARE baby butterflies or moths! They start as tiny eggs and shed their skin 4-5 times as they grow.", icon: "🍼" },
      { category: 'group', fact: "Most caterpillars are solitary, but some species live in groups and build silk tents together for protection.", icon: "👥" },
      { category: 'sound', fact: "Some caterpillars can make clicking, squeaking, or rustling sounds to scare away predators or communicate.", icon: "🔊" },
      { category: 'diet', fact: "Caterpillars are eating machines that munch on leaves, and many will only eat one specific type of plant!", icon: "🍽️" },
      { category: 'habitat', fact: "Caterpillars live on plants worldwide, from rainforest canopies to garden vegetables and wild meadows.", icon: "🏠" },
      { category: 'unique', fact: "Caterpillars have 6 true legs and up to 10 'false legs' called prolegs, and some can shoot their poop 6 feet away!", icon: "💡" }
    ]
  },
  {
    id: 69,
    image: "worm",
    clues: [
      "I have a long, thin body with no legs.",
      "I live underground and help soil stay healthy.",
      "Birds like to eat me."
    ],
    answer: "Worm",
    emoji: "🪱",
    funFacts: [
      { category: 'ability', fact: "Earthworms can regenerate lost body parts and feel vibrations through their skin to detect danger!", icon: "⭐" },
      { category: 'baby', fact: "Baby worms hatch from cocoons and are exact miniature copies of adult worms, ready to start eating soil!", icon: "🍼" },
      { category: 'group', fact: "Worms don't form social groups but thousands can live together in rich soil, helping each other by aerating the earth.", icon: "👥" },
      { category: 'sound', fact: "Worms are silent creatures but create rustling sounds as they move through leaves and soil.", icon: "🔊" },
      { category: 'diet', fact: "Earthworms eat soil, dead leaves, and organic matter, digesting everything and creating nutrient-rich worm castings!", icon: "🍽️" },
      { category: 'habitat', fact: "Worms live in moist soil worldwide, from gardens to forests, and come to the surface when it rains.", icon: "🏠" },
      { category: 'unique', fact: "Worms have no eyes or ears but can sense light and vibrations, and they breathe through their skin!", icon: "💡" }
    ]
  },
  {
    id: 70,
    image: "jellyfish",
    clues: [
      "I live in the ocean and have a transparent body.",
      "I have long tentacles that can sting.",
      "I don't have a brain or heart."
    ],
    answer: "Jellyfish",
    emoji: "🪼",
    funFacts: [
      { category: 'ability', fact: "Jellyfish have survived for 650 million years without brains, hearts, or blood, and some are immortal!", icon: "⭐" },
      { category: 'baby', fact: "Baby jellyfish are called polyps and look like tiny sea anemones before transforming into swimming jellyfish!", icon: "🍼" },
      { category: 'group', fact: "A group of jellyfish is called a 'smack', 'bloom', or 'swarm', and thousands can drift together in ocean currents.", icon: "👥" },
      { category: 'sound', fact: "Jellyfish are completely silent as they have no vocal cords, but they create gentle whooshing sounds while swimming.", icon: "🔊" },
      { category: 'diet', fact: "Jellyfish eat plankton, small fish, and other jellyfish by stunning them with their tentacles and absorbing them!", icon: "🍽️" },
      { category: 'habitat', fact: "Jellyfish live in oceans worldwide, from surface waters to the deep sea, and some live in freshwater lakes.", icon: "🏠" },
      { category: 'unique', fact: "Jellyfish are 95% water, can clone themselves, and one species can reverse its aging process to become young again!", icon: "💡" }
    ]
  },
  {
    id: 71,
    image: "fish",
    clues: [
      "I live in water and breathe through gills.",
      "I have scales and fins.",
      "I move by swishing my tail."
    ],
    answer: "Fish",
    emoji: "🐟",
    funFacts: [
      { category: 'ability', fact: "Fish can breathe underwater through gills and some can jump, fly, or even climb waterfalls!", icon: "⭐" },
      { category: 'baby', fact: "Baby fish are called fry and many start life as tiny transparent larvae floating in the water.", icon: "🍼" },
      { category: 'group', fact: "A group of fish is called a 'school' and they swim together for protection, sometimes in groups of millions!", icon: "👥" },
      { category: 'sound', fact: "Fish make popping, clicking, and grinding sounds using their swim bladders, teeth, or fins to communicate!", icon: "🔊" },
      { category: 'diet', fact: "Different fish eat plankton, algae, insects, other fish, or even coral - some are vegetarians and others are fierce predators!", icon: "🍽️" },
      { category: 'habitat', fact: "Fish live in every water environment on Earth, from frozen Arctic seas to hot desert springs.", icon: "🏠" },
      { category: 'unique', fact: "Fish have a special organ called a lateral line that detects water movement, and some can produce electricity!", icon: "💡" }
    ]
  },
  {
    id: 72,
    image: "blowfish",
    clues: [
      "I can puff up when I feel threatened.",
      "I have spines all over my body.",
      "I can be poisonous if eaten."
    ],
    answer: "Blowfish",
    emoji: "🐡",
    funFacts: [
      { category: 'ability', fact: "Pufferfish can inflate their bodies to 3 times normal size by swallowing water or air to scare predators!", icon: "⭐" },
      { category: 'baby', fact: "Baby pufferfish are called fry and some fathers build beautiful circular sand nests to attract mates and protect eggs!", icon: "🍼" },
      { category: 'group', fact: "Most pufferfish are solitary, but some species gather in small groups during breeding season.", icon: "👥" },
      { category: 'sound', fact: "Pufferfish make grinding and clicking sounds with their teeth, and some hum during courtship rituals!", icon: "🔊" },
      { category: 'diet', fact: "Pufferfish eat algae, small invertebrates, and shellfish, using their strong beak-like teeth to crush hard shells.", icon: "🍽️" },
      { category: 'habitat', fact: "Pufferfish live in warm ocean waters worldwide, especially around coral reefs and shallow coastal areas.", icon: "🏠" },
      { category: 'unique', fact: "Many pufferfish are extremely poisonous - one fish contains enough toxin to kill 30 adult humans, but they're still eaten as a delicacy!", icon: "💡" }
    ]
  },
  {
    id: 73,
    image: "turkey",
    clues: [
      "I am a large bird with a fan-shaped tail.",
      "I make a 'gobble' sound.",
      "I am traditionally eaten on Thanksgiving."
    ],
    answer: "Turkey",
    emoji: "🦃",
    funFacts: [
      { category: 'ability', fact: "Turkeys can fly up to 55 mph for short distances and run 20 mph on the ground with their powerful legs!", icon: "⭐" },
      { category: 'baby', fact: "Baby turkeys are called poults and can walk and feed themselves within hours of hatching!", icon: "🍼" },
      { category: 'group', fact: "A group of turkeys is called a 'rafter' (wild) or 'flock' (domestic), and they have complex social hierarchies.", icon: "👥" },
      { category: 'sound', fact: "Turkeys gobble, cluck, purr, and yelp to communicate - males gobble loudly to attract females and claim territory!", icon: "🔊" },
      { category: 'diet', fact: "Turkeys are omnivores eating acorns, seeds, insects, small reptiles, and berries - they swallow small stones to help digest food!", icon: "🍽️" },
      { category: 'habitat', fact: "Wild turkeys live in forests across North America, roosting in trees at night for safety from predators.", icon: "🏠" },
      { category: 'unique', fact: "Turkeys have excellent color vision, can see in nearly 270-degree field of view, and their heads change color with emotions!", icon: "💡" }
    ]
  },
  {
    id: 74,
    image: "rooster",
    clues: [
      "I am a male chicken.",
      "I crow in the morning to wake people up.",
      "I have a red comb on top of my head."
    ],
    answer: "Rooster",
    emoji: "🐓",
    funFacts: [
      { category: 'ability', fact: "Roosters can crow at 140 decibels (louder than a jet engine) and have an internal clock that tells them when to crow!", icon: "⭐" },
      { category: 'baby', fact: "Baby roosters are called chicks and can be identified as male by their more prominent combs and aggressive behavior.", icon: "🍼" },
      { category: 'group', fact: "Roosters lead flocks of hens in a 'pecking order' where they establish dominance through displays and fights.", icon: "👥" },
      { category: 'sound', fact: "Roosters crow to mark territory, alert the flock to danger, and show dominance - they can make over 30 different sounds!", icon: "🔊" },
      { category: 'diet', fact: "Roosters eat seeds, insects, worms, fruits, and vegetables, and they help hens find food by calling them over to good spots!", icon: "🍽️" },
      { category: 'habitat', fact: "Roosters live on farms and in rural areas worldwide, preferring areas with shelter, food sources, and places to roost.", icon: "🏠" },
      { category: 'unique', fact: "Roosters have a special membrane that protects their eardrums when they crow, and their tail feathers can grow 3 feet long!", icon: "💡" }
    ]
  },
  {
    id: 75,
    image: "beaver",
    clues: [
      "I build dams in rivers.",
      "I have a flat, paddle-like tail.",
      "I chew down trees with my strong teeth."
    ],
    answer: "Beaver",
    emoji: "🦫",
    funFacts: [
      { category: 'ability', fact: "Beavers can hold their breath for 15 minutes underwater and their teeth never stop growing, staying sharp by constant gnawing!", icon: "⭐" },
      { category: 'baby', fact: "Baby beavers are called kits and are born with fur and open eyes, able to swim within 24 hours!", icon: "🍼" },
      { category: 'group', fact: "Beavers live in family groups called colonies, working together to build and maintain their dams and lodges.", icon: "👥" },
      { category: 'sound', fact: "Beavers communicate with whistles, grunts, and by slapping their tails on water to warn of danger!", icon: "🔊" },
      { category: 'diet', fact: "Beavers eat tree bark, roots, and aquatic plants - they prefer aspen, willow, and poplar trees and can digest wood!", icon: "🍽️" },
      { category: 'habitat', fact: "Beavers live near rivers, streams, and ponds in North America and Europe, creating wetland ecosystems with their dams.", icon: "🏠" },
      { category: 'unique', fact: "Beavers are nature's engineers - their dams can be seen from space, and they create habitats for hundreds of other species!", icon: "💡" }
    ]
  },
  {
    id: 76,
    image: "otter",
    clues: [
      "I spend a lot of time in water.",
      "I use rocks to crack open shells.",
      "I hold hands with others of my kind while sleeping."
    ],
    answer: "Otter",
    emoji: "🦦",
    funFacts: [
      { category: 'ability', fact: "Otters can dive 300 feet deep, stay underwater for 8 minutes, and use tools like rocks to crack open shellfish!", icon: "⭐" },
      { category: 'baby', fact: "Baby otters are called pups and are born helpless - mothers carry them on their bellies while swimming!", icon: "🍼" },
      { category: 'group', fact: "A group of otters is called a 'raft' when floating together and a 'romp' when playing on land!", icon: "👥" },
      { category: 'sound', fact: "Otters chirp, whistle, chatter, and growl to communicate, and each otter has its own unique voice!", icon: "🔊" },
      { category: 'diet', fact: "Otters eat fish, crabs, sea urchins, and shellfish - they have the densest fur in the animal kingdom to stay warm while eating!", icon: "🍽️" },
      { category: 'habitat', fact: "Otters live near rivers, lakes, and coasts worldwide, preferring areas with clean water and plenty of fish.", icon: "🏠" },
      { category: 'unique', fact: "Sea otters hold hands while sleeping to keep from drifting apart, and they have a pocket of skin to store their favorite tools!", icon: "💡" }
    ]
  },
  {
    id: 77,
    image: "seal",
    clues: [
      "I have flippers instead of legs.",
      "I can dive deep under water.",
      "I balance balls on my nose in shows."
    ],
    answer: "Seal",
    emoji: "🦭",
    funFacts: [
      { category: 'ability', fact: "Seals can dive over 7,000 feet deep, hold their breath for 2 hours, and rotate their rear flippers to walk on land!", icon: "⭐" },
      { category: 'baby', fact: "Baby seals are called pups and recognize their mothers by unique calls among thousands of other seals!", icon: "🍼" },
      { category: 'group', fact: "Seals gather in huge groups called 'pods' or 'colonies' on beaches, sometimes with thousands of individuals together!", icon: "👥" },
      { category: 'sound', fact: "Seals bark, roar, grunt, and make trilling sounds - each seal has a unique voice for identification!", icon: "🔊" },
      { category: 'diet', fact: "Seals eat fish, squid, shellfish, and krill, swallowing most food whole and using their whiskers to detect prey!", icon: "🍽️" },
      { category: 'habitat', fact: "Seals live in oceans worldwide, coming ashore on beaches, rocky coasts, and ice floes to rest and breed.", icon: "🏠" },
      { category: 'unique', fact: "Seals can sleep underwater by floating vertically and surfacing to breathe automatically, and they cry tears to remove salt!", icon: "💡" }
    ]
  },
  {
    id: 78,
    image: "walrus",
    clues: [
      "I have two long tusks.",
      "I am very large and live in cold oceans.",
      "I have whiskers and like to lie on ice."
    ],
    answer: "Walrus",
    emoji: "🦭",
    funFacts: [
      { category: 'ability', fact: "Walruses can weigh up to 4,000 pounds and use their tusks like ice picks to haul themselves out of freezing water!", icon: "⭐" },
      { category: 'baby', fact: "Baby walruses are called calves and stay close to their mothers for 2-3 years, riding on their backs while swimming!", icon: "🍼" },
      { category: 'group', fact: "Walruses live in large herds called 'pods' and huddle together on ice floes for warmth and protection.", icon: "👥" },
      { category: 'sound', fact: "Walruses bellow, bark, and roar loudly - males make bell-like sounds underwater to attract mates!", icon: "🔊" },
      { category: 'diet', fact: "Walruses mainly eat clams and other shellfish, using their whiskers to find food on the ocean floor in murky water!", icon: "🍽️" },
      { category: 'habitat', fact: "Walruses live in the Arctic Ocean around ice floes, hauling out on beaches and ice to rest and socialize.", icon: "🏠" },
      { category: 'unique', fact: "Walrus tusks can grow 3 feet long and weigh 12 pounds each - they're actually elongated canine teeth!", icon: "💡" }
    ]
  },
  {
    id: 79,
    image: "sloth",
    clues: [
      "I move very, very slowly.",
      "I spend most of my life hanging in trees.",
      "I am named after one of the seven deadly sins."
    ],
    answer: "Sloth",
    emoji: "🦥",
    funFacts: [
      { category: 'ability', fact: "Sloths move so slowly that algae grows on their fur for camouflage, and they can rotate their heads 270 degrees!", icon: "⭐" },
      { category: 'baby', fact: "Baby sloths are called cubs and cling to their mothers for 6-9 months, learning which leaves are safe to eat!", icon: "🍼" },
      { category: 'group', fact: "Sloths are mostly solitary but sometimes gather in 'beds' in the same tree, and mothers pass territories to daughters.", icon: "👥" },
      { category: 'sound', fact: "Sloths make soft vocalizations like squeaks, clicks, and whistles, but are generally very quiet animals.", icon: "🔊" },
      { category: 'diet', fact: "Sloths eat leaves, buds, and tender shoots - their stomachs have multiple chambers like cows to digest tough plant matter!", icon: "🍽️" },
      { category: 'habitat', fact: "Sloths live in rainforest canopies in Central and South America, rarely coming down to the ground.", icon: "🏠" },
      { category: 'unique', fact: "Sloths only poop once a week and lose 30% of their body weight when they do - they risk their lives climbing down for this!", icon: "💡" }
    ]
  },
  {
    id: 80,
    image: "donkey",
    clues: [
      "I am similar to a horse but have longer ears.",
      "I make a 'hee-haw' sound.",
      "People ride on me or use me to carry loads."
    ],
    answer: "Donkey",
    emoji: "🫏",
    funFacts: [
      { category: 'ability', fact: "Donkeys can carry up to 30% of their body weight and have an excellent memory that helps them navigate difficult terrain!", icon: "⭐" },
      { category: 'baby', fact: "Baby donkeys are called foals and are born after an 11-14 month pregnancy - longer than horses!", icon: "🍼" },
      { category: 'group', fact: "A group of donkeys is called a 'drove' or 'herd', and they form strong social bonds within their groups.", icon: "👥" },
      { category: 'sound', fact: "Donkeys bray with their famous 'hee-haw' sound that can be heard up to 3 miles away to communicate over long distances!", icon: "🔊" },
      { category: 'diet', fact: "Donkeys eat grass, hay, straw, and browse on shrubs - they're more efficient than horses at digesting poor-quality food!", icon: "🍽️" },
      { category: 'habitat', fact: "Donkeys originally lived in African and Asian deserts but now live worldwide, preferring dry, rocky areas.", icon: "🏠" },
      { category: 'unique', fact: "Donkeys are incredibly intelligent and cautious, which is why they seem 'stubborn' - they think before acting!", icon: "💡" }
    ]
  },
  {
    id: 81,
    image: "llama",
    clues: [
      "I am related to camels but live in South America.",
      "I have a long neck and soft wool.",
      "I can spit when I feel threatened."
    ],
    answer: "Llama",
    emoji: "🦙",
    funFacts: [
      { category: 'ability', fact: "Llamas can carry 25-30% of their body weight and trek for miles through mountain terrain at high altitudes!", icon: "⭐" },
      { category: 'baby', fact: "Baby llamas are called crias and can stand and walk within an hour of being born!", icon: "🍼" },
      { category: 'group', fact: "A group of llamas is called a 'herd', and they live in family groups with complex social hierarchies.", icon: "👥" },
      { category: 'sound', fact: "Llamas hum when content, alarm call when scared, and make clicking sounds to communicate with their babies!", icon: "🔊" },
      { category: 'diet', fact: "Llamas eat grass, leaves, and shoots, and have three-compartment stomachs to help digest tough mountain vegetation!", icon: "🍽️" },
      { category: 'habitat', fact: "Llamas live in the Andes Mountains of South America at altitudes up to 13,000 feet above sea level!", icon: "🏠" },
      { category: 'unique', fact: "Llamas spit green, smelly stomach contents when angry or establishing dominance - and they have excellent aim!", icon: "💡" }
    ]
  },
  {
    id: 82,
    image: "oyster",
    clues: [
      "I live in the ocean in a hard shell.",
      "I can make pearls inside my shell.",
      "People eat me and consider me a delicacy."
    ],
    answer: "Oyster",
    emoji: "🦪",
    funFacts: [
      { category: 'ability', fact: "Oysters can filter 25-50 gallons of water per day and change gender multiple times during their lives!", icon: "⭐" },
      { category: 'baby', fact: "Baby oysters are called spat and start life swimming freely before settling on hard surfaces to grow!", icon: "🍼" },
      { category: 'group', fact: "Oysters live in colonies called beds or reefs, growing together in dense clusters for protection!", icon: "👥" },
      { category: 'sound', fact: "Oysters don't make sounds themselves but create clicking noises when their shells snap shut underwater!", icon: "🔊" },
      { category: 'diet', fact: "Oysters are filter feeders that eat plankton, algae, and organic particles by pumping water through their bodies!", icon: "🍽️" },
      { category: 'habitat', fact: "Oysters live in saltwater and brackish water along coasts worldwide, attached to rocks or other hard surfaces.", icon: "🏠" },
      { category: 'unique', fact: "Oysters can live over 100 years and create pearls when irritants get trapped inside their shells!", icon: "💡" }
    ]
  },
  {
    id: 83,
    image: "dodo",
    clues: [
      "I was a flightless bird that is now extinct.",
      "I lived on an island in the Indian Ocean.",
      "I am often used as a symbol for something that has disappeared."
    ],
    answer: "Dodo",
    emoji: "🦤",
    funFacts: [
      { category: 'ability', fact: "Dodos could run quite fast on their strong legs despite being flightless, and had excellent hearing to detect predators!", icon: "⭐" },
      { category: 'baby', fact: "Baby dodos were called chicks and hatched from large white eggs laid in ground nests made of palm leaves!", icon: "🍼" },
      { category: 'group', fact: "Dodos lived in small flocks and were very social birds that communicated with deep booming calls!", icon: "👥" },
      { category: 'sound', fact: "Dodos made low, deep booming sounds and cooing noises to communicate with each other across the forest!", icon: "🔊" },
      { category: 'diet', fact: "Dodos ate fruits, seeds, nuts, and roots, and helped spread forest seeds around Mauritius Island!", icon: "🍽️" },
      { category: 'habitat', fact: "Dodos lived only on Mauritius Island in the Indian Ocean, in dense coastal forests with ebony trees!", icon: "🏠" },
      { category: 'unique', fact: "Dodos went extinct just 65 years after humans first arrived on their island - they had no fear of people!", icon: "💡" }
    ]
  },
  {
    id: 84,
    image: "dragon",
    clues: [
      "I am a mythical creature.",
      "I can breathe fire.",
      "I have wings and scales like a reptile."
    ],
    answer: "Dragon",
    emoji: "🐉",
    funFacts: [
      { category: 'ability', fact: "Dragons can breathe fire, fly with massive wings, and have incredible strength to carry off treasure and livestock!", icon: "⭐" },
      { category: 'baby', fact: "Baby dragons are called dragonlings or wyrmlings and hatch from large, often jewel-colored eggs in hidden caves!", icon: "🍼" },
      { category: 'group', fact: "Dragons are usually solitary but sometimes gather in councils called 'wings' to discuss important magical matters!", icon: "👥" },
      { category: 'sound', fact: "Dragons roar with earth-shaking power, speak in ancient tongues, and some can cast magical spells with their voices!", icon: "🔊" },
      { category: 'diet', fact: "Dragons eat large animals like cattle and sheep, but ancient dragons prefer magical foods like enchanted gems!", icon: "🍽️" },
      { category: 'habitat', fact: "Dragons live in mountain caves, ancient castles, or deep underground lairs filled with hoarded treasure!", icon: "🏠" },
      { category: 'unique', fact: "Dragons appear in myths worldwide - from European treasure-guarders to Chinese symbols of good fortune and wisdom!", icon: "💡" }
    ]
  },
  {
    id: 85,
    image: "unicorn",
    clues: [
      "I am a mythical horse.",
      "I have a single spiral horn on my forehead.",
      "I am often associated with rainbows and magic."
    ],
    answer: "Unicorn",
    emoji: "🦄",
    funFacts: [
      { category: 'ability', fact: "Unicorns can heal wounds with their horn, purify poisoned water, and only allow pure-hearted people to approach them!", icon: "⭐" },
      { category: 'baby', fact: "Baby unicorns are called foals and are born with tiny golden horns that grow spiral and pearl-white as they mature!", icon: "🍼" },
      { category: 'group', fact: "Unicorns usually live alone but sometimes gather in clearings under full moons in groups called 'blessings'!", icon: "👥" },
      { category: 'sound', fact: "Unicorns communicate with silver bell-like sounds, gentle nickering, and can speak telepathically to kind hearts!", icon: "🔊" },
      { category: 'diet', fact: "Unicorns eat only the purest flowers, dew drops, moonbeams, and crystal-clear spring water!", icon: "🍽️" },
      { category: 'habitat', fact: "Unicorns live in enchanted forests with crystal streams, hidden meadows filled with starflowers and ancient trees!", icon: "🏠" },
      { category: 'unique', fact: "Unicorn horns (called alicorns) were once believed to detect poison and cure diseases in medieval times!", icon: "💡" }
    ]
  },
  {
    id: 86,
    image: "orangutan",
    clues: [
      "I am a great ape with reddish-brown hair.",
      "I live in the rainforests of Borneo and Sumatra.",
      "I am known for being very intelligent."
    ],
    answer: "Orangutan",
    emoji: "🦧",
    funFacts: [
      { category: 'ability', fact: "Orangutans are incredibly smart and can use tools, make umbrellas from leaves, and learn sign language!", icon: "⭐" },
      { category: 'baby', fact: "Baby orangutans stay with their mothers for 8 years - the longest childhood of any animal except humans!", icon: "🍼" },
      { category: 'group', fact: "Orangutans are mostly solitary, but mothers and babies form close bonds and sometimes gather at fruit trees!", icon: "👥" },
      { category: 'sound', fact: "Male orangutans make long, deep calls that can be heard a mile away to attract mates and warn other males!", icon: "🔊" },
      { category: 'diet', fact: "Orangutans eat mostly fruit and can remember the location and ripening time of thousands of fruit trees!", icon: "🍽️" },
      { category: 'habitat', fact: "Orangutans live high in the rainforest canopy and build new sleeping nests in trees every single night!", icon: "🏠" },
      { category: 'unique', fact: "Orangutans share 97% of their DNA with humans and are our closest relatives along with chimps and gorillas!", icon: "💡" }
    ]
  },
  {
    id: 87,
    image: "ox",
    clues: [
      "I am a large, strong farm animal.",
      "I pull plows and carts.",
      "I am similar to a bull but calmer."
    ],
    answer: "Ox",
    emoji: "🐂",
    funFacts: [
      { category: 'ability', fact: "Oxen can pull loads up to 2,000 pounds and work steadily for hours with incredible strength and patience!", icon: "⭐" },
      { category: 'baby', fact: "Baby oxen are called calves and start learning to work alongside their parents when they're about 2 years old!", icon: "🍼" },
      { category: 'group', fact: "Oxen often work in pairs called a 'yoke' and develop strong partnerships that last their entire working lives!", icon: "👥" },
      { category: 'sound', fact: "Oxen communicate with deep lowing sounds, snorts, and gentle rumbling noises to their working partners!", icon: "🔊" },
      { category: 'diet', fact: "Oxen eat grass, hay, and grains, and can digest tough plant materials that other animals can't eat!", icon: "🍽️" },
      { category: 'habitat', fact: "Oxen live on farms worldwide and have special barns with thick straw bedding to keep them comfortable!", icon: "🏠" },
      { category: 'unique', fact: "Oxen have been helping humans farm for over 6,000 years and are symbols of strength in many cultures!", icon: "💡" }
    ]
  },
  {
    id: 88,
    image: "water_buffalo",
    clues: [
      "I am a large animal with horns that curve backwards.",
      "I like to wallow in mud and water.",
      "I am used for plowing fields in Asia."
    ],
    answer: "Water Buffalo",
    emoji: "🐃",
    funFacts: [
      { category: 'ability', fact: "Water buffalo are amazing swimmers and can hold their breath underwater for up to 9 minutes while diving for food!", icon: "⭐" },
      { category: 'baby', fact: "Baby water buffalo are called calves and can swim before they can walk properly on land!", icon: "🍼" },
      { category: 'group', fact: "Water buffalo live in herds of 10-30 animals led by the oldest and strongest female!", icon: "👥" },
      { category: 'sound', fact: "Water buffalo make deep bellowing calls, snorts, and grunts to communicate across long distances!", icon: "🔊" },
      { category: 'diet', fact: "Water buffalo eat grass, aquatic plants, and can graze underwater while completely submerged!", icon: "🍽️" },
      { category: 'habitat', fact: "Water buffalo love wetlands, swamps, and river valleys where they can cool off in mud and water!", icon: "🏠" },
      { category: 'unique', fact: "Water buffalo provide milk, meat, and power for farming - they're called 'living tractors' in many countries!", icon: "💡" }
    ]
  },
  {
    id: 89,
    image: "bull",
    clues: [
      "I am a male cow.",
      "I have horns and a strong body.",
      "People run from me in Spain."
    ],
    answer: "Bull",
    emoji: "🐂",
    funFacts: [
      { category: 'ability', fact: "Bulls can weigh over 2,000 pounds and run up to 35 mph - faster than most people can sprint!", icon: "⭐" },
      { category: 'baby', fact: "Baby bulls are called calves and stay close to their mothers for the first year of their lives!", icon: "🍼" },
      { category: 'group', fact: "Bulls live with herds of cows and are very protective fathers who guard their families from danger!", icon: "👥" },
      { category: 'sound', fact: "Bulls make deep bellowing roars that can be heard from miles away to show dominance and attract mates!", icon: "🔊" },
      { category: 'diet', fact: "Bulls eat grass and hay all day long - they can consume up to 40 pounds of food daily!", icon: "🍽️" },
      { category: 'habitat', fact: "Bulls live on farms and in pastures with plenty of grass, shade trees, and fresh water!", icon: "🏠" },
      { category: 'unique', fact: "Bulls are actually colorblind to red - they charge at movement, not the color of the matador's cape!", icon: "💡" }
    ]
  },
  {
    id: 90,
    image: "dove",
    clues: [
      "I am a white bird.",
      "I am a symbol of peace.",
      "I coo instead of singing."
    ],
    answer: "Dove",
    emoji: "🕊️",
    funFacts: [
      { category: 'ability', fact: "Doves can fly up to 55 mph and navigate thousands of miles using the sun, stars, and Earth's magnetic field!", icon: "⭐" },
      { category: 'baby', fact: "Baby doves are called squabs and both parents take turns feeding them 'crop milk' - a special nutritious liquid!", icon: "🍼" },
      { category: 'group', fact: "Doves mate for life and work together as a team to build nests, incubate eggs, and raise their babies!", icon: "👥" },
      { category: 'sound', fact: "Doves make soft cooing sounds to communicate love, and their calls can carry over long distances!", icon: "🔊" },
      { category: 'diet', fact: "Doves eat seeds, grains, fruits, and sometimes small insects, storing food in their crop before digesting!", icon: "🍽️" },
      { category: 'habitat', fact: "Doves live in cities, forests, and farms worldwide, building simple stick nests in trees and buildings!", icon: "🏠" },
      { category: 'unique', fact: "Doves have been symbols of peace for thousands of years and were used as messengers in ancient times!", icon: "💡" }
    ]
  },
  {
    id: 91,
    image: "mammoth",
    clues: [
      "I was a large, extinct elephant-like animal.",
      "I had long tusks and was covered in fur.",
      "I lived during the Ice Age."
    ],
    answer: "Mammoth",
    emoji: "🦣",
    funFacts: [
      { category: 'ability', fact: "Mammoths could lift 3 tons with their trunks and use their curved tusks to dig through ice and snow for food!", icon: "⭐" },
      { category: 'baby', fact: "Baby mammoths were called calves and stayed close to their mothers for 10 years to learn survival skills!", icon: "🍼" },
      { category: 'group', fact: "Mammoths lived in herds led by the oldest female, just like modern elephants, for protection and warmth!", icon: "👥" },
      { category: 'sound', fact: "Mammoths trumpeted, rumbled, and made low-frequency calls that could travel for miles across frozen landscapes!", icon: "🔊" },
      { category: 'diet', fact: "Mammoths ate grass, shrubs, and tree bark, consuming up to 300 pounds of plants every single day!", icon: "🍽️" },
      { category: 'habitat', fact: "Mammoths lived in cold grasslands called mammoth steppes during the Ice Age, from Siberia to North America!", icon: "🏠" },
      { category: 'unique', fact: "Some mammoth remains are so well-preserved in ice that scientists have found intact DNA after 10,000 years!", icon: "💡" }
    ]
  },
  {
    id: 92,
    image: "chipmunk",
    clues: [
      "I am small with striped fur.",
      "I have pouches in my cheeks to carry food.",
      "I collect and store nuts."
    ],
    answer: "Chipmunk",
    emoji: "🐿️",
    funFacts: [
      { category: 'ability', fact: "Chipmunks can stuff their cheek pouches with up to 8 acorns at once and climb trees at lightning speed!", icon: "⭐" },
      { category: 'baby', fact: "Baby chipmunks are called kits and are born blind and hairless, staying in underground burrows for 6 weeks!", icon: "🍼" },
      { category: 'group', fact: "Chipmunks are mostly solitary but sometimes share burrow systems and warn each other about danger!", icon: "👥" },
      { category: 'sound', fact: "Chipmunks make high-pitched chirping calls, trills, and alarm chips that sound like tiny bird songs!", icon: "🔊" },
      { category: 'diet', fact: "Chipmunks eat nuts, seeds, berries, mushrooms, and insects - they can gather 165 acorns in one day!", icon: "🍽️" },
      { category: 'habitat', fact: "Chipmunks live in underground burrows up to 3 feet deep with multiple rooms for sleeping and food storage!", icon: "🏠" },
      { category: 'unique', fact: "Chipmunks hibernate but wake up every few days to eat from their stored food supply during winter!", icon: "💡" }
    ]
  },
  {
    id: 93,
    image: "grasshopper",
    clues: [
      "I have long back legs for jumping.",
      "I make music by rubbing my legs together.",
      "I eat plants and can be a pest to farmers."
    ],
    answer: "Grasshopper",
    emoji: "🦗",
    funFacts: [
      { category: 'ability', fact: "Grasshoppers can jump 20 times their body length and change direction mid-air like tiny acrobats!", icon: "⭐" },
      { category: 'baby', fact: "Baby grasshoppers are called nymphs and molt their skin 5 times as they grow bigger!", icon: "🍼" },
      { category: 'group', fact: "Grasshoppers sometimes form huge swarms called locusts with millions of individuals flying together!", icon: "👥" },
      { category: 'sound', fact: "Grasshoppers 'sing' by rubbing their legs against their wings to attract mates and warn rivals!", icon: "🔊" },
      { category: 'diet', fact: "Grasshoppers eat grass, leaves, and crops - a single swarm can eat the same amount as 35,000 people daily!", icon: "🍽️" },
      { category: 'habitat', fact: "Grasshoppers live in grasslands, fields, and gardens where they blend in perfectly with green plants!", icon: "🏠" },
      { category: 'unique', fact: "Grasshoppers have been eaten as protein-rich food for thousands of years and are still enjoyed worldwide!", icon: "💡" }
    ]
  },
  {
    id: 94,
    image: "cricket",
    clues: [
      "I am similar to a grasshopper.",
      "I make chirping sounds at night.",
      "I am considered lucky in some countries."
    ],
    answer: "Cricket",
    emoji: "🦗",
    funFacts: [
      { category: 'ability', fact: "Crickets can jump 30 times their height and have amazing hearing - they detect sounds through their legs!", icon: "⭐" },
      { category: 'baby', fact: "Baby crickets are called nymphs and look like tiny adults but without wings until their final molt!", icon: "🍼" },
      { category: 'group', fact: "Crickets are mostly solitary but males compete for the best singing spots to attract female crickets!", icon: "👥" },
      { category: 'sound', fact: "Male crickets chirp by rubbing their wings together, and you can tell the temperature by counting their chirps!", icon: "🔊" },
      { category: 'diet', fact: "Crickets eat plants, other insects, and even fabric - they're nature's tiny recyclers and cleanup crew!", icon: "🍽️" },
      { category: 'habitat', fact: "Crickets live under rocks, in grass, and even inside houses where they hide in dark, warm places!", icon: "🏠" },
      { category: 'unique', fact: "Crickets are symbols of good luck in many cultures and are raised as food and pets worldwide!", icon: "💡" }
    ]
  },
  {
    id: 95,
    image: "ram",
    clues: [
      "I am a male sheep.",
      "I have large, curled horns.",
      "I fight by butting heads with others."
    ],
    answer: "Ram",
    emoji: "🐏",
    funFacts: [
      { category: 'ability', fact: "Rams can headbutt with the force of 800 pounds and have special shock-absorbing skulls to protect their brains!", icon: "⭐" },
      { category: 'baby', fact: "Baby rams are called lambs and learn to headbutt by playing and practicing with other young rams!", icon: "🍼" },
      { category: 'group', fact: "Rams live in flocks with ewes and compete for leadership by showing off their horn size and fighting skills!", icon: "👥" },
      { category: 'sound', fact: "Rams make deep bleating calls, snorts, and loud clashing sounds when their horns collide during fights!", icon: "🔊" },
      { category: 'diet', fact: "Rams eat grass, shrubs, and mountain plants, and can graze on steep cliffsides where other animals can't reach!", icon: "🍽️" },
      { category: 'habitat', fact: "Rams live in mountains, hills, and pastures where they can use rocky terrain to escape predators!", icon: "🏠" },
      { category: 'unique', fact: "Ram horns grow throughout their lives and show their age - you can count growth rings like tree rings!", icon: "💡" }
    ]
  },
  {
    id: 96,
    image: "boar",
    clues: [
      "I am a wild pig.",
      "I have tusks and a tough hide.",
      "I can be dangerous when cornered."
    ],
    answer: "Boar",
    emoji: "🐗",
    funFacts: [
      { category: 'ability', fact: "Boars can run up to 30 mph, have excellent hearing and smell, and their tusks grow continuously throughout their lives!", icon: "⭐" },
      { category: 'baby', fact: "Baby boars are called piglets and have striped coats for camouflage - they stay close to mom for protection!", icon: "🍼" },
      { category: 'group', fact: "Female boars live in groups called sounders with their babies, while adult males are usually solitary except during mating!", icon: "👥" },
      { category: 'sound', fact: "Boars grunt, squeal, and make loud snorting sounds to communicate, and can roar when threatened!", icon: "🔊" },
      { category: 'diet', fact: "Boars are omnivores that eat roots, fruits, insects, small animals, and can forage for food with their strong snouts!", icon: "🍽️" },
      { category: 'habitat', fact: "Boars live in forests, woodlands, and grasslands where they create wallows - mud holes to cool off and remove parasites!", icon: "🏠" },
      { category: 'unique', fact: "Boars are the ancestors of domestic pigs and are incredibly intelligent - they can learn their names and solve puzzles!", icon: "💡" }
    ]
  },
  {
    id: 97,
    image: "wolf",
    clues: [
      "I am a wild canine.",
      "I live and hunt in packs.",
      "I howl at the moon."
    ],
    answer: "Wolf",
    emoji: "🐺",
    funFacts: [
      { category: 'ability', fact: "Wolves can run up to 40 mph, jump 12 feet high, and have bite strength of 1,500 pounds per square inch!", icon: "⭐" },
      { category: 'baby', fact: "Baby wolves are called pups and are born blind and deaf - the whole pack helps raise and protect them!", icon: "🍼" },
      { category: 'group', fact: "Wolves live in packs of 4-9 family members with alpha leaders who make decisions for the group!", icon: "👥" },
      { category: 'sound', fact: "Wolves howl to communicate across long distances, gather the pack, and claim territory - each has a unique voice!", icon: "🔊" },
      { category: 'diet', fact: "Wolves are carnivores that hunt large animals like deer and elk, and can eat up to 20 pounds in one meal!", icon: "🍽️" },
      { category: 'habitat', fact: "Wolves live in forests, mountains, and tundra, creating dens in caves, hollow logs, or dug-out hillsides!", icon: "🏠" },
      { category: 'unique', fact: "Wolves are the ancestors of all domestic dogs and have an amazing sense of smell 100 times stronger than humans!", icon: "💡" }
    ]
  },
  {
    id: 98,
    image: "rat",
    clues: [
      "I am similar to a mouse but larger.",
      "I have a long, hairless tail.",
      "I am very adaptable and live all over the world."
    ],
    answer: "Rat",
    emoji: "🐀",
    funFacts: [
      { category: 'ability', fact: "Rats are amazing climbers and swimmers, can jump 3 feet high, and remember complex routes through mazes!", icon: "⭐" },
      { category: 'baby', fact: "Baby rats are called pups and are born hairless and blind - they develop quickly and can have babies at just 3 months old!", icon: "🍼" },
      { category: 'group', fact: "Rats live in colonies with complex social structures and groom each other to show friendship and maintain group bonds!", icon: "👥" },
      { category: 'sound', fact: "Rats communicate with ultrasonic calls that humans can't hear, plus squeaks, chatters, and teeth grinding sounds!", icon: "🔊" },
      { category: 'diet', fact: "Rats are omnivores that eat almost anything - fruits, grains, meat, insects, and can survive without water longer than camels!", icon: "🍽️" },
      { category: 'habitat', fact: "Rats live everywhere humans do - in sewers, buildings, fields, and ships, making elaborate burrow systems!", icon: "🏠" },
      { category: 'unique', fact: "Rats are incredibly intelligent and empathetic - they'll help other rats in distress and can learn their names!", icon: "💡" }
    ]
  },
  {
    id: 99,
    image: "shrimp",
    clues: [
      "I am a small sea creature.",
      "I have a curved body and many legs.",
      "People eat me in seafood dishes."
    ],
    answer: "Shrimp",
    emoji: "🦐",
    funFacts: [
      { category: 'ability', fact: "Shrimp can swim backwards by rapidly flicking their tails and some species can punch with the force of a bullet!", icon: "⭐" },
      { category: 'baby', fact: "Baby shrimp are called larvae and float in the ocean currents until they grow big enough to swim to the seafloor!", icon: "🍼" },
      { category: 'group', fact: "Shrimp often live in huge schools of millions and work together to find food and avoid predators!", icon: "👥" },
      { category: 'sound', fact: "Shrimp make clicking and snapping sounds with their claws to communicate and stun prey!", icon: "🔊" },
      { category: 'diet', fact: "Shrimp are ocean cleaners that eat algae, dead plants, plankton, and tiny particles that sink to the bottom!", icon: "🍽️" },
      { category: 'habitat', fact: "Shrimp live in oceans, rivers, and lakes worldwide, from shallow coral reefs to deep ocean trenches!", icon: "🏠" },
      { category: 'unique', fact: "Shrimp have their heart in their head and can see ultraviolet and polarized light that humans can't see!", icon: "💡" }
    ]
  },
  {
    id: 100,
    image: "bison",
    clues: [
      "I am a large, wild ox.",
      "I have a big, shaggy head.",
      "I once roamed the American plains in huge herds."
    ],
    answer: "Bison",
    emoji: "🦬",
    funFacts: [
      { category: 'ability', fact: "Bison can run up to 35 mph despite weighing 2,000 pounds, and can jump 6 feet high from a standing position!", icon: "⭐" },
      { category: 'baby', fact: "Baby bison are called calves and have reddish-brown fur that turns dark brown as they grow older!", icon: "🍼" },
      { category: 'group', fact: "Bison live in herds that can have thousands of members and migrate together across hundreds of miles!", icon: "👥" },
      { category: 'sound', fact: "Bison make deep grunting calls, bellows, and snorts to communicate with their herd across the vast plains!", icon: "🔊" },
      { category: 'diet', fact: "Bison are grazers that eat prairie grass and can consume 30 pounds of vegetation per day!", icon: "🍽️" },
      { category: 'habitat', fact: "Bison live on grasslands and prairies where they roll in dirt wallows to protect themselves from insects!", icon: "🏠" },
      { category: 'unique', fact: "Bison are North America's largest land animals and nearly went extinct but were saved by conservation efforts!", icon: "💡" }
    ]
  },
  // More animals (101-200)
  {
    id: 101,
    image: "chicken",
    clues: [
      "I lay eggs that people eat.",
      "I have feathers and a beak.",
      "I say 'cluck cluck'."
    ],
    answer: "Chicken",
    emoji: "🐔",
    funFacts: [
      { category: 'ability', fact: "Chickens can fly short distances, remember over 100 faces, and have excellent color vision that can see ultraviolet light!", icon: "⭐" },
      { category: 'baby', fact: "Baby chickens are called chicks and can walk and eat within hours of hatching from their eggs!", icon: "🍼" },
      { category: 'group', fact: "Chickens live in flocks with a pecking order where the strongest chicken gets to eat first!", icon: "👥" },
      { category: 'sound', fact: "Chickens make over 24 different sounds including clucks, crows, purrs, and alarm calls to communicate!", icon: "🔊" },
      { category: 'diet', fact: "Chickens are omnivores that eat seeds, insects, worms, and even small mice - they love to scratch and peck for food!", icon: "🍽️" },
      { category: 'habitat', fact: "Chickens live on farms and in backyards, roosting in coops at night and ranging freely during the day!", icon: "🏠" },
      { category: 'unique', fact: "Chickens are descendants of wild jungle fowl and there are over 200 breeds worldwide with different colors and sizes!", icon: "💡" }
    ]
  },
  {
    id: 102,
    image: "goldfish",
    clues: [
      "I am a popular pet fish.",
      "I am usually orange or gold in color.",
      "I live in a bowl or aquarium."
    ],
    answer: "Goldfish",
    emoji: "🐠",
    funFacts: [
      { category: 'ability', fact: "Goldfish have amazing memories lasting months, can recognize human faces, and see more colors than humans!", icon: "⭐" },
      { category: 'baby', fact: "Baby goldfish are called fry and start out dark gray or black before turning gold as they grow!", icon: "🍼" },
      { category: 'group', fact: "Goldfish are social and live better in groups - they can recognize and remember their tank mates!", icon: "👥" },
      { category: 'sound', fact: "Goldfish make soft popping and clicking sounds that humans can barely hear when they eat or communicate!", icon: "🔊" },
      { category: 'diet', fact: "Goldfish eat plants, algae, small insects, and fish flakes - they're constantly searching for food!", icon: "🍽️" },
      { category: 'habitat', fact: "Wild goldfish live in rivers and ponds, while pet goldfish need clean, filtered water with plants!", icon: "🏠" },
      { category: 'unique', fact: "Goldfish can live over 20 years and grow huge in the wild - some reach over a foot long!", icon: "💡" }
    ]
  },
  {
    id: 103,
    image: "tropical_fish",
    clues: [
      "I come in many bright colors.",
      "I live in warm ocean waters near coral reefs.",
      "I am often kept in home aquariums."
    ],
    answer: "Tropical Fish",
    emoji: "🐠",
    funFacts: [
      { category: 'ability', fact: "Tropical fish can change colors, navigate by smell, and some can produce electric fields to find food!", icon: "⭐" },
      { category: 'baby', fact: "Baby tropical fish are called fry and some species carry their babies in their mouths for protection!", icon: "🍼" },
      { category: 'group', fact: "Many tropical fish live in schools of hundreds and work together to confuse predators with their movements!", icon: "👥" },
      { category: 'sound', fact: "Tropical fish make clicking, popping, and drumming sounds using their swim bladders and teeth!", icon: "🔊" },
      { category: 'diet', fact: "Tropical fish eat algae, plankton, coral, and smaller fish - some even clean parasites off bigger fish!", icon: "🍽️" },
      { category: 'habitat', fact: "Tropical fish live in coral reefs, the rainforests of the sea, with warm water and lots of hiding places!", icon: "🏠" },
      { category: 'unique', fact: "Some tropical fish can see ultraviolet light and change from female to male when needed for reproduction!", icon: "💡" }
    ]
  },
  {
    id: 104,
    image: "seahorse",
    clues: [
      "I swim upright in the ocean.",
      "I have a curled tail that can grip things.",
      "The male of my species carries the babies."
    ],
    answer: "Seahorse",
    emoji: "🫏",
    funFacts: [
      { category: 'ability', fact: "Seahorses can move their eyes independently, change color instantly, and use their prehensile tails like an extra hand!", icon: "⭐" },
      { category: 'baby', fact: "Baby seahorses are called fry and fathers give birth after carrying 100-300 eggs in their pouch for weeks!", icon: "🍼" },
      { category: 'group', fact: "Seahorses are usually solitary but some species form pairs that dance together and mate for life!", icon: "👥" },
      { category: 'sound', fact: "Seahorses make soft clicking sounds when they eat and during mating rituals!", icon: "🔊" },
      { category: 'diet', fact: "Seahorses eat tiny shrimp and plankton by sucking them up through their snouts like living vacuum cleaners!", icon: "🍽️" },
      { category: 'habitat', fact: "Seahorses live in shallow coastal waters, coral reefs, and seagrass beds where they anchor to plants!", icon: "🏠" },
      { category: 'unique', fact: "Seahorses are the only animal where males get pregnant and give birth to babies!", icon: "💡" }
    ]
  },
  {
    id: 105,
    image: "starfish",
    clues: [
      "I live in the ocean and have a star shape.",
      "I can regrow my arms if they are damaged.",
      "I move using tiny tube feet."
    ],
    answer: "Starfish",
    emoji: "⭐️",
    funFacts: [
      { category: 'ability', fact: "Starfish can regenerate entire new arms and some can even grow a whole new body from just one arm!", icon: "⭐" },
      { category: 'baby', fact: "Baby starfish are called larvae and float in the ocean before settling down and growing into star shapes!", icon: "🍼" },
      { category: 'group', fact: "Starfish are usually solitary but sometimes gather in groups during spawning season or when food is abundant!", icon: "👥" },
      { category: 'sound', fact: "Starfish are silent creatures that communicate through chemical signals and touch!", icon: "🔊" },
      { category: 'diet', fact: "Starfish eat clams, oysters, and coral by pushing their stomach outside their body to digest food!", icon: "🍽️" },
      { category: 'habitat', fact: "Starfish live on ocean floors from tide pools to deep sea, using tube feet to crawl across rocks!", icon: "🏠" },
      { category: 'unique', fact: "Starfish have no brain or blood - they use seawater and their simple nervous system to survive!", icon: "💡" }
    ]
  },
  {
    id: 106,
    image: "ostrich",
    clues: [
      "I am the largest bird in the world.",
      "I cannot fly but can run very fast.",
      "I lay the largest eggs of any bird."
    ],
    answer: "Ostrich",
    emoji: "🪿",
    funFacts: [
      { category: 'ability', fact: "Ostriches can run 45 mph, kick with 2,000 pounds of force, and their eyes are bigger than their brains!", icon: "⭐" },
      { category: 'baby', fact: "Baby ostriches are called chicks and can run within hours of hatching to keep up with their parents!", icon: "🍼" },
      { category: 'group', fact: "Ostriches live in flocks of 10-50 birds and take turns watching for predators while others eat!", icon: "👥" },
      { category: 'sound', fact: "Ostriches make booming calls, hisses, and drumming sounds with their throats that can be heard miles away!", icon: "🔊" },
      { category: 'diet', fact: "Ostriches eat plants, seeds, fruits, and insects - they swallow stones to help grind food in their stomachs!", icon: "🍽️" },
      { category: 'habitat', fact: "Ostriches live in African savannas and deserts where they can see predators from far away!", icon: "🏠" },
      { category: 'unique', fact: "Ostriches don't bury their heads in sand - that's a myth! They lower their heads to check on their ground nests!", icon: "💡" }
    ]
  },
  {
    id: 107,
    image: "moose",
    clues: [
      "I am a large deer with broad, flat antlers.",
      "I live in forests in cold northern regions.",
      "I am the largest member of the deer family."
    ],
    answer: "Moose",
    emoji: "🫎",
    funFacts: [
      { category: 'ability', fact: "Moose can dive 20 feet underwater to eat aquatic plants and their antlers can span 6 feet wide!", icon: "⭐" },
      { category: 'baby', fact: "Baby moose are called calves and can swim before they can walk properly on land!", icon: "🍼" },
      { category: 'group', fact: "Moose are mostly solitary except for mothers with calves, but they gather at salt licks in groups!", icon: "👥" },
      { category: 'sound', fact: "Moose make deep grunting calls, bellows, and males make loud roaring sounds during mating season!", icon: "🔊" },
      { category: 'diet', fact: "Moose eat leaves, bark, aquatic plants, and can consume 40-60 pounds of vegetation daily!", icon: "🍽️" },
      { category: 'habitat', fact: "Moose live in northern forests near lakes and swamps where they can cool off and find food!", icon: "🏠" },
      { category: 'unique', fact: "Moose shed and regrow their massive antlers every year - they're the largest antlers of any animal!", icon: "💡" }
    ]
  },
  {
    id: 108,
    image: "platypus",
    clues: [
      "I have a bill like a duck.",
      "I lay eggs even though I'm a mammal.",
      "I come from Australia."
    ],
    answer: "Platypus",
    emoji: "🦫",
    funFacts: [
      { category: 'ability', fact: "Platypuses can detect electrical fields from other animals' muscles and have venomous spurs on their hind legs!", icon: "⭐" },
      { category: 'baby', fact: "Baby platypuses are called puggles and hatch from eggs but drink milk that seeps through their mother's skin!", icon: "🍼" },
      { category: 'group', fact: "Platypuses are solitary animals that only come together during mating season!", icon: "👥" },
      { category: 'sound', fact: "Platypuses are mostly silent but make soft clicking and growling sounds when threatened!", icon: "🔊" },
      { category: 'diet', fact: "Platypuses eat freshwater shrimp, insect larvae, and worms that they find by diving underwater!", icon: "🍽️" },
      { category: 'habitat', fact: "Platypuses live in burrows along riverbanks in eastern Australia and Tasmania!", icon: "🏠" },
      { category: 'unique', fact: "Platypuses are one of only two mammals that lay eggs instead of giving birth to live babies!", icon: "💡" }
    ]
  },
  {
    id: 109,
    image: "anteater",
    clues: [
      "I have a very long nose.",
      "I eat insects with my sticky tongue.",
      "My favorite food is in my name."
    ],
    answer: "Anteater",
    emoji: "🐜",
    funFacts: [
      { category: 'ability', fact: "Anteaters have 2-foot-long sticky tongues and can flick them in and out 150 times per minute!", icon: "⭐" },
      { category: 'baby', fact: "Baby anteaters are called pups and ride on their mother's back for up to 10 months!", icon: "🍼" },
      { category: 'group', fact: "Anteaters are mostly solitary but mothers and babies form strong bonds!", icon: "👥" },
      { category: 'sound', fact: "Anteaters make snorting, grunting, and hissing sounds and can roar when threatened!", icon: "🔊" },
      { category: 'diet', fact: "Anteaters eat 30,000 ants and termites daily and have no teeth - they swallow insects whole!", icon: "🍽️" },
      { category: 'habitat', fact: "Anteaters live in Central and South American forests, grasslands, and swamps!", icon: "🏠" },
      { category: 'unique', fact: "Giant anteaters have the lowest body temperature of any mammal and can't regulate heat well!", icon: "💡" }
    ]
  },
  {
    id: 110,
    image: "armadillo",
    clues: [
      "I have armor-like plates covering my body.",
      "I can roll into a ball for protection.",
      "I dig burrows in the ground."
    ],
    answer: "Armadillo",
    emoji: "🦔",
    funFacts: [
      { category: 'ability', fact: "Armadillos can roll into perfect balls, jump 4 feet high, and swim by inflating their stomachs like balloons!", icon: "⭐" },
      { category: 'baby', fact: "Baby armadillos are called pups and their shells are soft and leathery until they harden with age!", icon: "🍼" },
      { category: 'group', fact: "Most armadillos are solitary but some species share burrows and huddle together for warmth!", icon: "👥" },
      { category: 'sound', fact: "Armadillos make grunting, squealing, and chattering sounds when communicating or alarmed!", icon: "🔊" },
      { category: 'diet', fact: "Armadillos eat insects, grubs, worms, and small animals they find while digging with their strong claws!", icon: "🍽️" },
      { category: 'habitat', fact: "Armadillos live in burrows they dig in grasslands, forests, and deserts across the Americas!", icon: "🏠" },
      { category: 'unique', fact: "Nine-banded armadillos always give birth to identical quadruplets - four babies that are exact copies!", icon: "💡" }
    ]
  },
  {
    id: 111,
    image: "hyena",
    clues: [
      "I look somewhat like a dog.",
      "I make a laugh-like sound.",
      "I am a scavenger in Africa."
    ],
    answer: "Hyena",
    emoji: "🐕",
    funFacts: [
      { category: 'ability', fact: "Hyenas have the strongest bite of any mammal and can crack bones that lions can't break!", icon: "⭐" },
      { category: 'baby', fact: "Baby hyenas are called cubs and are born with their eyes open and ready to fight their siblings!", icon: "🍼" },
      { category: 'group', fact: "Hyenas live in clans of up to 80 members led by dominant females who are bigger than males!", icon: "👥" },
      { category: 'sound', fact: "Hyenas make laughing, whooping, and cackling sounds to communicate across long distances!", icon: "🔊" },
      { category: 'diet', fact: "Hyenas are both hunters and scavengers - they hunt 95% of their food and rarely just scavenge!", icon: "🍽️" },
      { category: 'habitat', fact: "Hyenas live in African savannas and make dens in underground burrows or caves!", icon: "🏠" },
      { category: 'unique', fact: "Female hyenas are in charge and have pseudo-male parts that make giving birth extremely difficult!", icon: "💡" }
    ]
  },
  {
    id: 112,
    image: "jaguar",
    clues: [
      "I am a large, spotted wild cat.",
      "I live in the rainforests of South America.",
      "I am an excellent climber and swimmer."
    ],
    answer: "Jaguar",
    emoji: "🐆",
    funFacts: [
      { category: 'ability', fact: "Jaguars have the strongest bite of any big cat and can crush turtle shells and caiman skulls!", icon: "⭐" },
      { category: 'baby', fact: "Baby jaguars are called cubs and stay with their mothers for 2 years learning to hunt!", icon: "🍼" },
      { category: 'group', fact: "Jaguars are solitary cats that only come together during mating season!", icon: "👥" },
      { category: 'sound', fact: "Jaguars roar, grunt, and make coughing sounds but can't purr like smaller cats!", icon: "🔊" },
      { category: 'diet', fact: "Jaguars hunt fish, caimans, capybaras, and deer - they're one of the few cats that love water!", icon: "🍽️" },
      { category: 'habitat', fact: "Jaguars live in Amazon rainforests near rivers and wetlands where they can swim and hunt!", icon: "🏠" },
      { category: 'unique', fact: "Jaguars are the third-largest cats in the world and the only big cats native to the Americas!", icon: "💡" }
    ]
  },
  {
    id: 113,
    image: "leopard",
    clues: [
      "I am a wild cat with spots called rosettes.",
      "I can climb trees and drag my prey up with me.",
      "I live in Africa and Asia."
    ],
    answer: "Leopard",
    emoji: "🐆",
    funFacts: [
      { category: 'ability', fact: "Leopards can drag prey twice their weight up into trees and leap 20 feet horizontally!", icon: "⭐" },
      { category: 'baby', fact: "Baby leopards are called cubs and learn to climb trees when they're just 6 weeks old!", icon: "🍼" },
      { category: 'group', fact: "Leopards are solitary and only come together for mating - they mark territory with scent!", icon: "👥" },
      { category: 'sound', fact: "Leopards make grunting, coughing, and rasping sounds but can't roar as loudly as lions!", icon: "🔊" },
      { category: 'diet', fact: "Leopards hunt antelopes, monkeys, birds, and fish - they're excellent night hunters!", icon: "🍽️" },
      { category: 'habitat', fact: "Leopards live in forests, mountains, and savannas from Africa to Asia!", icon: "🏠" },
      { category: 'unique', fact: "Leopards are the most widespread big cats and excellent swimmers, unlike most cats!", icon: "💡" }
    ]
  },
  {
    id: 114,
    image: "panther",
    clues: [
      "I am a black big cat.",
      "I am actually a leopard or jaguar with black fur.",
      "I am known for being stealthy."
    ],
    answer: "Panther",
    emoji: "🐈‍⬛",
    funFacts: [
      { category: 'ability', fact: "Panthers can leap 15 feet high and 40 feet long, and their black coats make them nearly invisible at night!", icon: "⭐" },
      { category: 'baby', fact: "Baby panthers are called cubs and are actually born with spots that fade to black as they grow!", icon: "🍼" },
      { category: 'group', fact: "Panthers are solitary hunters that only meet during mating season - they're incredibly territorial!", icon: "👥" },
      { category: 'sound', fact: "Panthers make the same sounds as their leopard or jaguar counterparts - roars, grunts, and coughs!", icon: "🔊" },
      { category: 'diet', fact: "Panthers hunt deer, wild pigs, birds, and fish - they're powerful enough to take down large prey!", icon: "🍽️" },
      { category: 'habitat', fact: "Panthers live in forests, swamps, and mountains where their dark coats provide perfect camouflage!", icon: "🏠" },
      { category: 'unique', fact: "Panthers aren't a separate species - they're leopards or jaguars with melanism, a genetic condition causing black fur!", icon: "💡" }
    ]
  },
  {
    id: 115,
    image: "lynx",
    clues: [
      "I am a wild cat with tufted ears.",
      "I have short tail and large paws.",
      "I live in northern forests."
    ],
    answer: "Lynx",
    emoji: "🐱",
    funFacts: [
      { category: 'ability', fact: "Lynx have incredible hearing and can detect a mouse moving under 2 feet of snow!", icon: "⭐" },
      { category: 'baby', fact: "Baby lynx are called kittens and are born blind - they stay with mom for almost a year!", icon: "🍼" },
      { category: 'group', fact: "Lynx are solitary cats that only come together during mating season in early spring!", icon: "👥" },
      { category: 'sound', fact: "Lynx make chattering, yowling, and hissing sounds - they can't roar but they purr!", icon: "🔊" },
      { category: 'diet', fact: "Lynx mainly hunt snowshoe hares and can eat one every 1-2 days!", icon: "🍽️" },
      { category: 'habitat', fact: "Lynx live in cold northern forests with deep snow and thick vegetation for hiding!", icon: "🏠" },
      { category: 'unique', fact: "Lynx have huge snowshoe-like paws that work like natural snowshoes in deep snow!", icon: "💡" }
    ]
  },
  {
    id: 116,
    image: "cougar",
    clues: [
      "I am also called a mountain lion or puma.",
      "I am a large cat that can't roar.",
      "I live in mountains and forests of America."
    ],
    answer: "Cougar",
    emoji: "🐆",
    funFacts: [
      { category: 'ability', fact: "Cougars can leap 40 feet horizontally and 15 feet vertically - they're amazing jumpers!", icon: "⭐" },
      { category: 'baby', fact: "Baby cougars are called cubs or kittens and have spots that disappear as they grow!", icon: "🍼" },
      { category: 'group', fact: "Cougars are solitary and have territories that can be up to 100 square miles!", icon: "👥" },
      { category: 'sound', fact: "Cougars purr, chirp, whistle, and scream but can't roar like other big cats!", icon: "🔊" },
      { category: 'diet', fact: "Cougars hunt deer, elk, and smaller animals - they can eat 20 pounds in one meal!", icon: "🍽️" },
      { category: 'habitat', fact: "Cougars live in mountains, forests, deserts, and swamps across North and South America!", icon: "🏠" },
      { category: 'unique', fact: "Cougars have the largest range of any wild cat in the Western Hemisphere!", icon: "💡" }
    ]
  },
  {
    id: 117,
    image: "gazelle",
    clues: [
      "I am a type of antelope.",
      "I can run very fast and jump high.",
      "Lions often hunt me on the African savannah."
    ],
    answer: "Gazelle",
    emoji: "🦌",
    funFacts: [
      { category: 'ability', fact: "Gazelles can run up to 60 mph and leap 10 feet high to escape predators!", icon: "⭐" },
      { category: 'baby', fact: "Baby gazelles are called calves and can run within minutes of being born!", icon: "🍼" },
      { category: 'group', fact: "Gazelles live in herds of 10-30 animals and work together to watch for predators!", icon: "👥" },
      { category: 'sound', fact: "Gazelles make snorting alarm calls and soft bleating sounds to communicate with their herd!", icon: "🔊" },
      { category: 'diet', fact: "Gazelles eat grass, leaves, and shoots - they can survive without water for long periods!", icon: "🍽️" },
      { category: 'habitat', fact: "Gazelles live on African savannas and grasslands where they can see predators coming!", icon: "🏠" },
      { category: 'unique', fact: "Gazelles do a special bouncing dance called 'pronking' to show predators they're healthy and hard to catch!", icon: "💡" }
    ]
  },
  {
    id: 118,
    image: "wildebeest",
    clues: [
      "I am also called a gnu.",
      "I migrate in large herds across Africa.",
      "I look like a mix between a cow and an antelope."
    ],
    answer: "Wildebeest",
    emoji: "🐃",
    funFacts: [
      { category: 'ability', fact: "Wildebeest can run 50 mph and swim across crocodile-infested rivers during migration!", icon: "⭐" },
      { category: 'baby', fact: "Baby wildebeest are called calves and can walk within minutes and run with the herd in hours!", icon: "🍼" },
      { category: 'group', fact: "Wildebeest migrate in herds of over 1 million animals - the largest animal migration on Earth!", icon: "👥" },
      { category: 'sound', fact: "Wildebeest make loud grunting and bellowing calls that sound like 'gnu' - that's how they got their name!", icon: "🔊" },
      { category: 'diet', fact: "Wildebeest eat grass and need to drink water daily, which drives their incredible migrations!", icon: "🍽️" },
      { category: 'habitat', fact: "Wildebeest live on African savannas and migrate 1,800 miles annually following the rains!", icon: "🏠" },
      { category: 'unique', fact: "The Great Migration of wildebeest is so massive it can be seen from space!", icon: "💡" }
    ]
  },
  {
    id: 119,
    image: "tarantula",
    clues: [
      "I am a large, hairy spider.",
      "Some people keep me as a pet.",
      "Despite my scary look, my bite is not deadly to humans."
    ],
    answer: "Tarantula",
    emoji: "🕷️",
    funFacts: [
      { category: 'ability', fact: "Tarantulas can regrow lost legs and have hairs that detect vibrations from far away!", icon: "⭐" },
      { category: 'baby', fact: "Baby tarantulas are called spiderlings and molt their skin 4-12 times as they grow!", icon: "🍼" },
      { category: 'group', fact: "Tarantulas are solitary and only come together to mate - females sometimes eat males after mating!", icon: "👥" },
      { category: 'sound', fact: "Tarantulas make hissing sounds by rubbing their legs together when threatened!", icon: "🔊" },
      { category: 'diet', fact: "Tarantulas eat insects, frogs, lizards, and small birds that they hunt at night!", icon: "🍽️" },
      { category: 'habitat', fact: "Tarantulas live in burrows, trees, and under rocks in deserts and rainforests worldwide!", icon: "🏠" },
      { category: 'unique', fact: "Female tarantulas can live 30+ years while males only live 3-7 years!", icon: "💡" }
    ]
  },
  {
    id: 120,
    image: "chameleon",
    clues: [
      "I can change my color to match my surroundings.",
      "I have a long, sticky tongue to catch insects.",
      "My eyes can move in different directions at the same time."
    ],
    answer: "Chameleon",
    emoji: "🦎",
    funFacts: [
      { category: 'ability', fact: "Chameleons can shoot their tongues twice their body length in 0.07 seconds!", icon: "⭐" },
      { category: 'baby', fact: "Baby chameleons are called hatchlings and can change colors and hunt from the moment they're born!", icon: "🍼" },
      { category: 'group', fact: "Chameleons are solitary and territorial - they don't like being around other chameleons!", icon: "👥" },
      { category: 'sound', fact: "Chameleons hiss, click their tongues, and some species can make rattling sounds!", icon: "🔊" },
      { category: 'diet', fact: "Chameleons eat insects, spiders, worms, and some larger species eat birds and small reptiles!", icon: "🍽️" },
      { category: 'habitat', fact: "Chameleons live in trees and bushes in rainforests, deserts, and mountains in Africa and Madagascar!", icon: "🏠" },
      { category: 'unique', fact: "Chameleons change colors to communicate emotions and regulate temperature, not just for camouflage!", icon: "💡" }
    ]
  },
  {
    id: 121,
    image: "iguana",
    clues: [
      "I am a large lizard.",
      "I have a crest along my back.",
      "I can drop my tail when in danger and grow a new one."
    ],
    answer: "Iguana",
    emoji: "🦎",
    funFacts: [
      { category: 'ability', fact: "Iguanas can swim, dive underwater for 30 minutes, and see in both visible and UV light!", icon: "⭐" },
      { category: 'baby', fact: "Baby iguanas are called hatchlings and can fend for themselves immediately after hatching!", icon: "🍼" },
      { category: 'group', fact: "Young iguanas often live together in groups for protection, but adults are more solitary!", icon: "👥" },
      { category: 'sound', fact: "Iguanas hiss when threatened and make head-bobbing displays to communicate dominance!", icon: "🔊" },
      { category: 'diet', fact: "Iguanas are mostly herbivores that eat leaves, flowers, and fruits, but babies eat some insects!", icon: "🍽️" },
      { category: 'habitat', fact: "Iguanas live in tropical rainforests, deserts, and coastal areas across Central and South America!", icon: "🏠" },
      { category: 'unique', fact: "Iguanas have a third eye on top of their heads that can detect shadows and changes in light!", icon: "💡" }
    ]
  },
  {
    id: 122,
    image: "rattlesnake",
    clues: [
      "I am a venomous snake.",
      "I have a rattle on my tail that makes noise.",
      "I live in dry areas of the Americas."
    ],
    answer: "Rattlesnake",
    emoji: "🐍",
    funFacts: [
      { category: 'ability', fact: "Rattlesnakes can detect heat from warm-blooded animals and strike in 0.2 seconds!", icon: "⭐" },
      { category: 'baby', fact: "Baby rattlesnakes are called snakelets and are born with venom but no rattle!", icon: "🍼" },
      { category: 'group', fact: "Rattlesnakes are solitary but sometimes gather in dens with hundreds of snakes during winter!", icon: "👥" },
      { category: 'sound', fact: "Rattlesnakes shake their tails up to 50 times per second to make their warning rattle sound!", icon: "🔊" },
      { category: 'diet', fact: "Rattlesnakes hunt rodents, birds, and rabbits by injecting venom and waiting for them to die!", icon: "🍽️" },
      { category: 'habitat', fact: "Rattlesnakes live in deserts, grasslands, and forests across the Americas!", icon: "🏠" },
      { category: 'unique', fact: "Rattlesnakes add a new segment to their rattle every time they shed their skin!", icon: "💡" }
    ]
  },
  {
    id: 123,
    image: "cobra",
    clues: [
      "I am a venomous snake.",
      "I can spread my neck into a hood when threatened.",
      "Snake charmers often use me in their acts."
    ],
    answer: "Cobra",
    emoji: "🐍",
    funFacts: [
      { category: 'ability', fact: "Cobras can rear up to 6 feet tall, spit venom 8 feet accurately, and have excellent eyesight!", icon: "⭐" },
      { category: 'baby', fact: "Baby cobras are called hatchlings and can spread their hoods and inject venom from birth!", icon: "🍼" },
      { category: 'group', fact: "Cobras are solitary snakes that only come together during mating season!", icon: "👥" },
      { category: 'sound', fact: "Cobras hiss loudly and some species can growl by forcing air through their throat!", icon: "🔊" },
      { category: 'diet', fact: "Cobras hunt birds, frogs, fish, and other snakes - king cobras even eat other cobras!", icon: "🍽️" },
      { category: 'habitat', fact: "Cobras live in forests, grasslands, and deserts across Africa and Asia!", icon: "🏠" },
      { category: 'unique', fact: "King cobras are the longest venomous snakes in the world and can grow over 18 feet long!", icon: "💡" }
    ]
  },
  {
    id: 124,
    image: "cockatoo",
    clues: [
      "I am a bird with a crest on my head.",
      "I can learn to speak words.",
      "I am often kept as a pet."
    ],
    answer: "Cockatoo",
    emoji: "🦜",
    funFacts: [
      { category: 'ability', fact: "Cockatoos can learn over 100 words, solve puzzles, and use tools to get food!", icon: "⭐" },
      { category: 'baby', fact: "Baby cockatoos are called chicks and stay with their parents for up to 6 months!", icon: "🍼" },
      { category: 'group', fact: "Cockatoos live in flocks of up to 100 birds and are very social, often preening each other!", icon: "👥" },
      { category: 'sound', fact: "Cockatoos are extremely loud and can be heard from miles away - they scream to communicate!", icon: "🔊" },
      { category: 'diet', fact: "Cockatoos eat seeds, nuts, fruits, and flowers - they use their strong beaks to crack hard shells!", icon: "🍽️" },
      { category: 'habitat', fact: "Cockatoos live in forests and woodlands in Australia and nearby islands!", icon: "🏠" },
      { category: 'unique', fact: "Cockatoos can live over 100 years and show emotions by raising or lowering their head crests!", icon: "💡" }
    ]
  },
  {
    id: 125,
    image: "toucan",
    clues: [
      "I have a very large, colorful bill.",
      "I live in the rainforests of South America.",
      "I eat fruits and berries."
    ],
    answer: "Toucan",
    emoji: "🦜",
    funFacts: [
      { category: 'ability', fact: "Toucans can toss fruit in the air and catch it in their throats, and their bills help them reach food on thin branches!", icon: "⭐" },
      { category: 'baby', fact: "Baby toucans are called chicks and are born with small bills that grow to full size by 4 months!", icon: "🍼" },
      { category: 'group', fact: "Toucans live in flocks of 6-12 birds and sleep together by tucking their bills under their wings!", icon: "👥" },
      { category: 'sound', fact: "Toucans make loud croaking, yelping, and rattling sounds that can be heard throughout the rainforest!", icon: "🔊" },
      { category: 'diet', fact: "Toucans eat over 100 types of fruit plus eggs, insects, and small reptiles!", icon: "🍽️" },
      { category: 'habitat', fact: "Toucans live high in rainforest canopies from Mexico to South America!", icon: "🏠" },
      { category: 'unique', fact: "Toucan bills are hollow and lightweight but strong enough to be used as weapons!", icon: "💡" }
    ]
  },
  {
    id: 126,
    image: "hummingbird",
    clues: [
      "I am the smallest bird in the world.",
      "I can hover in mid-air and fly backwards.",
      "I drink nectar from flowers."
    ],
    answer: "Hummingbird",
    emoji: "🐦",
    funFacts: [
      { category: 'ability', fact: "Hummingbirds beat their wings 80 times per second and are the only birds that can fly backwards!", icon: "⭐" },
      { category: 'baby', fact: "Baby hummingbirds are called chicks and are the size of a penny when they hatch!", icon: "🍼" },
      { category: 'group', fact: "Hummingbirds are mostly solitary but sometimes gather at feeders with lots of nectar!", icon: "👥" },
      { category: 'sound', fact: "Hummingbirds make high-pitched chirping sounds and their wings create a humming noise!", icon: "🔊" },
      { category: 'diet', fact: "Hummingbirds drink nectar from 2,000 flowers daily and eat small insects for protein!", icon: "🍽️" },
      { category: 'habitat', fact: "Hummingbirds live from Alaska to South America in gardens, forests, and mountain meadows!", icon: "🏠" },
      { category: 'unique', fact: "Hummingbird hearts beat 1,260 times per minute - 20 times faster than humans!", icon: "💡" }
    ]
  },
  {
    id: 127,
    image: "albatross",
    clues: [
      "I am a large seabird with the longest wingspan.",
      "I can sleep while flying over the ocean.",
      "I mate for life and return to the same place to breed."
    ],
    answer: "Albatross",
    emoji: "🐦",
    funFacts: [
      { category: 'ability', fact: "Albatrosses can fly 600 miles a day without flapping their wings, using wind currents to soar!", icon: "⭐" },
      { category: 'baby', fact: "Baby albatrosses are called chicks and stay with their parents for up to a year learning to fly!", icon: "🍼" },
      { category: 'group', fact: "Albatrosses gather in large colonies on islands to breed and perform elaborate dancing courtship rituals!", icon: "👥" },
      { category: 'sound', fact: "Albatrosses make loud honking, grunting, and bill-clattering sounds during courtship!", icon: "🔊" },
      { category: 'diet', fact: "Albatrosses eat squid, fish, and krill that they catch by diving into the ocean!", icon: "🍽️" },
      { category: 'habitat', fact: "Albatrosses spend most of their lives flying over the open ocean and only come to land to breed!", icon: "🏠" },
      { category: 'unique', fact: "Albatrosses have the largest wingspan of any bird - up to 12 feet from tip to tip!", icon: "💡" }
    ]
  },
  {
    id: 128,
    image: "vulture",
    clues: [
      "I have a bald head and feed on dead animals.",
      "I soar on thermal currents looking for food.",
      "I clean up the environment by eating carrion."
    ],
    answer: "Vulture",
    emoji: "🦅",
    funFacts: [
      { category: 'ability', fact: "Vultures can soar for hours without flapping their wings and have the strongest stomach acid of any animal to digest rotting meat!", icon: "⭐" },
      { category: 'baby', fact: "Baby vultures are called chicks and are covered in fluffy white down that helps them stay warm in the nest!", icon: "🍼" },
      { category: 'group', fact: "A group of vultures is called a 'wake' when feeding and a 'kettle' when soaring together in thermal currents!", icon: "👥" },
      { category: 'sound', fact: "Vultures don't have vocal cords so they hiss, grunt, and wheeze instead of singing like other birds!", icon: "🔊" },
      { category: 'diet', fact: "Vultures eat only dead animals and can detect rotting meat from over a mile away using their excellent sense of smell!", icon: "🍽️" },
      { category: 'habitat', fact: "Vultures live worldwide in open areas like savannas and deserts where they can easily spot carrion from high in the sky!", icon: "🏠" },
      { category: 'unique', fact: "Vultures have bald heads so bacteria from rotting meat doesn't stick to feathers, keeping them clean while eating!", icon: "💡" }
    ]
  },
  {
    id: 129,
    image: "woodpecker",
    clues: [
      "I peck holes in trees with my strong beak.",
      "I have a special skull to protect my brain when pecking.",
      "I eat insects that live in tree bark."
    ],
    answer: "Woodpecker",
    emoji: "🐦",
    funFacts: [
      { category: 'ability', fact: "Woodpeckers can peck 20 times per second and have special shock-absorbing skulls to protect their brains!", icon: "⭐" },
      { category: 'baby', fact: "Baby woodpeckers are called chicks and are born in tree holes that their parents carved out with their beaks!", icon: "🍼" },
      { category: 'group', fact: "Most woodpeckers live alone, but some species like Acorn Woodpeckers live in family groups and share stored acorns!", icon: "👥" },
      { category: 'sound', fact: "Woodpeckers drum on trees to communicate with other woodpeckers and each species has its own drumming pattern!", icon: "🔊" },
      { category: 'diet', fact: "Woodpeckers eat insects, larvae, nuts, and sap, using their long tongues to reach bugs deep inside tree bark!", icon: "🍽️" },
      { category: 'habitat', fact: "Woodpeckers live in forests worldwide and create nesting holes in dead or living trees, which other animals later use!", icon: "🏠" },
      { category: 'unique', fact: "Woodpeckers have stiff tail feathers that work like a kickstand to help them balance while pecking on tree trunks!", icon: "💡" }
    ]
  },
  {
    id: 130,
    image: "puffin",
    clues: [
      "I am a seabird with a colorful beak.",
      "I nest on cliffs by the ocean.",
      "I can hold many fish in my beak at once."
    ],
    answer: "Puffin",
    emoji: "🐧",
    funFacts: [
      { category: 'ability', fact: "Puffins can hold up to 30 small fish crosswise in their beaks at once and fly underwater using their wings like flippers!", icon: "⭐" },
      { category: 'baby', fact: "Baby puffins are called pufflings and stay in underground burrows for 6 weeks before learning to fly and hunt!", icon: "🍼" },
      { category: 'group', fact: "A group of puffins is called a 'circus' and they gather in huge colonies on clifftops during breeding season!", icon: "👥" },
      { category: 'sound', fact: "Puffins make growling sounds in their burrows and can be quite noisy when thousands gather in breeding colonies!", icon: "🔊" },
      { category: 'diet', fact: "Puffins eat small fish like sardines, herring, and sand eels, catching them by diving underwater and swimming after them!", icon: "🍽️" },
      { category: 'habitat', fact: "Puffins live on sea cliffs and islands in the North Atlantic, spending most of their lives out at sea!", icon: "🏠" },
      { category: 'unique', fact: "Puffins have bright orange beaks only during breeding season - in winter their beaks turn gray and smaller!", icon: "💡" }
    ]
  },
  {
    id: 131,
    image: "kiwi",
    clues: [
      "I am a flightless bird from New Zealand.",
      "I have hairlike feathers and a long beak.",
      "I lay eggs that are very large compared to my body."
    ],
    answer: "Kiwi",
    emoji: "🥝",
    funFacts: [
      { category: 'ability', fact: "Kiwis have an excellent sense of smell and are the only birds with nostrils at the tip of their long beaks!", icon: "⭐" },
      { category: 'baby', fact: "Baby kiwis are called chicks and are born with adult feathers ready to run around and find food immediately!", icon: "🍼" },
      { category: 'group', fact: "Kiwis are usually solitary and only come together during mating season to form pairs that mate for life!", icon: "👥" },
      { category: 'sound', fact: "Kiwis make loud 'kee-wee' calls that sound like their name, especially at night when they're most active!", icon: "🔊" },
      { category: 'diet', fact: "Kiwis eat worms, insects, grubs, and berries that they find by poking their long beaks deep into the soil!", icon: "🍽️" },
      { category: 'habitat', fact: "Kiwis live only in New Zealand's forests and grasslands, sleeping in burrows during the day and hunting at night!", icon: "🏠" },
      { category: 'unique', fact: "Kiwi eggs are huge - up to 20% of the mother's body weight, like a human woman laying a 35-pound egg!", icon: "💡" }
    ]
  },
  {
    id: 132,
    image: "stingray",
    clues: [
      "I am a flat fish with a long tail.",
      "I live on the ocean floor.",
      "I have a venomous spine on my tail."
    ],
    answer: "Stingray",
    emoji: "🐠",
    funFacts: [
      { category: 'ability', fact: "Stingrays can detect electrical fields from other animals' heartbeats and muscle movements using special sensors!", icon: "⭐" },
      { category: 'baby', fact: "Baby stingrays are called pups and are born as perfect miniature copies of their parents, ready to swim and hunt!", icon: "🍼" },
      { category: 'group', fact: "Some stingrays travel in large groups called 'fevers' that can contain thousands of rays migrating together!", icon: "👥" },
      { category: 'sound', fact: "Stingrays are mostly silent but some species can make clicking sounds by grinding their teeth together!", icon: "🔊" },
      { category: 'diet', fact: "Stingrays eat clams, oysters, worms, and small fish by crushing them with powerful jaws under their flat bodies!", icon: "🍽️" },
      { category: 'habitat', fact: "Stingrays live in warm coastal waters worldwide, burying themselves in sand or mud on the ocean floor!", icon: "🏠" },
      { category: 'unique', fact: "Stingrays are related to sharks and have skeletons made of cartilage instead of bone, making them very flexible!", icon: "💡" }
    ]
  },
  {
    id: 133,
    image: "swordfish",
    clues: [
      "I have a long, pointed bill like a sword.",
      "I am one of the fastest fish in the sea.",
      "I am hunted for sport and food."
    ],
    answer: "Swordfish",
    emoji: "🐟",
    funFacts: [
      { category: 'ability', fact: "Swordfish can swim up to 60 mph and their 'sword' is actually an extension of their upper jaw used to slash at prey!", icon: "⭐" },
      { category: 'baby', fact: "Baby swordfish are called fry and don't have swords when born - they grow their bill as they get bigger!", icon: "🍼" },
      { category: 'group', fact: "Adult swordfish are mostly solitary hunters, but young swordfish sometimes travel in small schools for protection!", icon: "👥" },
      { category: 'sound', fact: "Swordfish don't make vocal sounds but create whooshing noises as they speed through the water chasing prey!", icon: "🔊" },
      { category: 'diet', fact: "Swordfish eat squid, octopus, and smaller fish, using their sword to stun or kill prey before swallowing it whole!", icon: "🍽️" },
      { category: 'habitat', fact: "Swordfish live in warm ocean waters worldwide and migrate thousands of miles following food and temperature changes!", icon: "🏠" },
      { category: 'unique', fact: "Swordfish have special organs that heat their brains and eyes, helping them hunt in cold deep waters!", icon: "💡" }
    ]
  },
  {
    id: 134,
    image: "narwhal",
    clues: [
      "I am a small whale with a long tusk.",
      "My tusk is actually a tooth that grows through my lip.",
      "I live in Arctic waters."
    ],
    answer: "Narwhal",
    emoji: "🐋",
    funFacts: [
      { category: 'ability', fact: "Narwhals can dive up to 5,000 feet deep and hold their breath for 25 minutes while hunting in icy Arctic waters!", icon: "⭐" },
      { category: 'baby', fact: "Baby narwhals are called calves and are born without tusks - only males grow the long spiral tusk as they mature!", icon: "🍼" },
      { category: 'group', fact: "Narwhals travel in groups called pods of 10-100 whales and gather in larger groups of thousands during migration!", icon: "👥" },
      { category: 'sound', fact: "Narwhals make clicks, whistles, and pulsed sounds to echolocate and communicate underwater, like underwater whale songs!", icon: "🔊" },
      { category: 'diet', fact: "Narwhals eat cod, squid, and shrimp, sucking up prey like a vacuum cleaner since they don't have many teeth!", icon: "🍽️" },
      { category: 'habitat', fact: "Narwhals live only in Arctic waters around Greenland and Canada, following the sea ice as it forms and melts!", icon: "🏠" },
      { category: 'unique', fact: "The narwhal's tusk can grow up to 10 feet long and has millions of nerve endings that help sense water conditions!", icon: "💡" }
    ]
  },
  {
    id: 135,
    image: "walrus",
    clues: [
      "I have two long tusks and whiskers.",
      "I live in the Arctic on ice floes.",
      "I am large and have thick skin to keep me warm."
    ],
    answer: "Walrus",
    emoji: "🦭",
    funFacts: [
      { category: 'ability', fact: "Walruses can sleep while floating in water and use their tusks like ice picks to haul themselves onto ice floes!", icon: "⭐" },
      { category: 'baby', fact: "Baby walruses are called calves and stay with their mothers for 2-3 years, nursing and learning to find food!", icon: "🍼" },
      { category: 'group', fact: "Walruses gather in huge groups called herds on beaches and ice, sometimes with thousands of walruses together!", icon: "👥" },
      { category: 'sound', fact: "Walruses make loud bellowing, roaring, and barking sounds that can be heard both underwater and above the surface!", icon: "🔊" },
      { category: 'diet', fact: "Walruses eat clams, mussels, and other shellfish, using their sensitive whiskers to find food on the ocean floor!", icon: "🍽️" },
      { category: 'habitat', fact: "Walruses live in the Arctic Ocean on sea ice and rocky shores, migrating with the ice as seasons change!", icon: "🏠" },
      { category: 'unique', fact: "Walrus tusks can grow up to 3 feet long and are used for fighting, climbing, and showing off to other walruses!", icon: "💡" }
    ]
  },
  {
    id: 136,
    image: "sea_lion",
    clues: [
      "I am like a seal but can walk on my flippers.",
      "I am noisy and bark loudly.",
      "I can balance balls on my nose in shows."
    ],
    answer: "Sea Lion",
    emoji: "🦭",
    funFacts: [
      { category: 'ability', fact: "Sea lions can swim up to 25 mph and dive 600 feet deep, plus they can walk on land using their flippers like legs!", icon: "⭐" },
      { category: 'baby', fact: "Baby sea lions are called pups and can swim within hours of being born, though they nurse for 6-12 months!", icon: "🍼" },
      { category: 'group', fact: "Sea lions live in large colonies with hundreds of individuals, led by dominant males who protect their territory!", icon: "👥" },
      { category: 'sound', fact: "Sea lions bark loudly to communicate and can recognize their own pup's call among thousands of other barking sea lions!", icon: "🔊" },
      { category: 'diet', fact: "Sea lions eat fish, squid, and sometimes shellfish, swallowing small fish whole and shaking larger ones apart!", icon: "🍽️" },
      { category: 'habitat', fact: "Sea lions live along rocky coasts and beaches in the Pacific Ocean, from Alaska to Mexico and South America!", icon: "🏠" },
      { category: 'unique', fact: "Sea lions are incredibly intelligent and can learn tricks, use tools, and even understand simple sign language!", icon: "💡" }
    ]
  },
  {
    id: 137,
    image: "hornbill",
    clues: [
      "I am a bird with a very large, curved bill.",
      "I have a casque (helmet) on top of my bill.",
      "I live in forests of Africa and Asia."
    ],
    answer: "Hornbill",
    emoji: "🦜",
    funFacts: [
      { category: 'ability', fact: "Hornbills can live up to 50 years and some species can fly up to 40 mph through dense forest canopies!", icon: "⭐" },
      { category: 'baby', fact: "Baby hornbills are called chicks and mothers seal themselves inside tree holes while raising babies, depending on fathers for food!", icon: "🍼" },
      { category: 'group', fact: "Most hornbills are monogamous pairs, but some species gather in flocks of hundreds during the non-breeding season!", icon: "👥" },
      { category: 'sound', fact: "Hornbills make loud honking, cackling, and booming calls that can be heard over a mile away in the forest!", icon: "🔊" },
      { category: 'diet', fact: "Hornbills eat fruits, insects, small animals, and are important seed dispersers that help forests grow!", icon: "🍽️" },
      { category: 'habitat', fact: "Hornbills live in tropical forests of Africa, Asia, and a few islands, preferring tall trees for nesting and feeding!", icon: "🏠" },
      { category: 'unique', fact: "The hornbill's casque (helmet) is mostly hollow and lightweight, used for amplifying calls and attracting mates!", icon: "💡" }
    ]
  },
  {
    id: 138,
    image: "axolotl",
    clues: [
      "I am a salamander that keeps my juvenile features as an adult.",
      "I can regrow almost any part of my body.",
      "I live in water and have external gills."
    ],
    answer: "Axolotl",
    emoji: "🦎",
    funFacts: [
      { category: 'ability', fact: "Axolotls can perfectly regrow entire limbs, organs, and even parts of their brain and heart within months!", icon: "⭐" },
      { category: 'baby', fact: "Baby axolotls are called larvae and look just like tiny adults, keeping their baby features their whole lives!", icon: "🍼" },
      { category: 'group', fact: "Axolotls are mostly solitary but don't fight when they meet, and they can recognize other axolotls by smell!", icon: "👥" },
      { category: 'sound', fact: "Axolotls don't make vocal sounds but create vibrations in water to communicate and can sense water movements!", icon: "🔊" },
      { category: 'diet', fact: "Axolotls eat worms, insects, small fish, and anything that fits in their mouth, sucking up food like a vacuum!", icon: "🍽️" },
      { category: 'habitat', fact: "Axolotls only live naturally in lake canals of Mexico City, but most are now in labs and aquariums worldwide!", icon: "🏠" },
      { category: 'unique', fact: "Axolotls are critically endangered in the wild but millions exist in research labs studying their amazing healing powers!", icon: "💡" }
    ]
  },
  {
    id: 139,
    image: "komodo_dragon",
    clues: [
      "I am the largest lizard in the world.",
      "I live on islands in Indonesia.",
      "I have a venomous bite and can take down large prey."
    ],
    answer: "Komodo Dragon",
    emoji: "🦎",
    funFacts: [
      { category: 'ability', fact: "Komodo dragons can run 13 mph, swim, climb trees, and their bite delivers venom that prevents blood clotting!", icon: "⭐" },
      { category: 'baby', fact: "Baby Komodo dragons are called hatchlings and must climb trees to avoid being eaten by adult dragons, including their parents!", icon: "🍼" },
      { category: 'group', fact: "Adult Komodo dragons are usually solitary except when feeding on large carcasses where many gather together!", icon: "👥" },
      { category: 'sound', fact: "Komodo dragons hiss loudly when threatened and can make rumbling sounds deep in their throats!", icon: "🔊" },
      { category: 'diet', fact: "Komodo dragons eat deer, pigs, water buffalo, and carrion, swallowing huge chunks of meat and even bones!", icon: "🍽️" },
      { category: 'habitat', fact: "Komodo dragons live only on a few Indonesian islands, preferring hot, dry savannas and forests near the coast!", icon: "🏠" },
      { category: 'unique', fact: "Komodo dragons can eat 80% of their body weight in one meal and then not eat again for weeks or months!", icon: "💡" }
    ]
  },
  {
    id: 140,
    image: "capybara",
    clues: [
      "I am the largest rodent in the world.",
      "I love to swim and am semi-aquatic.",
      "I am very social and get along with many other animals."
    ],
    answer: "Capybara",
    emoji: "🐹",
    funFacts: [
      { category: 'ability', fact: "Capybaras are excellent swimmers with webbed feet and can stay underwater for 5 minutes to hide from predators!", icon: "⭐" },
      { category: 'baby', fact: "Baby capybaras are called pups and can swim before they can walk properly, staying close to mom for protection!", icon: "🍼" },
      { category: 'group', fact: "Capybaras live in groups of 10-20 and are so calm that birds, monkeys, and even caimans often sit on them!", icon: "👥" },
      { category: 'sound', fact: "Capybaras make soft clicking, whistling, and purring sounds to communicate with their family groups!", icon: "🔊" },
      { category: 'diet', fact: "Capybaras eat grass, water plants, and fruit, chewing constantly because their teeth never stop growing!", icon: "🍽️" },
      { category: 'habitat', fact: "Capybaras live in wetlands, rivers, and lakes across South America, always staying near water for safety!", icon: "🏠" },
      { category: 'unique', fact: "Capybaras are the world's most chill animals - they're so relaxed that other animals use them as living furniture!", icon: "💡" }
    ]
  },
  {
    id: 141,
    image: "meerkat",
    clues: [
      "I stand on my hind legs to look for danger.",
      "I live in groups called mobs or gangs.",
      "I dig extensive burrows in the ground."
    ],
    answer: "Meerkat",
    emoji: "🦫",
    funFacts: [
      { category: 'ability', fact: "Meerkats can see eagles from over a mile away and have different alarm calls for different types of danger!", icon: "⭐" },
      { category: 'baby', fact: "Baby meerkats are called pups and are born underground, staying in burrows for 3 weeks before coming out!", icon: "🍼" },
      { category: 'group', fact: "Meerkat groups are called mobs, gangs, or clans with 10-30 individuals that take turns being lookouts!", icon: "👥" },
      { category: 'sound', fact: "Meerkats have over 30 different calls including specific warnings for birds, snakes, and land predators!", icon: "🔊" },
      { category: 'diet', fact: "Meerkats eat insects, spiders, small reptiles, and scorpions - they're immune to certain types of venom!", icon: "🍽️" },
      { category: 'habitat', fact: "Meerkats live in the Kalahari Desert of southern Africa, creating complex burrow systems with multiple entrances!", icon: "🏠" },
      { category: 'unique', fact: "Meerkats have dark patches around their eyes that work like sunglasses, reducing glare in the bright desert!", icon: "💡" }
    ]
  },
  {
    id: 142,
    image: "angler_fish",
    clues: [
      "I live in the deep sea.",
      "I have a glowing lure that hangs from my head.",
      "I use my light to attract prey in the darkness."
    ],
    answer: "Angler Fish",
    emoji: "🐟",
    funFacts: [
      { category: 'ability', fact: "Angler fish create their own light using bacteria and can unhinge their jaws to swallow prey twice their size!", icon: "⭐" },
      { category: 'baby', fact: "Baby angler fish live near the surface as tiny transparent larvae before sinking to the deep sea as adults!", icon: "🍼" },
      { category: 'group', fact: "Most angler fish are solitary, but in some species tiny males permanently attach to females like parasites!", icon: "👥" },
      { category: 'sound', fact: "Angler fish don't make sounds but communicate through bioluminescent light patterns in the dark depths!", icon: "🔊" },
      { category: 'diet', fact: "Angler fish eat anything that comes near their lure - fish, squid, and crustaceans are all sucked into their huge mouths!", icon: "🍽️" },
      { category: 'habitat', fact: "Angler fish live in the deep ocean where it's completely dark, from 660 to 9,800 feet below the surface!", icon: "🏠" },
      { category: 'unique', fact: "Female angler fish can be 10 times larger than males, and males bite onto females and fuse with them forever!", icon: "💡" }
    ]
  },
  {
    id: 143,
    image: "okapi",
    clues: [
      "I look like a mix between a zebra and a giraffe.",
      "I have striped legs but a brown body.",
      "I am related to the giraffe and live in rainforests."
    ],
    answer: "Okapi",
    emoji: "🦓",
    funFacts: [
      { category: 'ability', fact: "Okapis can rotate their ears independently and have long blue tongues up to 14 inches long for grabbing leaves!", icon: "⭐" },
      { category: 'baby', fact: "Baby okapis are called calves and can stand within 30 minutes of birth, hiding in dense vegetation for protection!", icon: "🍼" },
      { category: 'group', fact: "Okapis are mostly solitary animals, only coming together during mating season and mothers with their young!", icon: "👥" },
      { category: 'sound', fact: "Okapis communicate with soft chuffs, bleats, and infrasonic calls too low for humans to hear!", icon: "🔊" },
      { category: 'diet', fact: "Okapis eat leaves, buds, shoots, and fruits, using their long tongues to strip vegetation from branches!", icon: "🍽️" },
      { category: 'habitat', fact: "Okapis live only in the dense rainforests of the Democratic Republic of Congo in central Africa!", icon: "🏠" },
      { category: 'unique', fact: "Okapis were unknown to science until 1901 and are called 'forest giraffes' - their stripes help them hide in dappled forest light!", icon: "💡" }
    ]
  },
  {
    id: 144,
    image: "tapir",
    clues: [
      "I have a short trunk-like nose.",
      "I am related to rhinos and horses.",
      "I live in forests and wetlands."
    ],
    answer: "Tapir",
    emoji: "🐘",
    funFacts: [
      { category: 'ability', fact: "Tapirs are excellent swimmers and can stay underwater for several minutes, walking along river bottoms!", icon: "⭐" },
      { category: 'baby', fact: "Baby tapirs are called calves and have white spots and stripes that fade as they grow older for camouflage!", icon: "🍼" },
      { category: 'group', fact: "Tapirs are usually solitary but mothers stay with their calves for over a year teaching them what to eat!", icon: "👥" },
      { category: 'sound', fact: "Tapirs make high-pitched whistling sounds to communicate and can be heard from far away in the forest!", icon: "🔊" },
      { category: 'diet', fact: "Tapirs eat fruits, leaves, shoots, and water plants, using their flexible snouts like a hand to grab food!", icon: "🍽️" },
      { category: 'habitat', fact: "Tapirs live in rainforests and grasslands in Central and South America, plus one species in Asia!", icon: "🏠" },
      { category: 'unique', fact: "Tapirs have barely changed in 35 million years and are often called 'living fossils' from the prehistoric era!", icon: "💡" }
    ]
  },
  {
    id: 145,
    image: "lemur",
    clues: [
      "I have a long, striped tail and large eyes.",
      "I live only on the island of Madagascar.",
      "I leap from tree to tree."
    ],
    answer: "Lemur",
    emoji: "🐒",
    funFacts: [
      { category: 'ability', fact: "Ring-tailed lemurs can leap 25 feet between trees and use their tails like a flag to communicate emotions!", icon: "⭐" },
      { category: 'baby', fact: "Baby lemurs are called pups and ride on their mother's backs for months, learning which foods are safe to eat!", icon: "🍼" },
      { category: 'group', fact: "Lemurs live in groups called troops led by females, and they have 'stink fights' using scent from their wrists!", icon: "👥" },
      { category: 'sound', fact: "Lemurs make over 30 different sounds including purring, grunting, and loud alarm calls to warn of danger!", icon: "🔊" },
      { category: 'diet', fact: "Lemurs eat fruits, leaves, flowers, and bark, and some species love tamarind fruit which gives them their name!", icon: "🍽️" },
      { category: 'habitat', fact: "All lemurs live only on Madagascar island, having evolved there in isolation for 50 million years!", icon: "🏠" },
      { category: 'unique', fact: "Lemurs sun themselves every morning sitting upright like they're meditating, warming up for the day ahead!", icon: "💡" }
    ]
  },
  {
    id: 146,
    image: "mantis_shrimp",
    clues: [
      "I have powerful claws that can strike with the force of a bullet.",
      "I can see more colors than humans can.",
      "I live in burrows on the ocean floor."
    ],
    answer: "Mantis Shrimp",
    emoji: "🦐",
    funFacts: [
      { category: 'ability', fact: "Mantis shrimp punch with the force of a .22 caliber bullet and can see 16 types of color (humans see only 3)!", icon: "⭐" },
      { category: 'baby', fact: "Baby mantis shrimp are called larvae and drift in the ocean for months before settling down to dig burrows!", icon: "🍼" },
      { category: 'group', fact: "Most mantis shrimp are solitary and fiercely defend their burrows, but some species live in monogamous pairs!", icon: "👥" },
      { category: 'sound', fact: "Mantis shrimp make rumbling sounds by vibrating their muscles and can create sonic booms with their punches!", icon: "🔊" },
      { category: 'diet', fact: "Mantis shrimp eat crabs, fish, octopus, and other shrimp, either spearing or smashing their prey to pieces!", icon: "🍽️" },
      { category: 'habitat', fact: "Mantis shrimp live in tropical coral reefs and rocky ocean floors, digging elaborate burrows with multiple chambers!", icon: "🏠" },
      { category: 'unique', fact: "Mantis shrimp have the most complex eyes in the animal kingdom and can punch so fast it creates light flashes!", icon: "💡" }
    ]
  },
  {
    id: 147,
    image: "praying_mantis",
    clues: [
      "I have long front legs held in a prayer-like position.",
      "I can turn my head 180 degrees.",
      "I eat other insects, even my mates sometimes."
    ],
    answer: "Praying Mantis",
    emoji: "🦗",
    funFacts: [
      { category: 'ability', fact: "Praying mantises can turn their heads 180 degrees and strike prey in 30 milliseconds - faster than you can blink!", icon: "⭐" },
      { category: 'baby', fact: "Baby praying mantises are called nymphs and look like tiny adults, molting 5-10 times as they grow bigger!", icon: "🍼" },
      { category: 'group', fact: "Praying mantises are solitary hunters, and females sometimes eat males during or after mating for extra nutrition!", icon: "👥" },
      { category: 'sound', fact: "Praying mantises don't make vocal sounds but can produce hissing noises by forcing air through their breathing holes!", icon: "🔊" },
      { category: 'diet', fact: "Praying mantises eat flies, moths, crickets, and other insects, holding prey with spiky forelegs while eating them alive!", icon: "🍽️" },
      { category: 'habitat', fact: "Praying mantises live worldwide in gardens, forests, and grasslands, perfectly camouflaged among leaves and flowers!", icon: "🏠" },
      { category: 'unique', fact: "Praying mantises are the only insects that can look over their shoulder and some species can catch hummingbirds!", icon: "💡" }
    ]
  },
  {
    id: 148,
    image: "gharial",
    clues: [
      "I am a crocodilian with a very long, thin snout.",
      "I eat mainly fish.",
      "I live in rivers in India."
    ],
    answer: "Gharial",
    emoji: "🐊",
    funFacts: [
      { category: 'ability', fact: "Gharials have over 100 sharp teeth perfect for catching slippery fish and can grow up to 20 feet long!", icon: "⭐" },
      { category: 'baby', fact: "Baby gharials are called hatchlings and mothers carry them to water in their mouths, protecting them for months!", icon: "🍼" },
      { category: 'group', fact: "Gharials gather in groups during nesting season, with females laying eggs in sandy riverbanks near males!", icon: "👥" },
      { category: 'sound', fact: "Male gharials make loud buzzing sounds through the bulb on their snout tip to attract mates during breeding season!", icon: "🔊" },
      { category: 'diet', fact: "Gharials eat mostly fish, frogs, and crustaceans, swinging their heads sideways to catch prey in their narrow jaws!", icon: "🍽️" },
      { category: 'habitat', fact: "Gharials live only in rivers of India and Nepal, preferring deep, fast-flowing water with sandy banks for nesting!", icon: "🏠" },
      { category: 'unique', fact: "Gharials are critically endangered with only about 200 left in the wild - they're living fossils unchanged for millions of years!", icon: "💡" }
    ]
  },
  {
    id: 149,
    image: "king_cobra",
    clues: [
      "I am the longest venomous snake in the world.",
      "I can raise the front part of my body off the ground.",
      "I eat other snakes."
    ],
    answer: "King Cobra",
    emoji: "🐍",
    funFacts: [
      { category: 'ability', fact: "King cobras can grow 18 feet long, rear up 6 feet high, and deliver enough venom to kill an elephant!", icon: "⭐" },
      { category: 'baby', fact: "Baby king cobras are called hatchlings and are born with full venom and the ability to hunt other snakes immediately!", icon: "🍼" },
      { category: 'group', fact: "King cobras are usually solitary except during mating season when pairs perform elaborate courtship dances!", icon: "👥" },
      { category: 'sound', fact: "King cobras hiss loudly when threatened and can produce a low growling sound unlike any other snake!", icon: "🔊" },
      { category: 'diet', fact: "King cobras eat only other snakes, including venomous species, pythons, and even other king cobras!", icon: "🍽️" },
      { category: 'habitat', fact: "King cobras live in rainforests, bamboo thickets, and mangroves across Southeast Asia and India!", icon: "🏠" },
      { category: 'unique', fact: "King cobras are the only snakes that build nests for their eggs, with mothers fiercely guarding them for 60-90 days!", icon: "💡" }
    ]
  },
  {
    id: 150,
    image: "quokka",
    clues: [
      "I am known as the happiest animal because I look like I'm smiling.",
      "I live on islands off Western Australia.",
      "I am a small marsupial related to kangaroos."
    ],
    answer: "Quokka",
    emoji: "🦘",
    funFacts: [
      { category: 'ability', fact: "Quokkas can climb trees and are excellent swimmers, hopping on their hind legs like tiny kangaroos!", icon: "⭐" },
      { category: 'baby', fact: "Baby quokkas are called joeys and live in their mother's pouch for 6 months before learning to find food!", icon: "🍼" },
      { category: 'group', fact: "Quokkas are social animals that live in small family groups and are naturally curious about humans!", icon: "👥" },
      { category: 'sound', fact: "Quokkas make soft grunting and clicking sounds to communicate with each other and rarely make loud noises!", icon: "🔊" },
      { category: 'diet', fact: "Quokkas eat leaves, stems, bark, and berries, and can survive without drinking water by getting moisture from plants!", icon: "🍽️" },
      { category: 'habitat', fact: "Quokkas live only on Rottnest Island and a few other small islands off the coast of Western Australia!", icon: "🏠" },
      { category: 'unique', fact: "Quokkas are called the 'world's happiest animal' because their mouth shape makes them look like they're always smiling!", icon: "💡" }
    ]
  },
  {
    id: 151,
    image: "dragonfly",
    clues: [
      "I have four wings and a long body.",
      "I can fly in any direction, even backwards.",
      "I start my life underwater before emerging as a flying adult."
    ],
    answer: "Dragonfly",
    emoji: "🦋",
    funFacts: [
      { category: 'ability', fact: "Dragonflies can fly 35 mph, hover, fly backwards, and catch 95% of their prey - they're the best hunters in the animal kingdom!", icon: "⭐" },
      { category: 'baby', fact: "Baby dragonflies are called nymphs and live underwater for up to 5 years before climbing out to transform into flying adults!", icon: "🍼" },
      { category: 'group', fact: "Most dragonflies are solitary hunters, but some species migrate in huge swarms of millions across continents!", icon: "👥" },
      { category: 'sound', fact: "Dragonflies make soft crackling sounds with their wings but can't make vocal sounds like many other insects!", icon: "🔊" },
      { category: 'diet', fact: "Dragonflies eat mosquitoes, flies, gnats, and other flying insects, catching them mid-air with their basket-like legs!", icon: "🍽️" },
      { category: 'habitat', fact: "Dragonflies live near water worldwide, from ponds to rivers, since they need water to lay eggs and raise young!", icon: "🏠" },
      { category: 'unique', fact: "Dragonflies have been around for 300 million years and can see in all directions at once with 30,000 eyes!", icon: "💡" }
    ]
  },
  {
    id: 152,
    image: "badger",
    clues: [
      "I have a distinctive black and white striped face.",
      "I dig burrows called setts.",
      "I am nocturnal and eat small animals and plants."
    ],
    answer: "Badger",
    emoji: "🦡",
    funFacts: [
      { category: 'ability', fact: "Badgers can dig faster than a person with a shovel and have powerful claws that never stop growing!", icon: "⭐" },
      { category: 'baby', fact: "Baby badgers are called cubs and stay underground in their burrow for 8-10 weeks before coming out to explore!", icon: "🍼" },
      { category: 'group', fact: "European badgers live in family groups in underground burrows called setts that can have 50+ rooms and tunnels!", icon: "👥" },
      { category: 'sound', fact: "Badgers grunt, growl, bark, and make chirping sounds to communicate with their family members!", icon: "🔊" },
      { category: 'diet', fact: "Badgers eat earthworms, insects, small mammals, roots, and fruits - they can eat hundreds of worms in one night!", icon: "🍽️" },
      { category: 'habitat', fact: "Badgers live in forests, grasslands, and farmlands across Europe, Asia, and North America in extensive burrow systems!", icon: "🏠" },
      { category: 'unique', fact: "Honey badgers are fearless fighters that can take on lions and survive venomous snake bites - they're nearly indestructible!", icon: "💡" }
    ]
  },
  {
    id: 153,
    image: "porcupine",
    clues: [
      "I have sharp quills all over my body.",
      "I raise my quills when threatened.",
      "I am a rodent that lives in forests."
    ],
    answer: "Porcupine",
    emoji: "🦔",
    funFacts: [
      { category: 'ability', fact: "Porcupines have 30,000 quills that can detach easily when touched and grow back if lost!", icon: "⭐" },
      { category: 'baby', fact: "Baby porcupines are called porcupettes and are born with soft quills that harden within hours of birth!", icon: "🍼" },
      { category: 'group', fact: "Most porcupines are solitary, but some species gather in groups during winter for warmth and protection!", icon: "👥" },
      { category: 'sound', fact: "Porcupines grunt, whine, and chatter their teeth when threatened, and make soft humming sounds when content!", icon: "🔊" },
      { category: 'diet', fact: "Porcupines eat bark, twigs, leaves, and roots, and love salt so much they'll chew on tool handles for the salt from human hands!", icon: "🍽️" },
      { category: 'habitat', fact: "Porcupines live in forests worldwide and are excellent climbers, sleeping in trees during the day!", icon: "🏠" },
      { category: 'unique', fact: "Porcupine quills have microscopic backward-pointing barbs that make them nearly impossible to remove once stuck!", icon: "💡" }
    ]
  },
  {
    id: 154,
    image: "mandrill",
    clues: [
      "I am the largest monkey in the world.",
      "I have a colorful face with blue and red markings.",
      "I live in rainforests in Africa."
    ],
    answer: "Mandrill",
    emoji: "🐒",
    funFacts: [
      { category: 'ability', fact: "Mandrills can carry objects in their cheek pouches and swing through trees despite weighing up to 80 pounds!", icon: "⭐" },
      { category: 'baby', fact: "Baby mandrills are called infants and cling to their mothers for months, learning which foods are safe to eat!", icon: "🍼" },
      { category: 'group', fact: "Mandrills live in troops of hundreds or even thousands - the largest gatherings of primates in the world!", icon: "👥" },
      { category: 'sound', fact: "Mandrills make loud roars, grunts, and screams that can be heard over a mile away in the dense rainforest!", icon: "🔊" },
      { category: 'diet', fact: "Mandrills eat fruits, seeds, bark, stems, and occasionally insects and spiders, spending most of their day foraging!", icon: "🍽️" },
      { category: 'habitat', fact: "Mandrills live in the dense rainforests of equatorial Africa, sleeping in trees at night for safety!", icon: "🏠" },
      { category: 'unique', fact: "Male mandrills have bright blue and red faces that get more colorful when excited - the more dominant, the brighter the colors!", icon: "💡" }
    ]
  },
  {
    id: 155,
    image: "mongoose",
    clues: [
      "I am known for killing snakes.",
      "I am immune to some snake venoms.",
      "I am small but fierce."
    ],
    answer: "Mongoose",
    emoji: "🦡",
    funFacts: [
      { category: 'ability', fact: "Mongooses can kill venomous snakes and are partially immune to snake venom due to special proteins in their blood!", icon: "⭐" },
      { category: 'baby', fact: "Baby mongooses are called pups and are born blind and helpless, staying in dens for several weeks!", icon: "🍼" },
      { category: 'group', fact: "Some mongooses live alone while others live in groups called packs with complex social structures and sentries!", icon: "👥" },
      { category: 'sound', fact: "Mongooses make chattering, clicking, and growling sounds, plus alarm calls to warn others of danger!", icon: "🔊" },
      { category: 'diet', fact: "Mongooses eat snakes, lizards, birds, eggs, insects, and fruits, using their speed and agility to catch prey!", icon: "🍽️" },
      { category: 'habitat', fact: "Mongooses live in Africa, Asia, and southern Europe in forests, grasslands, and rocky areas near human settlements!", icon: "🏠" },
      { category: 'unique', fact: "Mongooses have been introduced to many islands to control snake populations, but they sometimes become pests themselves!", icon: "💡" }
    ]
  },
  {
    id: 156,
    image: "ferret",
    clues: [
      "I am a domesticated animal related to weasels.",
      "I have a long, thin body.",
      "People keep me as a pet to catch rodents."
    ],
    answer: "Ferret",
    emoji: "🦡",
    funFacts: [
      { category: 'ability', fact: "Ferrets can sleep 18-20 hours a day and are incredibly flexible, able to turn around in tunnels barely wider than their bodies!", icon: "⭐" },
      { category: 'baby', fact: "Baby ferrets are called kits and are born deaf and blind, opening their eyes at 5 weeks old!", icon: "🍼" },
      { category: 'group', fact: "A group of ferrets is called a 'business' and they love to play together, doing a happy 'war dance' when excited!", icon: "👥" },
      { category: 'sound', fact: "Ferrets make soft chuckling sounds called 'dooking' when happy and hiss when scared or angry!", icon: "🔊" },
      { category: 'diet', fact: "Ferrets are carnivores that eat meat every 3-4 hours and have super fast metabolisms requiring high-protein diets!", icon: "🍽️" },
      { category: 'habitat', fact: "Domestic ferrets live with humans worldwide but their wild cousins (polecats) live in forests and grasslands of Europe!", icon: "🏠" },
      { category: 'unique', fact: "Ferrets have been domesticated for over 2,500 years and were once used to hunt rabbits and run cables through pipes!", icon: "💡" }
    ]
  },
  {
    id: 157,
    image: "newt",
    clues: [
      "I am a type of salamander.",
      "I spend part of my life in water and part on land.",
      "I have bright colors to warn predators I'm poisonous."
    ],
    answer: "Newt",
    emoji: "🦎",
    funFacts: [
      { category: 'ability', fact: "Newts can regenerate entire limbs, tails, eyes, and even parts of their hearts and brains perfectly!", icon: "⭐" },
      { category: 'baby', fact: "Baby newts are called larvae or tadpoles and have gills for breathing underwater before developing lungs!", icon: "🍼" },
      { category: 'group', fact: "Newts are usually solitary except during breeding season when they gather in ponds and perform elaborate underwater courtship dances!", icon: "👥" },
      { category: 'sound', fact: "Newts don't make vocal sounds but communicate through chemical signals and touching during mating rituals!", icon: "🔊" },
      { category: 'diet', fact: "Newts eat worms, insects, small fish, and tadpoles, hunting both underwater and on land depending on the season!", icon: "🍽️" },
      { category: 'habitat', fact: "Newts live near ponds, streams, and wetlands worldwide, moving between water and land throughout their lives!", icon: "🏠" },
      { category: 'unique', fact: "Some newts are extremely poisonous - the rough-skinned newt has enough toxin to kill dozens of adult humans!", icon: "💡" }
    ]
  },
  {
    id: 158,
    image: "centipede",
    clues: [
      "I have many pairs of legs, one pair per body segment.",
      "I am a predator and have venomous claws.",
      "I like to live in dark, damp places."
    ],
    answer: "Centipede",
    emoji: "🪱",
    funFacts: [
      { category: 'ability', fact: "Centipedes can have 15-177 pairs of legs and run incredibly fast, using venomous claws to paralyze prey!", icon: "⭐" },
      { category: 'baby', fact: "Baby centipedes are called larvae and are born with fewer leg segments, growing more segments each time they molt!", icon: "🍼" },
      { category: 'group', fact: "Most centipedes are solitary hunters, but some species practice maternal care with mothers protecting their eggs and young!", icon: "👥" },
      { category: 'sound', fact: "Centipedes don't make vocal sounds but create rustling noises as they move through leaves and debris!", icon: "🔊" },
      { category: 'diet', fact: "Centipedes eat insects, spiders, worms, and small animals, injecting venom through their front claws called forcipules!", icon: "🍽️" },
      { category: 'habitat', fact: "Centipedes live worldwide in dark, moist places like under rocks, logs, and in basements and bathrooms!", icon: "🏠" },
      { category: 'unique', fact: "The largest centipede can grow over a foot long and some species glow in the dark with bioluminescence!", icon: "💡" }
    ]
  },
  {
    id: 159,
    image: "millipede",
    clues: [
      "I have many pairs of legs, two pairs per body segment.",
      "I eat dead plant matter.",
      "I curl into a spiral when threatened."
    ],
    answer: "Millipede",
    emoji: "🪱",
    funFacts: [
      { category: 'ability', fact: "Millipedes can have up to 750 legs and curl into a perfect spiral when threatened, protecting their soft bellies!", icon: "⭐" },
      { category: 'baby', fact: "Baby millipedes are called nymphs and start with only 6 legs, growing more segments and legs with each molt!", icon: "🍼" },
      { category: 'group', fact: "Millipedes sometimes gather in huge groups during migration or when conditions are perfect for breeding!", icon: "👥" },
      { category: 'sound', fact: "Millipedes are silent creatures but make soft rustling sounds as they move through fallen leaves!", icon: "🔊" },
      { category: 'diet', fact: "Millipedes eat decaying leaves, wood, and organic matter, helping recycle nutrients back into the soil!", icon: "🍽️" },
      { category: 'habitat', fact: "Millipedes live worldwide in moist soil, under logs, and in leaf litter, preferring dark, humid environments!", icon: "🏠" },
      { category: 'unique', fact: "Some millipedes secrete cyanide when threatened, and others can grow over a foot long with thousands of legs!", icon: "💡" }
    ]
  },
  {
    id: 160,
    image: "tasmanian_devil",
    clues: [
      "I am a marsupial from Australia.",
      "I have a very powerful bite for my size.",
      "I make loud, scary sounds when threatened."
    ],
    answer: "Tasmanian Devil",
    emoji: "🐻",
    funFacts: [
      { category: 'ability', fact: "Tasmanian devils have the strongest bite of any mammal for their size and can crush bones with their powerful jaws!", icon: "⭐" },
      { category: 'baby', fact: "Baby Tasmanian devils are called joeys and are only the size of a grain of rice when born, growing in mom's pouch!", icon: "🍼" },
      { category: 'group', fact: "Tasmanian devils are usually solitary but gather around large carcasses, making terrifying screaming sounds while feeding!", icon: "👥" },
      { category: 'sound', fact: "Tasmanian devils make spine-chilling screams, growls, and screeches that can be heard from miles away!", icon: "🔊" },
      { category: 'diet', fact: "Tasmanian devils eat almost anything including carrion, small animals, and even bones, leaving nothing behind!", icon: "🍽️" },
      { category: 'habitat', fact: "Tasmanian devils live only on the island of Tasmania in forests, scrublands, and coastal areas!", icon: "🏠" },
      { category: 'unique', fact: "Tasmanian devils are endangered due to a contagious facial cancer that spreads when they bite each other while feeding!", icon: "💡" }
    ]
  },
  {
    id: 161,
    image: "beluga",
    clues: [
      "I am a white whale.",
      "I live in Arctic and sub-Arctic waters.",
      "I am known as the 'sea canary' because of my vocalizations."
    ],
    answer: "Beluga Whale",
    emoji: "🐋",
    funFacts: [
      { category: 'ability', fact: "Beluga whales can change their facial expressions, turn their heads, and dive 3,000 feet deep while holding their breath for 20 minutes!", icon: "⭐" },
      { category: 'baby', fact: "Baby belugas are called calves and are born gray, turning white as they grow over 5-7 years!", icon: "🍼" },
      { category: 'group', fact: "Belugas live in pods of 10-15 whales but gather in huge groups of hundreds during migration and feeding!", icon: "👥" },
      { category: 'sound', fact: "Belugas make whistles, clicks, chirps, and trills earning them the nickname 'sea canaries' for their beautiful songs!", icon: "🔊" },
      { category: 'diet', fact: "Belugas eat fish, squid, shrimp, and worms, sucking up food since they can't chew with their small teeth!", icon: "🍽️" },
      { category: 'habitat', fact: "Belugas live in Arctic and sub-Arctic waters, following sea ice and migrating thousands of miles seasonally!", icon: "🏠" },
      { category: 'unique', fact: "Belugas have no dorsal fin, allowing them to swim easily under thick Arctic ice, and their neck vertebrae aren't fused so they can nod!", icon: "💡" }
    ]
  },
  {
    id: 162,
    image: "nurse_shark",
    clues: [
      "I am a slow-moving, bottom-dwelling shark.",
      "I have a stout body and blunt head.",
      "Despite being a shark, I'm generally not dangerous to humans."
    ],
    answer: "Nurse Shark",
    emoji: "🦈",
    funFacts: [
      { category: 'ability', fact: "Nurse sharks can rest motionless on the ocean floor and pump water over their gills to breathe while sleeping!", icon: "⭐" },
      { category: 'baby', fact: "Baby nurse sharks are called pups and develop inside egg cases for 6 months before hatching ready to hunt!", icon: "🍼" },
      { category: 'group', fact: "Nurse sharks are usually solitary but sometimes pile up in groups of 30+ sharks in caves and under ledges during the day!", icon: "👥" },
      { category: 'sound', fact: "Nurse sharks are mostly silent but can make grunting and sucking sounds when feeding or disturbed!", icon: "🔊" },
      { category: 'diet', fact: "Nurse sharks eat fish, rays, crabs, sea urchins, and squid, sucking up prey with their powerful suction feeding!", icon: "🍽️" },
      { category: 'habitat', fact: "Nurse sharks live in warm, shallow tropical waters around coral reefs, sea grass beds, and sandy bottoms!", icon: "🏠" },
      { category: 'unique', fact: "Nurse sharks are very docile and safe for humans to swim with, but they can live over 25 years and grow 10 feet long!", icon: "💡" }
    ]
  },
  {
    id: 163,
    image: "piranha",
    clues: [
      "I am a fish with very sharp teeth.",
      "I live in rivers in South America.",
      "I have a reputation for attacking in groups."
    ],
    answer: "Piranha",
    emoji: "🐟",
    funFacts: [
      { category: 'ability', fact: "Piranhas have incredibly sharp teeth and powerful jaws that can snap through fishing line and metal hooks!", icon: "⭐" },
      { category: 'baby', fact: "Baby piranhas are called fry and are born with a full set of sharp teeth ready to hunt small prey immediately!", icon: "🍼" },
      { category: 'group', fact: "Piranhas travel in schools of 20-30 fish for protection, not for group attacks as many people believe!", icon: "👥" },
      { category: 'sound', fact: "Piranhas make barking, croaking, and drumming sounds using their swim bladders to communicate with other piranhas!", icon: "🔊" },
      { category: 'diet', fact: "Most piranhas eat fruits, seeds, plants, and small fish - only a few species eat meat and they're not as dangerous as movies show!", icon: "🍽️" },
      { category: 'habitat', fact: "Piranhas live in freshwater rivers, lakes, and wetlands of South America, preferring warm, slow-moving waters!", icon: "🏠" },
      { category: 'unique', fact: "Piranhas are important seed dispersers in the Amazon and their bite force is 30 times their body weight - stronger than T-Rex relative to size!", icon: "💡" }
    ]
  },
  {
    id: 164,
    image: "salamander",
    clues: [
      "I look like a lizard but have smooth, moist skin.",
      "I am an amphibian and need to stay near water.",
      "Some of my species are brightly colored as a warning."
    ],
    answer: "Salamander",
    emoji: "🦎",
    funFacts: [
      { category: 'ability', fact: "Salamanders can regenerate lost limbs, tails, and even parts of their hearts, eyes, and brain tissue!", icon: "⭐" },
      { category: 'baby', fact: "Baby salamanders are called larvae and often look completely different from adults, living underwater with gills!", icon: "🍼" },
      { category: 'group', fact: "Most salamanders are solitary except during breeding season when some gather in large numbers in ponds and streams!", icon: "👥" },
      { category: 'sound', fact: "Salamanders don't have vocal cords but some species can squeak, click, or make soft barking sounds when threatened!", icon: "🔊" },
      { category: 'diet', fact: "Salamanders eat insects, worms, snails, and other small creatures, catching prey with sticky tongues or snapping jaws!", icon: "🍽️" },
      { category: 'habitat', fact: "Salamanders live worldwide in moist environments like forests, caves, streams, and under logs or rocks!", icon: "🏠" },
      { category: 'unique', fact: "Some salamanders breathe through their skin instead of lungs, and the largest can grow over 5 feet long!", icon: "💡" }
    ]
  },
  {
    id: 165,
    image: "manatee",
    clues: [
      "I am a large, gentle marine mammal.",
      "I am also called a sea cow.",
      "I eat sea plants and am endangered."
    ],
    answer: "Manatee",
    emoji: "🐋",
    funFacts: [
      { category: 'ability', fact: "Manatees can weigh 1,200 pounds but are graceful swimmers, moving slowly through water using their powerful tail flippers!", icon: "⭐" },
      { category: 'baby', fact: "Baby manatees are called calves and can swim immediately after birth, staying with mom for 1-2 years learning where to find food!", icon: "🍼" },
      { category: 'group', fact: "Manatees are usually solitary but gather in warm water areas during winter and mothers form loose groups with calves!", icon: "👥" },
      { category: 'sound', fact: "Manatees communicate with chirps, whistles, and squeaks, and mothers and calves recognize each other's unique calls!", icon: "🔊" },
      { category: 'diet', fact: "Manatees are herbivores eating sea grass, algae, and water plants for 6-8 hours a day, consuming 100+ pounds daily!", icon: "🍽️" },
      { category: 'habitat', fact: "Manatees live in warm coastal waters, rivers, and springs in Florida, the Caribbean, and West Africa!", icon: "🏠" },
      { category: 'unique', fact: "Manatees are endangered with only about 6,000 left, and they're closely related to elephants despite living in water!", icon: "💡" }
    ]
  },
  {
    id: 166,
    image: "chimpanzee",
    clues: [
      "I am the closest living relative to humans.",
      "I am very intelligent and can use tools.",
      "I live in groups in African forests."
    ],
    answer: "Chimpanzee",
    emoji: "🐵",
    funFacts: [
      { category: 'ability', fact: "Chimpanzees use tools like sticks to fish termites, stones to crack nuts, and leaves as sponges to collect water!", icon: "⭐" },
      { category: 'baby', fact: "Baby chimpanzees are called infants and cling to their mothers for years, learning complex social behaviors and tool use!", icon: "🍼" },
      { category: 'group', fact: "Chimpanzees live in communities of 20-150 individuals with complex social hierarchies and lifelong friendships!", icon: "👥" },
      { category: 'sound', fact: "Chimpanzees make over 30 different sounds including hoots, screams, grunts, and lip-smacking to communicate emotions and intentions!", icon: "🔊" },
      { category: 'diet', fact: "Chimpanzees eat fruits, leaves, insects, and occasionally hunt small monkeys and other animals in coordinated groups!", icon: "🍽️" },
      { category: 'habitat', fact: "Chimpanzees live in forests and savannas across equatorial Africa, building sleeping nests in trees each night!", icon: "🏠" },
      { category: 'unique', fact: "Chimpanzees share 98.8% of their DNA with humans and can learn sign language, recognize themselves in mirrors, and show empathy!", icon: "💡" }
    ]
  },
  {
    id: 167,
    image: "proboscis_monkey",
    clues: [
      "I have a very large nose.",
      "I live in the mangrove forests of Borneo.",
      "I am an excellent swimmer."
    ],
    answer: "Proboscis Monkey",
    emoji: "🐒",
    funFacts: [
      { category: 'ability', fact: "Proboscis monkeys are amazing swimmers and can dive underwater, swim 65 feet, and leap 15 feet between trees!", icon: "⭐" },
      { category: 'baby', fact: "Baby proboscis monkeys are called infants and are born with small noses and blue faces that change as they grow!", icon: "🍼" },
      { category: 'group', fact: "Proboscis monkeys live in groups led by one male with several females and their young, sleeping together in riverside trees!", icon: "👥" },
      { category: 'sound', fact: "Male proboscis monkeys make loud honking sounds through their big noses to attract mates and warn of danger!", icon: "🔊" },
      { category: 'diet', fact: "Proboscis monkeys eat leaves, fruits, and flowers, with special stomach bacteria helping them digest tough plant material!", icon: "🍽️" },
      { category: 'habitat', fact: "Proboscis monkeys live only in mangrove swamps and rainforests on the island of Borneo in Southeast Asia!", icon: "🏠" },
      { category: 'unique', fact: "Male proboscis monkeys have huge noses that get bigger with age and make their calls louder to attract females!", icon: "💡" }
    ]
  },
  {
    id: 168,
    image: "numbat",
    clues: [
      "I am a small, striped marsupial from Australia.",
      "I eat termites with my long tongue.",
      "I am active during the day unlike most marsupials."
    ],
    answer: "Numbat",
    emoji: "🦘",
    funFacts: [
      { category: 'ability', fact: "Numbats can eat 20,000 termites per day using their 4-inch long sticky tongues to lick them from tunnels!", icon: "⭐" },
      { category: 'baby', fact: "Baby numbats are called joeys and are born tiny and helpless, staying attached to mom's nipples for months without a pouch!", icon: "🍼" },
      { category: 'group', fact: "Numbats are solitary animals that only come together during breeding season, with males and females living separately!", icon: "👥" },
      { category: 'sound', fact: "Numbats make soft clicking and chattering sounds with their teeth and grunt softly when disturbed!", icon: "🔊" },
      { category: 'diet', fact: "Numbats eat only termites, using their excellent sense of smell to find termite galleries underground!", icon: "🍽️" },
      { category: 'habitat', fact: "Numbats live only in eucalyptus woodlands in southwestern Australia, digging burrows up to 6 feet deep!", icon: "🏠" },
      { category: 'unique', fact: "Numbats are one of only two marsupials active during the day and are critically endangered with only 1,000 left in the wild!", icon: "💡" }
    ]
  },
  {
    id: 169,
    image: "cuttlefish",
    clues: [
      "I can change color and texture to blend with my surroundings.",
      "I have eight arms and two long tentacles.",
      "I release ink when threatened."
    ],
    answer: "Cuttlefish",
    emoji: "🦑",
    funFacts: [
      { category: 'ability', fact: "Cuttlefish can change color in 0.3 seconds and mimic the texture and pattern of coral, rocks, and seaweed perfectly!", icon: "⭐" },
      { category: 'baby', fact: "Baby cuttlefish are called juveniles and can camouflage from birth, already knowing how to hunt small prey!", icon: "🍼" },
      { category: 'group', fact: "Cuttlefish are mostly solitary but sometimes gather in groups during mating season for elaborate courtship displays!", icon: "👥" },
      { category: 'sound', fact: "Cuttlefish don't make vocal sounds but communicate through rapid color changes and body postures!", icon: "🔊" },
      { category: 'diet', fact: "Cuttlefish eat fish, crabs, shrimp, and worms, using their two long tentacles to grab prey and inject paralyzing venom!", icon: "🍽️" },
      { category: 'habitat', fact: "Cuttlefish live in warm ocean waters worldwide, preferring shallow coastal areas with coral reefs and sea grass beds!", icon: "🏠" },
      { category: 'unique', fact: "Cuttlefish have W-shaped pupils, three hearts, and blue-green blood, plus they can hypnotize prey with flashing colors!", icon: "💡" }
    ]
  },
  {
    id: 170,
    image: "horseshoe_crab",
    clues: [
      "I am a living fossil, hardly changed in 450 million years.",
      "I have a hard shell and a spike-like tail.",
      "My blood is blue and valuable for medical testing."
    ],
    answer: "Horseshoe Crab",
    emoji: "🦀",
    funFacts: [
      { category: 'ability', fact: "Horseshoe crabs can survive out of water for days and live up to 20 years, regenerating lost limbs as they grow!", icon: "⭐" },
      { category: 'baby', fact: "Baby horseshoe crabs are called larvae and molt 16 times over 10 years before becoming adults!", icon: "🍼" },
      { category: 'group', fact: "Horseshoe crabs gather in huge groups during spring full moons to mate on beaches, with thousands coming ashore together!", icon: "👥" },
      { category: 'sound', fact: "Horseshoe crabs don't make vocal sounds but create rustling noises as they move across sand and rocks!", icon: "🔊" },
      { category: 'diet', fact: "Horseshoe crabs eat worms, clams, algae, and dead fish, grinding up food with spiny legs around their mouths!", icon: "🍽️" },
      { category: 'habitat', fact: "Horseshoe crabs live in shallow coastal waters along the Atlantic and Gulf coasts, plus parts of Asia!", icon: "🏠" },
      { category: 'unique', fact: "Horseshoe crab blood is blue and used to test vaccines and medical devices - it can detect tiny amounts of dangerous bacteria!", icon: "💡" }
    ]
  },
  {
    id: 171,
    image: "blobfish",
    clues: [
      "I look very different at the surface than in my deep-sea home.",
      "I have been voted the world's ugliest animal.",
      "I live at great depths in the ocean."
    ],
    answer: "Blobfish",
    emoji: "🐡",
    funFacts: [
      { category: 'ability', fact: "Blobfish look normal at their deep-sea home but become blob-like when brought to the surface due to pressure changes!", icon: "⭐" },
      { category: 'baby', fact: "Baby blobfish float as eggs in deep water and look like tiny normal fish until they settle on the ocean floor!", icon: "🍼" },
      { category: 'group', fact: "Blobfish are mostly solitary but sometimes gather around deep-sea food sources like whale carcasses!", icon: "👥" },
      { category: 'sound', fact: "Blobfish don't make sounds but live in the nearly silent world of the deep ocean where sound travels differently!", icon: "🔊" },
      { category: 'diet', fact: "Blobfish eat crabs, sea pens, shellfish, and bacteria that fall from the surface to the deep ocean floor!", icon: "🍽️" },
      { category: 'habitat', fact: "Blobfish live 2,000-4,000 feet deep off the coasts of Australia and New Zealand where it's completely dark!", icon: "🏠" },
      { category: 'unique', fact: "Blobfish were voted 'world's ugliest animal' but they only look like blobs out of water - at depth they look like normal fish!", icon: "💡" }
    ]
  },
  {
    id: 172,
    image: "pangolin",
    clues: [
      "I am covered in scales made of keratin.",
      "I roll into a ball when threatened.",
      "I am the most trafficked mammal in the world."
    ],
    answer: "Pangolin",
    emoji: "🦔",
    funFacts: [
      { category: 'ability', fact: "Pangolins can roll into a perfect armored ball and have claws so strong they can tear through concrete!", icon: "⭐" },
      { category: 'baby', fact: "Baby pangolins are called pangopups and ride on their mother's backs, protected by her scales for months!", icon: "🍼" },
      { category: 'group', fact: "Pangolins are solitary animals that only come together during mating season, communicating through scent marking!", icon: "👥" },
      { category: 'sound', fact: "Pangolins make hissing and huffing sounds when threatened and can produce loud snorting noises!", icon: "🔊" },
      { category: 'diet', fact: "Pangolins eat only ants and termites, using their 16-inch long sticky tongues to slurp up 70 million insects per year!", icon: "🍽️" },
      { category: 'habitat', fact: "Pangolins live in forests and grasslands across Africa and Asia, digging burrows up to 11 feet deep!", icon: "🏠" },
      { category: 'unique', fact: "Pangolins are the most trafficked mammal in the world - their scales are wrongly believed to have medicinal properties!", icon: "💡" }
    ]
  },
  {
    id: 173,
    image: "echidna",
    clues: [
      "I am covered in spines like a hedgehog.",
      "I lay eggs even though I'm a mammal.",
      "I come from Australia."
    ],
    answer: "Echidna",
    emoji: "🦔",
    funFacts: [
      { category: 'ability', fact: "Echidnas can dig straight down faster than humans can dig with shovels and have electroreception to detect prey!", icon: "⭐" },
      { category: 'baby', fact: "Baby echidnas are called puggles and hatch from leathery eggs after 10 days, then drink milk from pores in mom's skin!", icon: "🍼" },
      { category: 'group', fact: "Echidnas are solitary animals except during mating season when several males may follow one female in a 'train'!", icon: "👥" },
      { category: 'sound', fact: "Echidnas make soft grunting, snuffling, and clicking sounds while foraging and can hiss when threatened!", icon: "🔊" },
      { category: 'diet', fact: "Echidnas eat ants, termites, and grubs, slurping them up with 7-inch long sticky tongues through tiny mouths!", icon: "🍽️" },
      { category: 'habitat', fact: "Echidnas live throughout Australia and New Guinea in forests, deserts, and rocky areas, sleeping in burrows or logs!", icon: "🏠" },
      { category: 'unique', fact: "Echidnas are one of only two mammals that lay eggs (with platypus) and can live over 50 years!", icon: "💡" }
    ]
  },
  {
    id: 174,
    image: "tarsier",
    clues: [
      "I have enormous eyes relative to my body size.",
      "I am a small primate from Southeast Asia.",
      "I can turn my head nearly 180 degrees in each direction."
    ],
    answer: "Tarsier",
    emoji: "🐒",
    funFacts: [
      { category: 'ability', fact: "Tarsiers have the largest eyes relative to body size of any mammal and can leap 40 times their body length!", icon: "⭐" },
      { category: 'baby', fact: "Baby tarsiers are called infants and are born with their eyes open and fur, clinging to mom's belly for months!", icon: "🍼" },
      { category: 'group', fact: "Tarsiers live in small family groups and mark their territory with scent glands, calling to each other at night!", icon: "👥" },
      { category: 'sound', fact: "Tarsiers make high-pitched calls, some too high for humans to hear, to communicate and locate family members!", icon: "🔊" },
      { category: 'diet', fact: "Tarsiers eat only live insects, birds, and small lizards, catching prey with lightning-fast reflexes in complete darkness!", icon: "🍽️" },
      { category: 'habitat', fact: "Tarsiers live in rainforests of Southeast Asia, sleeping in tree holes during the day and hunting at night!", icon: "🏠" },
      { category: 'unique', fact: "Each tarsier eye is larger than its brain, and they can't move their eyes in their sockets - they must turn their whole head!", icon: "💡" }
    ]
  },
  {
    id: 175,
    image: "nautilus",
    clues: [
      "I have a spiral shell with many chambers.",
      "I am a living fossil from the ancient seas.",
      "I move by jet propulsion."
    ],
    answer: "Nautilus",
    emoji: "🐚",
    funFacts: [
      { category: 'ability', fact: "Nautiluses move by jet propulsion, shooting water from their siphon, and can control their buoyancy using gas-filled shell chambers!", icon: "⭐" },
      { category: 'baby', fact: "Baby nautiluses are called juveniles and hatch with perfect miniature shells that grow new chambers as they get bigger!", icon: "🍼" },
      { category: 'group', fact: "Nautiluses are usually solitary but sometimes gather in groups during mating season in deep reef caves!", icon: "👥" },
      { category: 'sound', fact: "Nautiluses don't make vocal sounds but communicate through touch and possibly chemical signals!", icon: "🔊" },
      { category: 'diet', fact: "Nautiluses eat crabs, fish, and shrimp, catching prey with 90 tentacles and crushing them with parrot-like beaks!", icon: "🍽️" },
      { category: 'habitat', fact: "Nautiluses live in deep tropical waters of the Pacific and Indian Oceans, migrating up and down the reef walls daily!", icon: "🏠" },
      { category: 'unique', fact: "Nautiluses are living fossils unchanged for 500 million years and can live 100+ years growing new shell chambers monthly!", icon: "💡" }
    ]
  },
  {
    id: 176,
    image: "bongo",
    clues: [
      "I am a large, striped antelope.",
      "I live in the forests of Africa.",
      "I have spiral horns and large ears."
    ],
    answer: "Bongo",
    emoji: "🦌",
    funFacts: [
      { category: 'ability', fact: "Bongos can jump 3 feet high and run up to 43 mph through dense forest, using their horns to push through vegetation!", icon: "⭐" },
      { category: 'baby', fact: "Baby bongos are called calves and can stand within 30 minutes of birth, staying hidden in dense forest for weeks!", icon: "🍼" },
      { category: 'group', fact: "Bongos live in small herds of 8-10 animals led by females, with males joining only during mating season!", icon: "👥" },
      { category: 'sound', fact: "Bongos make soft lowing sounds, snorts, and alarm barks to communicate through the dense African forest!", icon: "🔊" },
      { category: 'diet', fact: "Bongos eat leaves, bark, roots, and fruits, standing on their hind legs to reach high branches and vegetation!", icon: "🍽️" },
      { category: 'habitat', fact: "Bongos live in dense tropical rainforests of central and eastern Africa, preferring areas with thick canopy cover!", icon: "🏠" },
      { category: 'unique', fact: "Bongos are one of the largest forest antelopes and both males and females have beautiful spiral horns that can grow 3 feet long!", icon: "💡" }
    ]
  },
  {
    id: 177,
    image: "pangolin",
    clues: [
      "I am the only mammal covered in scales.",
      "I curl into a ball when threatened.",
      "I eat ants and termites with my long tongue."
    ],
    answer: "Pangolin",
    emoji: "🦔",
    funFacts: [
      { category: 'ability', fact: "Pangolins can roll into a perfect armored ball and have claws so strong they can tear through concrete!", icon: "⭐" },
      { category: 'baby', fact: "Baby pangolins are called pangopups and ride on their mother's backs, protected by her scales for months!", icon: "🍼" },
      { category: 'group', fact: "Pangolins are solitary animals that only come together during mating season, communicating through scent marking!", icon: "👥" },
      { category: 'sound', fact: "Pangolins make hissing and huffing sounds when threatened and can produce loud snorting noises!", icon: "🔊" },
      { category: 'diet', fact: "Pangolins eat only ants and termites, using their 16-inch long sticky tongues to slurp up 70 million insects per year!", icon: "🍽️" },
      { category: 'habitat', fact: "Pangolins live in forests and grasslands across Africa and Asia, digging burrows up to 11 feet deep!", icon: "🏠" },
      { category: 'unique', fact: "Pangolins are the most trafficked mammal in the world - their scales are wrongly believed to have medicinal properties!", icon: "💡" }
    ]
  },
  {
    id: 178,
    image: "narwhal",
    clues: [
      "I am a small whale with a long spiral tusk.",
      "My tusk is actually a tooth that grows through my lip.",
      "I live in Arctic waters."
    ],
    answer: "Narwhal",
    emoji: "🐋",
    funFacts: [
      { category: 'ability', fact: "Narwhals can dive up to 5,000 feet deep and hold their breath for 25 minutes while hunting in icy Arctic waters!", icon: "⭐" },
      { category: 'baby', fact: "Baby narwhals are called calves and are born without tusks - only males grow the long spiral tusk as they mature!", icon: "🍼" },
      { category: 'group', fact: "Narwhals travel in groups called pods of 10-100 whales and gather in larger groups of thousands during migration!", icon: "👥" },
      { category: 'sound', fact: "Narwhals make clicks, whistles, and pulsed sounds to echolocate and communicate underwater, like underwater whale songs!", icon: "🔊" },
      { category: 'diet', fact: "Narwhals eat cod, squid, and shrimp, sucking up prey like a vacuum cleaner since they don't have many teeth!", icon: "🍽️" },
      { category: 'habitat', fact: "Narwhals live only in Arctic waters around Greenland and Canada, following the sea ice as it forms and melts!", icon: "🏠" },
      { category: 'unique', fact: "The narwhal's tusk can grow up to 10 feet long and has millions of nerve endings that help sense water conditions!", icon: "💡" }
    ]
  },
  {
    id: 179,
    image: "quail",
    clues: [
      "I am a small ground bird.",
      "I have a distinctive tuft on my head.",
      "People eat my eggs and meat."
    ],
    answer: "Quail",
    emoji: "🐦",
    funFacts: [
      { category: 'ability', fact: "Quail can fly short distances at 40 mph and perform 'explosion' takeoffs to escape predators suddenly!", icon: "⭐" },
      { category: 'baby', fact: "Baby quail are called chicks and can walk, run, and find food within hours of hatching from their speckled eggs!", icon: "🍼" },
      { category: 'group', fact: "Quail live in flocks called coveys of 8-25 birds that huddle together for warmth and protection!", icon: "👥" },
      { category: 'sound', fact: "Quail make distinctive 'bob-white' calls, plus soft clucking and chirping sounds to stay in contact with their flock!", icon: "🔊" },
      { category: 'diet', fact: "Quail eat seeds, insects, berries, and leaves, scratching the ground with their feet to find hidden food!", icon: "🍽️" },
      { category: 'habitat', fact: "Quail live in grasslands, farmlands, and brushy areas worldwide, preferring areas with dense ground cover for hiding!", icon: "🏠" },
      { category: 'unique', fact: "Quail dust bathe to clean their feathers and some species migrate in large flocks across continents!", icon: "💡" }
    ]
  },
  {
    id: 180,
    image: "viper",
    clues: [
      "I am a venomous snake.",
      "I have a triangular head and vertical pupils.",
      "I sense heat from warm-blooded animals."
    ],
    answer: "Viper",
    emoji: "🐍",
    funFacts: [
      { category: 'ability', fact: "Vipers can sense heat from warm-blooded animals through special pits on their faces and strike in 0.2 seconds!", icon: "⭐" },
      { category: 'baby', fact: "Baby vipers are called snakelets and are born with fully functional fangs and venom, ready to hunt immediately!", icon: "🍼" },
      { category: 'group', fact: "Vipers are usually solitary except during mating season when males may wrestle each other for females!", icon: "👥" },
      { category: 'sound', fact: "Vipers hiss loudly when threatened and some species can rattle their tails or make buzzing sounds!", icon: "🔊" },
      { category: 'diet', fact: "Vipers eat rodents, birds, lizards, and frogs, injecting venom through hollow fangs that fold back when not in use!", icon: "🍽️" },
      { category: 'habitat', fact: "Vipers live worldwide in deserts, forests, grasslands, and mountains, from sea level to high altitudes!", icon: "🏠" },
      { category: 'unique', fact: "Viper fangs are like hypodermic needles that can inject venom deep into prey, and they shed their fangs regularly!", icon: "💡" }
    ]
  },
  {
    id: 181,
    image: "pigeon",
    clues: [
      "I am a common city bird.",
      "I was once used to deliver messages.",
      "I can find my way home from almost anywhere."
    ],
    answer: "Pigeon",
    emoji: "🐦",
    funFacts: [
      { category: 'ability', fact: "Pigeons can fly 500 miles in a day and find their way home using magnetic fields, sun position, and landmarks!", icon: "⭐" },
      { category: 'baby', fact: "Baby pigeons are called squabs and stay in nests for 4 weeks, which is why people rarely see baby pigeons!", icon: "🍼" },
      { category: 'group', fact: "Pigeons live in flocks and can recognize themselves in mirrors, remembering hundreds of different images!", icon: "👥" },
      { category: 'sound', fact: "Pigeons make cooing, gurgling, and clapping sounds with their wings to communicate and attract mates!", icon: "🔊" },
      { category: 'diet', fact: "Pigeons eat seeds, grains, fruits, and food scraps, and can drink water by sucking it up without lifting their heads!", icon: "🍽️" },
      { category: 'habitat', fact: "Pigeons live in cities worldwide, originally from rocky cliffs but now thriving on building ledges and bridges!", icon: "🏠" },
      { category: 'unique', fact: "Pigeons were used as war messengers saving thousands of lives and can be trained to detect cancer in medical images!", icon: "💡" }
    ]
  },
  {
    id: 182,
    image: "alligator",
    clues: [
      "I look similar to a crocodile but have a broader snout.",
      "I live in freshwater in the Americas.",
      "I have a strong bite but relatively weak jaw-opening muscles."
    ],
    answer: "Alligator",
    emoji: "🐊",
    funFacts: [
      { category: 'ability', fact: "Alligators can hold their breath for 2-3 hours underwater and have the strongest bite force of any animal - 2,980 PSI!", icon: "⭐" },
      { category: 'baby', fact: "Baby alligators are called hatchlings and make high-pitched chirping sounds from inside their eggs to call their mothers!", icon: "🍼" },
      { category: 'group', fact: "Alligators are usually solitary but mothers protect their young for 1-2 years and sometimes congregate during mating season!", icon: "👥" },
      { category: 'sound', fact: "Alligators bellow loudly during mating season - their calls can be heard over a mile away and make the water vibrate!", icon: "🔊" },
      { category: 'diet', fact: "Alligators eat fish, turtles, birds, and mammals, using their powerful jaws to grab prey and perform a 'death roll'!", icon: "🍽️" },
      { category: 'habitat', fact: "Alligators live in freshwater swamps, marshes, and rivers in the southeastern United States and China!", icon: "🏠" },
      { category: 'unique', fact: "Alligators are amazing mothers - they carry babies to water in their mouths and respond to their calls for help!", icon: "💡" }
    ]
  },
  {
    id: 183,
    image: "hammerhead_shark",
    clues: [
      "I have a distinctive head shape.",
      "My eyes are on the ends of my head.",
      "I use my head to pin down stingrays to eat them."
    ],
    answer: "Hammerhead Shark",
    emoji: "🦈",
    funFacts: [
      { category: 'ability', fact: "Hammerhead sharks can see 360 degrees and use their hammer-shaped heads to pin down stingrays and detect electrical fields!", icon: "⭐" },
      { category: 'baby', fact: "Baby hammerhead sharks are called pups and are born with soft, flexible hammers that harden as they grow!", icon: "🍼" },
      { category: 'group', fact: "Great hammerheads are usually solitary, but scalloped hammerheads gather in huge schools of hundreds during the day!", icon: "👥" },
      { category: 'sound', fact: "Hammerhead sharks don't make vocal sounds but create vibrations in water that other sharks can sense!", icon: "🔊" },
      { category: 'diet', fact: "Hammerhead sharks eat stingrays, fish, squid, and crustaceans, using their wide heads to search larger areas for prey!", icon: "🍽️" },
      { category: 'habitat', fact: "Hammerhead sharks live in warm coastal waters worldwide, often near coral reefs and continental shelves!", icon: "🏠" },
      { category: 'unique', fact: "The hammerhead's weird shape gives them better vision, improved maneuverability, and enhanced electrical sensing abilities!", icon: "💡" }
    ]
  },
  {
    id: 184,
    image: "gibbon",
    clues: [
      "I am a small ape with very long arms.",
      "I swing through trees with great agility.",
      "I sing loudly to mark my territory."
    ],
    answer: "Gibbon",
    emoji: "🐵",
    funFacts: [
      { category: 'ability', fact: "Gibbons can swing 35 mph through trees and leap 25 feet between branches using their incredibly long arms!", icon: "⭐" },
      { category: 'baby', fact: "Baby gibbons are called infants and cling to their mothers for 2 years, learning to swing and sing family songs!", icon: "🍼" },
      { category: 'group', fact: "Gibbons live in small family groups and mate for life, defending their territory together with loud morning songs!", icon: "👥" },
      { category: 'sound', fact: "Gibbons produce beautiful, loud calls that can be heard over 2 miles away and each family has unique song patterns!", icon: "🔊" },
      { category: 'diet', fact: "Gibbons eat mainly fruits, but also leaves, insects, and bird eggs, spending their entire lives high in the tree canopy!", icon: "🍽️" },
      { category: 'habitat', fact: "Gibbons live in tropical rainforests of Southeast Asia, never coming down to the ground except to drink water!", icon: "🏠" },
      { category: 'unique', fact: "Gibbons are the only apes that walk upright on branches and can hang from one arm while reaching for food with the other!", icon: "💡" }
    ]
  },
  {
    id: 185,
    image: "cockroach",
    clues: [
      "I can survive without my head for weeks.",
      "I can live almost anywhere.",
      "Many people don't like to see me in their house."
    ],
    answer: "Cockroach",
    emoji: "🪳",
    funFacts: [
      { category: 'ability', fact: "Cockroaches can survive without their heads for weeks, live through radiation, and run 3 mph on their hind legs!", icon: "⭐" },
      { category: 'baby', fact: "Baby cockroaches are called nymphs and look like tiny adults, molting 5-7 times as they grow bigger!", icon: "🍼" },
      { category: 'group', fact: "Cockroaches live in groups and leave chemical trails for others to follow to food and shelter!", icon: "👥" },
      { category: 'sound', fact: "Cockroaches make hissing, chirping, and clicking sounds by rubbing body parts together to communicate!", icon: "🔊" },
      { category: 'diet', fact: "Cockroaches eat almost anything including food scraps, paper, glue, soap, and even hair and dead skin!", icon: "🍽️" },
      { category: 'habitat', fact: "Cockroaches live worldwide in warm, moist places like kitchens, bathrooms, and sewers, preferring dark hiding spots!", icon: "🏠" },
      { category: 'unique', fact: "Cockroaches have been around for 300 million years and can hold their breath for 40 minutes underwater!", icon: "💡" }
    ]
  },
  {
    id: 186,
    image: "stick_insect",
    clues: [
      "I look just like a twig or branch.",
      "I am camouflaged to avoid predators.",
      "I am also called a walking stick."
    ],
    answer: "Stick Insect",
    emoji: "🐛",
    funFacts: [
      { category: 'ability', fact: "Stick insects can regenerate lost limbs and some species can grow over 2 feet long - the longest insects in the world!", icon: "⭐" },
      { category: 'baby', fact: "Baby stick insects are called nymphs and look like perfect miniature adults, already masters of camouflage!", icon: "🍼" },
      { category: 'group', fact: "Most stick insects are solitary, but some species gather in groups and can reproduce without males through parthenogenesis!", icon: "👥" },
      { category: 'sound', fact: "Stick insects are mostly silent but some species can make soft rustling sounds when moving through vegetation!", icon: "🔊" },
      { category: 'diet', fact: "Stick insects eat leaves and are picky eaters, often specializing in just one type of plant or tree!", icon: "🍽️" },
      { category: 'habitat', fact: "Stick insects live in forests, gardens, and grasslands worldwide, perfectly blending in with branches and twigs!", icon: "🏠" },
      { category: 'unique', fact: "Stick insects sway back and forth like branches in the wind and can stay motionless for hours to avoid detection!", icon: "💡" }
    ]
  },
  {
    id: 187,
    image: "lobster",
    clues: [
      "I have a hard shell and two large claws.",
      "I live on the ocean floor.",
      "People consider me a delicacy to eat."
    ],
    answer: "Lobster",
    emoji: "🦞",
    funFacts: [
      { category: 'ability', fact: "Lobsters can regenerate lost claws and legs, and some species can live over 100 years without showing signs of aging!", icon: "⭐" },
      { category: 'baby', fact: "Baby lobsters are called larvae and look like tiny shrimp, floating in the ocean for weeks before settling on the bottom!", icon: "🍼" },
      { category: 'group', fact: "Lobsters are usually solitary but sometimes gather in groups during migration or in good feeding areas!", icon: "👥" },
      { category: 'sound', fact: "Lobsters make clicking and crackling sounds with their claws and can produce vibrations that other lobsters feel!", icon: "🔊" },
      { category: 'diet', fact: "Lobsters eat fish, mollusks, worms, and plant matter, using their claws to crack open shells and catch prey!", icon: "🍽️" },
      { category: 'habitat', fact: "Lobsters live on rocky ocean floors worldwide, hiding in crevices and burrows during the day!", icon: "🏠" },
      { category: 'unique', fact: "Lobsters have blue blood, can taste with their feet, and their larger claw is for crushing while the smaller one cuts!", icon: "💡" }
    ]
  },
  {
    id: 188,
    image: "bull",
    clues: [
      "I am a male cow.",
      "I have horns and a strong body.",
      "People run from me in Spain."
    ],
    answer: "Bull",
    emoji: "🐂",
    funFacts: [
      { category: 'ability', fact: "Bulls can weigh 2,400 pounds and run 35 mph, using their powerful horns and necks to charge at threats!", icon: "⭐" },
      { category: 'baby', fact: "Baby bulls are called calves and stay with their mothers for 6-8 months, learning to graze and socialize!", icon: "🍼" },
      { category: 'group', fact: "Bulls can be territorial and fight other males for dominance, but they also form hierarchies in herds!", icon: "👥" },
      { category: 'sound', fact: "Bulls make deep bellowing moos that can be heard over a mile away, plus snorting sounds when agitated!", icon: "🔊" },
      { category: 'diet', fact: "Bulls eat grass, hay, and grains, spending 6-8 hours a day grazing and chewing cud to digest tough plant fibers!", icon: "🍽️" },
      { category: 'habitat', fact: "Bulls live on farms and ranches worldwide, preferring open grasslands and pastures with plenty of food and water!", icon: "🏠" },
      { category: 'unique', fact: "Bulls aren't actually angered by the color red - they're colorblind to red and react to movement, not color!", icon: "💡" }
    ]
  },
  {
    id: 189,
    image: "moth",
    clues: [
      "I am similar to a butterfly but usually fly at night.",
      "I am attracted to light.",
      "My caterpillars often eat fabric and clothes."
    ],
    answer: "Moth",
    emoji: "🦋",
    funFacts: [
      { category: 'ability', fact: "Moths can detect scents from miles away and some species can jam bat sonar using ultrasonic clicks!", icon: "⭐" },
      { category: 'baby', fact: "Baby moths are called caterpillars and some species can eat through wool, silk, and cotton clothing!", icon: "🍼" },
      { category: 'group', fact: "Most moths are solitary, but some species gather in huge swarms around lights or during migration!", icon: "👥" },
      { category: 'sound', fact: "Many moths are silent, but some species click, buzz, or make ultrasonic sounds to confuse bat predators!", icon: "🔊" },
      { category: 'diet', fact: "Adult moths drink nectar, tree sap, and rotting fruit juices, while caterpillars eat leaves, fabric, or stored grains!", icon: "🍽️" },
      { category: 'habitat', fact: "Moths live worldwide in every habitat from deserts to rainforests, with most species being active at night!", icon: "🏠" },
      { category: 'unique', fact: "There are 10 times more moth species than butterflies, and some moths are important pollinators of night-blooming flowers!", icon: "💡" }
    ]
  },
  {
    id: 190,
    image: "crane",
    clues: [
      "I am a tall wading bird.",
      "I perform elaborate dancing displays.",
      "I have a long neck and long legs."
    ],
    answer: "Crane",
    emoji: "🐦",
    funFacts: [
      { category: 'ability', fact: "Cranes can fly over 400 miles in a day and perform spectacular dancing displays with jumps, bows, and wing spreads!", icon: "⭐" },
      { category: 'baby', fact: "Baby cranes are called colts and can walk and swim within hours of hatching, following their parents everywhere!", icon: "🍼" },
      { category: 'group', fact: "Cranes mate for life and gather in huge flocks of thousands during migration, flying in V-formations!", icon: "👥" },
      { category: 'sound', fact: "Cranes make loud trumpeting calls that can be heard over 2 miles away, using their windpipe coiled in their chest!", icon: "🔊" },
      { category: 'diet', fact: "Cranes eat fish, frogs, insects, grains, and berries, using their long beaks to probe mud and shallow water!", icon: "🍽️" },
      { category: 'habitat', fact: "Cranes live in wetlands, grasslands, and agricultural areas worldwide, migrating thousands of miles seasonally!", icon: "🏠" },
      { category: 'unique', fact: "Cranes are symbols of longevity and good fortune in many cultures and can live over 60 years in the wild!", icon: "💡" }
    ]
  },
  {
    id: 191,
    image: "falcon",
    clues: [
      "I am a bird of prey known for speed.",
      "I dive at my prey from great heights.",
      "I am used in the sport of falconry."
    ],
    answer: "Falcon",
    emoji: "🦅",
    funFacts: [
      { category: 'ability', fact: "Peregrine falcons are the fastest animals on Earth, diving at 240 mph to catch prey with incredible precision!", icon: "⭐" },
      { category: 'baby', fact: "Baby falcons are called eyases and learn to hunt by practicing with food dropped by their parents!", icon: "🍼" },
      { category: 'group', fact: "Falcons are usually solitary hunters except during breeding season when pairs work together to raise young!", icon: "👥" },
      { category: 'sound', fact: "Falcons make harsh 'kak-kak-kak' calls and high-pitched screams, especially when defending their territory!", icon: "🔊" },
      { category: 'diet', fact: "Falcons eat birds, bats, and flying insects, catching prey in mid-air with their sharp talons!", icon: "🍽️" },
      { category: 'habitat', fact: "Falcons live worldwide on cliffs, tall buildings, and open landscapes where they can spot prey from high perches!", icon: "🏠" },
      { category: 'unique', fact: "Falcons have been used in falconry for over 4,000 years and can see 8 times better than humans!", icon: "💡" }
    ]
  },
  {
    id: 192,
    image: "kingfisher",
    clues: [
      "I have bright blue and orange feathers.",
      "I dive into water to catch fish.",
      "I dig my nest in riverbanks."
    ],
    answer: "Kingfisher",
    emoji: "🐦",
    funFacts: [
      { category: 'ability', fact: "Kingfishers can dive into water at 25 mph and have special eyes that adjust for underwater vision to catch fish!", icon: "⭐" },
      { category: 'baby', fact: "Baby kingfishers are called chicks and are born blind in tunnel nests dug 3 feet into riverbanks!", icon: "🍼" },
      { category: 'group', fact: "Kingfishers are territorial and usually solitary, but some species fish together in loose flocks during winter!", icon: "👥" },
      { category: 'sound', fact: "Kingfishers make rattling calls, sharp whistles, and chattering sounds, especially during courtship displays!", icon: "🔊" },
      { category: 'diet', fact: "Kingfishers eat fish, frogs, insects, and crustaceans, beating prey against branches before swallowing them headfirst!", icon: "🍽️" },
      { category: 'habitat', fact: "Kingfishers live near rivers, lakes, and coasts worldwide, preferring areas with clear water and good fishing spots!", icon: "🏠" },
      { category: 'unique', fact: "Kingfishers have such perfect diving technique that engineers study them to design better high-speed trains!", icon: "💡" }
    ]
  },
  {
    id: 193,
    image: "donkey",
    clues: [
      "I am similar to a horse but smaller with longer ears.",
      "I make a 'hee-haw' sound.",
      "People use me to carry heavy loads."
    ],
    answer: "Donkey",
    emoji: "🫏",
    funFacts: [
      { category: 'ability', fact: "Donkeys are incredibly strong and can carry 20% of their body weight while walking 25 miles a day!", icon: "⭐" },
      { category: 'baby', fact: "Baby donkeys are called foals and can stand and walk within an hour of being born!", icon: "🍼" },
      { category: 'group', fact: "Donkeys live in herds and form strong friendships, often grooming each other and staying together for life!", icon: "👥" },
      { category: 'sound', fact: "Donkeys make the famous 'hee-haw' bray that can be heard over 2 miles away, plus soft nickering sounds!", icon: "🔊" },
      { category: 'diet', fact: "Donkeys eat grass, hay, and shrubs, and are much more efficient than horses at getting nutrition from poor-quality food!", icon: "🍽️" },
      { category: 'habitat', fact: "Donkeys live in dry, rocky areas worldwide and are perfectly adapted to desert and mountain environments!", icon: "🏠" },
      { category: 'unique', fact: "Donkeys are extremely intelligent, have excellent memories, and are naturally cautious - not stubborn as people think!", icon: "💡" }
    ]
  },
  {
    id: 194,
    image: "swan",
    clues: [
      "I have a long, curved neck.",
      "I am usually white with an orange beak.",
      "I mate for life and am protective of my young."
    ],
    answer: "Swan",
    emoji: "🦢",
    funFacts: [
      { category: 'ability', fact: "Swans can fly 60 mph and their wings are so powerful they can break a person's arm if threatened!", icon: "⭐" },
      { category: 'baby', fact: "Baby swans are called cygnets and ride on their parents' backs for protection and warmth!", icon: "🍼" },
      { category: 'group', fact: "Swans mate for life and live in small family groups, fiercely defending their territory and young!", icon: "👥" },
      { category: 'sound', fact: "Swans make trumpeting calls, hissing sounds when angry, and soft murmuring noises to their families!", icon: "🔊" },
      { category: 'diet', fact: "Swans eat aquatic plants, algae, and small fish, using their long necks to reach food underwater!", icon: "🍽️" },
      { category: 'habitat', fact: "Swans live on lakes, rivers, and wetlands worldwide, preferring areas with clean water and plenty of vegetation!", icon: "🏠" },
      { category: 'unique', fact: "Swans can live over 20 years and have more neck vertebrae than giraffes, giving them incredible flexibility!", icon: "💡" }
    ]
  },
  {
    id: 195,
    image: "cassowary",
    clues: [
      "I am a large, flightless bird.",
      "I have a helmet-like crest on my head.",
      "I am considered one of the most dangerous birds."
    ],
    answer: "Cassowary",
    emoji: "🐦",
    funFacts: [
      { category: 'ability', fact: "Cassowaries can run 30 mph, jump 5 feet high, and have dagger-like claws that can be 5 inches long!", icon: "⭐" },
      { category: 'baby', fact: "Baby cassowaries are called chicks and are striped brown and cream for camouflage, staying with dad for 9 months!", icon: "🍼" },
      { category: 'group', fact: "Cassowaries are solitary and territorial, with males doing all the childcare while females may mate with multiple males!", icon: "👥" },
      { category: 'sound', fact: "Cassowaries make deep booming sounds that can be felt as vibrations and travel through dense rainforest!", icon: "🔊" },
      { category: 'diet', fact: "Cassowaries eat fruits, insects, and small animals, swallowing fruits whole and spreading seeds throughout the rainforest!", icon: "🍽️" },
      { category: 'habitat', fact: "Cassowaries live only in the rainforests of Australia and New Guinea, preferring dense, humid forests!", icon: "🏠" },
      { category: 'unique', fact: "Cassowaries are considered the world's most dangerous bird and are essential for rainforest health as seed dispersers!", icon: "💡" }
    ]
  },
  {
    id: 196,
    image: "secretary_bird",
    clues: [
      "I am a bird of prey that walks on long legs.",
      "I have feathers that look like quill pens behind my ears.",
      "I stomp on snakes to kill them."
    ],
    answer: "Secretary Bird",
    emoji: "🦅",
    funFacts: [
      { category: 'ability', fact: "Secretary birds can stomp snakes to death with lightning-fast kicks and fly up to 80 mph when hunting!", icon: "⭐" },
      { category: 'baby', fact: "Baby secretary birds are called chicks and build huge platform nests 20 feet wide that can be seen from miles away!", icon: "🍼" },
      { category: 'group', fact: "Secretary birds are usually solitary hunters but form monogamous pairs that work together to raise their young!", icon: "👥" },
      { category: 'sound', fact: "Secretary birds make croaking calls, bill rattling sounds, and loud whooshing noises with their wings during displays!", icon: "🔊" },
      { category: 'diet', fact: "Secretary birds eat snakes, lizards, insects, and small mammals, stomping prey with their powerful legs!", icon: "🍽️" },
      { category: 'habitat', fact: "Secretary birds live in African savannas and grasslands, preferring open areas where they can spot prey easily!", icon: "🏠" },
      { category: 'unique', fact: "Secretary birds are the only raptors that hunt primarily on foot and their crest feathers look like old-fashioned quill pens!", icon: "💡" }
    ]
  },
  {
    id: 197,
    image: "pheasant",
    clues: [
      "I am a large bird with colorful feathers.",
      "I am often hunted for sport.",
      "The males of my species are much more colorful than females."
    ],
    answer: "Pheasant",
    emoji: "🐦",
    funFacts: [
      { category: 'ability', fact: "Pheasants can fly 60 mph for short distances and run 10 mph on the ground, escaping predators with explosive takeoffs!", icon: "⭐" },
      { category: 'baby', fact: "Baby pheasants are called chicks and can run and find food within hours of hatching from their olive-colored eggs!", icon: "🍼" },
      { category: 'group', fact: "Pheasants live in small flocks outside breeding season, but males fight fiercely for territory and mates!", icon: "👥" },
      { category: 'sound', fact: "Male pheasants make loud crowing calls that can be heard over a mile away, plus wing-whirring sounds during flight!", icon: "🔊" },
      { category: 'diet', fact: "Pheasants eat seeds, berries, insects, and small reptiles, scratching the ground with their strong feet to find food!", icon: "🍽️" },
      { category: 'habitat', fact: "Pheasants live in farmlands, grasslands, and woodland edges worldwide, preferring areas with dense cover for hiding!", icon: "🏠" },
      { category: 'unique', fact: "Male pheasants have spectacular plumage with iridescent colors and long tail feathers that can be 3 feet long!", icon: "💡" }
    ]
  },
  {
    id: 198,
    image: "sea_turtle",
    clues: [
      "I swim in the ocean but come to land to lay eggs.",
      "I have a hard shell and flippers instead of legs.",
      "I can live for over 100 years."
    ],
    answer: "Sea Turtle",
    emoji: "🐢",
    funFacts: [
      { category: 'ability', fact: "Sea turtles can hold their breath for 4-7 hours underwater and navigate thousands of miles using Earth's magnetic field!", icon: "⭐" },
      { category: 'baby', fact: "Baby sea turtles are called hatchlings and race to the ocean immediately after hatching, guided by moonlight on waves!", icon: "🍼" },
      { category: 'group', fact: "Sea turtles are mostly solitary but females return to the same beaches where they were born to lay eggs!", icon: "👥" },
      { category: 'sound', fact: "Sea turtles don't make vocal sounds but create vibrations and can hear low-frequency sounds underwater!", icon: "🔊" },
      { category: 'diet', fact: "Different sea turtles eat jellyfish, sea grass, algae, crabs, and sponges, helping keep ocean ecosystems healthy!", icon: "🍽️" },
      { category: 'habitat', fact: "Sea turtles live in oceans worldwide, traveling between feeding and nesting areas across entire ocean basins!", icon: "🏠" },
      { category: 'unique', fact: "Sea turtles have been around for 110 million years and can live over 150 years, making them ancient ocean travelers!", icon: "💡" }
    ]
  },
  {
    id: 199,
    image: "squid",
    clues: [
      "I have ten arms, two of which are longer than the others.",
      "I can change color and shoot ink.",
      "I live in the ocean and can move very quickly."
    ],
    answer: "Squid",
    emoji: "🦑",
    funFacts: [
      { category: 'ability', fact: "Squids can swim 25 mph using jet propulsion and change color instantly to communicate or camouflage!", icon: "⭐" },
      { category: 'baby', fact: "Baby squids are called paralarvae and look like tiny transparent aliens floating in the open ocean!", icon: "🍼" },
      { category: 'group', fact: "Some squids live alone while others gather in huge schools of thousands, working together to hunt and avoid predators!", icon: "👥" },
      { category: 'sound', fact: "Squids don't make vocal sounds but communicate through rapid color changes and body patterns!", icon: "🔊" },
      { category: 'diet', fact: "Squids eat fish, shrimp, and other squids, using their sharp beaks to tear prey and tentacles to grab food!", icon: "🍽️" },
      { category: 'habitat', fact: "Squids live in oceans worldwide from shallow seas to the deep abyss, with some species migrating vertically each day!", icon: "🏠" },
      { category: 'unique', fact: "Squids have three hearts, blue blood, and can regenerate lost tentacles - plus they're incredibly intelligent!", icon: "💡" }
    ]
  },
  {
    id: 200,
    image: "vulture",
    clues: [
      "I eat dead animals.",
      "I have a bald head and large wings.",
      "I soar on thermal currents looking for food."
    ],
    answer: "Vulture",
    emoji: "🦅",
    funFacts: [
      { category: 'ability', fact: "Vultures can soar for hours without flapping their wings and have the strongest stomach acid of any animal to digest rotting meat!", icon: "⭐" },
      { category: 'baby', fact: "Baby vultures are called chicks and are covered in fluffy white down that helps them stay warm in the nest!", icon: "🍼" },
      { category: 'group', fact: "A group of vultures is called a 'wake' when feeding and a 'kettle' when soaring together in thermal currents!", icon: "👥" },
      { category: 'sound', fact: "Vultures don't have vocal cords so they hiss, grunt, and wheeze instead of singing like other birds!", icon: "🔊" },
      { category: 'diet', fact: "Vultures eat only dead animals and can detect rotting meat from over a mile away using their excellent sense of smell!", icon: "🍽️" },
      { category: 'habitat', fact: "Vultures live worldwide in open areas like savannas and deserts where they can easily spot carrion from high in the sky!", icon: "🏠" },
      { category: 'unique', fact: "Vultures have bald heads so bacteria from rotting meat doesn't stick to feathers, keeping them clean while eating!", icon: "💡" }
    ]
  }
];