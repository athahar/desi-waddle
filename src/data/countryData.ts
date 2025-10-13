// Enhanced Country Data for Guess which Country Game
// Target: Ages 5-12, Educational & Family-Friendly
// 195 countries with smart difficulty progression and rich learning content

export interface CountryFunFact {
  language: string;
  currency: string;
  capital: string;
  uniqueFact: string;
  cultural: string;
  food: string;
}

export interface Country {
  id: number;
  flag: string;
  cluePool: string[];
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  funFact: CountryFunFact;
}

export const countryData: Country[] = [
  // EASY COUNTRIES (40 countries - ~20%)
  {
    id: 1,
    flag: "🇺🇸",
    difficulty: "easy",
    cluePool: [
      "I have 50 states and a president who lives in a white house.",
      "My flag has stars and stripes in red, white, and blue.",
      "I'm home to the Statue of Liberty and Hollywood movies.",
      "I invented the internet and have the world's largest economy.",
      "I'm famous for hamburgers, hot dogs, and apple pie.",
      "I have the Grand Canyon and Yellowstone National Park.",
      "I'm home to NASA and sent people to the moon.",
      "I have famous cities like New York, Los Angeles, and Chicago.",
      "I speak English and my currency is the dollar.",
      "I'm known for jazz music, baseball, and basketball.",
      "I have Disney World and many famous theme parks.",
      "I was founded in 1776 and fought for independence from Britain."
    ],
    answer: "United States",
    funFact: {
      language: "English",
      currency: "US Dollar",
      capital: "Washington D.C.",
      uniqueFact: "I have the world's largest economy and invented the internet!",
      cultural: "Home to jazz music, baseball, and the American Dream",
      food: "Famous for hamburgers, hot dogs, and apple pie"
    }
  },
  {
    id: 2,
    flag: "🇨🇦",
    difficulty: "easy",
    cluePool: [
      "I'm the second largest country in the world by area.",
      "My flag has a red maple leaf in the center.",
      "I'm known for being very polite and saying 'eh' a lot!",
      "I speak both English and French as official languages.",
      "I'm famous for hockey, maple syrup, and cold winters.",
      "I have Niagara Falls and the Rocky Mountains.",
      "I'm home to polar bears, moose, and beavers.",
      "I have provinces instead of states, like Ontario and Quebec.",
      "I'm known for the Royal Canadian Mounted Police (Mounties).",
      "I invented basketball and have Tim Hortons coffee shops.",
      "I'm north of the United States and touch three oceans.",
      "I have more lakes than the rest of the world combined!"
    ],
    answer: "Canada",
    funFact: {
      language: "English and French",
      currency: "Canadian Dollar",
      capital: "Ottawa",
      uniqueFact: "I have more lakes than the rest of the world combined - over 3 million!",
      cultural: "Home to hockey, mounties, and the world's politest people",
      food: "Famous for maple syrup, poutine, and Tim Hortons donuts"
    }
  },
  {
    id: 3,
    flag: "🇫🇷",
    difficulty: "easy",
    cluePool: [
      "I'm shaped like a hexagon and famous for romance.",
      "My most famous landmark is a tall iron tower in Paris.",
      "I invented French fries, croissants, and fancy fashion.",
      "I speak French and my capital is the romantic city of Paris.",
      "I'm famous for wine, cheese, and delicious bread called baguettes.",
      "I have the Louvre Museum with the Mona Lisa painting.",
      "I celebrate with fireworks on Bastille Day in July.",
      "I'm known for fancy perfumes, fashion designers, and art.",
      "I have the Palace of Versailles with amazing gardens.",
      "I invented cinema and have the Cannes Film Festival.",
      "I'm shaped like a hexagon and border many European countries.",
      "I'm the most visited country in the world for tourism!"
    ],
    answer: "France",
    funFact: {
      language: "French",
      currency: "Euro",
      capital: "Paris",
      uniqueFact: "I'm the most visited country in the world with 89 million tourists yearly!",
      cultural: "Birthplace of cinema, perfume, and fine art museums",
      food: "Home to cheese, wine, baguettes, and gourmet cooking"
    }
  },
  {
    id: 4,
    flag: "🇮🇹",
    difficulty: "easy",
    cluePool: [
      "I'm shaped exactly like a boot kicking a soccer ball!",
      "I invented pizza, pasta, and gelato ice cream.",
      "My capital has the Colosseum where gladiators fought.",
      "I speak Italian and my currency is the euro.",
      "I have the Vatican City, the smallest country, inside my capital.",
      "I'm home to the Leaning Tower of Pisa that tilts to one side.",
      "I created the Renaissance with artists like Leonardo da Vinci.",
      "I have beautiful canals in Venice where people ride in gondolas.",
      "I make famous cars like Ferrari, Lamborghini, and Fiat.",
      "I have Mount Vesuvius volcano that buried the city of Pompeii.",
      "I have more UNESCO World Heritage Sites than any other country.",
      "I'm known for opera music, fashion, and saying 'Ciao!' to greet people."
    ],
    answer: "Italy",
    funFact: {
      language: "Italian",
      currency: "Euro",
      capital: "Rome",
      uniqueFact: "I have more UNESCO World Heritage Sites than any other country - 58 total!",
      cultural: "Birthplace of the Renaissance, opera, and Ferrari cars",
      food: "Creator of pizza, spaghetti, lasagna, and amazing gelato"
    }
  },
  {
    id: 5,
    flag: "🇯🇵",
    difficulty: "easy",
    cluePool: [
      "I'm an island nation known for samurai, ninjas, and anime.",
      "My flag has a big red circle representing the rising sun.",
      "I gave the world sushi, Pokemon, and bullet trains.",
      "I speak Japanese and my capital city is Tokyo.",
      "I'm famous for robots, video games, and karate.",
      "I have Mount Fuji, a beautiful snow-capped volcano.",
      "I invented karaoke and have cherry blossom festivals.",
      "I make Nintendo games, Toyota cars, and Hello Kitty.",
      "I'm known for eating with chopsticks and bowing to greet people.",
      "I have many earthquakes and practice earthquake drills.",
      "I'm famous for manga comic books and anime cartoons.",
      "I have the longest life expectancy in the world!"
    ],
    answer: "Japan",
    funFact: {
      language: "Japanese",
      currency: "Yen",
      capital: "Tokyo",
      uniqueFact: "I have over 50,000 people who are over 100 years old!",
      cultural: "Home to manga, martial arts, and the most polite bowing culture",
      food: "Famous for sushi, ramen, tempura, and green tea"
    }
  },
  {
    id: 6,
    flag: "🇦🇺",
    difficulty: "easy",
    cluePool: [
      "I'm both a country AND a continent at the same time!",
      "I'm home to kangaroos, koalas, and the deadly box jellyfish.",
      "My biggest city has a famous opera house that looks like sails.",
      "I speak English and my capital is Canberra.",
      "I'm famous for saying 'G'day mate!' and surfing.",
      "I have the Great Barrier Reef, the world's largest coral reef.",
      "I'm home to unique animals like wombats, Tasmanian devils, and platypus.",
      "I have Uluru (Ayers Rock), a giant red rock in the desert.",
      "I was settled by Aboriginal people over 50,000 years ago.",
      "I have deadly spiders, snakes, and crocodiles but also cute quokkas.",
      "I'm the driest inhabited continent with lots of desert in the middle.",
      "I eat Vegemite spread and have barbies (barbecues) on the beach."
    ],
    answer: "Australia",
    funFact: {
      language: "English",
      currency: "Australian Dollar",
      capital: "Canberra",
      uniqueFact: "I have the world's longest fence - the Dingo Fence at 3,488 miles!",
      cultural: "Home to Aboriginal culture, surfing, and 'G'day mate!'",
      food: "Famous for Vegemite, meat pies, and barbecue shrimp"
    }
  },
  {
    id: 7,
    flag: "🇬🇧",
    difficulty: "easy",
    cluePool: [
      "I'm made up of England, Scotland, Wales, and Northern Ireland.",
      "My royal family lives in Buckingham Palace with funny hat guards.",
      "I created Harry Potter, The Beatles, and afternoon tea time.",
      "I have the famous clock tower Big Ben and red double-decker buses.",
      "I speak English and my currency is the pound sterling.",
      "I have a queen (or king) and lots of castles and palaces.",
      "I'm famous for Shakespeare, James Bond, and fish and chips.",
      "I have the English Channel separating me from Europe.",
      "I created soccer (football) and have the Premier League.",
      "I'm known for rainy weather and always carrying umbrellas.",
      "I have Scotland with kilts and bagpipes in the north.",
      "I have famous universities like Oxford and Cambridge."
    ],
    answer: "United Kingdom",
    funFact: {
      language: "English",
      currency: "British Pound",
      capital: "London",
      uniqueFact: "No point in my country is more than 75 miles from the sea!",
      cultural: "Birthplace of Shakespeare, The Beatles, and royal ceremonies",
      food: "Famous for fish and chips, bangers and mash, and afternoon tea"
    }
  },
  {
    id: 8,
    flag: "🇩🇪",
    difficulty: "easy",
    cluePool: [
      "I'm famous for making the best cars like BMW and Mercedes.",
      "My flag has black, red, and gold horizontal stripes.",
      "I invented the printing press, Christmas trees, and Oktoberfest!",
      "I speak German and my capital city is Berlin.",
      "I'm known for bratwurst sausages, pretzels, and lots of beer.",
      "I have the beautiful Neuschwanstein castle that inspired Disney.",
      "I invented the automobile and make Volkswagen cars.",
      "I'm famous for classical music composers like Beethoven and Bach.",
      "I celebrate Oktoberfest with traditional lederhosen clothes.",
      "I have the Black Forest region famous for cuckoo clocks.",
      "I'm in the heart of Europe and border nine other countries.",
      "I have over 1,500 types of beer and love soccer!"
    ],
    answer: "Germany",
    funFact: {
      language: "German",
      currency: "Euro",
      capital: "Berlin",
      uniqueFact: "I have over 1,000 varieties of sausages and 1,500 types of beer!",
      cultural: "Home to classical music, fairy tales, and precision engineering",
      food: "Famous for bratwurst, pretzels, sauerkraut, and Black Forest cake"
    }
  },
  {
    id: 9,
    flag: "🇧🇷",
    difficulty: "easy",
    cluePool: [
      "I'm the largest country in South America and speak Portuguese.",
      "I'm home to the Amazon rainforest and jungle animals.",
      "I throw the world's biggest party called Carnival with dancing!",
      "I speak Portuguese and my capital is Brasília.",
      "I'm famous for soccer and have won the World Cup 5 times.",
      "I have beautiful beaches like Copacabana and Ipanema.",
      "I'm home to jaguars, toucans, and colorful poison dart frogs.",
      "I produce most of the world's coffee beans and orange juice.",
      "I have the Christ the Redeemer statue overlooking Rio de Janeiro.",
      "I do the samba dance and play music with drums during Carnival.",
      "I have the Amazon River, the second longest river in the world.",
      "I grow açaí berries and have the largest wetland in the world."
    ],
    answer: "Brazil",
    funFact: {
      language: "Portuguese",
      currency: "Brazilian Real",
      capital: "Brasília",
      uniqueFact: "I produce around 40% of the world's coffee beans!",
      cultural: "Home to samba dancing, soccer legends, and Carnival celebrations",
      food: "Famous for açaí bowls, brigadeiros, and Brazilian BBQ"
    }
  },
  {
    id: 10,
    flag: "🇨🇳",
    difficulty: "easy",
    cluePool: [
      "I have the most people in the world - over 1.4 billion!",
      "I built a Great Wall that can be seen from space.",
      "I invented paper, gunpowder, and fortune cookies.",
      "I speak Chinese (Mandarin) and my capital is Beijing.",
      "I'm famous for pandas, dragons, and Chinese New Year celebrations.",
      "I invented fireworks, the compass, and noodles.",
      "I have the Forbidden City where emperors used to live.",
      "I make most of the world's toys and electronics.",
      "I'm known for kung fu martial arts and the Terra Cotta Warriors.",
      "I have the Yangtze River, one of the longest rivers in the world.",
      "I eat with chopsticks and my lucky number is 8.",
      "I host the Olympics and have giant panda reserves."
    ],
    answer: "China",
    funFact: {
      language: "Mandarin Chinese",
      currency: "Yuan",
      capital: "Beijing",
      uniqueFact: "The Great Wall actually CAN'T be seen from space with naked eyes!",
      cultural: "Home to pandas, kung fu, and the oldest continuous civilization",
      food: "Famous for dumplings, fried rice, sweet and sour dishes"
    }
  },

  // MEDIUM COUNTRIES (120 countries - ~60%)
  {
    id: 11,
    flag: "🇮🇳",
    difficulty: "medium",
    cluePool: [
      "I'm the second most populous country and invented yoga.",
      "My flag has orange, white, and green with a spinning wheel.",
      "I'm home to the beautiful Taj Mahal and spicy curry food.",
      "I speak Hindi and English plus 21 other official languages.",
      "I invented the number zero and the game of chess.",
      "I have the Ganges River which is sacred to Hindu people.",
      "I'm famous for Bollywood movies, colorful festivals, and elephants.",
      "I have the Himalayas with Mount Everest on my northern border.",
      "I'm known for tigers, peacocks, and the holy animal - cows.",
      "I celebrate Holi festival by throwing colorful powder at each other.",
      "I have the largest democracy in the world with over 1 billion people.",
      "I'm famous for meditation, spiritual practices, and amazing spices."
    ],
    answer: "India",
    funFact: {
      language: "Hindi and English (plus 21 others!)",
      currency: "Indian Rupee",
      capital: "New Delhi",
      uniqueFact: "I have the world's largest postal network with 155,000 post offices!",
      cultural: "Birthplace of yoga, meditation, and Bollywood movies",
      food: "Famous for curry, naan bread, samosas, and masala chai tea"
    }
  },
  {
    id: 12,
    flag: "🇲🇽",
    difficulty: "medium",
    cluePool: [
      "I share a long border with the United States to the north.",
      "My flag has an eagle eating a snake while sitting on a cactus.",
      "I gave the world chocolate, tacos, and mariachi music.",
      "I speak Spanish and my capital is Mexico City.",
      "I'm famous for ancient Aztec pyramids and Maya temples.",
      "I celebrate Day of the Dead with colorful skulls and flowers.",
      "I have 34 UNESCO World Heritage Sites - the most in the Americas.",
      "I make delicious food like guacamole, burritos, and churros.",
      "I have beautiful beaches in Cancun and ancient ruins in Chichen Itza.",
      "I invented hot chocolate and gave the world vanilla.",
      "I have mariachi bands playing guitars and wearing big sombreros.",
      "I love bright colors, piñatas, and spicy chili peppers."
    ],
    answer: "Mexico",
    funFact: {
      language: "Spanish",
      currency: "Mexican Peso",
      capital: "Mexico City",
      uniqueFact: "I have 34 UNESCO World Heritage Sites - the most in the Americas!",
      cultural: "Home to ancient Aztec pyramids, Day of the Dead, and colorful art",
      food: "Famous for tacos, guacamole, churros, and hot chocolate"
    }
  },
  {
    id: 13,
    flag: "🇷🇺",
    difficulty: "medium",
    cluePool: [
      "I'm the largest country in the world, covering 11 time zones.",
      "I'm famous for nesting dolls, ballet dancing, and cold winters.",
      "My capital has a famous red square and colorful onion domes.",
      "I speak Russian and my capital is Moscow.",
      "I'm home to the Trans-Siberian Railway, the world's longest train route.",
      "I have Lake Baikal, the world's deepest and oldest freshwater lake.",
      "I'm famous for the Kremlin, Red Square, and St. Basil's Cathedral.",
      "I was the first country to send a person into space - Yuri Gagarin.",
      "I have brown bears, Siberian tigers, and reindeer in my forests.",
      "I'm known for caviar, borscht soup, and matryoshka nesting dolls.",
      "I have the coldest permanently inhabited place on Earth in Siberia.",
      "I created famous ballets like Swan Lake and The Nutcracker."
    ],
    answer: "Russia",
    funFact: {
      language: "Russian",
      currency: "Russian Ruble",
      capital: "Moscow",
      uniqueFact: "I span 11 time zones - more than any other country!",
      cultural: "Home to the Bolshoi Ballet, chess masters, and space exploration",
      food: "Famous for borscht soup, caviar, and blini pancakes"
    }
  },
  {
    id: 14,
    flag: "🇪🇸",
    difficulty: "medium",
    cluePool: [
      "I'm shaped like the skin of an animal and love bullfighting.",
      "I speak the same language as many countries in South America.",
      "I'm famous for flamenco dancing and taking afternoon naps called siestas.",
      "I speak Spanish and my capital is Madrid.",
      "I have beautiful beaches and islands like the Canary Islands.",
      "I built amazing buildings like the Sagrada Familia in Barcelona.",
      "I produce almost half of the world's olive oil.",
      "I'm famous for paella rice dish and small plates called tapas.",
      "I have the running of the bulls festival in Pamplona.",
      "I'm known for artists like Pablo Picasso and Salvador Dalí.",
      "I have the Camino de Santiago pilgrimage walking path.",
      "I colonized much of South America and brought Spanish language there."
    ],
    answer: "Spain",
    funFact: {
      language: "Spanish",
      currency: "Euro",
      capital: "Madrid",
      uniqueFact: "I produce nearly half of the world's olive oil!",
      cultural: "Home to flamenco dancing, bull running, and beautiful architecture",
      food: "Famous for paella, tapas, churros, and Spanish ham"
    }
  },
  {
    id: 15,
    flag: "🇪🇬",
    difficulty: "medium",
    cluePool: [
      "I'm home to ancient pyramids and a mysterious sphinx.",
      "The longest river in the world flows through my desert.",
      "My ancient people made mummies and built amazing monuments.",
      "I speak Arabic and my capital is Cairo.",
      "I have the Great Pyramid of Giza, one of the Seven Wonders.",
      "I'm home to the Nile River, the longest river in the world.",
      "I invented paper, the calendar, and ancient medicine.",
      "I have the Sphinx with a human head and lion body.",
      "I preserved dead pharaohs as mummies for the afterlife.",
      "I built amazing temples and wrote in hieroglyphics.",
      "I'm famous for King Tutankhamun and Queen Cleopatra.",
      "I have the Suez Canal connecting the Mediterranean and Red Seas."
    ],
    answer: "Egypt",
    funFact: {
      language: "Arabic",
      currency: "Egyptian Pound",
      capital: "Cairo",
      uniqueFact: "Ancient Egyptians invented toothpaste made from ox hooves and ashes!",
      cultural: "Home to pharaohs, hieroglyphics, and the world's oldest civilization",
      food: "Famous for falafel, hummus, and sweet baklava pastries"
    }
  },

  // More EASY countries
  {
    id: 16,
    flag: "🇰🇷",
    difficulty: "easy",
    cluePool: [
      "I'm famous for K-pop music, kimchi food, and taekwondo martial arts.",
      "My country is split in half with a DMZ border in the middle.",
      "I gave the world Samsung phones and delicious Korean BBQ.",
      "I speak Korean and my capital is Seoul.",
      "I have the fastest internet in the world and love online gaming.",
      "I'm famous for Korean dramas (K-dramas) and Gangnam Style.",
      "I invented metal movable type printing before Gutenberg.",
      "I have beautiful cherry blossoms and ancient palaces.",
      "I bow to show respect and take off shoes when entering homes.",
      "I created popular video games and have amazing bullet trains.",
      "I eat with metal chopsticks and love spicy food.",
      "I have a peaceful Buddhism culture mixed with modern technology."
    ],
    answer: "South Korea",
    funFact: {
      language: "Korean",
      currency: "South Korean Won",
      capital: "Seoul",
      uniqueFact: "I have the fastest internet in the world and love online gaming!",
      cultural: "Home to K-pop, Korean dramas, and respectful bowing culture",
      food: "Famous for kimchi, Korean BBQ, bibimbap, and spicy ramen"
    }
  },
  {
    id: 24,
    flag: "🇸🇪",
    difficulty: "easy",
    cluePool: [
      "I'm famous for IKEA furniture, ABBA music, and blonde hair.",
      "My flag has a yellow cross on a blue background.",
      "I gave the world meatballs, Vikings, and the Nobel Prize.",
      "I speak Swedish and my capital is Stockholm.",
      "I'm known for being very safe, clean, and having long summer days.",
      "I created IKEA, Volvo cars, and the Nobel Prize awards.",
      "I have midnight sun in summer and Northern Lights in winter.",
      "I'm famous for Vikings, reindeer, and saying 'Hej!' to greet people.",
      "I love meatballs, cinnamon buns, and fishing.",
      "I have beautiful archipelagos with thousands of islands.",
      "I'm one of the happiest countries with free healthcare and education.",
      "I practice 'lagom' which means finding the perfect balance in life."
    ],
    answer: "Sweden",
    funFact: {
      language: "Swedish",
      currency: "Swedish Krona",
      capital: "Stockholm",
      uniqueFact: "I have more islands than any other country - over 267,000!",
      cultural: "Home to Vikings, ABBA, and the world's happiest people",
      food: "Famous for Swedish meatballs, lingonberries, and cinnamon buns"
    }
  },
  {
    id: 25,
    flag: "🇨🇭",
    difficulty: "easy",
    cluePool: [
      "I'm famous for Swiss chocolate, cheese, and expensive watches.",
      "My flag is a white cross on a red square background.",
      "I have the Alps mountains and neutral in all wars.",
      "I speak German, French, Italian, and Romansh languages.",
      "I'm known for precision, punctuality, and Swiss Army knives.",
      "I have beautiful snow-capped mountains perfect for skiing.",
      "I created the Red Cross organization to help people worldwide.",
      "I make the world's most expensive and accurate watches.",
      "I have over 1,500 lakes and invented milk chocolate.",
      "I'm home to CERN where scientists study tiny particles.",
      "I have mountain trains that climb steep Alps mountains.",
      "I love fondue cheese and eat chocolate every day!"
    ],
    answer: "Switzerland",
    funFact: {
      language: "German, French, Italian, and Romansh",
      currency: "Swiss Franc",
      capital: "Bern",
      uniqueFact: "I have more than 1,500 lakes and invented milk chocolate!",
      cultural: "Home to precision, punctuality, and world-class skiing",
      food: "Famous for chocolate, fondue, raclette cheese, and rösti"
    }
  },
  {
    id: 26,
    flag: "🇳🇴",
    difficulty: "easy",
    cluePool: [
      "I'm home to fjords, the Northern Lights, and midnight sun.",
      "My flag has red, white, and blue with a cross design.",
      "I'm famous for Vikings, oil wealth, and being very expensive.",
      "I speak Norwegian and my capital is Oslo.",
      "I'm the birthplace of skiing and love winter sports.",
      "I have midnight sun in summer where it never gets dark.",
      "I'm one of the happiest countries with free healthcare.",
      "I have beautiful waterfalls and dramatic cliff coastlines.",
      "I'm famous for trolls, reindeer, and salmon fishing.",
      "I have the world's largest sovereign wealth fund from oil.",
      "I invented the cheese slicer and love eating fish.",
      "I have ancient stave churches made entirely of wood."
    ],
    answer: "Norway",
    funFact: {
      language: "Norwegian",
      currency: "Norwegian Krone",
      capital: "Oslo",
      uniqueFact: "I have the world's largest sovereign wealth fund from oil!",
      cultural: "Birthplace of skiing, trolls, and the happiest people on Earth",
      food: "Famous for salmon, lefse flatbread, and reindeer meat"
    }
  },
  {
    id: 27,
    flag: "🇬🇷",
    difficulty: "easy",
    cluePool: [
      "I'm the birthplace of democracy, Olympics, and philosophy.",
      "My flag has blue and white stripes with a cross.",
      "I have thousands of islands and invented Greek yogurt.",
      "I speak Greek and my capital is Athens.",
      "I created the first Olympic Games over 2,700 years ago.",
      "I'm famous for ancient gods like Zeus, Athena, and Poseidon.",
      "I have beautiful white buildings with blue domed roofs.",
      "I invented theater, geometry, and democratic voting.",
      "I'm home to the Parthenon temple on the Acropolis hill.",
      "I have over 6,000 islands but only 200 are inhabited.",
      "I love olives, feta cheese, and dancing the sirtaki.",
      "I gave the world philosophers like Socrates and Plato."
    ],
    answer: "Greece",
    funFact: {
      language: "Greek",
      currency: "Euro",
      capital: "Athens",
      uniqueFact: "I have more archaeological museums than any other country!",
      cultural: "Birthplace of Western civilization, mythology, and the Olympics",
      food: "Famous for gyros, feta cheese, olives, and baklava"
    }
  },
  {
    id: 28,
    flag: "🇵🇹",
    difficulty: "easy",
    cluePool: [
      "I'm shaped like a rectangle on the Atlantic Ocean.",
      "My language is spoken by 250 million people worldwide.",
      "I'm famous for Port wine, pastéis de nata, and Cristiano Ronaldo.",
      "I speak Portuguese and my capital is Lisbon.",
      "I was the first global empire and discovered sea routes to Asia.",
      "I have beautiful blue and white tiles covering my buildings.",
      "I'm the westernmost country in mainland Europe.",
      "I love fado music that sounds sad but beautiful.",
      "I invented the custard tart pastéis de nata dessert.",
      "I have 15 UNESCO World Heritage Sites to explore.",
      "I'm famous for explorers like Vasco da Gama.",
      "I have cork forests and make most of the world's cork."
    ],
    answer: "Portugal",
    funFact: {
      language: "Portuguese",
      currency: "Euro",
      capital: "Lisbon",
      uniqueFact: "I was the first global empire and discovered sea routes to Asia!",
      cultural: "Home to fado music, beautiful tiles, and great explorers",
      food: "Famous for pastéis de nata, seafood, and Port wine"
    }
  },
  {
    id: 43,
    flag: "🇮🇪",
    difficulty: "easy",
    cluePool: [
      "I'm the Emerald Isle famous for green fields and leprechauns.",
      "My flag has green, white, and orange vertical stripes.",
      "I'm known for Guinness beer, shamrocks, and St. Patrick's Day.",
      "I speak Irish Gaelic and English in my capital Dublin.",
      "I have no snakes because St. Patrick drove them all away.",
      "I'm famous for Celtic music, dancing, and storytelling.",
      "I have beautiful cliffs, castles, and green countryside.",
      "I celebrate St. Patrick's Day by wearing green clothes.",
      "I love Irish stew, soda bread, and fish and chips.",
      "I have magical fairy rings and ancient stone circles.",
      "I'm known for being friendly and saying 'top of the morning'.",
      "I have beautiful Celtic crosses and traditional wool sweaters."
    ],
    answer: "Ireland",
    funFact: {
      language: "Irish and English",
      currency: "Euro",
      capital: "Dublin",
      uniqueFact: "I have no snakes thanks to St. Patrick driving them all away!",
      cultural: "Home to Celtic culture, traditional music, and storytelling",
      food: "Famous for Irish stew, soda bread, and fish and chips"
    }
  },
  {
    id: 44,
    flag: "🇩🇰",
    difficulty: "easy",
    cluePool: [
      "I'm famous for LEGO blocks, fairy tales, and Viking history.",
      "My flag is red with a white cross and is the oldest in the world.",
      "I'm known for being very happy, riding bikes, and eating pastries.",
      "I speak Danish and my capital is Copenhagen.",
      "I invented LEGO blocks and have Legoland theme parks.",
      "I wrote fairy tales like The Little Mermaid and Ugly Duckling.",
      "I practice hygge which means cozy happiness and comfort.",
      "I have the world's oldest monarchy still in existence.",
      "I love Danish pastries, smørrebrød sandwiches, and bacon.",
      "I'm one of the happiest countries with free education.",
      "I have a famous statue of The Little Mermaid in my harbor.",
      "I connect to Sweden with a long bridge across the water."
    ],
    answer: "Denmark",
    funFact: {
      language: "Danish",
      currency: "Danish Krone",
      capital: "Copenhagen",
      uniqueFact: "I invented LEGO and have the world's oldest monarchy!",
      cultural: "Home to Hans Christian Andersen, hygge lifestyle, and Vikings",
      food: "Famous for Danish pastries, smørrebrød sandwiches, and bacon"
    }
  },
  {
    id: 45,
    flag: "🇦🇹",
    difficulty: "easy",
    cluePool: [
      "I'm a small Alpine country famous for classical music and skiing.",
      "My most famous composer was Mozart who wrote beautiful music.",
      "I'm known for The Sound of Music, Vienna, and delicious desserts.",
      "I speak German and my capital is Vienna.",
      "I gave the world Mozart, Strauss, and the waltz dance.",
      "I have beautiful mountains, lakes, and Sound of Music locations.",
      "I'm famous for opera houses and classical concerts.",
      "I love Sachertorte chocolate cake and apple strudel.",
      "I have no coastline but amazing Alpine skiing mountains.",
      "I'm home to the Vienna Boys' Choir with angelic voices.",
      "I invented the croissant and love coffee house culture.",
      "I have elegant ballrooms where people dance the Viennese waltz."
    ],
    answer: "Austria",
    funFact: {
      language: "German",
      currency: "Euro",
      capital: "Vienna",
      uniqueFact: "I gave the world Mozart, Strauss, and the waltz dance!",
      cultural: "Home to classical music, opera houses, and Alpine culture",
      food: "Famous for Sachertorte cake, schnitzel, and apple strudel"
    }
  },
  {
    id: 46,
    flag: "🇧🇪",
    difficulty: "easy",
    cluePool: [
      "I'm a small European country famous for the best chocolate and waffles.",
      "My flag has black, yellow, and red vertical stripes.",
      "I'm home to the European Union headquarters and comic books like Tintin.",
      "I speak Dutch, French, and German languages.",
      "I invented French fries and have over 800 types of beer.",
      "I'm famous for Tintin comics, the Smurfs, and Asterix.",
      "I have beautiful medieval cities with cobblestone streets.",
      "I make the world's finest chocolate and delicious waffles.",
      "I'm where important European Union decisions are made.",
      "I have beautiful lace making and diamond cutting traditions.",
      "I love mussels with French fries and mayonnaise.",
      "I have beautiful flower carpets and peaceful countryside."
    ],
    answer: "Belgium",
    funFact: {
      language: "Dutch, French, and German",
      currency: "Euro",
      capital: "Brussels",
      uniqueFact: "I invented French fries and have over 800 types of beer!",
      cultural: "Home to Tintin comics, lace making, and EU politics",
      food: "Famous for chocolate, waffles, French fries, and mussels"
    }
  },
  {
    id: 17,
    flag: "🇳🇿",
    difficulty: "easy",
    cluePool: [
      "I'm an island nation famous for kiwi birds and Lord of the Rings movies.",
      "I have more sheep than people - about 5 sheep per person!",
      "My flag looks like Australia's but with 4 stars instead of 6.",
      "I speak English and Māori and my capital is Wellington.",
      "I was the first country to give women the right to vote.",
      "I'm made of two main islands - North Island and South Island.",
      "I have no dangerous animals like snakes or scary spiders.",
      "I'm famous for rugby, the haka dance, and bungee jumping.",
      "I have beautiful glaciers, mountains, and glowing caves.",
      "I invented bungee jumping and love extreme sports.",
      "I have Māori culture with traditional tattoos and dances.",
      "I make delicious meat pies, pavlova dessert, and Manuka honey."
    ],
    answer: "New Zealand",
    funFact: {
      language: "English and Māori",
      currency: "New Zealand Dollar",
      capital: "Wellington",
      uniqueFact: "I was the first country to give women the right to vote in 1893!",
      cultural: "Home to Māori culture, rugby, and breathtaking nature",
      food: "Famous for meat pies, pavlova dessert, and Manuka honey"
    }
  },
  {
    id: 18,
    flag: "🇳🇱",
    difficulty: "easy",
    cluePool: [
      "I'm famous for tulips, windmills, and riding bicycles everywhere.",
      "My flag has red, white, and blue horizontal stripes.",
      "I'm known for wooden shoes, cheese wheels, and being very tall people.",
      "I speak Dutch and my capital is Amsterdam.",
      "I have more bikes than people - over 23 million bicycles!",
      "I have beautiful tulip fields that bloom in spring.",
      "I'm famous for windmills that pump water and grind grain.",
      "I make amazing Dutch cheese like Gouda and Edam.",
      "I have canals in Amsterdam where people live on houseboats.",
      "I'm home to Van Gogh paintings and beautiful art museums.",
      "I invented the stroopwafel cookie and love eating herring fish.",
      "I have the tallest people in the world - average 6 feet tall!"
    ],
    answer: "Netherlands",
    funFact: {
      language: "Dutch",
      currency: "Euro",
      capital: "Amsterdam",
      uniqueFact: "I have more bikes than people - over 23 million bicycles!",
      cultural: "Home to Van Gogh paintings, flower fields, and canal houses",
      food: "Famous for Dutch cheese, stroopwafels, and herring fish"
    }
  },

  // MEDIUM countries continued
  {
    id: 19,
    flag: "🇦🇷",
    difficulty: "medium",
    cluePool: [
      "I'm famous for tango dancing and the best soccer players in the world.",
      "My flag has light blue and white stripes with a golden sun.",
      "I'm home to gauchos (cowboys) and huge grasslands for cattle.",
      "I speak Spanish and my capital is Buenos Aires.",
      "I'm the second-largest country in South America after Brazil.",
      "I have the highest peak in both hemispheres - Aconcagua mountain.",
      "I'm famous for Lionel Messi, Diego Maradona, and passionate soccer fans.",
      "I love asado beef barbecues, empanadas, and dulce de leche desserts.",
      "I have beautiful waterfalls like Iguazu Falls shared with Brazil.",
      "I have penguins in Patagonia and amazing wine from Mendoza region.",
      "I invented the ballpoint pen and have the widest street in the world.",
      "I'm known for passionate tango music, beautiful architecture, and friendly people."
    ],
    answer: "Argentina",
    funFact: {
      language: "Spanish",
      currency: "Argentine Peso",
      capital: "Buenos Aires",
      uniqueFact: "I have the highest peak in both Western and Southern hemispheres!",
      cultural: "Birthplace of tango dancing, soccer legends, and gaucho culture",
      food: "Famous for beef steaks, empanadas, and dulce de leche"
    }
  },
  {
    id: 29,
    flag: "🇵🇭",
    difficulty: "medium",
    cluePool: [
      "I'm made up of over 7,000 tropical islands in Southeast Asia.",
      "I speak English and my own language due to American influence.",
      "I'm famous for beautiful beaches, karaoke, and friendly people.",
      "I speak Filipino and English and my capital is Manila.",
      "I have more than 7,641 islands but only 2,000 are inhabited.",
      "I'm the world's text messaging capital and love karaoke.",
      "I have beautiful rice terraces and colorful jeepney buses.",
      "I'm known for being very hospitable and saying 'Kumusta!'.",
      "I have amazing diving spots and the chocolate hills.",
      "I love adobo food, lechon pig, and halo-halo dessert.",
      "I have beautiful beaches in Palawan and Boracay islands.",
      "I celebrate with colorful festivals and traditional dances."
    ],
    answer: "Philippines",
    funFact: {
      language: "Filipino and English",
      currency: "Philippine Peso",
      capital: "Manila",
      uniqueFact: "I have more than 7,641 islands, but only about 2,000 are inhabited!",
      cultural: "Known for hospitality, karaoke culture, and colorful festivals",
      food: "Famous for adobo, lechon, lumpia, and halo-halo dessert"
    }
  },
  {
    id: 30,
    flag: "🇹🇷",
    difficulty: "medium",
    cluePool: [
      "I'm located on two continents - Europe and Asia at the same time.",
      "My largest city has famous mosques and used to be Constantinople.",
      "I'm known for Turkish baths, carpets, and delicious kebabs.",
      "I speak Turkish and my capital is Ankara.",
      "I'm the only country that spans both Europe and Asia.",
      "I have beautiful mosques like the Blue Mosque and Hagia Sophia.",
      "I invented Turkish delight candy and strong Turkish coffee.",
      "I'm famous for hot air balloons in Cappadocia region.",
      "I have ancient ruins like Troy and historical Ottoman palaces.",
      "I love Turkish tea, baklava pastries, and spicy kebabs.",
      "I have beautiful beaches and the Cotton Castle white cliffs.",
      "I gave the world tulips and the Grand Bazaar marketplace."
    ],
    answer: "Turkey",
    funFact: {
      language: "Turkish",
      currency: "Turkish Lira",
      capital: "Ankara",
      uniqueFact: "I'm the only country that spans two continents!",
      cultural: "Bridge between East and West, home to ancient civilizations",
      food: "Famous for kebabs, baklava, Turkish delight, and strong coffee"
    }
  },
  {
    id: 31,
    flag: "🇻🇳",
    difficulty: "medium",
    cluePool: [
      "I'm a long, narrow country shaped like an 'S' in Southeast Asia.",
      "I'm famous for motorbikes, conical hats, and delicious pho soup.",
      "My flag has a red background with a yellow star.",
      "I speak Vietnamese and my capital is Hanoi.",
      "I have the world's largest cave - Son Doong Cave.",
      "I'm famous for floating markets and rice paddies.",
      "I make delicious spring rolls and strong Vietnamese coffee.",
      "I have beautiful beaches like Ha Long Bay with limestone cliffs.",
      "I love riding motorbikes and wearing traditional ao dai dresses.",
      "I have ancient temples and the Cu Chi underground tunnels.",
      "I grow lots of rice and have floating villages on water.",
      "I'm known for my friendly people and delicious street food."
    ],
    answer: "Vietnam",
    funFact: {
      language: "Vietnamese",
      currency: "Vietnamese Dong",
      capital: "Hanoi",
      uniqueFact: "I have the world's largest cave - Son Doong Cave!",
      cultural: "Known for ancient temples, water puppets, and resilient spirit",
      food: "Famous for pho soup, banh mi sandwiches, and fresh spring rolls"
    }
  },
  {
    id: 32,
    flag: "🇵🇪",
    difficulty: "medium",
    cluePool: [
      "I'm home to Machu Picchu and the ancient Inca civilization.",
      "I have the Amazon rainforest, desert, and Andes mountains all in one country.",
      "I'm known for llamas, alpacas, and colorful traditional clothing.",
      "I speak Spanish and Quechua and my capital is Lima.",
      "I'm the birthplace of the potato with over 3,000 different varieties!",
      "I have Lake Titicaca, the highest navigable lake in the world.",
      "I'm famous for ceviche raw fish, quinoa grain, and coca leaves.",
      "I have the mysterious Nazca Lines - giant drawings in the desert.",
      "I love traditional music with pan flutes and colorful woven textiles.",
      "I have amazing ancient ruins like Machu Picchu hidden in the mountains.",
      "I raise guinea pigs for food and have beautiful Andean mountains.",
      "I'm known for rich history, friendly people, and incredible biodiversity."
    ],
    answer: "Peru",
    funFact: {
      language: "Spanish and Quechua",
      currency: "Peruvian Sol",
      capital: "Lima",
      uniqueFact: "I'm the birthplace of the potato with over 3,000 varieties!",
      cultural: "Home to ancient Inca ruins, vibrant textiles, and Andean music",
      food: "Famous for ceviche, quinoa, potatoes, and guinea pig"
    }
  },
  {
    id: 33,
    flag: "🇰🇪",
    difficulty: "medium",
    cluePool: [
      "I'm located in East Africa and famous for safari animals.",
      "I'm the birthplace of long-distance running champions.",
      "My flag has black, red, green, and white with a shield and spears.",
      "I speak Swahili and English and my capital is Nairobi.",
      "I'm home to the Great Migration of 2 million animals.",
      "I have amazing wildlife like lions, elephants, and giraffes.",
      "I'm famous for Maasai warriors who jump very high.",
      "I produce the world's best marathon and long-distance runners.",
      "I have Mount Kenya, the second highest mountain in Africa.",
      "I love ugali food, nyama choma grilled meat, and chai tea.",
      "I have beautiful national parks for safari adventures.",
      "I'm known for colorful traditional clothing and beadwork."
    ],
    answer: "Kenya",
    funFact: {
      language: "Swahili and English",
      currency: "Kenyan Shilling",
      capital: "Nairobi",
      uniqueFact: "I'm home to the Great Migration where 2 million animals migrate!",
      cultural: "Known for Maasai warriors, safari parks, and athletic champions",
      food: "Famous for ugali, nyama choma grilled meat, and chai tea"
    }
  },
  {
    id: 34,
    flag: "🇳🇬",
    difficulty: "medium",
    cluePool: [
      "I'm the most populous country in Africa with over 200 million people.",
      "I'm famous for Nollywood movies and oil production.",
      "My flag has green and white vertical stripes.",
      "I speak English plus over 500 local languages.",
      "I have the world's third-largest film industry - Nollywood.",
      "I'm famous for afrobeats music and talented musicians.",
      "I have amazing wildlife and the largest economy in Africa.",
      "I love jollof rice, suya meat, and traditional festivals.",
      "I have diverse cultures with Yoruba, Igbo, and Hausa people.",
      "I produce lots of oil and have beautiful coastal cities.",
      "I'm known for colorful traditional clothing and head wraps.",
      "I have ancient kingdoms and rich storytelling traditions."
    ],
    answer: "Nigeria",
    funFact: {
      language: "English plus 500+ local languages",
      currency: "Nigerian Naira",
      capital: "Abuja",
      uniqueFact: "I have the world's third-largest film industry - Nollywood!",
      cultural: "Home to diverse tribes, Afrobeat music, and vibrant markets",
      food: "Famous for jollof rice, pepper soup, and plantains"
    }
  },
  {
    id: 35,
    flag: "🇮🇩",
    difficulty: "medium",
    cluePool: [
      "I'm the world's largest archipelago with over 17,000 islands.",
      "I have the most volcanoes of any country in the world.",
      "I'm home to orangutans, Komodo dragons, and beautiful beaches.",
      "I speak Indonesian and my capital is Jakarta.",
      "I'm the world's largest island country and most populous Muslim nation.",
      "I have unique animals like Komodo dragons that look like dinosaurs.",
      "I'm famous for Bali island with beautiful temples and surfing.",
      "I grow lots of rice and make delicious satay and nasi goreng.",
      "I have over 130 active volcanoes and beautiful tropical forests.",
      "I'm home to orangutans swinging in the rainforest trees.",
      "I have amazing diving and the world's largest lizard - Komodo dragon.",
      "I love gamelan music and traditional Indonesian dances."
    ],
    answer: "Indonesia",
    funFact: {
      language: "Indonesian",
      currency: "Indonesian Rupiah",
      capital: "Jakarta",
      uniqueFact: "I'm the world's largest island country and most populous Muslim nation!",
      cultural: "Known for batik art, traditional dances, and temple complexes",
      food: "Famous for nasi goreng, satay, rendang, and spicy sambal"
    }
  },
  {
    id: 47,
    flag: "🇲🇦",
    difficulty: "medium",
    cluePool: [
      "I'm located in North Africa with both Atlantic and Mediterranean coasts.",
      "My cities have beautiful markets called souks and I'm famous for tagine cooking.",
      "I have the Sahara Desert and my flag has a green star.",
      "I speak Arabic and Berber and my capital is Rabat.",
      "I'm the only African country with both Atlantic and Mediterranean coasts.",
      "I have beautiful markets called souks with spices and colorful crafts.",
      "I make delicious tagine stew cooked in cone-shaped clay pots.",
      "I have ancient cities like Marrakech with amazing palaces.",
      "I love mint tea, couscous, and sweet pastries with honey.",
      "I have the Atlas Mountains and part of the Sahara Desert.",
      "I make beautiful hand-woven carpets and leather goods.",
      "I celebrate with traditional music, dancing, and henna art."
    ],
    answer: "Morocco",
    funFact: {
      language: "Arabic and Berber",
      currency: "Moroccan Dirham",
      capital: "Rabat",
      uniqueFact: "I'm the only African country with both Atlantic and Mediterranean coastlines!",
      cultural: "Home to Berber culture, beautiful mosaics, and traditional crafts",
      food: "Famous for tagine, couscous, mint tea, and sweet pastries"
    }
  },
  {
    id: 48,
    flag: "🇨🇱",
    difficulty: "medium",
    cluePool: [
      "I'm a very long, thin country that stretches along South America's coast.",
      "I have the Atacama Desert, the driest place on Earth.",
      "My flag has red, white, and blue with a star in the corner.",
      "I speak Spanish and my capital is Santiago.",
      "I'm 30 times longer than I am wide - the skinniest country in the world!",
      "I have Easter Island with mysterious giant stone statues called moai.",
      "I'm famous for excellent wine, fresh salmon, and amazing seafood.",
      "I have snow-capped mountains, glaciers, and beautiful coastlines.",
      "I love empanadas, seafood, and have great wine from my valleys.",
      "I have amazing astronomy observatories because of my clear night skies.",
      "I stretch from the Atacama Desert to Patagonia ice fields.",
      "I'm known for being very safe, clean, and having friendly people."
    ],
    answer: "Chile",
    funFact: {
      language: "Spanish",
      currency: "Chilean Peso",
      capital: "Santiago",
      uniqueFact: "I'm 30 times longer than I am wide - the skinniest country!",
      cultural: "Home to Easter Island statues, wine culture, and Andean traditions",
      food: "Famous for seafood, wine, empanadas, and fresh salmon"
    }
  },
  {
    id: 49,
    flag: "🇨🇴",
    difficulty: "medium",
    cluePool: [
      "I'm the only South American country with coasts on two oceans.",
      "I'm famous for coffee, emeralds, and colorful festivals.",
      "My flag has yellow, blue, and red horizontal stripes.",
      "I speak Spanish and my capital is Bogotá.",
      "I produce 70% of the world's emeralds and amazing coffee.",
      "I have coasts on both the Pacific Ocean and Atlantic Ocean.",
      "I'm home to the Amazon rainforest and beautiful birds.",
      "I love salsa dancing and celebrating colorful carnivals.",
      "I have ancient cities and the magical town of Cartagena.",
      "I grow the world's best coffee beans in my mountains.",
      "I have diverse wildlife including toucans and jaguars.",
      "I'm known for friendly people and saying '¡Hola amigo!'."
    ],
    answer: "Colombia",
    funFact: {
      language: "Spanish",
      currency: "Colombian Peso",
      capital: "Bogotá",
      uniqueFact: "I produce 70% of the world's emeralds and amazing coffee!",
      cultural: "Home to salsa dancing, Gabriel García Márquez, and carnival celebrations",
      food: "Famous for arepas, coffee, fresh fruit, and coconut rice"
    }
  },
  {
    id: 50,
    flag: "🇪🇹",
    difficulty: "medium",
    cluePool: [
      "I'm one of only two African countries never fully colonized.",
      "I'm the birthplace of coffee and have my own ancient calendar.",
      "My flag has green, yellow, and red with a star and sun symbol.",
      "I speak Amharic and my capital is Addis Ababa.",
      "I have 13 months in my calendar instead of 12 like other countries.",
      "I'm the birthplace of coffee and have traditional coffee ceremonies.",
      "I have Lucy, one of the oldest human fossils ever discovered.",
      "I love injera spongy bread, spicy stews, and berbere spice mix.",
      "I have ancient rock churches carved underground in Lalibela.",
      "I'm home to the source of the Blue Nile river in Lake Tana.",
      "I have unique wildlife like gelada monkeys and Ethiopian wolves.",
      "I celebrate Timkat festival with colorful processions and water blessings."
    ],
    answer: "Ethiopia",
    funFact: {
      language: "Amharic",
      currency: "Ethiopian Birr",
      capital: "Addis Ababa",
      uniqueFact: "I'm the birthplace of coffee and have 13 months in my calendar!",
      cultural: "Home to ancient churches, coffee ceremonies, and diverse tribes",
      food: "Famous for injera bread, spicy stews, and the coffee ceremony"
    }
  },
  {
    id: 51,
    flag: "🇰🇿",
    difficulty: "medium",
    cluePool: [
      "I'm the world's largest landlocked country in Central Asia.",
      "I have oil, gas, and launch rockets from my space center.",
      "My flag is blue with a golden sun and eagle.",
      "I speak Kazakh and Russian and my capital is Nur-Sultan.",
      "I have the Baikonur space center where astronauts launch to space.",
      "I'm famous for vast grasslands called steppes with nomadic herders.",
      "I love delicious beshbarmak noodles with meat and traditional kumys drink.",
      "I have huge oil and gas reserves and lots of valuable minerals.",
      "I'm home to snow leopards, wild horses, and golden eagles.",
      "I have beautiful lakes and mountains in the Tian Shan range.",
      "I was part of the ancient Silk Road connecting East and West.",
      "I have traditional yurt tents and practice eagle hunting."
    ],
    answer: "Kazakhstan",
    funFact: {
      language: "Kazakh and Russian",
      currency: "Kazakhstani Tenge",
      capital: "Nur-Sultan",
      uniqueFact: "I'm the world's largest landlocked country and launched Borat to fame!",
      cultural: "Home to nomadic traditions, space exploration, and vast steppes",
      food: "Famous for horse meat, fermented mare's milk, and hearty meat dishes"
    }
  },
  {
    id: 52,
    flag: "🇺🇦",
    difficulty: "medium",
    cluePool: [
      "I'm the largest country entirely in Europe with fertile farmland.",
      "My flag has blue and yellow horizontal stripes like sky and wheat.",
      "I'm known for sunflowers, borscht soup, and beautiful painted eggs.",
      "I speak Ukrainian and my capital is Kyiv.",
      "I'm called Europe's breadbasket because I grow so much grain.",
      "I have the deepest metro station in the world in my capital city.",
      "I'm famous for colorful painted Easter eggs called pysanky.",
      "I love borscht soup, varenyky dumplings, and hearty meals.",
      "I have beautiful golden-domed churches and traditional folk music.",
      "I have vast fields of sunflowers that turn to follow the sun.",
      "I'm known for Cossack warriors, folk dances, and embroidered shirts.",
      "I have the Chernobyl nuclear site and rich black soil for farming."
    ],
    answer: "Ukraine",
    funFact: {
      language: "Ukrainian",
      currency: "Ukrainian Hryvnia",
      capital: "Kyiv",
      uniqueFact: "I'm Europe's breadbasket and have the deepest metro station in the world!",
      cultural: "Home to Cossack traditions, colorful folk art, and classical music",
      food: "Famous for borscht, varenyky dumplings, and salo (pork fat)"
    }
  },
  {
    id: 53,
    flag: "🇮🇷",
    difficulty: "medium",
    cluePool: [
      "I'm an ancient country in the Middle East famous for Persian carpets.",
      "I have beautiful mosques with blue tiles and used to be called Persia.",
      "I'm known for poetry, saffron spice, and pomegranates.",
      "I speak Persian (Farsi) and my bustling capital is Tehran.",
      "I have the world's largest hand-woven carpet and invented ice cream.",
      "I'm famous for beautiful gardens, ancient ruins, and Islamic architecture.",
      "I love delicious kebabs, saffron rice, and sweet rosewater desserts.",
      "I have ancient cities like Isfahan with stunning blue-tiled mosques.",
      "I'm home to poets like Rumi and have a rich literary tradition.",
      "I grow delicious pistachios, pomegranates, and saffron spice.",
      "I have beautiful mountains, deserts, and the Caspian Sea coastline.",
      "I celebrate Nowruz New Year in spring with family gatherings and festivities."
    ],
    answer: "Iran",
    funFact: {
      language: "Persian (Farsi)",
      currency: "Iranian Rial",
      capital: "Tehran",
      uniqueFact: "I have the world's largest hand-woven carpet and invented ice cream!",
      cultural: "Home to ancient Persian empire, poetry, and beautiful architecture",
      food: "Famous for saffron rice, kebabs, pomegranates, and rosewater sweets"
    }
  },
  {
    id: 20,
    flag: "🇹🇭",
    difficulty: "medium",
    cluePool: [
      "I'm known as the 'Land of Smiles' and have friendly elephant riders.",
      "My capital city's name is one of the longest in the world - Bangkok!",
      "I'm famous for Thai boxing, beautiful temples, and spicy food.",
      "I speak Thai and was never colonized by Europeans.",
      "I have beautiful golden temples and friendly Buddhist monks.",
      "I'm famous for pad thai noodles, green curry, and mango sticky rice.",
      "I have elephants, tuk-tuk taxis, and floating markets.",
      "I practice Muay Thai boxing and traditional Thai dancing.",
      "I have amazing beaches in Phuket and beautiful islands.",
      "I love spicy som tam salad and refreshing Thai iced tea.",
      "I have ornate temples like Wat Pho with huge golden Buddhas.",
      "I celebrate Songkran water festival by splashing water everywhere."
    ],
    answer: "Thailand",
    funFact: {
      language: "Thai",
      currency: "Thai Baht",
      capital: "Bangkok",
      uniqueFact: "I'm the only Southeast Asian country never colonized by Europeans!",
      cultural: "Home to Buddhist temples, Muay Thai boxing, and floating markets",
      food: "Famous for pad thai, green curry, mango sticky rice, and tom yum soup"
    }
  },
  {
    id: 21,
    flag: "🇿🇦",
    difficulty: "medium",
    cluePool: [
      "I'm located at the southern tip of Africa with penguins and lions.",
      "I have 11 official languages and three different capital cities.",
      "My flag has six different colors making it very colorful.",
      "I'm home to the Big Five safari animals: lions, elephants, rhinos, leopards, and buffalo.",
      "I have Table Mountain in Cape Town, one of the world's most beautiful cities.",
      "I'm famous for diamonds, gold mines, and beautiful wine regions.",
      "I speak languages like Zulu, Xhosa, Afrikaans, and English.",
      "I have penguins at Boulders Beach and great white sharks nearby.",
      "I'm known for braai barbecues, biltong dried meat, and rooibos tea.",
      "I have the world's largest man-made forest in Johannesburg.",
      "I'm famous for Nelson Mandela and ending apartheid peacefully.",
      "I have both desert and ocean, mountains and grasslands in one country."
    ],
    answer: "South Africa",
    funFact: {
      language: "11 official languages including English and Zulu",
      currency: "South African Rand",
      capital: "Cape Town, Pretoria, and Bloemfontein",
      uniqueFact: "I'm the only country with three capital cities for different government parts!",
      cultural: "Home to the 'Big Five' safari animals and rainbow nation diversity",
      food: "Famous for biltong jerky, bobotie casserole, and rooibos tea"
    }
  },

  // HARD COUNTRIES (with easier clues for kids)
  {
    id: 22,
    flag: "🇧🇹",
    difficulty: "hard",
    cluePool: [
      "I'm a small mountain kingdom that measures happiness instead of money.",
      "I'm squeezed between two giant countries: China and India.",
      "I'm the only country that cleans more air than I pollute!",
      "I'm in the Himalayas and home to the highest unclimbed mountain.",
      "I didn't allow TV or internet until 1999 - I liked being peaceful!",
      "Everyone here wears traditional robes and my king is very young.",
      "I have prayer flags fluttering everywhere and spin prayer wheels.",
      "I practice Buddhism and have beautiful mountain monasteries.",
      "I ban tobacco completely and focus on being environmentally friendly.",
      "I'm famous for archery contests and traditional masked dances.",
      "I have tigers living in my mountains and protect rare animals.",
      "I believe being happy is more important than being rich!"
    ],
    answer: "Bhutan",
    funFact: {
      language: "Dzongkha",
      currency: "Bhutanese Ngultrum",
      capital: "Thimphu",
      uniqueFact: "I'm the only country that measures Gross National Happiness!",
      cultural: "Last country to get TV and internet, focus on happiness over wealth",
      food: "Famous for spicy chili cheese stew and red rice dishes"
    }
  },
  {
    id: 23,
    flag: "🇲🇻",
    difficulty: "hard",
    cluePool: [
      "I'm made up of 1,192 tiny coral islands in the Indian Ocean.",
      "I'm the lowest and flattest country on Earth - perfect for swimming!",
      "My islands are so beautiful that people come here for honeymoons.",
      "I have crystal blue water and white sandy beaches everywhere.",
      "I'm slowly sinking because of rising sea levels from climate change.",
      "I have underwater restaurants where you can eat with fish swimming around.",
      "I'm made entirely of coral and have amazing snorkeling and diving.",
      "I'm a Muslim country where people speak Dhivehi language.",
      "I have luxury water villas built right over the ocean.",
      "I'm famous for swimming with whale sharks and manta rays.",
      "I import almost all my food because you can't grow much on coral islands.",
      "I'm so small you could walk across my biggest island in 30 minutes!"
    ],
    answer: "Maldives",
    funFact: {
      language: "Dhivehi",
      currency: "Maldivian Rufiyaa",
      capital: "Malé",
      uniqueFact: "I'm the lowest country on Earth with an average height of just 5 feet!",
      cultural: "Paradise islands known for luxury resorts and crystal clear water",
      food: "Famous for fresh fish curry, coconut rice, and tropical fruits"
    }
  },
  {
    id: 36,
    flag: "🇲🇳",
    difficulty: "hard",
    cluePool: [
      "I'm a big country between Russia and China with lots of horses.",
      "I'm home to the Gobi Desert and nomadic people who live in round tents.",
      "My most famous leader was Genghis Khan, a powerful warrior.",
      "I have more horses than people and kids learn to ride very young.",
      "I live in gers (yurts) - round white tents that can move with my animals.",
      "I'm famous for wrestling, archery, and horse racing competitions.",
      "I have the least crowded country in the world - lots of empty space!",
      "I practice throat singing that sounds like multiple voices at once.",
      "I have snow leopards, wild horses, and two-humped camels.",
      "I drink fermented mare's milk called airag and eat lots of mutton.",
      "I have dinosaur fossils in the Gobi Desert including giant eggs.",
      "I follow Buddhism and have colorful temples with prayer wheels."
    ],
    answer: "Mongolia",
    funFact: {
      language: "Mongolian",
      currency: "Mongolian Tugrik",
      capital: "Ulaanbaatar",
      uniqueFact: "I'm the least densely populated country - lots of space for everyone!",
      cultural: "Home to nomadic herders, horseback culture, and throat singing",
      food: "Famous for mutton, dairy products, and fermented mare's milk"
    }
  },
  {
    id: 37,
    flag: "🇫🇯",
    difficulty: "hard",
    cluePool: [
      "I'm made up of over 300 tropical islands in the Pacific Ocean.",
      "I'm famous for crystal-clear water, coral reefs, and friendly 'Bula!' greetings.",
      "Many people come to my islands for vacation and to swim with sharks.",
      "I say 'Bula!' which means hello and my people are incredibly friendly.",
      "I have some of the softest coral reefs in the world for snorkeling.",
      "I drink kava, a traditional drink made from roots that makes you relaxed.",
      "I have fire walking ceremonies where people walk on hot stones.",
      "I speak Fijian and English and have many different island cultures.",
      "I'm famous for rugby and my players are some of the best in the world.",
      "I have tropical cyclones during my summer season from November to April.",
      "I grow lots of sugar cane, coconuts, and tropical fruits like papaya.",
      "I have both modern cities and traditional villages with thatched roof houses."
    ],
    answer: "Fiji",
    funFact: {
      language: "Fijian and English",
      currency: "Fijian Dollar",
      capital: "Suva",
      uniqueFact: "I'm home to the world's softest coral and friendliest people!",
      cultural: "Known for traditional kava ceremonies and warm hospitality",
      food: "Famous for fresh seafood, coconut dishes, and tropical fruits"
    }
  },
  {
    id: 38,
    flag: "🇺🇾",
    difficulty: "hard",
    cluePool: [
      "I'm a small country in South America wedged between Brazil and Argentina.",
      "I'm famous for soccer, beautiful beaches, and being very peaceful.",
      "My flag has blue and white stripes with a golden sun in the corner.",
      "I speak Spanish and am one of the most progressive countries in the world.",
      "I won the first ever FIFA World Cup in 1930 in my capital city.",
      "I drink mate tea from a special gourd with a metal straw called bombilla.",
      "I have beautiful beaches along the Atlantic Ocean and Rio de la Plata.",
      "I'm famous for my delicious beef asado barbecues and empanadas.",
      "I have a very high literacy rate and provide free education for everyone.",
      "I have gauchos (cowboys) who herd cattle on my green grasslands.",
      "I'm known for being very stable and peaceful with low crime rates.",
      "I have charming colonial architecture in my historic city of Montevideo."
    ],
    answer: "Uruguay",
    funFact: {
      language: "Spanish",
      currency: "Uruguayan Peso",
      capital: "Montevideo",
      uniqueFact: "I was the first country to legalize many progressive policies!",
      cultural: "Known for relaxed lifestyle, soccer passion, and tango music",
      food: "Famous for asado barbecue, mate tea, and delicious pastries"
    }
  },
  {
    id: 39,
    flag: "🇱🇻",
    difficulty: "hard",
    cluePool: [
      "I'm one of three Baltic countries in Northern Europe near the sea.",
      "I have beautiful forests, medieval castles, and love singing festivals.",
      "My flag has dark red and white horizontal stripes.",
      "I speak Latvian which is one of the oldest languages in Europe.",
      "I have the widest waterfall in Europe called Ventas Rumba.",
      "I'm famous for my amber jewelry found on my beautiful beaches.",
      "I celebrate midsummer with flower crowns and jumping over bonfires.",
      "I have super fast internet and most people can use computers very well.",
      "I love basketball and have produced many tall, talented players.",
      "I have beautiful Art Nouveau buildings in my capital city Riga.",
      "I have thousands of folk songs and huge singing festivals with choirs.",
      "I grow lots of potatoes, rye, and have forests covering half my land."
    ],
    answer: "Latvia",
    funFact: {
      language: "Latvian",
      currency: "Euro",
      capital: "Riga",
      uniqueFact: "I have one of the fastest internet speeds in the world!",
      cultural: "Famous for song festivals, amber jewelry, and medieval architecture",
      food: "Famous for rye bread, smoked fish, and hearty potato dishes"
    }
  },
  {
    id: 40,
    flag: "🇪🇪",
    difficulty: "hard",
    cluePool: [
      "I'm a small digital country where people vote online and love technology.",
      "I'm in Northern Europe next to the Baltic Sea with lots of islands.",
      "I created Skype and have more unicorn companies per person than anywhere else.",
      "I speak Estonian and my capital Tallinn has a beautiful medieval old town.",
      "I give every citizen a digital ID card so they can do everything online.",
      "I have over 2,000 islands but only the biggest ones have people living on them.",
      "I have free WiFi everywhere, even in forests and on buses!",
      "I love technology so much that kids learn coding in elementary school.",
      "I have beautiful pine forests and collect lots of mushrooms and berries.",
      "I celebrate a White Nights festival when the sun barely sets in summer.",
      "I make delicious black bread and love eating herring with potatoes.",
      "I gained independence by having everyone hold hands in a human chain!"
    ],
    answer: "Estonia",
    funFact: {
      language: "Estonian",
      currency: "Euro",
      capital: "Tallinn",
      uniqueFact: "I'm the most digitally advanced country - even babies get digital IDs!",
      cultural: "Known for medieval towns, digital innovation, and startup culture",
      food: "Famous for black bread, herring, and warm honey cake"
    }
  },
  {
    id: 41,
    flag: "🇲🇹",
    difficulty: "hard",
    cluePool: [
      "I'm a tiny island country in the Mediterranean Sea south of Italy.",
      "I have ancient temples older than the pyramids and beautiful blue waters.",
      "Knights used to live on my island and protect it from pirates.",
      "I speak both Maltese and English because I used to belong to Britain.",
      "I have amazing diving spots with crystal clear blue water and underwater caves.",
      "I'm so small you could drive across my whole country in less than an hour!",
      "I have beautiful limestone buildings that glow golden in the sunshine.",
      "I was used as a filming location for movies like Gladiator and Game of Thrones.",
      "I have colorful traditional boats called luzzus with painted eyes.",
      "I celebrate many religious festivals with fireworks and parades.",
      "I'm famous for my honey rings, rabbit stew, and pastizzi pastries.",
      "I was awarded the George Cross medal for bravery during World War II."
    ],
    answer: "Malta",
    funFact: {
      language: "Maltese and English",
      currency: "Euro",
      capital: "Valletta",
      uniqueFact: "I have the oldest free-standing stone buildings in the world!",
      cultural: "Home to Knights of Malta, ancient temples, and Game of Thrones filming",
      food: "Famous for rabbit stew, pastizzi pastries, and honey rings"
    }
  },
  {
    id: 42,
    flag: "🇮🇸",
    difficulty: "hard",
    cluePool: [
      "I'm an island country with volcanoes, geysers, and the Northern Lights.",
      "I have more hot springs than anywhere else and almost no trees.",
      "I'm known for being very safe, with elves in folklore, and strong people.",
      "I speak Icelandic which sounds very similar to Old Norse from 1,000 years ago.",
      "I have no mosquitoes, no snakes, and almost no crime at all!",
      "I heat my houses with geothermal energy from underground hot water.",
      "I have more waterfalls per square mile than almost anywhere on Earth.",
      "I produce some of the world's strongest people in strongman competitions.",
      "I have glaciers, black sand beaches, and active volcanoes all together.",
      "I eat fermented shark, dried fish, and lots of fresh lamb and seafood.",
      "I believe in elves and many people think they live in our lava rocks.",
      "I have midnight sun in summer and can see the Northern Lights in winter."
    ],
    answer: "Iceland",
    funFact: {
      language: "Icelandic",
      currency: "Icelandic Krona",
      capital: "Reykjavik",
      uniqueFact: "I have no mosquitoes and my language hasn't changed in 1,000 years!",
      cultural: "Home to Vikings, elf folklore, and the world's strongest people",
      food: "Famous for fresh fish, lamb, and unique fermented shark"
    }
  },
  {
    id: 54,
    flag: "🇱🇺",
    difficulty: "hard",
    cluePool: [
      "I'm one of the smallest countries in Europe, smaller than most cities.",
      "I'm very rich and speak three languages: French, German, and my own.",
      "I'm surrounded by bigger countries and known for banking.",
      "I speak Luxembourgish, French, and German - most people know all three!",
      "I'm the richest country per person in the world thanks to banking.",
      "I have free public transport for everyone - buses, trains, and trams!",
      "I'm surrounded by France, Germany, and Belgium but stay independent.",
      "I have beautiful medieval castles and forests despite being tiny.",
      "I'm home to many European Union institutions and international banks.",
      "I have the highest minimum wage in Europe and very low unemployment.",
      "I grow grapes for wine and have lovely countryside with rolling hills.",
      "I'm so small you could walk across my entire country in just one day!"
    ],
    answer: "Luxembourg",
    funFact: {
      language: "Luxembourgish, French, and German",
      currency: "Euro",
      capital: "Luxembourg City",
      uniqueFact: "I'm the richest country per person and have free public transport!",
      cultural: "Known for multiculturalism, banking, and beautiful castles",
      food: "Famous for Judd mat Gaardebounen and multicultural cuisine"
    }
  },
  {
    id: 55,
    flag: "🇨🇾",
    difficulty: "hard",
    cluePool: [
      "I'm a Mediterranean island country south of Turkey with beautiful beaches.",
      "I'm split into two parts and have ancient Greek and Turkish cultures.",
      "I'm known for producing halloumi cheese and having warm weather.",
      "I speak both Greek and Turkish because I have both cultures living here.",
      "I'm the third largest island in the Mediterranean Sea after Sicily and Sardinia.",
      "I have beautiful ancient mosaics and ruins from Greek and Roman times.",
      "I invented halloumi cheese which squeaks when you bite it!",
      "I have lovely beaches with crystal clear blue water perfect for swimming.",
      "I grow delicious oranges, lemons, and olives in my warm climate.",
      "I have a divided capital city with both Greek and Turkish sides.",
      "I'm famous for traditional folk dancing and playing bouzouki music.",
      "I have mountain villages with stone houses and friendly local festivals."
    ],
    answer: "Cyprus",
    funFact: {
      language: "Greek and Turkish",
      currency: "Euro",
      capital: "Nicosia",
      uniqueFact: "I'm the third largest island in the Mediterranean!",
      cultural: "Home to ancient civilizations, beautiful mosaics, and divided heritage",
      food: "Famous for halloumi cheese, souvlaki, and Mediterranean cuisine"
    }
  },
  {
    id: 56,
    flag: "🇶🇦",
    difficulty: "hard",
    cluePool: [
      "I'm a small, very rich country in the Middle East shaped like a thumb.",
      "I host the World Cup and have the world's richest people per capita.",
      "I'm known for modern skyscrapers built in the desert next to the sea.",
      "I speak Arabic and have beautiful mosques with traditional Islamic art.",
      "I'm the richest country per person thanks to oil and natural gas.",
      "I built amazing air-conditioned stadiums for the FIFA World Cup.",
      "I have a modern subway system and the world's best airline, Qatar Airways.",
      "I'm mostly desert but I import everything to make life comfortable.",
      "I have traditional markets called souks where you can buy spices and gold.",
      "I eat delicious Middle Eastern food like hummus, kebabs, and dates.",
      "I have beautiful pearl diving history and the Persian Gulf coastline.",
      "I'm building a whole new city from scratch with amazing architecture!"
    ],
    answer: "Qatar",
    funFact: {
      language: "Arabic",
      currency: "Qatari Riyal",
      capital: "Doha",
      uniqueFact: "I have the highest GDP per capita in the world thanks to oil and gas!",
      cultural: "Known for modern architecture, traditional pearling, and Bedouin heritage",
      food: "Famous for machboos rice, hummus, and Arabic coffee"
    }
  },
  {
    id: 57,
    flag: "🇰🇬",
    difficulty: "hard",
    cluePool: [
      "I'm a mountainous country in Central Asia with beautiful lakes.",
      "I'm known for nomadic horsemen and felt yurts in the mountains.",
      "My flag has a red background with a yellow sun and eagle wings.",
      "I speak Kyrgyz and Russian and have incredibly tall snowy mountains.",
      "I'm famous for having some of the most beautiful horses in the world.",
      "I live in yurts (felt tents) and move with my animals across the mountains.",
      "I have Issyk-Kul, one of the largest and deepest mountain lakes on Earth.",
      "I practice traditional eagle hunting and tell epic stories called Manas.",
      "I make beautiful felt carpets and handicrafts from sheep and yak wool.",
      "I eat horse meat, drink fermented mare's milk, and love dairy products.",
      "I have glaciers, alpine meadows, and some of the clearest mountain air.",
      "I'm one of the few countries where nomadic traditions are still very strong!"
    ],
    answer: "Kyrgyzstan",
    funFact: {
      language: "Kyrgyz and Russian",
      currency: "Kyrgyzstani Som",
      capital: "Bishkek",
      uniqueFact: "I'm one of only two countries with a flag that moves - it shows eagle wings!",
      cultural: "Home to nomadic traditions, epic storytelling, and horseback culture",
      food: "Famous for beshbarmak (horse meat), kumys (fermented mare's milk), and plov"
    }
  },
  {
    id: 58,
    flag: "🇧🇭",
    difficulty: "hard",
    cluePool: [
      "I'm a small island kingdom in the Persian Gulf connected by bridges.",
      "I found oil before my neighbors and became rich first.",
      "I'm known for pearl diving, Formula 1 racing, and ancient burial mounds.",
      "I speak Arabic and am connected to Saudi Arabia by a long causeway bridge.",
      "I was the first Gulf country to discover oil way back in 1932.",
      "I have an exciting Formula 1 race track in the middle of the desert.",
      "I'm famous for diving for beautiful pearls in the Persian Gulf waters.",
      "I have thousands of ancient burial mounds from 4,000 years ago.",
      "I'm a small island kingdom but very tolerant and modern for the region.",
      "I have traditional markets, modern malls, and delicious Middle Eastern food.",
      "I'm known for banking, finance, and being a business hub in the Gulf.",
      "I eat fish curry, rice with saffron, and love dates and Arabic coffee."
    ],
    answer: "Bahrain",
    funFact: {
      language: "Arabic",
      currency: "Bahraini Dinar",
      capital: "Manama",
      uniqueFact: "I was the first Gulf country to discover oil in 1932!",
      cultural: "Known for pearl diving heritage, tolerance, and modern banking",
      food: "Famous for fish curry, rice dishes, and traditional Arabic sweets"
    }
  },
  {
    id: 59,
    flag: "🇲🇰",
    difficulty: "hard",
    cluePool: [
      "I'm a small landlocked country in the Balkans with ancient history.",
      "I used to be part of Yugoslavia and am famous for Alexander the Great.",
      "My capital has many statues and my flag has a bright yellow sun.",
      "I speak Macedonian and am the birthplace of Alexander the Great.",
      "I'm also the birthplace of Mother Teresa, the famous Catholic saint.",
      "I have beautiful mountains, lakes, and the ancient city of Ohrid.",
      "I have a bright yellow sun with rays on my flag representing freedom.",
      "I make delicious shopska salad, beans, and strong rakija brandy.",
      "I have Ohrid Lake, one of the oldest and deepest lakes in Europe.",
      "I used to be part of Yugoslavia but became independent peacefully.",
      "I have beautiful Byzantine churches with ancient colorful frescoes.",
      "I'm surrounded by mountains and have no access to the sea."
    ],
    answer: "North Macedonia",
    funFact: {
      language: "Macedonian",
      currency: "Macedonian Denar",
      capital: "Skopje",
      uniqueFact: "I'm the birthplace of Alexander the Great and Mother Teresa!",
      cultural: "Home to ancient history, Byzantine art, and diverse traditions",
      food: "Famous for tavče gravče beans, shopska salad, and rakija brandy"
    }
  },
  {
    id: 60,
    flag: "🇸🇬",
    difficulty: "hard",
    cluePool: [
      "I'm a tiny island city-state in Southeast Asia known for being very clean.",
      "I have strict laws but am very safe and have amazing food courts.",
      "I'm at the tip of Malaysia and famous for the Merlion statue.",
      "I speak English, Mandarin, Malay, and Tamil all as official languages.",
      "I ban chewing gum to keep my streets super clean and tidy.",
      "I have the world's tallest indoor waterfall in my amazing airport.",
      "I'm famous for hawker centers with delicious cheap food from many cultures.",
      "I have Gardens by the Bay with giant artificial trees and flowers.",
      "I built my country from nothing and became very rich in just 50 years.",
      "I have very strict laws but also very low crime and great safety.",
      "I eat Singapore noodles, chili crab, and food from all over Asia.",
      "I have a famous Merlion statue that's half lion, half fish!"
    ],
    answer: "Singapore",
    funFact: {
      language: "English, Mandarin, Malay, and Tamil",
      currency: "Singapore Dollar",
      capital: "Singapore",
      uniqueFact: "I'm the only island city-state in the world and ban chewing gum!",
      cultural: "Known for multiculturalism, efficiency, and hawker food culture",
      food: "Famous for Singapore noodles, chili crab, and diverse street food"
    }
  },

  // ADDITIONAL EASY COUNTRIES
  {
    id: 61,
    flag: "🇵🇹",
    difficulty: "easy",
    cluePool: [
      "I'm next to Spain and gave the world explorers like Vasco da Gama.",
      "My flag has green and red with my coat of arms in the middle.",
      "I'm famous for port wine, beautiful tiles, and Cristiano Ronaldo.",
      "I speak Portuguese and am the birthplace of soccer star Cristiano Ronaldo.",
      "I'm the oldest country in Europe with the same borders since 1139.",
      "I have beautiful azulejo tiles decorating buildings all over my cities.",
      "I invented the famous custard tarts called pastéis de nata.",
      "I gave the world explorers who sailed to Brazil, India, and around Africa.",
      "I have beautiful coastlines, fishing villages, and the Atlantic Ocean.",
      "I make delicious port wine and have cork forests for wine bottle stoppers.",
      "I have charming trams in Lisbon and beautiful medieval castles.",
      "I love fado music which sounds sad but beautiful, and I play guitar."
    ],
    answer: "Portugal",
    funFact: {
      language: "Portuguese",
      currency: "Euro",
      capital: "Lisbon",
      uniqueFact: "I'm the oldest country in Europe with the same borders since 1139!",
      cultural: "Home to fado music, beautiful azulejo tiles, and maritime exploration",
      food: "Famous for pastéis de nata, port wine, and fresh seafood"
    }
  },
  {
    id: 62,
    flag: "🇳🇴",
    difficulty: "easy",
    cluePool: [
      "I'm a long, skinny country in Northern Europe famous for fjords and Vikings.",
      "I have lots of oil, the Northern Lights, and midnight sun in summer.",
      "My flag has red, white, and blue with a cross design.",
      "I speak Norwegian and am famous for skiing and winter sports.",
      "I have the world's largest sovereign wealth fund from oil money.",
      "I have beautiful fjords - deep valleys filled with ocean water.",
      "I can see the Northern Lights dancing in green colors in winter.",
      "I have midnight sun in summer when it never gets dark!",
      "I'm the homeland of the Vikings who sailed and explored the world.",
      "I eat lots of salmon, cod, and other fresh fish from cold waters.",
      "I have trolls in my folklore and love cross-country skiing.",
      "I give out the Nobel Peace Prize every year in my capital Oslo."
    ],
    answer: "Norway",
    funFact: {
      language: "Norwegian",
      currency: "Norwegian Krone",
      capital: "Oslo",
      uniqueFact: "I have the world's largest sovereign wealth fund from oil money!",
      cultural: "Home to Vikings, trolls in folklore, and winter sports champions",
      food: "Famous for salmon, lutefisk, and Scandinavian pastries"
    }
  },
  {
    id: 63,
    flag: "🇨🇭",
    difficulty: "easy",
    cluePool: [
      "I'm famous for chocolate, watches, and snowy mountain skiing.",
      "My flag is red with a white cross and I'm always neutral in wars.",
      "I have four official languages and banks that keep secrets.",
      "I speak German, French, Italian, and Romansh in different regions.",
      "I invented milk chocolate and make the world's finest timepieces.",
      "I have the Alps mountains perfect for skiing, hiking, and mountain climbing.",
      "I haven't been in a war for over 200 years - I stay neutral always!",
      "I have Swiss Army knives with many tools and very precise engineering.",
      "I make delicious cheese fondue where you dip bread in melted cheese.",
      "I have banks that are famous for keeping people's money very safe.",
      "I have beautiful lakes, mountain villages, and cows with big bells.",
      "I invented the Red Cross organization to help people during emergencies."
    ],
    answer: "Switzerland",
    funFact: {
      language: "German, French, Italian, and Romansh",
      currency: "Swiss Franc",
      capital: "Bern",
      uniqueFact: "I invented milk chocolate and haven't been in a war for 200 years!",
      cultural: "Known for precision, neutrality, and alpine traditions",
      food: "Famous for chocolate, cheese fondue, and Swiss army knives (not food!)"
    }
  },
  {
    id: 65,
    flag: "🇳🇱",
    difficulty: "easy",
    cluePool: [
      "I'm famous for tulips, windmills, and people riding bicycles everywhere.",
      "I'm very flat and much of my land is below sea level.",
      "My flag has red, white, and blue horizontal stripes.",
      "I speak Dutch and have more bicycles than people in my country!",
      "I'm famous for beautiful tulip fields that bloom in spring colors.",
      "I have windmills that pump water because much of my land is below sea level.",
      "I gave the world orange carrots and love eating cheese and stroopwafels.",
      "I have beautiful canals with houseboats and bridges in Amsterdam.",
      "I'm very tolerant and known for accepting different kinds of people.",
      "I love ice skating on frozen canals when winter gets cold enough.",
      "I make delicious Dutch chocolate, pancakes, and eat raw herring fish.",
      "I have beautiful flower markets and the world's tallest people on average!"
    ],
    answer: "Netherlands",
    funFact: {
      language: "Dutch",
      currency: "Euro",
      capital: "Amsterdam",
      uniqueFact: "I have more bikes than people and gave the world carrots (orange ones)!",
      cultural: "Known for tolerance, cycling culture, and beautiful canals",
      food: "Famous for cheese, stroopwafels, and herring"
    }
  },
  {
    id: 66,
    flag: "🇬🇷",
    difficulty: "easy",
    cluePool: [
      "I'm the birthplace of democracy, the Olympics, and ancient philosophers.",
      "I have thousands of islands and my flag has blue and white stripes.",
      "I'm famous for the Parthenon, mythology, and delicious yogurt.",
      "I speak Greek and invented democracy, philosophy, and the Olympic Games.",
      "I have over 6,000 islands with beautiful white and blue buildings.",
      "I have the Parthenon temple in Athens dedicated to the goddess Athena.",
      "I created myths about gods like Zeus, Poseidon, and Aphrodite.",
      "I invented the marathon race and have the longest coastline in Europe.",
      "I love eating olives, feta cheese, and fresh fish by the sea.",
      "I have beautiful beaches with crystal clear blue water and sunshine.",
      "I invented theater, history writing, and geometry mathematics.",
      "I make delicious Greek yogurt, baklava pastry, and olive oil."
    ],
    answer: "Greece",
    funFact: {
      language: "Greek",
      currency: "Euro",
      capital: "Athens",
      uniqueFact: "I invented democracy, the Olympics, and have the longest coastline in Europe!",
      cultural: "Home to ancient philosophy, gods and goddesses, and island life",
      food: "Famous for olive oil, feta cheese, and Greek yogurt"
    }
  },
  {
    id: 68,
    flag: "🇦🇷",
    difficulty: "easy",
    cluePool: [
      "I'm famous for tango dancing, beef, and soccer player Lionel Messi.",
      "I'm the second-largest country in South America with beautiful waterfalls.",
      "My flag has light blue and white stripes with a sun in the middle.",
      "I speak Spanish and my capital Buenos Aires means 'good airs'.",
      "I have the widest street in the world and invented the ballpoint pen.",
      "I'm famous for passionate tango dancing and amazing soccer players.",
      "I love delicious asado barbecue beef and sweet dulce de leche.",
      "I have gaucho cowboys riding on the vast grasslands called pampas.",
      "I have Iguazu Falls, one of the most spectacular waterfalls in the world.",
      "I'm home to penguins in Patagonia and glaciers in the south.",
      "I grow excellent beef cattle and produce world-famous wine.",
      "I have beautiful European-style architecture and vibrant neighborhoods."
    ],
    answer: "Argentina",
    funFact: {
      language: "Spanish",
      currency: "Argentine Peso",
      capital: "Buenos Aires",
      uniqueFact: "I have the widest street in the world and invented the ballpoint pen!",
      cultural: "Home to tango, gaucho cowboys, and passionate soccer culture",
      food: "Famous for asado beef, empanadas, and dulce de leche"
    }
  },

  // ADDITIONAL MEDIUM COUNTRIES
  {
    id: 69,
    flag: "🇹🇷",
    difficulty: "medium",
    cluePool: [
      "I'm the only country that's in both Europe and Asia with beautiful mosques.",
      "I'm famous for Turkish baths, carpets, and the city of Istanbul.",
      "My flag has a red background with a white crescent moon and star.",
      "I speak Turkish and my capital is Ankara.",
      "I connect Europe and Asia with the beautiful Bosphorus strait.",
      "I have ancient Troy, underground cities, and fairy chimneys.",
      "I invented Turkish coffee and serve it in tiny cups.",
      "I'm famous for whirling dervishes who spin in circles.",
      "I have colorful hot air balloons floating over Cappadocia.",
      "I make beautiful hand-woven rugs and delicious Turkish delight.",
      "I have both snowy mountains and sunny Mediterranean beaches.",
      "I celebrate with folk dances and play traditional saz instruments."
    ],
    answer: "Turkey",
    funFact: {
      language: "Turkish",
      currency: "Turkish Lira",
      capital: "Ankara",
      uniqueFact: "I'm the only country on two continents and gave the world tulips and coffee!",
      cultural: "Bridge between East and West, home to Ottoman heritage and bazaars",
      food: "Famous for kebabs, Turkish delight, baklava, and Turkish coffee"
    }
  },
  {
    id: 70,
    flag: "🇪🇬",
    difficulty: "medium",
    cluePool: [
      "I'm home to the pyramids, the Sphinx, and the longest river in the world.",
      "I have ancient pharaohs, mummies, and hieroglyphics writing.",
      "My flag has red, white, and black stripes with an eagle in the middle.",
      "I speak Arabic and my capital is Cairo.",
      "I built the Great Pyramid, the only surviving Wonder of the Ancient World.",
      "I have the Nile River that floods every year and makes my soil fertile.",
      "I'm famous for King Tutankhamun, Queen Cleopatra, and ancient treasures.",
      "I love ful medames beans, koshari rice, and sweet baklava pastries.",
      "I have the Suez Canal that connects the Mediterranean and Red Seas.",
      "I invented paper, makeup, toothpaste, and the 365-day calendar.",
      "I have beautiful coral reefs in the Red Sea and ancient temples.",
      "I'm known for friendly people, camel rides, and amazing ancient history."
    ],
    answer: "Egypt",
    funFact: {
      language: "Arabic",
      currency: "Egyptian Pound",
      capital: "Cairo",
      uniqueFact: "I built the Great Pyramid, the only surviving Wonder of the Ancient World!",
      cultural: "Home to pharaohs, ancient mysteries, and the Nile River civilization",
      food: "Famous for falafel, koshari, pita bread, and sweet baklava"
    }
  },
  {
    id: 71,
    flag: "🇵🇰",
    difficulty: "medium",
    cluePool: [
      "I was created in 1947 when I separated from India.",
      "I have K2, the second-highest mountain in the world.",
      "My flag has green and white with a crescent moon and star.",
      "I speak Urdu and English and my capital is Islamabad.",
      "I'm the first Islamic nuclear power in the world.",
      "I have five of the world's highest mountain peaks including K2.",
      "I'm famous for cricket, delicious biryani rice, and chai tea.",
      "I have the Khyber Pass connecting to Afghanistan.",
      "I make beautiful carpets, textiles, and traditional crafts.",
      "I love spicy curry food and sweet lassi yogurt drinks.",
      "I have ancient ruins and the beautiful Shalimar Gardens.",
      "I celebrate Eid festivals with family gatherings and sweets."
    ],
    answer: "Pakistan",
    funFact: {
      language: "Urdu and English",
      currency: "Pakistani Rupee",
      capital: "Islamabad",
      uniqueFact: "I'm the first Islamic nuclear power and have five of the world's highest peaks!",
      cultural: "Rich Mughal heritage, cricket passion, and diverse landscapes",
      food: "Famous for biryani rice, curry, naan bread, and chai tea"
    }
  },
  {
    id: 72,
    flag: "🇧🇩",
    difficulty: "medium",
    cluePool: [
      "I'm mostly surrounded by India and have lots of rivers and rice fields.",
      "I'm famous for making clothes for the world and having friendly people.",
      "My flag has a green background with a red circle like the sun.",
      "I speak Bengali and my capital is Dhaka.",
      "I have the world's longest natural beach at Cox's Bazar.",
      "I have more rivers than any other country - over 700!",
      "I make clothes and textiles for people all around the world.",
      "I love eating rice, fish curry, and sweet roshogolla desserts.",
      "I have beautiful Royal Bengal tigers in the Sundarbans forest.",
      "I'm famous for rickshaws, colorful boats, and friendly smiles.",
      "I celebrate Pohela Boishakh New Year with colorful processions.",
      "I have monsoon rains and grow lots of rice in my green fields."
    ],
    answer: "Bangladesh",
    funFact: {
      language: "Bengali",
      currency: "Bangladeshi Taka",
      capital: "Dhaka",
      uniqueFact: "I have the world's longest natural beach and more rivers than any country!",
      cultural: "Known for rich literature, colorful festivals, and textile industry",
      food: "Famous for rice dishes, fish curry, and sweet desserts"
    }
  },
  {
    id: 75,
    flag: "🇲🇾",
    difficulty: "medium",
    cluePool: [
      "I'm made up of two parts separated by the South China Sea.",
      "I have the world's tallest twin towers and mix of many cultures.",
      "I'm famous for street food, orangutans, and being very multicultural.",
      "I speak Malay and my capital is Kuala Lumpur.",
      "I have the world's oldest rainforest that's 130 million years old.",
      "I'm home to orangutans, proboscis monkeys, and clouded leopards.",
      "I have the famous Petronas Twin Towers that light up at night.",
      "I love nasi lemak coconut rice, satay skewers, and tropical fruits.",
      "I'm a mix of Malay, Chinese, and Indian cultures all living together.",
      "I have beautiful beaches in Langkawi and amazing diving in Sipadan.",
      "I grow palm oil, rubber trees, and have dense tropical jungles.",
      "I celebrate many festivals like Chinese New Year, Hari Raya, and Deepavali."
    ],
    answer: "Malaysia",
    funFact: {
      language: "Malay",
      currency: "Malaysian Ringgit",
      capital: "Kuala Lumpur",
      uniqueFact: "I have the world's oldest rainforest and tallest tropical trees!",
      cultural: "Harmony of Malay, Chinese, and Indian cultures",
      food: "Famous for nasi lemak, satay, and amazing street food"
    }
  },
  {
    id: 76,
    flag: "🇻🇪",
    difficulty: "medium",
    cluePool: [
      "I have the world's highest waterfall and lots of oil underground.",
      "I'm in South America and my flag has yellow, blue, and red stripes with stars.",
      "I'm famous for beauty pageants, baseball, and the Angel Falls.",
      "I speak Spanish and my capital is Caracas.",
      "I have Angel Falls, the world's highest uninterrupted waterfall at 979 meters.",
      "I have huge oil reserves that make me very rich in natural resources.",
      "I'm famous for winning many Miss World and Miss Universe beauty contests.",
      "I love arepas corn cakes, pabellón criollo, and tropical fruits.",
      "I have amazing biodiversity with jaguars, toucans, and colorful parrots.",
      "I have beautiful Caribbean beaches and the Orinoco River.",
      "I'm known for passionate music, dancing, and warm friendly people.",
      "I have both snow-capped mountains and tropical rainforests in one country."
    ],
    answer: "Venezuela",
    funFact: {
      language: "Spanish",
      currency: "Venezuelan Bolívar",
      capital: "Caracas",
      uniqueFact: "I have the world's highest uninterrupted waterfall - Angel Falls!",
      cultural: "Known for music, dance, and winning many beauty contests",
      food: "Famous for arepas, pabellon criollo, and tropical fruits"
    }
  },
  {
    id: 77,
    flag: "🇦🇪",
    difficulty: "medium",
    cluePool: [
      "I'm made up of seven emirates with the tallest building in the world.",
      "I was desert but now have amazing cities, shopping malls, and indoor skiing.",
      "I'm famous for Dubai, oil money, and being very modern and rich.",
      "I speak Arabic and my capital is Abu Dhabi.",
      "I have the Burj Khalifa, the tallest building in the world in Dubai.",
      "I built an indoor ski slope in the middle of the hot desert.",
      "I have artificial islands shaped like palm trees and a world map.",
      "I love hummus, shawarma, dates, and Arabic coffee with cardamom.",
      "I have gold vending machines and the world's largest shopping mall.",
      "I'm a mix of seven different emirates all working together.",
      "I have traditional Bedouin culture mixed with ultra-modern technology.",
      "I'm famous for luxury hotels, Formula 1 racing, and amazing architecture."
    ],
    answer: "United Arab Emirates",
    funFact: {
      language: "Arabic",
      currency: "UAE Dirham",
      capital: "Abu Dhabi",
      uniqueFact: "I built the world's tallest building and have gold vending machines!",
      cultural: "Blend of traditional Bedouin and ultra-modern lifestyles",
      food: "Famous for hummus, shawarma, dates, and international cuisine"
    }
  },

  // ADDITIONAL HARD COUNTRIES
  {
    id: 78,
    flag: "🇰🇭",
    difficulty: "hard",
    cluePool: [
      "I'm in Southeast Asia and famous for the ancient temple of Angkor Wat.",
      "I have a sad history but amazing temples built by the Khmer empire.",
      "My flag has blue and red stripes with a temple building in the middle.",
      "I speak Khmer and my capital is Phnom Penh.",
      "I have Angkor Wat, the largest religious monument in the world.",
      "I was ruled by the ancient Khmer empire that built incredible temples.",
      "I have beautiful traditional dance called Apsara with graceful movements.",
      "I love amok fish curry, pho soup, and tropical fruits like mangoes.",
      "I have floating villages on the Tonle Sap lake.",
      "I'm known for my resilient and friendly people despite difficult history.",
      "I have the Mekong River and beautiful countryside with rice fields.",
      "I'm famous for silk weaving, traditional crafts, and ancient history."
    ],
    answer: "Cambodia",
    funFact: {
      language: "Khmer",
      currency: "Cambodian Riel",
      capital: "Phnom Penh",
      uniqueFact: "I have the largest religious monument in the world - Angkor Wat!",
      cultural: "Home to ancient Khmer empire, classical dance, and resilient people",
      food: "Famous for amok fish curry, pho soup, and tropical fruits"
    }
  },
  {
    id: 79,
    flag: "🇱🇦",
    difficulty: "hard",
    cluePool: [
      "I'm the only landlocked country in Southeast Asia with lots of mountains.",
      "I'm known for Buddhist temples, the Mekong River, and being very peaceful.",
      "My flag has red, blue, and red stripes with a white circle like the moon.",
      "I speak Lao and my capital city is Vientiane on the Mekong River.",
      "I'm famous for sticky rice, which I eat with almost every meal.",
      "I have beautiful waterfalls like Kuang Si and Kong Falls.",
      "I'm home to Asian elephants and many Buddhist monasteries.",
      "I celebrate the Water Festival called Pi Mai with lots of splashing.",
      "I have ancient Plain of Jars with mysterious stone containers.",
      "I'm known for traditional textiles and beautiful silk weaving.",
      "I have the golden Buddhist temple called Pha That Luang.",
      "I love eating larb salad, tam mak hoong, and drinking Beerlao."
    ],
    answer: "Laos",
    funFact: {
      language: "Lao",
      currency: "Lao Kip",
      capital: "Vientiane",
      uniqueFact: "I'm the most bombed country in history but am now very peaceful!",
      cultural: "Known for Buddhist temples, traditional textiles, and slow lifestyle",
      food: "Famous for sticky rice, larb salad, and Beerlao"
    }
  },
  {
    id: 80,
    flag: "🇱🇰",
    difficulty: "hard",
    cluePool: [
      "I'm a teardrop-shaped island south of India famous for tea and spices.",
      "I'm known as the 'Pearl of the Indian Ocean' with beautiful beaches.",
      "I have ancient Buddhist temples and my flag has a lion holding a sword.",
      "I'm the world's largest tea exporter and make the best Ceylon tea.",
      "I have beautiful elephants and the first female Prime Minister in the world.",
      "I'm famous for cinnamon, cardamom, and other delicious spices.",
      "I have ancient cities like Kandy and Anuradhapura with old temples.",
      "I speak Sinhala and Tamil and love eating rice and curry.",
      "I have amazing beaches for surfing and beautiful coral reefs.",
      "I'm home to blue whales and leopards in my national parks.",
      "I make delicious hoppers (bowl-shaped pancakes) and coconut roti.",
      "I have gem mines with sapphires, rubies, and other precious stones."
    ],
    answer: "Sri Lanka",
    funFact: {
      language: "Sinhala and Tamil",
      currency: "Sri Lankan Rupee",
      capital: "Colombo",
      uniqueFact: "I'm the world's largest tea exporter and have the first female Prime Minister!",
      cultural: "Rich Buddhist heritage, ancient kingdoms, and diverse ethnic groups",
      food: "Famous for Ceylon tea, curry, hoppers, and coconut dishes"
    }
  },
  {
    id: 81,
    flag: "🇲🇲",
    difficulty: "hard",
    cluePool: [
      "I'm in Southeast Asia between China and India with golden pagodas.",
      "I used to be called Burma and am famous for traditional face paint.",
      "I have thousands of ancient temples and my flag has yellow, green, and red.",
      "I speak Burmese and my capital is Naypyidaw.",
      "I have over 2,000 ancient temples in the city of Bagan.",
      "I'm famous for thanaka - yellow face paint made from tree bark.",
      "I have beautiful golden pagodas and Buddhist monasteries.",
      "I love mohinga fish soup, tea leaf salad, and curry dishes.",
      "I have floating gardens on Inle Lake and unique leg-rowing fishermen.",
      "I make beautiful traditional puppets and hand-woven textiles.",
      "I celebrate water festivals and have many colorful Buddhist ceremonies.",
      "I have diverse ethnic groups and over 100 different languages."
    ],
    answer: "Myanmar",
    funFact: {
      language: "Burmese",
      currency: "Myanmar Kyat",
      capital: "Naypyidaw",
      uniqueFact: "I have over 2,000 ancient temples in Bagan and unique floating gardens!",
      cultural: "Home to golden pagodas, traditional puppetry, and diverse ethnic groups",
      food: "Famous for mohinga fish soup, tea leaf salad, and coconut noodles"
    }
  },
  {
    id: 82,
    flag: "🇺🇿",
    difficulty: "hard",
    cluePool: [
      "I'm a landlocked country in Central Asia famous for the Silk Road.",
      "I have beautiful blue-tiled mosques and was once part of the Soviet Union.",
      "I'm known for cotton, gold, and the ancient cities of Samarkand and Bukhara.",
      "I speak Uzbek and my capital is Tashkent, a modern Central Asian city.",
      "I'm double-landlocked, surrounded only by other landlocked countries.",
      "I have some of the world's most beautiful Islamic architecture and mosaics.",
      "I love delicious plov rice pilaf, shashlik kebabs, and fresh bread.",
      "I was an important stop on the ancient Silk Road trading route.",
      "I have the ancient cities of Samarkand and Bukhara with stunning architecture.",
      "I'm famous for traditional crafts like carpet weaving and pottery.",
      "I grow lots of cotton in my fields and mine gold and other minerals.",
      "I have hot summers and cold winters with beautiful mountain ranges."
    ],
    answer: "Uzbekistan",
    funFact: {
      language: "Uzbek",
      currency: "Uzbek Som",
      capital: "Tashkent",
      uniqueFact: "I'm double-landlocked (surrounded by landlocked countries) and have amazing architecture!",
      cultural: "Crossroads of Silk Road, Islamic architecture, and nomadic traditions",
      food: "Famous for plov rice pilaf, shashlik kebabs, and green tea"
    }
  },
  {
    id: 83,
    flag: "🇯🇴",
    difficulty: "hard",
    cluePool: [
      "I'm in the Middle East and home to the ancient city of Petra carved in rock.",
      "I'm ruled by a king and known for being peaceful in a troubled region.",
      "My flag has black, white, green, and red with a star and triangle.",
      "I have Petra, one of the New Seven Wonders of the World carved into pink stone.",
      "I speak Arabic and my capital city is Amman with ancient Roman ruins.",
      "I float easily in the Dead Sea, the lowest point on Earth.",
      "I'm known for delicious mansaf lamb dish and sweet knafeh dessert.",
      "I have Wadi Rum desert where movies like Lawrence of Arabia were filmed.",
      "I'm famous for hospitality and welcoming visitors with tea and coffee.",
      "I have beautiful mosaics and ancient churches in Madaba.",
      "I'm home to Jerash, one of the best-preserved Roman cities in the world.",
      "I have the Jordan River where many important historical events happened."
    ],
    answer: "Jordan",
    funFact: {
      language: "Arabic",
      currency: "Jordanian Dinar",
      capital: "Amman",
      uniqueFact: "I have the ancient city of Petra, one of the New Seven Wonders!",
      cultural: "Gateway between East and West, Bedouin heritage, and hospitality",
      food: "Famous for mansaf lamb, hummus, falafel, and mint tea"
    }
  },
  {
    id: 84,
    flag: "🇱🇧",
    difficulty: "hard",
    cluePool: [
      "I'm a small country in the Middle East famous for cedar trees.",
      "I was called the 'Paris of the Middle East' and have many religions living together.",
      "My flag has red, white, and red stripes with a green cedar tree.",
      "I invented the alphabet that became the basis for many writing systems.",
      "I speak Arabic and French and my beautiful capital is Beirut.",
      "I have ancient cedar trees that are mentioned in the Bible.",
      "I'm famous for delicious hummus, tabbouleh salad, and baklava.",
      "I have amazing historical sites like Baalbek with giant Roman temples.",
      "I'm known for beautiful beaches on the Mediterranean Sea.",
      "I have 18 different religious communities living peacefully together.",
      "I'm famous for traditional dabke dancing and beautiful mountain villages.",
      "I have ancient Phoenician cities that were important for trade."
    ],
    answer: "Lebanon",
    funFact: {
      language: "Arabic and French",
      currency: "Lebanese Pound",
      capital: "Beirut",
      uniqueFact: "I invented the alphabet and my cedar trees are mentioned in the Bible!",
      cultural: "Cultural crossroads, ancient Phoenician heritage, and religious diversity",
      food: "Famous for hummus, tabbouleh, baklava, and Lebanese wine"
    }
  },
  {
    id: 85,
    flag: "🇦🇿",
    difficulty: "hard",
    cluePool: [
      "I'm on the Caspian Sea between Europe and Asia with lots of oil.",
      "I'm known as the 'Land of Fire' because of natural gas flames.",
      "My flag has blue, red, and green stripes with a crescent and star.",
      "I speak Azerbaijani and my capital is Baku, famous for oil wells.",
      "I have natural fires that burn from the ground at Yanar Dag.",
      "I'm famous for beautiful carpets and traditional music called mugham.",
      "I celebrate Novruz, the spring festival with jumping over fires.",
      "I have the Flame Towers that light up the night sky in Baku.",
      "I love eating plov rice, dolma, and drinking lots of tea.",
      "I have ancient fire temples where people worshipped flames.",
      "I'm rich in oil and natural gas from the Caspian Sea.",
      "I have beautiful mountains in the Caucasus and Caspian beaches."
    ],
    answer: "Azerbaijan",
    funFact: {
      language: "Azerbaijani",
      currency: "Azerbaijani Manat",
      capital: "Baku",
      uniqueFact: "I have natural gas that burns constantly from the ground - the Fire Temple!",
      cultural: "Crossroads of cultures, famous for carpets and fire worship history",
      food: "Famous for plov rice, kebabs, baklava, and black tea"
    }
  },

  // MORE EASY COUNTRIES
  {
    id: 86,
    flag: "🇫🇮",
    difficulty: "easy",
    cluePool: [
      "I'm in Northern Europe and famous for Nokia phones and Santa Claus.",
      "I have lots of forests, lakes, and saunas where people relax.",
      "My flag has blue and white with a cross design.",
      "I speak Finnish and Swedish and my capital is Helsinki.",
      "I have more than 180,000 lakes - that's more than any other country!",
      "I'm famous for being the happiest country in the world.",
      "I invented the Angry Birds game and love heavy metal music.",
      "I have the midnight sun in summer and northern lights in winter.",
      "I'm home to reindeer, and Lapland is where Santa Claus lives.",
      "I invented the sauna and there are over 2 million saunas here.",
      "I have beautiful forests of pine and birch trees everywhere.",
      "I'm famous for cloudberries, salmon, and delicious cinnamon buns."
    ],
    answer: "Finland",
    funFact: {
      language: "Finnish and Swedish",
      currency: "Euro",
      capital: "Helsinki",
      uniqueFact: "I have more saunas than cars and Santa Claus lives in my Lapland!",
      cultural: "Home to Nokia, heavy metal music, and the happiest people on Earth",
      food: "Famous for salmon, reindeer, cloudberries, and cinnamon buns"
    }
  },
  {
    id: 88,
    flag: "🇨🇿",
    difficulty: "easy",
    cluePool: [
      "I'm in Central Europe with beautiful castles and I make the best beer.",
      "My capital Prague has a famous astronomical clock and fairy-tale buildings.",
      "I used to be part of Czechoslovakia and my flag has red, white, and blue.",
      "I speak Czech and my currency is the Czech Koruna.",
      "I drink more beer per person than any other country in the world!",
      "I'm famous for glass making, especially beautiful crystal and beads.",
      "I have more than 2,000 castles and castle ruins throughout my land.",
      "I invented contact lenses and the word 'robot' comes from my language.",
      "I'm the birthplace of classical composers like Dvořák and Smetana.",
      "I have beautiful hot springs and spa towns for relaxation.",
      "I love dumplings, goulash, and sweet pastries called trdelník.",
      "I have puppet theater traditions and beautiful folk arts and crafts."
    ],
    answer: "Czech Republic",
    funFact: {
      language: "Czech",
      currency: "Czech Koruna",
      capital: "Prague",
      uniqueFact: "I drink more beer per person than any other country!",
      cultural: "Home to beautiful castles, classical music, and puppet theater",
      food: "Famous for goulash, dumplings, beer, and sweet pastries"
    }
  },
  {
    id: 89,
    flag: "🇭🇺",
    difficulty: "easy",
    cluePool: [
      "I'm in Central Europe famous for thermal baths and goulash soup.",
      "My language doesn't sound like any other European language.",
      "My flag has red, white, and green horizontal stripes.",
      "I speak Hungarian which is totally unique in Europe.",
      "I have over 1,000 natural hot springs and thermal baths.",
      "I invented the ballpoint pen, holography, and the Rubik's Cube.",
      "I'm famous for my beautiful capital Budapest with the Danube River.",
      "I have a tradition of horseback riding and skilled horse riders.",
      "I love paprika spice and use it in many traditional dishes.",
      "I have beautiful folk dances and traditional embroidered clothing.",
      "I'm famous for my classical music composers like Liszt and Bartók.",
      "I have delicious chimney cake pastries and sweet strudel desserts."
    ],
    answer: "Hungary",
    funFact: {
      language: "Hungarian",
      currency: "Hungarian Forint",
      capital: "Budapest",
      uniqueFact: "My language is totally unique in Europe and I invented the ballpoint pen!",
      cultural: "Famous for thermal baths, classical music, and horseback traditions",
      food: "Famous for goulash soup, paprika, strudel, and hearty meat dishes"
    }
  },
  {
    id: 90,
    flag: "🇵🇱",
    difficulty: "easy",
    cluePool: [
      "I'm a large country in Central Europe famous for pierogi dumplings.",
      "I was the birthplace of Pope John Paul II and Marie Curie.",
      "My flag has white and red horizontal stripes.",
      "I speak Polish and my capital is Warsaw.",
      "I have 17 UNESCO World Heritage Sites including beautiful old towns.",
      "I'm famous for amber - beautiful golden stones from ancient trees.",
      "I have the largest medieval castle in the world called Malbork.",
      "I love kielbasa sausages, cabbage rolls, and sweet pastries.",
      "I have beautiful salt mines with underground chapels made of salt.",
      "I'm famous for my strong Solidarity movement that helped end communism.",
      "I have the European bison in my Białowieża Forest.",
      "I celebrate with colorful folk costumes and traditional dances."
    ],
    answer: "Poland",
    funFact: {
      language: "Polish",
      currency: "Polish Zloty",
      capital: "Warsaw",
      uniqueFact: "I gave the world Marie Curie and have 17 UNESCO World Heritage Sites!",
      cultural: "Rich history, strong Catholic faith, and Solidarity movement",
      food: "Famous for pierogi, kielbasa sausage, and sweet pastries"
    }
  },
  {
    id: 91,
    flag: "🇷🇴",
    difficulty: "easy",
    cluePool: [
      "I'm in Eastern Europe where the legend of Dracula comes from.",
      "I have the Carpathian Mountains and many castles including Dracula's castle.",
      "My flag has blue, yellow, and red vertical stripes.",
      "I speak Romanian and my capital is Bucharest.",
      "I'm home to Bran Castle, known as Dracula's Castle.",
      "I have some of the fastest internet speeds in the world.",
      "I'm famous for beautiful painted monasteries with colorful walls.",
      "I love cabbage rolls, polenta, and traditional hearty soups.",
      "I have the Danube River and beautiful countryside with rolling hills.",
      "I'm known for folk music, traditional dances, and colorful costumes.",
      "I have brown bears in my forests and beautiful wildflower meadows.",
      "I celebrate with festivals, traditional crafts, and delicious pastries."
    ],
    answer: "Romania",
    funFact: {
      language: "Romanian",
      currency: "Romanian Leu",
      capital: "Bucharest",
      uniqueFact: "I'm home to Dracula's castle and have the fastest internet in Europe!",
      cultural: "Home to vampire legends, beautiful monasteries, and folk traditions",
      food: "Famous for cabbage rolls, polenta, and hearty soups"
    }
  },

  // MORE MEDIUM COUNTRIES
  {
    id: 92,
    flag: "🇸🇦",
    difficulty: "medium",
    cluePool: [
      "I'm a large desert kingdom in the Middle East with lots of oil.",
      "I'm home to Mecca, the holiest city for Muslims around the world.",
      "My flag is green with Arabic writing and a sword.",
      "I speak Arabic and my capital is Riyadh.",
      "I have the largest continuous sand desert in the world.",
      "I have millions of pilgrims visit Mecca and Medina every year.",
      "I have no permanent rivers but lots of oil underground.",
      "I love kabsa spiced rice, dates, Arabic coffee, and lamb dishes.",
      "I have traditional Bedouin culture with camels and desert life.",
      "I'm building amazing new cities like NEOM in the desert.",
      "I have the guardianship of Islam's two holiest mosques.",
      "I'm famous for hospitality, traditional robes, and oil wealth."
    ],
    answer: "Saudi Arabia",
    funFact: {
      language: "Arabic",
      currency: "Saudi Riyal",
      capital: "Riyadh",
      uniqueFact: "I have the world's largest continuous sand desert and no permanent rivers!",
      cultural: "Guardian of Islamic holy sites, Bedouin heritage, and camel culture",
      food: "Famous for kabsa rice, dates, Arabic coffee, and lamb dishes"
    }
  },
  {
    id: 93,
    flag: "🇮🇶",
    difficulty: "medium",
    cluePool: [
      "I'm in the Middle East between the Tigris and Euphrates rivers.",
      "I'm considered the cradle of civilization where writing was invented.",
      "My flag has red, white, and black stripes with green Arabic writing.",
      "I speak Arabic and Kurdish, and my capital is Baghdad.",
      "I'm the birthplace of writing, the wheel, and the first cities.",
      "I have ancient Mesopotamian sites like Babylon and Ur.",
      "I invented the first system of laws and the 60-minute hour.",
      "I love masgouf grilled fish, biryani rice, and dates.",
      "I have the Hanging Gardens of Babylon, one of the ancient wonders.",
      "I'm known for beautiful carpets, poetry, and ancient artifacts.",
      "I have the ziggurats, ancient temple towers reaching toward the sky.",
      "I'm the land where Abraham was born and many stories began."
    ],
    answer: "Iraq",
    funFact: {
      language: "Arabic and Kurdish",
      currency: "Iraqi Dinar",
      capital: "Baghdad",
      uniqueFact: "I'm the birthplace of writing, the wheel, and the first cities!",
      cultural: "Ancient Mesopotamian heritage, diverse ethnic groups, and historical significance",
      food: "Famous for kebabs, biryani rice, dates, and Middle Eastern sweets"
    }
  },
  {
    id: 94,
    flag: "🇮🇱",
    difficulty: "medium",
    cluePool: [
      "I'm a small country in the Middle East beside the Mediterranean Sea.",
      "I'm a very young country but in a very old land with ancient history.",
      "My flag has blue and white stripes with a six-pointed star.",
      "I speak Hebrew and Arabic and my historic capital is Jerusalem.",
      "I turned desert into green farmland using smart farming techniques.",
      "I have more museums per person than any other country in the world.",
      "I float easily in the Dead Sea and have amazing ancient sites.",
      "I'm famous for delicious falafel, hummus, and fresh Mediterranean food.",
      "I invented many computer technologies and medical innovations.",
      "I have beautiful beaches on the Mediterranean and diverse landscapes.",
      "I celebrate Hanukkah with menorahs and eat delicious challah bread.",
      "I have ancient cities like Jerusalem with important religious sites."
    ],
    answer: "Israel",
    funFact: {
      language: "Hebrew and Arabic",
      currency: "Israeli Shekel",
      capital: "Jerusalem",
      uniqueFact: "I turned desert into farmland and have more museums per capita than anywhere!",
      cultural: "Meeting point of three religions, innovation hub, and diverse cultures",
      food: "Famous for hummus, falafel, shakshuka, and Mediterranean cuisine"
    }
  },
  {
    id: 95,
    flag: "🇰🇪",
    difficulty: "medium",
    cluePool: [
      "I'm in East Africa and the birthplace of long-distance running champions.",
      "I'm famous for safari animals and the Great Migration of wildebeest.",
      "My flag has black, red, green, and white with a traditional shield.",
      "I speak Swahili and English and my capital is Nairobi.",
      "I have Mount Kenya, the second highest mountain in Africa.",
      "I'm home to the Maasai warriors who are famous for jumping very high.",
      "I produce the world's best marathon and long-distance runners.",
      "I love ugali cornmeal, nyama choma grilled meat, and chai tea.",
      "I have amazing national parks like Maasai Mara for safari adventures.",
      "I have beautiful coastlines with white sand beaches along the Indian Ocean.",
      "I'm known for colorful traditional clothing, beadwork, and tribal dances.",
      "I grow coffee, tea, and flowers that are exported all over the world."
    ],
    answer: "Kenya",
    funFact: {
      language: "Swahili and English",
      currency: "Kenyan Shilling",
      capital: "Nairobi",
      uniqueFact: "I'm home to the Great Migration and produce the world's best marathon runners!",
      cultural: "Home to Maasai warriors, safari culture, and athletic excellence",
      food: "Famous for ugali, nyama choma grilled meat, and chai tea"
    }
  },
  {
    id: 96,
    flag: "🇹🇿",
    difficulty: "medium",
    cluePool: [
      "I have Mount Kilimanjaro, the highest mountain in Africa.",
      "I'm home to the Serengeti and lots of safari animals.",
      "My flag has green, yellow, black, and blue diagonal stripes.",
      "I speak Swahili and English and my capital is Dodoma.",
      "I have the Ngorongoro Crater, the world's largest volcanic crater.",
      "I'm home to the Great Migration where millions of animals travel.",
      "I have beautiful islands like Zanzibar with spice plantations.",
      "I love ugali, grilled meat, tropical fruits, and aromatic spices.",
      "I have over 120 different tribes speaking different languages.",
      "I'm famous for coffee, cashew nuts, and beautiful gemstones like tanzanite.",
      "I have amazing wildlife like lions, elephants, and cheetahs in my parks.",
      "I'm known for friendly people, traditional music, and colorful fabrics."
    ],
    answer: "Tanzania",
    funFact: {
      language: "Swahili and English",
      currency: "Tanzanian Shilling",
      capital: "Dodoma",
      uniqueFact: "I have Africa's highest mountain and the world's largest volcanic crater!",
      cultural: "Home to diverse tribes, Swahili culture, and wildlife conservation",
      food: "Famous for ugali, grilled meat, tropical fruits, and Zanzibar spices"
    }
  },
  {
    id: 97,
    flag: "🇺🇬",
    difficulty: "medium",
    cluePool: [
      "I'm called the 'Pearl of Africa' and have lots of mountains and lakes.",
      "I'm the source of the Nile River, the longest river in the world.",
      "My flag has black, yellow, red, and white stripes with a crane bird.",
      "I speak English and Swahili, and my capital is Kampala.",
      "I'm home to half of the world's remaining mountain gorillas.",
      "I have Lake Victoria, the second largest freshwater lake in the world.",
      "I have the Rwenzori Mountains, called the 'Mountains of the Moon'.",
      "I love matooke bananas, posho cornmeal, and fresh fish from my lakes.",
      "I have amazing national parks with lions, elephants, and hippos.",
      "I'm known for traditional drumming, dancing, and friendly people.",
      "I have the equator running right through my middle.",
      "I celebrate with colorful traditional clothing and harvest festivals."
    ],
    answer: "Uganda",
    funFact: {
      language: "English and Swahili",
      currency: "Ugandan Shilling",
      capital: "Kampala",
      uniqueFact: "I'm the source of the Nile River and home to half the world's mountain gorillas!",
      cultural: "Known for friendly people, diverse tribes, and gorilla conservation",
      food: "Famous for matooke bananas, posho, and fresh fish from lakes"
    }
  },
  {
    id: 98,
    flag: "🇬🇭",
    difficulty: "medium",
    cluePool: [
      "I'm in West Africa and was the first African country to gain independence.",
      "I'm famous for cocoa beans that make chocolate and for kente cloth.",
      "My flag has red, yellow, and green stripes with a black star.",
      "I speak English and many local languages, and my capital is Accra.",
      "I produce 20% of the world's cocoa beans for chocolate making.",
      "I have beautiful handwoven kente cloth with colorful patterns.",
      "I love jollof rice, fufu yam paste, and fried plantains.",
      "I have Lake Volta, one of the world's largest man-made lakes.",
      "I'm known for traditional drumming, dancing, and storytelling.",
      "I have gold mines and beautiful coastlines along the Atlantic Ocean.",
      "I celebrate many festivals with colorful costumes and music.",
      "I'm famous for being peaceful, friendly, and welcoming to visitors."
    ],
    answer: "Ghana",
    funFact: {
      language: "English",
      currency: "Ghanaian Cedi",
      capital: "Accra",
      uniqueFact: "I produce 20% of the world's cocoa and have beautiful kente cloth!",
      cultural: "Rich African traditions, colorful textiles, and drumming culture",
      food: "Famous for jollof rice, fufu, plantains, and chocolate"
    }
  },
  {
    id: 99,
    flag: "🇨🇮",
    difficulty: "medium",
    cluePool: [
      "I'm in West Africa and the world's largest producer of cocoa beans.",
      "My name means 'Ivory Coast' because of elephant tusks.",
      "My flag has orange, white, and green vertical stripes.",
      "I speak French and my capital is Yamoussoukro with the world's largest church.",
      "I produce 40% of the world's cocoa beans for chocolate making.",
      "I have the largest basilica in the world, bigger than St. Peter's in Rome.",
      "I have beautiful beaches along the Atlantic Ocean and tropical forests.",
      "I love attieké cassava couscous, grilled fish, and plantains.",
      "I have diverse tribes with colorful masks and traditional ceremonies.",
      "I'm known for traditional music, dancing, and wooden sculptures.",
      "I have Taï National Park with monkeys, elephants, and hippos.",
      "I celebrate with mask festivals and harvest celebrations for cocoa."
    ],
    answer: "Côte d'Ivoire",
    funFact: {
      language: "French",
      currency: "West African CFA Franc",
      capital: "Yamoussoukro",
      uniqueFact: "I produce 40% of the world's cocoa and have the largest church in Africa!",
      cultural: "Rich tribal traditions, mask ceremonies, and diverse ethnic groups",
      food: "Famous for attiéké cassava, fish, plantains, and cocoa"
    }
  },
  {
    id: 100,
    flag: "🇸🇳",
    difficulty: "medium",
    cluePool: [
      "I'm in West Africa and almost completely surround another tiny country.",
      "I'm famous for peanuts, colorful fabrics, and Wolof language.",
      "My flag has green, yellow, and red vertical stripes with a green star.",
      "I speak French and Wolof and my capital is Dakar on the coast.",
      "I almost completely surround tiny Gambia like a horseshoe.",
      "I'm famous for producing lots of peanuts and peanut products.",
      "I have beautiful beaches along the Atlantic Ocean.",
      "I love thieboudienne fish and rice, and dancing to mbalax music.",
      "I have colorful markets with beautiful wax print fabrics.",
      "I'm known for griot storytellers who sing family histories.",
      "I have the pink Lake Retba that looks like strawberry milk.",
      "I celebrate with drumming, wrestling matches, and traditional ceremonies."
    ],
    answer: "Senegal",
    funFact: {
      language: "French and Wolof",
      currency: "West African CFA Franc",
      capital: "Dakar",
      uniqueFact: "I almost completely surround the tiny country of Gambia!",
      cultural: "Known for griot storytellers, colorful textiles, and music",
      food: "Famous for thieboudienne fish and rice, peanut stew, and baobab fruit"
    }
  },
  {
    id: 101,
    flag: "🇺🇦",
    difficulty: "medium",
    cluePool: [
      "I'm the largest country entirely in Europe with fertile farmland.",
      "My flag has blue and yellow stripes like sky and wheat fields.",
      "I'm known for sunflowers, borscht soup, and beautiful painted eggs.",
      "I speak Ukrainian and my beautiful capital is Kyiv on the Dnieper River.",
      "I'm called Europe's breadbasket because I grow lots of wheat.",
      "I have fields of bright yellow sunflowers as far as you can see.",
      "I make beautiful pysanky eggs decorated with colorful patterns.",
      "I love borscht beet soup, varenyky dumplings, and salo pork fat.",
      "I have the deepest subway station in the world in Kyiv.",
      "I'm famous for Cossack warriors and traditional folk dancing.",
      "I have the Chernobyl nuclear site and beautiful Carpathian Mountains.",
      "I celebrate with traditional music, colorful embroidered clothing, and festivals."
    ],
    answer: "Ukraine",
    funFact: {
      language: "Ukrainian",
      currency: "Ukrainian Hryvnia",
      capital: "Kyiv",
      uniqueFact: "I'm Europe's breadbasket and have the deepest metro station in the world!",
      cultural: "Home to Cossack traditions, colorful folk art, and classical music",
      food: "Famous for borscht, varenyky dumplings, and salo (pork fat)"
    }
  },

  // MORE HARD COUNTRIES
  {
    id: 102,
    flag: "🇦🇫",
    difficulty: "hard",
    cluePool: [
      "I'm a mountainous landlocked country between Iran and Pakistan.",
      "I'm famous for beautiful carpets and being on the ancient Silk Road.",
      "My flag has black, red, and green stripes with a coat of arms.",
      "I speak Pashto and Dari and my capital is Kabul.",
      "I'm called the 'Graveyard of Empires' for my difficult history.",
      "I have amazing mountain landscapes and the Hindu Kush range.",
      "I'm on the ancient Silk Road trade route connecting East and West.",
      "I make beautiful hand-woven carpets and traditional crafts.",
      "I love kabuli pulao rice, naan bread, and green tea.",
      "I have ancient historical sites and Buddhist heritage.",
      "I'm known for my brave people and mountainous terrain.",
      "I have traditional tribal customs and colorful clothing."
    ],
    answer: "Afghanistan",
    funFact: {
      language: "Pashto and Dari",
      currency: "Afghan Afghani",
      capital: "Kabul",
      uniqueFact: "I'm called the 'Graveyard of Empires' and have amazing mountain landscapes!",
      cultural: "Crossroads of civilizations, tribal traditions, and ancient history",
      food: "Famous for kabuli pulao, naan bread, kebabs, and green tea"
    }
  },
  {
    id: 103,
    flag: "🇳🇵",
    difficulty: "hard",
    cluePool: [
      "I'm a small mountain country between China and India with Mount Everest.",
      "I'm the only country with a flag that's not rectangular - mine has triangles!",
      "I'm famous for the Himalayas, Sherpas, and yaks.",
      "I speak Nepali and my capital is Kathmandu.",
      "I have the world's highest mountain - Mount Everest at 29,032 feet!",
      "I'm home to brave Sherpa people who help climbers reach Everest.",
      "I have beautiful Buddhist temples and prayer flags in the mountains.",
      "I love dal bhat rice, momos dumplings, and yak cheese.",
      "I have rhinos, tigers, and snow leopards in my national parks.",
      "I celebrate festivals with colorful decorations and traditional music.",
      "I'm the birthplace of Buddha and have many peaceful monasteries.",
      "I have yaks that help carry heavy loads in the mountains."
    ],
    answer: "Nepal",
    funFact: {
      language: "Nepali",
      currency: "Nepalese Rupee",
      capital: "Kathmandu",
      uniqueFact: "I have the world's highest mountain and the only non-rectangular flag!",
      cultural: "Home to Sherpa culture, Buddhist temples, and mountain climbing",
      food: "Famous for dal bhat rice, momos dumplings, and yak cheese"
    }
  },
  {
    id: 104,
    flag: "🇧🇴",
    difficulty: "hard",
    cluePool: [
      "I'm a landlocked country in South America with two capital cities.",
      "I have the world's largest salt flat that looks like a giant mirror.",
      "I'm home to llamas, alpacas, and colorful traditional clothing.",
      "I speak Spanish, Quechua, and Aymara and have two capitals.",
      "I have the world's largest salt flat - Salar de Uyuni.",
      "I'm home to friendly llamas and fluffy alpacas in the mountains.",
      "I have the highest capital city in the world - La Paz.",
      "I love quinoa grains, llama meat, and coca tea.",
      "I have colorful traditional clothing and vibrant festivals.",
      "I'm famous for my indigenous cultures and mountain traditions.",
      "I have beautiful landscapes from salt flats to snow-capped peaks.",
      "I celebrate with folk music, dancing, and traditional instruments."
    ],
    answer: "Bolivia",
    funFact: {
      language: "Spanish, Quechua, and Aymara",
      currency: "Bolivian Boliviano",
      capital: "Sucre and La Paz",
      uniqueFact: "I have the world's largest salt flat and highest capital city!",
      cultural: "Rich indigenous heritage, colorful textiles, and mountain traditions",
      food: "Famous for quinoa, llama meat, saltenas, and coca tea"
    }
  },
  {
    id: 105,
    flag: "🇪🇨",
    difficulty: "hard",
    cluePool: [
      "I'm a small country in South America named after the imaginary line around Earth.",
      "I own the Galápagos Islands where Charles Darwin studied animals.",
      "My flag has yellow, blue, and red stripes with a coat of arms.",
      "I speak Spanish and my capital is Quito.",
      "I'm named after the equator line that passes through me.",
      "I own the Galápagos Islands with giant tortoises and unique animals.",
      "I have amazing biodiversity from rainforests to snowy mountains.",
      "I love ceviche fish, plantains, and exotic tropical fruits.",
      "I have beautiful colonial architecture in my historic cities.",
      "I'm where Charles Darwin discovered evolution by studying animals.",
      "I have active volcanoes and the Amazon rainforest.",
      "I celebrate with traditional music and colorful indigenous clothing."
    ],
    answer: "Ecuador",
    funFact: {
      language: "Spanish",
      currency: "US Dollar",
      capital: "Quito",
      uniqueFact: "I'm named after the equator and own the Galápagos Islands!",
      cultural: "Home to indigenous cultures, colonial architecture, and biodiversity",
      food: "Famous for ceviche, plantains, guinea pig, and exotic fruits"
    }
  },
  {
    id: 106,
    flag: "🇵🇾",
    difficulty: "hard",
    cluePool: [
      "I'm a landlocked country in South America surrounded by bigger countries.",
      "I speak both Spanish and an indigenous language called Guaraní.",
      "I'm known for the Itaipu Dam and traditional harp music.",
      "I speak Spanish and Guaraní and my capital is Asunción.",
      "I'm one of only two landlocked countries in South America.",
      "I have the Itaipu Dam, one of the world's largest power plants.",
      "I love traditional harp music and folk dancing.",
      "I eat asado barbecue, chipa bread, and drink yerba mate tea.",
      "I have a unique bilingual culture mixing Spanish and indigenous traditions.",
      "I'm surrounded by Brazil, Argentina, and Bolivia.",
      "I have beautiful nature reserves and the Pantanal wetlands.",
      "I celebrate with festivals featuring harps, guitars, and traditional songs."
    ],
    answer: "Paraguay",
    funFact: {
      language: "Spanish and Guaraní",
      currency: "Paraguayan Guaraní",
      capital: "Asunción",
      uniqueFact: "I'm one of only two landlocked countries in South America!",
      cultural: "Bilingual culture, harp music, and indigenous traditions",
      food: "Famous for asado barbecue, chipa bread, and yerba mate tea"
    }
  },
  {
    id: 107,
    flag: "🇬🇾",
    difficulty: "hard",
    cluePool: [
      "I'm the only English-speaking country in South America.",
      "I have beautiful waterfalls including Kaieteur Falls.",
      "My flag has green, yellow, red, black, and white in a unique design.",
      "I speak English and my capital is Georgetown on the Atlantic coast.",
      "I have Kaieteur Falls, one of the world's most powerful waterfalls.",
      "I'm covered by 85% rainforest with amazing wildlife.",
      "I have a mix of Caribbean, South American, and indigenous cultures.",
      "I love pepperpot stew, roti bread, and curry dishes.",
      "I have beautiful birds like the Hoatzin and Harpy Eagle.",
      "I mine gold, diamonds, and bauxite from my rich land.",
      "I have the Rupununi Savanna with cowboys called vaqueiros.",
      "I celebrate with steel drum music, calypso, and Mashramani carnival."
    ],
    answer: "Guyana",
    funFact: {
      language: "English",
      currency: "Guyanese Dollar",
      capital: "Georgetown",
      uniqueFact: "I'm South America's only English-speaking country!",
      cultural: "Mix of Caribbean, South American, and indigenous cultures",
      food: "Famous for pepperpot stew, roti, curry, and cassava bread"
    }
  },
  {
    id: 108,
    flag: "🇸🇷",
    difficulty: "hard",
    cluePool: [
      "I'm a small country in South America that speaks Dutch.",
      "I have lots of rainforest and many different ethnic groups.",
      "I used to be called Dutch Guiana and am between Guyana and French Guiana.",
      "I speak Dutch and my colorful capital is Paramaribo.",
      "I'm 93% covered by Amazon rainforest with amazing wildlife.",
      "I have people from Java, India, Africa, and China living together.",
      "I'm the smallest country in South America by size.",
      "I love Javanese nasi goreng, roti, and pom cassava dish.",
      "I have beautiful nature reserves with jaguars and giant otters.",
      "I mine gold and bauxite from my rich forest lands.",
      "I celebrate with many different cultural festivals and foods.",
      "I have historic wooden buildings in my UNESCO capital city."
    ],
    answer: "Suriname",
    funFact: {
      language: "Dutch",
      currency: "Surinamese Dollar",
      capital: "Paramaribo",
      uniqueFact: "I'm the smallest country in South America and 93% rainforest!",
      cultural: "Very diverse population with many languages and traditions",
      food: "Famous for Javanese cuisine, roti, pom, and tropical fruits"
    }
  },
  {
    id: 109,
    flag: "🇦🇱",
    difficulty: "hard",
    cluePool: [
      "I'm a small country in the Balkans with beautiful mountains and beaches.",
      "I was isolated from the world for many years under communist rule.",
      "My flag is red with a black double-headed eagle.",
      "I speak Albanian and my colorful capital is Tirana.",
      "I have over 700,000 concrete bunkers built during communist times.",
      "I have beautiful Albanian Alps and stunning blue-eye springs.",
      "I have both mountains and gorgeous beaches on two seas.",
      "I love byrek pastries, tavë kosi baked lamb, and strong coffee.",
      "I was the most isolated country in Europe for decades.",
      "I have ancient Illyrian heritage and traditional mountain customs.",
      "I celebrate with folk dancing, traditional music, and family gatherings.",
      "I have UNESCO sites like Butrint and historic Gjirokastër."
    ],
    answer: "Albania",
    funFact: {
      language: "Albanian",
      currency: "Albanian Lek",
      capital: "Tirana",
      uniqueFact: "I was the most isolated country in Europe and have over 700,000 bunkers!",
      cultural: "Ancient Illyrian heritage, mountain traditions, and hospitality",
      food: "Famous for byrek pastries, tavë kosi, and Mediterranean cuisine"
    }
  },
  {
    id: 110,
    flag: "🇧🇦",
    difficulty: "hard",
    cluePool: [
      "I'm in the Balkans and used to be part of Yugoslavia.",
      "I have a beautiful old bridge in the city of Mostar.",
      "My flag has blue with yellow stars and a triangle on the side.",
      "I speak Bosnian, Croatian, and Serbian in my diverse country.",
      "I have the famous Stari Most bridge rebuilt after being destroyed.",
      "I hosted the 1984 Winter Olympics in my capital Sarajevo.",
      "I have a mix of Muslim, Orthodox, and Catholic communities.",
      "I love ćevapi grilled sausages, burek pastry, and Bosnian coffee.",
      "I have beautiful mountains, rivers, and medieval castles.",
      "I'm known for traditional crafts, woodcarving, and metalwork.",
      "I have the historic Ottoman quarter in Sarajevo called Baščaršija.",
      "I celebrate with traditional sevdalinka music and folk festivals."
    ],
    answer: "Bosnia and Herzegovina",
    funFact: {
      language: "Bosnian, Croatian, and Serbian",
      currency: "Convertible Mark",
      capital: "Sarajevo",
      uniqueFact: "I hosted the 1984 Winter Olympics and have a famous bridge rebuilt after war!",
      cultural: "Mix of Ottoman, Austro-Hungarian, and Slavic influences",
      food: "Famous for ćevapi sausages, burek pastry, and Bosnian coffee"
    }
  },
  {
    id: 111,
    flag: "🇭🇷",
    difficulty: "hard",
    cluePool: [
      "I'm in the Balkans shaped like a croissant with a beautiful coastline.",
      "I'm famous for my checkered flag and beautiful islands.",
      "My capital is Zagreb and I recently joined the European Union.",
      "I speak Croatian and my flag has red and white squares like a checkerboard.",
      "I have over 1,000 islands along my beautiful Adriatic coastline.",
      "I invented the necktie that men wear around the world.",
      "I have amazing national parks like Plitvice with cascading waterfalls.",
      "I love seafood, ćevapi, štrucla pastry, and delicious wine.",
      "I have medieval cities like Dubrovnik called 'Pearl of the Adriatic'.",
      "I'm famous for water polo, tennis, and beautiful beaches.",
      "I have Roman ruins, including the amazing palace in Split.",
      "I celebrate with klapa singing, folk dancing, and summer festivals."
    ],
    answer: "Croatia",
    funFact: {
      language: "Croatian",
      currency: "Euro",
      capital: "Zagreb",
      uniqueFact: "I invented the necktie and have over 1,000 islands!",
      cultural: "Rich maritime heritage, Roman ruins, and Mediterranean lifestyle",
      food: "Famous for seafood, truffles, wine, and traditional pastries"
    }
  },
  {
    id: 112,
    flag: "🇷🇸",
    difficulty: "hard",
    cluePool: [
      "I'm in the Balkans and used to be the largest part of Yugoslavia.",
      "I'm landlocked but have two big rivers: the Danube and the Sava.",
      "My flag has red, blue, and white stripes with a coat of arms.",
      "I speak Serbian and my capital Belgrade is where two rivers meet.",
      "I'm at the crossroads between Central and Southeast Europe.",
      "I have beautiful monasteries and Orthodox churches with frescoes.",
      "I have the Danube River flowing through my northern plains.",
      "I love ćevapi grilled meat, kajmak cheese, and rakija brandy.",
      "I have traditional folk music called turbo-folk and gusle epic songs.",
      "I'm famous for tennis players like Novak Djoković.",
      "I have the Drina River canyon and beautiful mountain landscapes.",
      "I celebrate with slava family patron saint days and folk festivals."
    ],
    answer: "Serbia",
    funFact: {
      language: "Serbian",
      currency: "Serbian Dinar",
      capital: "Belgrade",
      uniqueFact: "I'm at the crossroads of Central and Southeast Europe!",
      cultural: "Rich Orthodox heritage, folk music, and Balkan traditions",
      food: "Famous for ćevapi, rakija brandy, and hearty meat dishes"
    }
  },
  {
    id: 113,
    flag: "🇲🇪",
    difficulty: "hard",
    cluePool: [
      "I'm a tiny mountainous country in the Balkans next to the Adriatic Sea.",
      "My name means 'Black Mountain' and I have beautiful national parks.",
      "I was one of the last countries to become independent in Europe.",
      "I speak Montenegrin and my capital is Podgorica in the mountains.",
      "I have Durmitor National Park with deep canyons and glacial lakes.",
      "I have the deepest canyon in Europe - Tara River Canyon.",
      "I have beautiful beaches and medieval towns along the coast.",
      "I love grilled fish, Njeguški pršut ham, and mountain cheese.",
      "I have traditional mountain warrior culture and epic poetry.",
      "I'm one of Europe's youngest countries, independent since 2006.",
      "I have the Bay of Kotor, one of the most beautiful bays in the world.",
      "I celebrate with traditional oro circle dancing and folk festivals."
    ],
    answer: "Montenegro",
    funFact: {
      language: "Montenegrin",
      currency: "Euro",
      capital: "Podgorica",
      uniqueFact: "My name means 'Black Mountain' and I'm one of Europe's youngest countries!",
      cultural: "Mountain warrior traditions, Orthodox heritage, and coastal culture",
      food: "Famous for seafood, cheese, prosciutto, and rakija"
    }
  },
  {
    id: 114,
    flag: "🇰🇸",
    difficulty: "hard",
    cluePool: [
      "I'm a small, young country in the Balkans that declared independence recently.",
      "My flag has blue with yellow stars and an outline of my country.",
      "I used to be part of Serbia and many countries still don't recognize me.",
      "I speak Albanian and Serbian, and my capital is Pristina.",
      "I declared independence in 2008, making me one of the world's youngest countries.",
      "I have a very young population with most people under 35 years old.",
      "I have beautiful mountains and traditional stone villages.",
      "I love burek pastry, flija pancakes, and strong Turkish coffee.",
      "I have a rich cultural mix of Albanian and Serbian traditions.",
      "I'm known for traditional crafts, especially silver filigree work.",
      "I have ancient monasteries and Roman archaeological sites.",
      "I celebrate with traditional Albanian and Serbian folk music and dancing."
    ],
    answer: "Kosovo",
    funFact: {
      language: "Albanian and Serbian",
      currency: "Euro",
      capital: "Pristina",
      uniqueFact: "I'm one of the world's youngest countries, declaring independence in 2008!",
      cultural: "Mix of Albanian and Serbian cultures, young population",
      food: "Famous for burek, flija pancakes, and Balkan meat dishes"
    }
  },
  {
    id: 115,
    flag: "🇲🇩",
    difficulty: "hard",
    cluePool: [
      "I'm a small landlocked country between Romania and Ukraine.",
      "I'm famous for wine-making and have underground wine cities.",
      "I'm one of the poorest countries in Europe but have rich soil.",
      "I speak Romanian and my capital is Chișinău with tree-lined streets.",
      "I have the world's largest wine cellar complex underground.",
      "I have incredibly fertile black soil perfect for growing grapes.",
      "I'm famous for traditional folk dancing and beautiful handicrafts.",
      "I love mămăligă polenta, sarmale cabbage rolls, and delicious wine.",
      "I have rolling hills covered with vineyards and sunflower fields.",
      "I celebrate with wine festivals and traditional hora circle dancing.",
      "I have beautiful monasteries with painted walls and Orthodox traditions.",
      "I have a breakaway region called Transnistria that's like a time capsule."
    ],
    answer: "Moldova",
    funFact: {
      language: "Romanian",
      currency: "Moldovan Leu",
      capital: "Chișinău",
      uniqueFact: "I have the world's largest wine cellar and underground wine cities!",
      cultural: "Wine-making traditions, folk dances, and rural lifestyle",
      food: "Famous for wine, mămăligă polenta, and traditional pastries"
    }
  },
  {
    id: 116,
    flag: "🇬🇪",
    difficulty: "hard",
    cluePool: [
      "I'm in the Caucasus Mountains between Europe and Asia.",
      "I'm one of the oldest wine-making countries in the world.",
      "My flag has a big cross and four smaller crosses, all in red.",
      "I speak Georgian with my own unique alphabet that looks like art.",
      "I invented wine 8,000 years ago and still make it in clay pots.",
      "I have my beautiful capital Tbilisi with colorful balconies.",
      "I have amazing mountains, including the highest peaks in the Caucasus.",
      "I love khachapuri cheese bread, khinkali dumplings, and red wine.",
      "I'm famous for polyphonic singing that sounds like angels.",
      "I have ancient cave cities and stunning mountain monasteries.",
      "I'm known for incredible hospitality and traditional toasting ceremonies.",
      "I have the tradition of the tamada (toastmaster) who leads dinner toasts."
    ],
    answer: "Georgia",
    funFact: {
      language: "Georgian",
      currency: "Georgian Lari",
      capital: "Tbilisi",
      uniqueFact: "I invented wine 8,000 years ago and have my own unique alphabet!",
      cultural: "Ancient wine tradition, polyphonic singing, and hospitality",
      food: "Famous for khachapuri cheese bread, wine, and khinkali dumplings"
    }
  },
  {
    id: 117,
    flag: "🇦🇲",
    difficulty: "hard",
    cluePool: [
      "I'm a small landlocked country in the Caucasus Mountains.",
      "I was the first country to officially adopt Christianity.",
      "My flag has red, blue, and orange horizontal stripes.",
      "I speak Armenian with my own beautiful alphabet created in 405 AD.",
      "I was the first nation to officially become Christian in 301 AD.",
      "I have Mount Ararat on my coat of arms, though it's now in Turkey.",
      "I'm famous for apricots, which may have originated in my land.",
      "I love lavash flatbread, dolma, khorovats barbecue, and Armenian coffee.",
      "I have the ancient capital Yerevan, one of the world's oldest cities.",
      "I'm known for beautiful carpets, traditional music, and epic poetry.",
      "I have Lake Sevan, one of the highest freshwater lakes in the world.",
      "I celebrate with traditional Armenian dancing and church celebrations."
    ],
    answer: "Armenia",
    funFact: {
      language: "Armenian",
      currency: "Armenian Dram",
      capital: "Yerevan",
      uniqueFact: "I was the first nation to officially adopt Christianity in 301 AD!",
      cultural: "Ancient Christian heritage, unique alphabet, and mountain traditions",
      food: "Famous for lavash bread, dolma, kebabs, and apricots"
    }
  },
  {
    id: 118,
    flag: "🇱🇹",
    difficulty: "hard",
    cluePool: [
      "I'm one of three Baltic countries that regained independence from the Soviet Union.",
      "I was once the largest country in Europe during medieval times.",
      "My flag has yellow, green, and red horizontal stripes.",
      "I speak Lithuanian and my capital Vilnius has a beautiful old town.",
      "I was once the largest country in Europe, stretching to the Black Sea.",
      "I have some of the fastest internet in the world.",
      "I'm incredibly passionate about basketball and have great players.",
      "I love cepelinai potato dumplings, dark bread, and šakotis cake.",
      "I have beautiful sand dunes along my Baltic Sea coast.",
      "I have a unique singing tradition and the Baltic Song Festival.",
      "I regained independence by forming a human chain across the Baltics.",
      "I have pagan traditions mixed with Catholic and modern culture."
    ],
    answer: "Lithuania",
    funFact: {
      language: "Lithuanian",
      currency: "Euro",
      capital: "Vilnius",
      uniqueFact: "I was once the largest country in Europe and have the fastest internet!",
      cultural: "Baltic traditions, basketball passion, and medieval heritage",
      food: "Famous for cepelinai dumplings, dark bread, and honey cake"
    }
  },
  {
    id: 119,
    flag: "🇸🇮",
    difficulty: "hard",
    cluePool: [
      "I'm a small country between Italy and Croatia with beautiful lakes.",
      "I have famous caves and my capital has a dragon as its symbol.",
      "My flag has white, blue, and red stripes with a coat of arms.",
      "I speak Slovene and my capital Ljubljana has a dragon protecting the city.",
      "I have over 10,000 caves, including the famous Škocjan Caves.",
      "I have more forest coverage than any other European country.",
      "I have beautiful Lake Bled with a castle on a cliff.",
      "I love štruklji pastries, potica walnut roll, and excellent wine.",
      "I have the Alps, Mediterranean coast, and Pannonian plains all in one small country.",
      "I'm a leader in green and sustainable tourism.",
      "I have traditional beekeeping and painted beehive panels.",
      "I celebrate with traditional Alpine music and harvest festivals."
    ],
    answer: "Slovenia",
    funFact: {
      language: "Slovene",
      currency: "Euro",
      capital: "Ljubljana",
      uniqueFact: "I have over 10,000 caves and the most forest coverage in Europe!",
      cultural: "Alpine traditions, cave exploration, and green tourism",
      food: "Famous for štruklji pastries, wine, and honey"
    }
  },
  {
    id: 120,
    flag: "🇸🇰",
    difficulty: "hard",
    cluePool: [
      "I'm in Central Europe and used to be part of Czechoslovakia.",
      "I have beautiful castles and the Tatra Mountains.",
      "My flag has white, blue, and red stripes with a coat of arms.",
      "I speak Slovak and my capital Bratislava is on the Danube River.",
      "I have more castles per capita than any other country in the world.",
      "I have the beautiful High Tatra Mountains with skiing and hiking.",
      "I became independent when Czechoslovakia peacefully split in 1993.",
      "I love bryndzové halušky potato dumplings with sheep cheese.",
      "I have beautiful folk traditions with colorful embroidered clothing.",
      "I have medieval towns like Bardejov and Špiš Castle complex.",
      "I'm known for spa towns and healing mineral waters.",
      "I celebrate with traditional folk dancing and puppet shows."
    ],
    answer: "Slovakia",
    funFact: {
      language: "Slovak",
      currency: "Euro",
      capital: "Bratislava",
      uniqueFact: "I have more castles per capita than any other country!",
      cultural: "Rich folk traditions, castle heritage, and mountain culture",
      food: "Famous for bryndzové halušky dumplings, sausages, and beer"
    }
  },

  // ADDITIONAL COUNTRIES TO REACH CLOSER TO 195
  {
    id: 121,
    flag: "🇧🇬",
    difficulty: "easy",
    cluePool: [
      "I'm in Eastern Europe famous for roses, yogurt, and the Cyrillic alphabet.",
      "I have beautiful mountains and my capital is Sofia.",
      "My flag has white, green, and red horizontal stripes.",
      "I speak Bulgarian and helped create the Cyrillic alphabet.",
      "I'm famous for producing the world's finest rose oil and perfumes.",
      "I invented yogurt and it's part of almost every meal I eat.",
      "I have beautiful Black Sea beaches and snowy mountain ski resorts.",
      "I love shopska salad, banitsa pastry, and delicious yogurt.",
      "I have the ancient city of Plovdiv with Roman ruins and art.",
      "I have traditional fire dancing called nestinarstvo.",
      "I have the Valley of Roses where most of the world's rose oil comes from.",
      "I celebrate with colorful folk festivals and traditional horo dancing."
    ],
    answer: "Bulgaria",
    funFact: {
      language: "Bulgarian",
      currency: "Bulgarian Lev",
      capital: "Sofia",
      uniqueFact: "I produce 70% of the world's rose oil and invented the computer!",
      cultural: "Home to Cyrillic alphabet, rose festivals, and folk dances",
      food: "Famous for yogurt, banitsa pastry, shopska salad, and rakia"
    }
  },
  {
    id: 122,
    flag: "🇱🇻",
    difficulty: "easy",
    cluePool: [
      "I'm one of three Baltic countries with beautiful forests and beaches.",
      "I have a famous medieval old town and love singing festivals.",
      "My flag has dark red and white horizontal stripes.",
      "I speak Latvian and my capital Riga has beautiful Art Nouveau buildings.",
      "I have some of the fastest internet speeds in the world.",
      "I'm famous for huge song festivals where thousands of people sing together.",
      "I have beautiful Baltic Sea beaches with white sand and pine forests.",
      "I love dark rye bread, smoked fish, and hearty potato dishes.",
      "I'm known for collecting and working with amber, called 'Baltic gold'.",
      "I have the widest waterfall in Europe called Ventas Rumba.",
      "I celebrate Midsummer festival with flower crowns and jumping over fires.",
      "I have beautiful medieval castles and traditional folk songs."
    ],
    answer: "Latvia",
    funFact: {
      language: "Latvian",
      currency: "Euro",
      capital: "Riga",
      uniqueFact: "I have one of the fastest internet speeds in the world!",
      cultural: "Famous for song festivals, amber jewelry, and medieval architecture",
      food: "Famous for rye bread, smoked fish, and hearty potato dishes"
    }
  },
  {
    id: 125,
    flag: "🇰🇼",
    difficulty: "medium",
    cluePool: [
      "I'm a small, very rich country in the Persian Gulf with lots of oil.",
      "I was invaded by Iraq but was freed by international forces.",
      "My flag has green, white, red, and black horizontal stripes.",
      "I have the highest currency value in the world - my dinar is very valuable.",
      "I speak Arabic and my modern capital is Kuwait City.",
      "I'm famous for having the most shopping malls per person in the world.",
      "I have beautiful Islamic architecture and modern skyscrapers.",
      "I love delicious machboos rice with meat and Middle Eastern sweets.",
      "I'm known for traditional dhow sailing boats and pearl diving.",
      "I have hot desert climate but beautiful beaches on the Persian Gulf.",
      "I'm famous for hospitality and serving guests dates and Arabic coffee.",
      "I have modern cities built from oil wealth and ancient trading history."
    ],
    answer: "Kuwait",
    funFact: {
      language: "Arabic",
      currency: "Kuwaiti Dinar",
      capital: "Kuwait City",
      uniqueFact: "I have the highest currency value in the world and love shopping malls!",
      cultural: "Pearl diving heritage, Bedouin traditions, and modern commerce",
      food: "Famous for machboos rice, fish, dates, and Arabic coffee"
    }
  },
  {
    id: 126,
    flag: "🇴🇲",
    difficulty: "medium",
    cluePool: [
      "I'm in the Arabian Peninsula with beautiful mountains and beaches.",
      "I'm known for frankincense, sultans, and being peaceful in a troubled region.",
      "My flag has red, white, green, and a symbol in the corner.",
      "I speak Arabic and my capital is Muscat with beautiful white buildings.",
      "I'm famous for producing the world's finest frankincense incense.",
      "I have dramatic mountains, desert dunes, and beautiful beaches.",
      "I have a sultan who rules wisely and keeps peace in the region.",
      "I love shuwa slow-cooked lamb, dates, halwa sweets, and cardamom coffee.",
      "I have traditional dhow boats and ancient forts along my coast.",
      "I'm known for beautiful silver jewelry, traditional crafts, and hospitality.",
      "I have wadis (green valleys) with palm trees in the desert.",
      "I celebrate with traditional music, camel racing, and cultural festivals."
    ],
    answer: "Oman",
    funFact: {
      language: "Arabic",
      currency: "Omani Rial",
      capital: "Muscat",
      uniqueFact: "I'm the oldest independent state in the Arab world and produce frankincense!",
      cultural: "Maritime trading heritage, Ibadi Islam, and traditional crafts",
      food: "Famous for shuwa slow-cooked meat, halwa sweets, and dates"
    }
  },
  {
    id: 127,
    flag: "🇾🇪",
    difficulty: "medium",
    cluePool: [
      "I'm at the southern tip of the Arabian Peninsula with ancient history.",
      "I have the city of Sana'a with unique tower houses.",
      "My flag has red, white, and black horizontal stripes.",
      "I speak Arabic and my capital Sana'a has amazing mud brick skyscrapers.",
      "I'm the legendary home of the Queen of Sheba from ancient times.",
      "I have the oldest skyscrapers in the world, made of mud and stone.",
      "I'm where coffee was first discovered and became popular.",
      "I love saltah stew, mandi lamb and rice, and drinking coffee.",
      "I have beautiful terraced mountains where I grow coffee and qat.",
      "I'm known for traditional curved daggers called jambiyas.",
      "I have ancient trade routes and beautiful handmade crafts.",
      "I celebrate with traditional dancing and poetry recitation."
    ],
    answer: "Yemen",
    funFact: {
      language: "Arabic",
      currency: "Yemeni Rial",
      capital: "Sana'a",
      uniqueFact: "I'm home to the Queen of Sheba and have the oldest skyscrapers made of mud!",
      cultural: "Ancient Arabian heritage, unique architecture, and coffee origin",
      food: "Famous for saltah stew, mandi rice, and qat leaves"
    }
  },
  {
    id: 128,
    flag: "🇸🇾",
    difficulty: "medium",
    cluePool: [
      "I'm in the Middle East with the ancient city of Damascus.",
      "I have historical sites like Palmyra and Aleppo's old city.",
      "My flag has red, white, and black stripes with two green stars.",
      "I speak Arabic and my capital Damascus is the world's oldest continuously inhabited city.",
      "I have amazing historical sites like Palmyra and ancient Aleppo.",
      "I'm where the Damascus steel was made, the strongest metal in ancient times.",
      "I have the Umayyad Mosque, one of the largest and oldest mosques.",
      "I love kibbeh fried bulgur, hummus, fattoush salad, and baklava.",
      "I have beautiful traditional crafts like silk weaving and metalwork.",
      "I'm on ancient trade routes connecting Europe, Asia, and Africa.",
      "I have diverse religious communities living together for centuries.",
      "I celebrate with traditional dabke dancing and classical Arabic music."
    ],
    answer: "Syria",
    funFact: {
      language: "Arabic",
      currency: "Syrian Pound",
      capital: "Damascus",
      uniqueFact: "I have the world's oldest continuously inhabited city - Damascus!",
      cultural: "Cradle of civilization, ancient trade routes, and diverse heritage",
      food: "Famous for kibbeh, hummus, fattabouleh, and Damascus steel (not food!)"
    }
  },
  {
    id: 129,
    flag: "🇦🇴",
    difficulty: "medium",
    cluePool: [
      "I'm in Southern Africa with a long Atlantic coastline.",
      "I speak Portuguese and have lots of diamonds and oil.",
      "My flag has red and black stripes with a yellow symbol.",
      "I speak Portuguese and my capital Luanda is on the Atlantic coast.",
      "I'm the second largest oil producer in Africa with huge reserves.",
      "I have some of the world's largest diamond mines.",
      "I have beautiful beaches along my 1,000-mile Atlantic coastline.",
      "I love muamba chicken stew, funge cassava porridge, and grilled fish.",
      "I have diverse tribes with traditional music like semba and kizomba.",
      "I have national parks with elephants, lions, and cheetahs.",
      "I'm known for beautiful traditional masks and wood carvings.",
      "I celebrate with energetic dancing and drumming festivals."
    ],
    answer: "Angola",
    funFact: {
      language: "Portuguese",
      currency: "Angolan Kwanza",
      capital: "Luanda",
      uniqueFact: "I'm the second-largest oil producer in Africa and have huge diamonds!",
      cultural: "Portuguese colonial heritage, diverse tribes, and music traditions",
      food: "Famous for muamba chicken, funge porridge, and grilled fish"
    }
  },
  {
    id: 130,
    flag: "🇿🇲",
    difficulty: "medium",
    cluePool: [
      "I'm a landlocked country in Southern Africa famous for copper.",
      "I have Victoria Falls, one of the world's largest waterfalls.",
      "My flag has green with orange, red, and black stripes and an eagle.",
      "I speak English and my capital is Lusaka in the center of the country.",
      "I have Victoria Falls, which I share with Zimbabwe - it's absolutely massive!",
      "I'm famous for copper mining and have huge copper deposits.",
      "I have amazing wildlife parks with elephants, lions, and hippos.",
      "I love nshima cornmeal, kapenta small fish, and ifisashi vegetables.",
      "I have the source of the Zambezi River that creates Victoria Falls.",
      "I'm known for traditional dancing, wood carving, and basketry.",
      "I have over 70 different tribes speaking many languages.",
      "I celebrate with drumming festivals and harvest ceremonies."
    ],
    answer: "Zambia",
    funFact: {
      language: "English",
      currency: "Zambian Kwacha",
      capital: "Lusaka",
      uniqueFact: "I have the world's largest waterfall by volume - Victoria Falls!",
      cultural: "Home to diverse tribes, copper mining heritage, and wildlife",
      food: "Famous for nshima cornmeal, dried fish, and vegetables"
    }
  },
  {
    id: 131,
    flag: "🇿🇼",
    difficulty: "medium",
    cluePool: [
      "I'm in Southern Africa with the famous ruins of Great Zimbabwe.",
      "I have Victoria Falls and speak English plus many local languages.",
      "My flag has green, yellow, red, black, and white stripes with a bird.",
      "I speak English and 15 other official languages, including Shona and Ndebele.",
      "I'm named after the Great Zimbabwe stone ruins built 800 years ago.",
      "I have Victoria Falls on my border with Zambia - locals call it 'Mosi-oa-Tunya'.",
      "I have amazing national parks with the Big Five safari animals.",
      "I love sadza cornmeal, biltong dried meat, and traditional vegetables.",
      "I'm famous for beautiful stone sculptures made by talented artists.",
      "I have the Zimbabwean bird on my flag, found in the ancient ruins.",
      "I'm known for traditional mbira music and energetic dancing.",
      "I celebrate heritage with festivals showing my diverse tribal cultures."
    ],
    answer: "Zimbabwe",
    funFact: {
      language: "English and 16 local languages",
      currency: "US Dollar",
      capital: "Harare",
      uniqueFact: "I'm named after the Great Zimbabwe ruins and have 16 official languages!",
      cultural: "Ancient stone city heritage, diverse tribes, and sculpture art",
      food: "Famous for sadza cornmeal, biltong, and traditional vegetables"
    }
  },
  {
    id: 132,
    flag: "🇲🇿",
    difficulty: "medium",
    cluePool: [
      "I'm in Southern Africa with a long Indian Ocean coastline.",
      "I speak Portuguese and have beautiful beaches and islands.",
      "My flag has green, black, yellow, white, and red with an AK-47.",
      "I speak Portuguese and my capital Maputo is a bustling port city.",
      "I'm the only country in the world with a gun (AK-47) on my flag.",
      "I have gorgeous tropical beaches and coral reefs along the Indian Ocean.",
      "I have beautiful islands like Inhaca and Benguerra for snorkeling.",
      "I love peri-peri chicken, seafood curry, and coconut rice.",
      "I have amazing national parks with elephants and marine reserves.",
      "I'm known for traditional marrabenta music and energetic dancing.",
      "I have beautiful traditional crafts like pottery and wood carving.",
      "I celebrate with festivals featuring Portuguese and African influences."
    ],
    answer: "Mozambique",
    funFact: {
      language: "Portuguese",
      currency: "Mozambican Metical",
      capital: "Maputo",
      uniqueFact: "I'm the only country with a gun on my flag - an AK-47!",
      cultural: "Portuguese and African mix, island culture, and music traditions",
      food: "Famous for peri-peri chicken, seafood, and coconut curry"
    }
  },
  {
    id: 133,
    flag: "🇧🇼",
    difficulty: "medium",
    cluePool: [
      "I'm a landlocked country in Southern Africa with lots of diamonds.",
      "I have the Kalahari Desert and the Okavango Delta with elephants.",
      "My flag has light blue with a black stripe and white borders.",
      "I speak English and Setswana, and my capital is Gaborone.",
      "I went from one of the world's poorest countries to middle-income thanks to diamonds.",
      "I have the amazing Okavango Delta, the world's largest inland delta.",
      "I have huge herds of elephants and incredible safari experiences.",
      "I love seswaa shredded beef, pap porridge, and traditional game meat.",
      "I have the Kalahari Desert with San Bushmen who know ancient survival skills.",
      "I'm known for being one of Africa's most stable and peaceful democracies.",
      "I have beautiful traditional crafts like pottery and basket weaving.",
      "I celebrate with traditional dances and festivals honoring our heritage."
    ],
    answer: "Botswana",
    funFact: {
      language: "English and Setswana",
      currency: "Botswana Pula",
      capital: "Gaborone",
      uniqueFact: "I went from one of the poorest to middle-income thanks to diamonds!",
      cultural: "Safari tourism, diamond wealth, and peaceful democracy",
      food: "Famous for seswaa shredded meat, pap porridge, and game meat"
    }
  },
  {
    id: 134,
    flag: "🇳🇦",
    difficulty: "medium",
    cluePool: [
      "I'm in Southern Africa with the oldest desert in the world.",
      "I have huge sand dunes, diamonds, and was ruled by South Africa.",
      "My flag has blue, red, green, white, and yellow with a sun.",
      "I speak English and my capital Windhoek has German colonial buildings.",
      "I have the Namib Desert, the world's oldest desert at 80 million years old.",
      "I have the highest sand dunes in the world at Sossusvlei.",
      "I have a unique mix of German, African, and English cultures.",
      "I love game meat like kudu, potjiekos stew, and German-style beer.",
      "I have amazing wildlife like desert elephants and black rhinos.",
      "I have the Skeleton Coast where ships were wrecked by strong winds.",
      "I'm known for beautiful traditional crafts and Himba tribal culture.",
      "I celebrate with festivals mixing German Oktoberfest and African traditions."
    ],
    answer: "Namibia",
    funFact: {
      language: "English",
      currency: "Namibian Dollar",
      capital: "Windhoek",
      uniqueFact: "I have the world's oldest desert and highest sand dunes!",
      cultural: "German colonial influence, diverse tribes, and desert adaptation",
      food: "Famous for game meat, biltong, potjiekos stew, and German-style beer"
    }
  },
  {
    id: 135,
    flag: "🇱🇸",
    difficulty: "hard",
    cluePool: [
      "I'm a tiny mountain kingdom completely surrounded by South Africa.",
      "I'm one of only three countries completely inside another country.",
      "I'm called the 'Kingdom in the Sky' because I'm so high up.",
      "I speak Sesotho and English, and my capital is Maseru on the border.",
      "I'm the highest country in the world - my lowest point is higher than most mountains!",
      "I'm completely surrounded by South Africa like an island in the mountains.",
      "I have snow in winter and amazing mountain hiking and skiing.",
      "I love papa cornmeal, moroho wild vegetables, and traditional joala beer.",
      "I'm famous for beautiful Basotho blankets and traditional cone-shaped huts.",
      "I have the Sani Pass, one of the world's most dangerous mountain roads.",
      "I'm known for skilled horsemen and traditional mountain culture.",
      "I celebrate with traditional ceremonies and festivals in my mountain kingdom."
    ],
    answer: "Lesotho",
    funFact: {
      language: "Sesotho and English",
      currency: "Lesotho Loti",
      capital: "Maseru",
      uniqueFact: "I'm the highest country in the world - my lowest point is higher than most mountains!",
      cultural: "Mountain kingdom, Basotho blankets, and traditional huts",
      food: "Famous for papa cornmeal, moroho vegetables, and traditional beer"
    }
  },
  {
    id: 136,
    flag: "🇸🇿",
    difficulty: "hard",
    cluePool: [
      "I'm a small landlocked kingdom in Southern Africa.",
      "I recently changed my name from Swaziland to eSwatini.",
      "I'm ruled by a king and known for traditional ceremonies.",
      "I speak English and Swazi, and my capital is Mbabane in the mountains.",
      "I changed my name from Swaziland to eSwatini in 2018 to honor my heritage.",
      "I'm one of the last absolute monarchies in the world.",
      "I have the famous Reed Dance where young women dance for the king.",
      "I love sishwala sorghum porridge, boerewors sausage, and traditional beer.",
      "I'm known for beautiful handcrafts like pottery, weaving, and wood carving.",
      "I have game reserves with rhinos, elephants, and other wildlife.",
      "I celebrate Incwala, the sacred kingship ceremony each year.",
      "I have traditional Swazi culture mixed with modern African influences."
    ],
    answer: "Eswatini",
    funFact: {
      language: "English and Swazi",
      currency: "Swazi Lilangeni",
      capital: "Mbabane",
      uniqueFact: "I changed my name from Swaziland to eSwatini in 2018!",
      cultural: "Traditional monarchy, reed dance ceremonies, and Swazi culture",
      food: "Famous for sishwala porridge, boerewors sausage, and traditional beer"
    }
  },
  {
    id: 137,
    flag: "🇲🇼",
    difficulty: "hard",
    cluePool: [
      "I'm called the 'Warm Heart of Africa' and have a huge lake.",
      "I'm a long, narrow country beside Lake Malawi in East Africa.",
      "My flag has black, red, and green stripes with a red sun.",
      "I speak English and Chichewa, and my capital is Lilongwe.",
      "I have Lake Malawi, the third largest lake in Africa with amazing fish.",
      "I'm famous for being very friendly - that's why I'm called the 'Warm Heart'.",
      "I have over 1,000 species of fish in my lake, more than any other lake.",
      "I love nsima cornmeal, chambo fish, and delicious vegetables.",
      "I'm known for beautiful wood carvings and traditional dances.",
      "I have national parks with elephants, leopards, and hippos.",
      "I grow tea, tobacco, and have beautiful mountain landscapes.",
      "I celebrate with traditional music, storytelling, and harvest festivals."
    ],
    answer: "Malawi",
    funFact: {
      language: "English and Chichewa",
      currency: "Malawian Kwacha",
      capital: "Lilongwe",
      uniqueFact: "I have the third-largest lake in Africa with the most fish species!",
      cultural: "Known for friendliness, lake culture, and wood carving",
      food: "Famous for nsima cornmeal, fish from the lake, and vegetables"
    }
  },
  {
    id: 138,
    flag: "🇷🇼",
    difficulty: "hard",
    cluePool: [
      "I'm a small landlocked country in East Africa called 'Land of a Thousand Hills.'",
      "I'm famous for mountain gorillas and coffee.",
      "I have an amazing recovery story and very clean cities.",
      "I speak Kinyarwanda, English, and French, with capital Kigali.",
      "I'm called the 'Land of a Thousand Hills' because I'm very mountainous.",
      "I'm home to endangered mountain gorillas that tourists come to see.",
      "I'm the cleanest country in Africa and banned plastic bags to protect nature.",
      "I love ugali porridge, beans, sweet potatoes, and world-famous coffee.",
      "I have amazing recovery and unity after difficult times in the past.",
      "I'm known for traditional basket weaving and beautiful handicrafts.",
      "I have stunning national parks and volcano mountains.",
      "I celebrate Unity Day and have monthly community cleaning called Umuganda."
    ],
    answer: "Rwanda",
    funFact: {
      language: "Kinyarwanda, English, and French",
      currency: "Rwandan Franc",
      capital: "Kigali",
      uniqueFact: "I'm the cleanest country in Africa and ban plastic bags!",
      cultural: "Mountain gorilla conservation, unity culture, and clean environment",
      food: "Famous for Rwandan coffee, ugali, beans, and fresh vegetables"
    }
  },
  {
    id: 139,
    flag: "🇧🇮",
    difficulty: "hard",
    cluePool: [
      "I'm a small landlocked country in East Africa next to Rwanda.",
      "I have Lake Tanganyika and speak French and local languages.",
      "My flag has red, white, green, and a circle with three stars.",
      "I speak Kirundi and French, and my capital is Gitega in the center.",
      "I have Lake Tanganyika, the second deepest lake in the world.",
      "I'm famous for traditional drumming - our drummers are world-renowned.",
      "I have rolling hills and am one of the most densely populated countries in Africa.",
      "I love beans, sweet potatoes, cassava, and sorghum porridge.",
      "I'm known for beautiful traditional dances and royal drum ceremonies.",
      "I have coffee plantations in my mountains and grow tea.",
      "I have diverse wildlife including hippos and crocodiles in my lake.",
      "I celebrate with festivals featuring traditional music and cultural performances."
    ],
    answer: "Burundi",
    funFact: {
      language: "Kirundi and French",
      currency: "Burundian Franc",
      capital: "Gitega",
      uniqueFact: "I have some of the deepest freshwater in the world in Lake Tanganyika!",
      cultural: "Drumming traditions, hill country lifestyle, and coffee growing",
      food: "Famous for beans, sweet potatoes, cassava, and sorghum"
    }
  },
  {
    id: 140,
    flag: "🇩🇯",
    difficulty: "hard",
    cluePool: [
      "I'm a tiny country in East Africa at the entrance to the Red Sea.",
      "I'm very hot and dry with salt lakes and volcanic activity.",
      "I speak French and Arabic and am important for shipping.",
      "I speak French and Arabic, and my capital Djibouti City is a major port.",
      "I'm one of the hottest countries on Earth with temperatures over 120°F.",
      "I have Lake Assal, one of the saltiest lakes in the world.",
      "I'm strategically located where the Red Sea meets the Indian Ocean.",
      "I love canjeero flatbread, goat meat, spiced rice, and strong coffee.",
      "I have active volcanoes and amazing salt formations in the desert.",
      "I'm important for shipping and have many international military bases.",
      "I have unique desert landscapes and traditional nomadic cultures.",
      "I celebrate with traditional Afar and Somali music and dance."
    ],
    answer: "Djibouti",
    funFact: {
      language: "French and Arabic",
      currency: "Djiboutian Franc",
      capital: "Djibouti City",
      uniqueFact: "I have the lowest point in Africa and one of the hottest places on Earth!",
      cultural: "Strategic location, nomadic traditions, and maritime importance",
      food: "Famous for canjeero flatbread, goat meat, and spiced rice"
    }
  },
  {
    id: 141,
    flag: "🇪🇷",
    difficulty: "hard",
    cluePool: [
      "I'm in East Africa beside the Red Sea with nine ethnic groups.",
      "I gained independence from Ethiopia and have no official language.",
      "I'm known for having many languages and diverse cultures.",
      "I speak Tigrinya, Arabic, and English, and my capital is Asmara.",
      "I have no official language but recognize nine different languages equally.",
      "I have beautiful Italian colonial architecture in my capital city.",
      "I have nine different ethnic groups each with their own traditions.",
      "I love injera spongy bread, zigni spicy stew, and traditional coffee.",
      "I have the Danakil Depression, one of the lowest and hottest places on Earth.",
      "I'm known for traditional coffee ceremonies that bring communities together.",
      "I have Red Sea coral reefs and beautiful coastal areas.",
      "I celebrate with diverse cultural festivals representing all my ethnic groups."
    ],
    answer: "Eritrea",
    funFact: {
      language: "Tigrinya, Arabic, and English",
      currency: "Eritrean Nakfa",
      capital: "Asmara",
      uniqueFact: "I have no official language but recognize nine different languages!",
      cultural: "Italian colonial architecture, diverse ethnicities, and Red Sea culture",
      food: "Famous for injera bread, zigni stew, and coffee ceremonies"
    }
  },
  {
    id: 142,
    flag: "🇸🇴",
    difficulty: "hard",
    cluePool: [
      "I'm in East Africa shaped like the number 7 beside the Indian Ocean.",
      "I'm called the Horn of Africa and have a long coastline.",
      "My flag has light blue with a white five-pointed star.",
      "I speak Somali and Arabic, and my capital is Mogadishu on the coast.",
      "I have the longest coastline in mainland Africa stretching over 3,000 km.",
      "I'm shaped like the number 7 and called the Horn of Africa.",
      "I have a rich tradition of poetry and storytelling in my culture.",
      "I love anjero flatbread, camel meat, goat milk, and banana dishes.",
      "I have traditional nomadic culture with beautiful handmade crafts.",
      "I'm known for frankincense and myrrh that have been traded for centuries.",
      "I have beautiful beaches along the Indian Ocean with coral reefs.",
      "I celebrate with traditional music, dance, and camel festivals."
    ],
    answer: "Somalia",
    funFact: {
      language: "Somali and Arabic",
      currency: "Somali Shilling",
      capital: "Mogadishu",
      uniqueFact: "I have the longest coastline in mainland Africa!",
      cultural: "Nomadic traditions, poetry culture, and maritime heritage",
      food: "Famous for anjero flatbread, camel meat, and banana dishes"
    }
  },
  {
    id: 143,
    flag: "🇸🇸",
    difficulty: "hard",
    cluePool: [
      "I'm the world's newest country, becoming independent in 2011.",
      "I'm in East Africa and separated from Sudan after a long war.",
      "My flag has blue, yellow, black, white, and red with a star.",
      "I speak English and my capital is Juba on the White Nile River.",
      "I'm the world's youngest country, gaining independence in 2011.",
      "I separated from Sudan after Africa's longest civil war.",
      "I have the White Nile River flowing through my country.",
      "I love asida sorghum porridge, grilled meat, and fresh milk.",
      "I have over 60 different tribes with diverse languages and cultures.",
      "I'm known for cattle herding and traditional pastoral lifestyle.",
      "I have oil reserves and vast wetlands called the Sudd.",
      "I celebrate with traditional dancing, drumming, and cultural festivals."
    ],
    answer: "South Sudan",
    funFact: {
      language: "English",
      currency: "South Sudanese Pound",
      capital: "Juba",
      uniqueFact: "I'm the world's youngest country, becoming independent in 2011!",
      cultural: "Diverse tribes, cattle culture, and new nation building",
      food: "Famous for asida porridge, grilled meat, and sorghum"
    }
  },
  {
    id: 144,
    flag: "🇨🇫",
    difficulty: "hard",
    cluePool: [
      "I'm a landlocked country in the center of Africa with diamonds.",
      "I speak French and have lots of forests and wildlife.",
      "My flag has blue, white, green, yellow, and red stripes with a star.",
      "I speak French and Sango, and my capital is Bangui on the river.",
      "I'm located exactly in the geographical center of Africa.",
      "I have huge diamond mines and some of the world's most precious gems.",
      "I have dense rainforests with elephants, gorillas, and leopards.",
      "I love cassava, bushmeat, plantains, and palm wine.",
      "I have diverse ethnic groups with traditional forest cultures.",
      "I'm known for traditional crafts, wood carving, and metalwork.",
      "I have the Sangha River and beautiful national parks.",
      "I celebrate with tribal festivals, traditional music, and storytelling."
    ],
    answer: "Central African Republic",
    funFact: {
      language: "French and Sango",
      currency: "Central African CFA Franc",
      capital: "Bangui",
      uniqueFact: "I'm exactly in the center of Africa and have huge diamond reserves!",
      cultural: "Forest peoples, diamond mining, and diverse tribes",
      food: "Famous for cassava, bushmeat, plantains, and palm wine"
    }
  },
  {
    id: 145,
    flag: "🇹🇩",
    difficulty: "hard",
    cluePool: [
      "I'm a large landlocked country in Central Africa with the Sahara Desert.",
      "I speak French and Arabic and have Lake Chad.",
      "My flag has blue, yellow, and red vertical stripes.",
      "I speak French and Arabic, and my capital N'Djamena is by Lake Chad.",
      "I'm named after Lake Chad, which is shrinking due to climate change.",
      "I span from the Sahara Desert in the north to tropical forests in the south.",
      "I have both nomadic herders in the desert and farmers in the south.",
      "I love millet porridge, dried meat, dates, and milk from camels.",
      "I have diverse cultures from Arab, African, and Saharan influences.",
      "I'm known for traditional crafts, leather working, and pottery.",
      "I have oil wealth and cotton farming in my economy.",
      "I celebrate with festivals featuring traditional music and camel racing."
    ],
    answer: "Chad",
    funFact: {
      language: "French and Arabic",
      currency: "Central African CFA Franc",
      capital: "N'Djamena",
      uniqueFact: "I'm named after Lake Chad and span from desert to tropical regions!",
      cultural: "Nomadic and farming cultures, diverse ethnicities, oil wealth",
      food: "Famous for millet porridge, dried meat, and dates"
    }
  },
  {
    id: 146,
    flag: "🇨🇲",
    difficulty: "medium",
    cluePool: [
      "I'm in Central Africa and speak both French and English.",
      "I'm called 'Africa in miniature' because I have every African landscape.",
      "My flag has green, red, and yellow stripes with a star.",
      "I speak French and English, and my capital is Yaoundé in the forest.",
      "I'm called 'Africa in miniature' because I have deserts, forests, mountains, and coast.",
      "I have Mount Cameroon, an active volcano and the highest peak in West Africa.",
      "I'm passionate about football and have produced many great players.",
      "I love ndolé stew with peanuts, plantains, fufu, and palm wine.",
      "I have over 200 different languages spoken across my regions.",
      "I'm known for traditional masks, wood carving, and colorful textiles.",
      "I have amazing wildlife including forest elephants and chimpanzees.",
      "I celebrate with festivals combining French, English, and African traditions."
    ],
    answer: "Cameroon",
    funFact: {
      language: "French and English",
      currency: "Central African CFA Franc",
      capital: "Yaoundé",
      uniqueFact: "I'm called 'Africa in miniature' because I have desert, forest, mountains, and coast!",
      cultural: "Bilingual heritage, diverse ecosystems, and football passion",
      food: "Famous for ndolé stew, plantains, fufu, and palm wine"
    }
  },
  {
    id: 147,
    flag: "🇬🇦",
    difficulty: "hard",
    cluePool: [
      "I'm a small country in Central Africa on the Atlantic coast.",
      "I speak French and have lots of oil and forests.",
      "I'm one of the wealthiest countries in Africa per person.",
      "I speak French and my capital Libreville means 'free town' on the coast.",
      "I'm 85% covered by rainforest with amazing biodiversity.",
      "I'm one of Africa's wealthiest countries thanks to oil and timber.",
      "I have 13 national parks protecting my forests and wildlife.",
      "I love grilled fish, cassava, plantains, nyama (meat), and palm wine.",
      "I have elephants, gorillas, leopards, and other forest animals.",
      "I'm known for traditional Fang culture and wood sculptures.",
      "I have beautiful beaches along the Atlantic Ocean.",
      "I celebrate with traditional festivals and French colonial influences."
    ],
    answer: "Gabon",
    funFact: {
      language: "French",
      currency: "Central African CFA Franc",
      capital: "Libreville",
      uniqueFact: "I'm 85% rainforest and one of Africa's wealthiest countries!",
      cultural: "Forest conservation, French influence, and oil wealth",
      food: "Famous for grilled fish, cassava, plantains, and palm wine"
    }
  },
  {
    id: 148,
    flag: "🇬🇶",
    difficulty: "hard",
    cluePool: [
      "I'm a small country in Central Africa that speaks Spanish.",
      "I have islands in the Atlantic Ocean and lots of oil.",
      "I'm the only Spanish-speaking country in Africa.",
      "I speak Spanish, French, and Portuguese, with capital Malabo on an island.",
      "I'm the only African country where Spanish is the main language.",
      "I have both mainland territory and beautiful islands in the Atlantic.",
      "I became very wealthy from oil discoveries in the ocean.",
      "I love fish stews, plantains, cassava, and tropical fruits.",
      "I have a unique mix of Spanish colonial and African cultures.",
      "I'm known for traditional Fang culture and wooden masks.",
      "I have rainforests on the mainland and volcanic islands.",
      "I celebrate with Spanish and African festivals mixed together."
    ],
    answer: "Equatorial Guinea",
    funFact: {
      language: "Spanish, French, and Portuguese",
      currency: "Central African CFA Franc",
      capital: "Malabo",
      uniqueFact: "I'm the only African country where Spanish is an official language!",
      cultural: "Spanish colonial heritage, island culture, and oil wealth",
      food: "Famous for fish stews, plantains, and tropical fruits"
    }
  },
  {
    id: 149,
    flag: "🇸🇹",
    difficulty: "hard",
    cluePool: [
      "I'm a tiny island nation in the Atlantic Ocean off Africa's west coast.",
      "I speak Portuguese and am made of two main islands.",
      "I'm the second-smallest country in Africa.",
      "I speak Portuguese and my capital São Tomé is on the larger island.",
      "I'm Africa's second-smallest country made of two volcanic islands.",
      "I'm located right on the equator in the Atlantic Ocean.",
      "I grow some of the world's finest cocoa beans for chocolate.",
      "I love fish, cocoa, tropical fruits, palm wine, and Portuguese pastries.",
      "I have beautiful beaches, rainforests, and volcanic landscapes.",
      "I'm known for traditional Portuguese and African mixed culture.",
      "I have amazing biodiversity with unique plants and animals.",
      "I celebrate with festivals mixing Portuguese traditions and African rhythms."
    ],
    answer: "São Tomé and Príncipe",
    funFact: {
      language: "Portuguese",
      currency: "São Tomé and Príncipe Dobra",
      capital: "São Tomé",
      uniqueFact: "I'm Africa's second-smallest country and grow amazing cocoa!",
      cultural: "Portuguese heritage, island life, and cocoa plantations",
      food: "Famous for fish, cocoa, tropical fruits, and Portuguese pastries"
    }
  },
  {
    id: 150,
    flag: "🇨🇻",
    difficulty: "hard",
    cluePool: [
      "I'm a group of islands in the Atlantic Ocean off West Africa.",
      "I speak Portuguese and am famous for music and fishing.",
      "My islands have both mountains and beaches.",
      "I speak Portuguese and Creole, and my capital Praia is on Santiago island.",
      "I'm made of 10 volcanic islands in the Atlantic Ocean.",
      "I'm famous for morna music and the singer Cesária Évora.",
      "I have both mountain islands and flat sandy islands.",
      "I love cachupa bean and corn stew, grilled fish, and tropical fruits.",
      "I have beautiful beaches with clear blue water for swimming.",
      "I'm known for traditional Creole culture mixing Portuguese and African traditions.",
      "I have active volcanoes and unique desert islands.",
      "I celebrate with music festivals, traditional dancing, and seafood feasts."
    ],
    answer: "Cape Verde",
    funFact: {
      language: "Portuguese and Creole",
      currency: "Cape Verdean Escudo",
      capital: "Praia",
      uniqueFact: "I'm a volcanic island chain known for morna music and great seafood!",
      cultural: "Creole culture, music traditions, and maritime heritage",
      food: "Famous for cachupa stew, grilled fish, and tropical fruits"
    }
  },

  // FINAL BATCH TO APPROACH 195 COUNTRIES
  {
    id: 151,
    flag: "🇲🇱",
    difficulty: "medium",
    cluePool: [
      "I'm a large landlocked country in West Africa with the Niger River.",
      "I have the ancient city of Timbuktu and speak French.",
      "My flag has green, yellow, and red vertical stripes.",
      "I speak French and my capital Bamako is on the Niger River.",
      "I have the legendary city of Timbuktu, once the center of Islamic learning.",
      "I was home to great ancient empires like Mali and Songhai.",
      "I have the Niger River flowing through my country to the ocean.",
      "I love jollof rice, millet porridge, tajine stew, and grilled meat.",
      "I have traditional Dogon people with amazing cliff villages.",
      "I'm known for traditional crafts, gold mining, and cotton farming.",
      "I have beautiful mosques and Islamic architecture in my cities.",
      "I celebrate with festivals featuring traditional music, dancing, and storytelling."
    ],
    answer: "Mali",
    funFact: {
      language: "French",
      currency: "West African CFA Franc",
      capital: "Bamako",
      uniqueFact: "I have the legendary city of Timbuktu, once the center of Islamic learning!",
      cultural: "Ancient empires, Dogon traditions, and Islamic heritage",
      food: "Famous for jollof rice, millet porridge, and grilled meat"
    }
  },
  {
    id: 152,
    flag: "🇧🇫",
    difficulty: "medium",
    cluePool: [
      "I'm a landlocked country in West Africa that means 'Land of Honest People.'",
      "I speak French and have traditional masks and music.",
      "My flag has red and green with a yellow star.",
      "I speak French and my capital Ouagadougou has a famous film festival.",
      "My name means 'Land of Honest People' in Mooré and Dioula languages.",
      "I'm famous for colorful traditional masks and vibrant art.",
      "I have the biggest film festival in Africa called FESPACO.",
      "I love tô millet paste, riz sauce (rice with sauce), and grilled meat.",
      "I'm known for honest, hardworking people and strong community values.",
      "I have traditional music with drums, balafons, and singing.",
      "I have gold mines and cotton farming in my economy.",
      "I celebrate with mask festivals, music events, and harvest ceremonies."
    ],
    answer: "Burkina Faso",
    funFact: {
      language: "French",
      currency: "West African CFA Franc",
      capital: "Ouagadougou",
      uniqueFact: "My name means 'Land of Honest People' in local languages!",
      cultural: "Traditional masks, music festivals, and honest reputation",
      food: "Famous for tô millet paste, grilled meat, and peanut sauce"
    }
  },
  {
    id: 153,
    flag: "🇳🇪",
    difficulty: "medium",
    cluePool: [
      "I'm a large landlocked country in West Africa mostly in the Sahara Desert.",
      "I speak French and have uranium mines in the desert.",
      "My flag has orange, white, and green stripes with an orange circle.",
      "I speak French and my capital Niamey is on the Niger River.",
      "I'm mostly covered by the Sahara Desert with a small green area in the south.",
      "I have some of the world's largest uranium deposits in my desert.",
      "I have traditional Tuareg nomads who travel across the desert with camels.",
      "I love millet porridge, rice with meat sauce, and dates from the desert.",
      "I have the Niger River bringing life to my southern regions.",
      "I'm known for traditional crafts, leather work, and silver jewelry.",
      "I have amazing desert landscapes and traditional desert festivals.",
      "I celebrate with camel racing, traditional music, and desert ceremonies."
    ],
    answer: "Niger",
    funFact: {
      language: "French",
      currency: "West African CFA Franc",
      capital: "Niamey",
      uniqueFact: "I'm mostly in the Sahara Desert and have some of the world's largest uranium deposits!",
      cultural: "Nomadic traditions, desert life, and mining economy",
      food: "Famous for millet, rice dishes, and dried meat"
    }
  },
  {
    id: 154,
    flag: "🇬🇼",
    difficulty: "hard",
    cluePool: [
      "I'm a small country in West Africa that speaks Portuguese.",
      "I have many islands and am famous for cashew nuts.",
      "I used to be called Portuguese Guinea.",
      "I speak Portuguese and Creole, and my capital Bissau is on the coast.",
      "I produce some of the world's finest cashew nuts in my forests.",
      "I have the Bijagós Islands with unique wildlife and culture.",
      "I used to be called Portuguese Guinea during colonial times.",
      "I love jollof rice, fresh fish stews, and cashew fruit.",
      "I have traditional animist beliefs mixed with Islam and Christianity.",
      "I'm known for traditional masks, crafts, and fishing culture.",
      "I have mangrove forests and beautiful coastal areas.",
      "I celebrate with festivals featuring traditional music and dancing."
    ],
    answer: "Guinea-Bissau",
    funFact: {
      language: "Portuguese and Creole",
      currency: "West African CFA Franc",
      capital: "Bissau",
      uniqueFact: "I produce some of the world's best cashew nuts!",
      cultural: "Portuguese colonial heritage, island culture, and fishing traditions",
      food: "Famous for jollof rice, fish stews, and cashew fruit"
    }
  },
  {
    id: 155,
    flag: "🇸🇱",
    difficulty: "hard",
    cluePool: [
      "I'm in West Africa and my name means 'Lion Mountains.'",
      "I speak English and have beautiful beaches and diamonds.",
      "My flag has green, white, and blue horizontal stripes.",
      "I speak English and my capital Freetown was founded for freed slaves.",
      "My name means 'Lion Mountains' in Portuguese from the roaring sounds.",
      "I have some of the world's most beautiful diamonds and other gems.",
      "I have gorgeous white sand beaches along the Atlantic Ocean.",
      "I love jollof rice, cassava leaves stew, and palm wine.",
      "I have a unique Creole culture mixing African, European, and American influences.",
      "I'm known for traditional music, dancing, and storytelling.",
      "I have rainforests with chimpanzees and other wildlife.",
      "I celebrate with festivals featuring traditional masks and ceremonies."
    ],
    answer: "Sierra Leone",
    funFact: {
      language: "English",
      currency: "Sierra Leonean Leone",
      capital: "Freetown",
      uniqueFact: "My name means 'Lion Mountains' and I have some of the world's finest diamonds!",
      cultural: "Creole heritage, diamond mining, and beautiful beaches",
      food: "Famous for jollof rice, cassava leaves, and palm wine"
    }
  },
  {
    id: 156,
    flag: "🇱🇷",
    difficulty: "hard",
    cluePool: [
      "I'm in West Africa and was founded by freed American slaves.",
      "I speak English and my flag looks like the American flag.",
      "My capital is named after an American president.",
      "I speak English and my capital Monrovia is named after President Monroe.",
      "I was founded by freed American slaves who returned to Africa.",
      "I was never colonized by Europeans - I stayed independent.",
      "My flag has 11 stripes and one star, inspired by the American flag.",
      "I love jollof rice, palm butter soup, plantains, and cassava.",
      "I have 16 different ethnic groups with diverse traditions.",
      "I'm known for traditional masks, crafts, and forest culture.",
      "I have rubber plantations and mining for iron ore.",
      "I celebrate with festivals mixing American and African traditions."
    ],
    answer: "Liberia",
    funFact: {
      language: "English",
      currency: "Liberian Dollar",
      capital: "Monrovia",
      uniqueFact: "I was founded by freed American slaves and never colonized by Europeans!",
      cultural: "American influence, diverse tribes, and independence heritage",
      food: "Famous for jollof rice, palm butter soup, and plantains"
    }
  },
  {
    id: 157,
    flag: "🇬🇲",
    difficulty: "hard",
    cluePool: [
      "I'm the smallest country in mainland Africa, shaped like a finger.",
      "I'm almost completely surrounded by Senegal except for my coast.",
      "I speak English and follow the Gambia River.",
      "I speak English and my capital Banjul is on a small island.",
      "I'm the smallest country in mainland Africa, shaped like a finger.",
      "I'm almost entirely surrounded by Senegal except for my Atlantic coast.",
      "I follow the path of the Gambia River from inland to the ocean.",
      "I love benachin (jollof rice), fresh fish, and peanut sauce.",
      "I'm known for being very peaceful and welcoming to visitors.",
      "I have traditional music with kora harps and drumming.",
      "I'm famous for peanut farming and river fishing.",
      "I celebrate with festivals featuring traditional wrestling and music."
    ],
    answer: "Gambia",
    funFact: {
      language: "English",
      currency: "Gambian Dalasi",
      capital: "Banjul",
      uniqueFact: "I'm the smallest country in mainland Africa and almost entirely surrounded by Senegal!",
      cultural: "River culture, peanut farming, and musical traditions",
      food: "Famous for benachin rice, fish, and peanut sauce"
    }
  },
  {
    id: 158,
    flag: "🇬🇳",
    difficulty: "hard",
    cluePool: [
      "I'm in West Africa and speak French with lots of bauxite for aluminum.",
      "I have the source of many West African rivers.",
      "My flag has red, yellow, and green vertical stripes.",
      "I speak French and my capital Conakry is on the Atlantic coast.",
      "I have the world's largest bauxite reserves for making aluminum.",
      "I'm called the 'Water Tower of West Africa' because many rivers start here.",
      "I have the source of the Niger, Senegal, and Gambia rivers.",
      "I love rice with palm oil, fish, plantains, and peanut sauce.",
      "I have diverse ethnic groups including Fulani, Mandinka, and Susu.",
      "I'm known for traditional music with djembe drums and balafon.",
      "I have mining for bauxite, gold, and diamonds.",
      "I celebrate with festivals featuring traditional dances and mask ceremonies."
    ],
    answer: "Guinea",
    funFact: {
      language: "French",
      currency: "Guinean Franc",
      capital: "Conakry",
      uniqueFact: "I have the world's largest bauxite reserves for making aluminum!",
      cultural: "Source of rivers, mining economy, and diverse ethnic groups",
      food: "Famous for rice dishes, plantains, and peanut sauce"
    }
  },
  {
    id: 159,
    flag: "🇲🇷",
    difficulty: "hard",
    cluePool: [
      "I'm in West Africa mostly covered by the Sahara Desert.",
      "I speak Arabic and French and have a nomadic culture.",
      "My flag has green with a yellow crescent and star.",
      "I speak Arabic and my capital Nouakchott is in the desert near the coast.",
      "I'm three-quarters covered by the Sahara Desert.",
      "I was the last country in the world to abolish slavery in 1981.",
      "I have traditional nomadic Berber and Arab cultures with camels.",
      "I love dates, camel milk, couscous, and tea ceremonies.",
      "I have iron ore mines and fishing along my Atlantic coast.",
      "I'm known for traditional poetry, music, and desert crafts.",
      "I have ancient trading routes across the Sahara Desert.",
      "I celebrate with traditional festivals, camel racing, and desert ceremonies."
    ],
    answer: "Mauritania",
    funFact: {
      language: "Arabic",
      currency: "Mauritanian Ouguiya",
      capital: "Nouakchott",
      uniqueFact: "I'm mostly desert and was the last country to abolish slavery in 1981!",
      cultural: "Nomadic Berber traditions, desert life, and Islamic heritage",
      food: "Famous for dates, camel milk, and couscous"
    }
  },
  {
    id: 160,
    flag: "🇰🇲",
    difficulty: "hard",
    cluePool: [
      "I'm a group of volcanic islands in the Indian Ocean near Madagascar.",
      "I speak French, Arabic, and Comorian languages.",
      "I'm called the 'Perfume Islands' for my flowers.",
      "I speak Comorian, Arabic, and French, and my capital Moroni is on a volcano.",
      "I'm called the 'Perfume Islands' because I grow ylang-ylang flowers for perfume.",
      "I'm made of four main volcanic islands in the Indian Ocean.",
      "I have a unique mix of African, Arab, and French cultures.",
      "I love coconut curry, grilled fish, rice pilaf, and tropical fruits.",
      "I produce vanilla, cloves, and ylang-ylang for the world's perfumes.",
      "I'm known for traditional Islamic culture and beautiful mosques.",
      "I have coral reefs and beautiful beaches for snorkeling.",
      "I celebrate with traditional weddings, Islamic festivals, and harvest ceremonies."
    ],
    answer: "Comoros",
    funFact: {
      language: "Comorian, Arabic, and French",
      currency: "Comorian Franc",
      capital: "Moroni",
      uniqueFact: "I'm called the 'Perfume Islands' because I grow ylang-ylang flowers!",
      cultural: "Mix of African, Arab, and French influences, perfume industry",
      food: "Famous for coconut curry, fish, and tropical fruits"
    }
  },
  {
    id: 161,
    flag: "🇲🇺",
    difficulty: "hard",
    cluePool: [
      "I'm a tropical island in the Indian Ocean famous for the extinct dodo bird.",
      "I speak English, French, and Creole and have beautiful beaches.",
      "I'm known for sugar, tourism, and being multicultural.",
      "I speak English, French, and Creole, and my capital Port Louis is a busy port.",
      "I'm the only place dodo birds ever lived, but sadly they're now extinct.",
      "I'm a multicultural paradise with people from India, Africa, China, and Europe.",
      "I have beautiful white sand beaches and crystal clear blue water.",
      "I love dholl puri flatbread, curry, fresh fish, and tropical fruits.",
      "I have sugar cane plantations and am famous for tourism.",
      "I'm known for traditional sega music, dancing, and festivals.",
      "I have coral reefs and amazing snorkeling and diving.",
      "I celebrate with festivals from Hindu, Muslim, Christian, and Chinese traditions."
    ],
    answer: "Mauritius",
    funFact: {
      language: "English, French, and Creole",
      currency: "Mauritian Rupee",
      capital: "Port Louis",
      uniqueFact: "I'm the only place dodo birds ever lived, and now they're extinct!",
      cultural: "Multicultural paradise, sugar heritage, and tourism",
      food: "Famous for Creole curry, dholl puri, and tropical fruits"
    }
  },
  {
    id: 162,
    flag: "🇸🇨",
    difficulty: "hard",
    cluePool: [
      "I'm a group of beautiful islands in the Indian Ocean with giant tortoises.",
      "I speak English, French, and Creole and have pristine beaches.",
      "I'm known for being a luxury vacation destination.",
      "I'm made up of 115 tropical islands scattered across the ocean.",
      "I have the world's largest seed called the coco de mer coconut.",
      "I'm home to unique granite rock formations and coral atolls.",
      "I'm a paradise for snorkeling with colorful fish and coral reefs.",
      "I have rare birds like the Seychelles warbler and magpie robin.",
      "I protect half of my land as national parks and nature reserves.",
      "I grow delicious tropical fruits like breadfruit and star fruit.",
      "I'm famous for my Creole culture mixing African, French, and British traditions.",
      "I have some of the world's most expensive and exclusive beach resorts."
    ],
    answer: "Seychelles",
    funFact: {
      language: "English, French, and Creole",
      currency: "Seychellois Rupee",
      capital: "Victoria",
      uniqueFact: "I have the world's largest seed (coco de mer) and giant tortoises!",
      cultural: "Creole culture, conservation, and luxury tourism",
      food: "Famous for fish curry, coconut dishes, and tropical fruits"
    }
  },
  {
    id: 163,
    flag: "🇹🇲",
    difficulty: "hard",
    cluePool: [
      "I'm in Central Asia with lots of natural gas and the 'Door to Hell.'",
      "I have the Karakum Desert and was part of the Soviet Union.",
      "I'm known for Akhal-Teke horses and strange dictator rules.",
      "I speak Turkmen and my capital Ashgabat has lots of white marble buildings.",
      "I have a giant gas crater that's been burning for over 50 years continuously.",
      "I'm mostly covered by the Karakum Desert, one of the world's largest deserts.",
      "I raise beautiful golden Akhal-Teke horses known as 'heavenly horses.'",
      "I have lots of underground natural gas that heats homes across Europe.",
      "I border Iran, Afghanistan, Uzbekistan, and the Caspian Sea.",
      "I eat delicious plov rice dishes, kebabs, and drink lots of green tea.",
      "I have ancient Silk Road cities and traditional carpet weaving.",
      "I'm famous for having unusual laws like banning gold teeth and recorded music."
    ],
    answer: "Turkmenistan",
    funFact: {
      language: "Turkmen",
      currency: "Turkmen Manat",
      capital: "Ashgabat",
      uniqueFact: "I have the 'Door to Hell' - a gas crater that's been burning for 50 years!",
      cultural: "Nomadic traditions, horse breeding, and marble cities",
      food: "Famous for plov rice, kebabs, and green tea"
    }
  },
  {
    id: 164,
    flag: "🇹🇯",
    difficulty: "hard",
    cluePool: [
      "I'm a mountainous country in Central Asia with 93% mountains.",
      "I speak Tajik (similar to Persian) and have the Pamir Mountains.",
      "I have some of the world's highest mountain peaks.",
      "I'm landlocked and border Afghanistan, China, Kyrgyzstan, and Uzbekistan.",
      "I have the Pamir Mountains called 'the Roof of the World.'",
      "I'm home to snow leopards, Marco Polo sheep, and brown bears.",
      "I have beautiful mountain lakes and glaciers feeding major rivers.",
      "I speak Tajik which uses the same alphabet as Russian.",
      "I eat delicious plov rice, flatbread, and drink lots of green tea.",
      "I have ancient Persian culture and traditions dating back thousands of years.",
      "I mine gold, silver, and precious stones from my mountains.",
      "I celebrate Nowruz (Persian New Year) with dancing and traditional music."
    ],
    answer: "Tajikistan",
    funFact: {
      language: "Tajik",
      currency: "Tajikistani Somoni",
      capital: "Dushanbe",
      uniqueFact: "I'm 93% mountainous and have some of the world's tallest peaks!",
      cultural: "Persian heritage, mountain traditions, and Soviet history",
      food: "Famous for plov rice, kebabs, and green tea"
    }
  },
  {
    id: 165,
    flag: "🇰🇷",
    difficulty: "easy",
    cluePool: [
      "I'm in East Asia famous for K-pop, kimchi, and Samsung phones.",
      "I'm divided from North Korea and have a booming economy.",
      "My flag has red, blue, and black symbols on white.",
      "I speak Korean and my capital is Seoul.",
      "I invented the world's first metal movable type printing.",
      "I have the fastest internet in the world and love online gaming.",
      "I'm famous for Taekwondo martial arts and respectful bowing culture.",
      "I love spicy kimchi, Korean BBQ, and bibimbap mixed rice bowls.",
      "I created popular K-pop bands like BTS and Blackpink.",
      "I have beautiful cherry blossoms and ancient palaces in Seoul.",
      "I'm famous for Korean dramas, skincare products, and technology.",
      "I have amazing bullet trains and take off shoes when entering homes."
    ],
    answer: "South Korea",
    funFact: {
      language: "Korean",
      currency: "South Korean Won",
      capital: "Seoul",
      uniqueFact: "I invented the world's first metal movable type and have the fastest internet!",
      cultural: "K-pop, Korean dramas, technology innovation, and martial arts",
      food: "Famous for kimchi, bulgogi, bibimbap, and Korean BBQ"
    }
  },
  {
    id: 166,
    flag: "🇰🇵",
    difficulty: "hard",
    cluePool: [
      "I'm in East Asia and one of the most isolated countries in the world.",
      "I'm divided from South Korea and have very strict rules.",
      "My flag has red, white, blue, and a red star.",
      "I speak Korean and my capital is Pyongyang with big monuments.",
      "I have my own calendar that started in 1912 when my founder was born.",
      "I have very few cars and most people ride bicycles or use public buses.",
      "I do amazing mass games with thousands of people performing together.",
      "I grow rice, corn, and potatoes and most people work on farms.",
      "I have beautiful mountains and forests but few people can visit them.",
      "I eat cold buckwheat noodles called naengmyeon and lots of kimchi.",
      "I have my own internet that only connects to websites inside my country.",
      "I celebrate important holidays with colorful parades and fireworks."
    ],
    answer: "North Korea",
    funFact: {
      language: "Korean",
      currency: "North Korean Won",
      capital: "Pyongyang",
      uniqueFact: "I have my own time zone and calendar, and almost no internet access!",
      cultural: "Isolated society, mass games performances, and strict government",
      food: "Famous for naengmyeon cold noodles, kimchi, and simple rice dishes"
    }
  },
  {
    id: 167,
    flag: "🇲🇳",
    difficulty: "hard",
    cluePool: [
      "I'm a large landlocked country between Russia and China.",
      "I'm home to nomadic herders, horses, and the Gobi Desert.",
      "My most famous historical leader was Genghis Khan.",
      "I speak Mongolian and my capital is Ulaanbaatar.",
      "I'm the least densely populated country with lots of open space.",
      "I live in gers (yurts) - round white tents that can move.",
      "I have more horses than people and kids learn to ride young.",
      "I'm famous for wrestling, archery, and horse racing.",
      "I practice throat singing that sounds like multiple voices.",
      "I have snow leopards, wild horses, and two-humped camels.",
      "I drink fermented mare's milk and eat lots of mutton.",
      "I have dinosaur fossils and follow Buddhism with colorful temples."
    ],
    answer: "Mongolia",
    funFact: {
      language: "Mongolian",
      currency: "Mongolian Tugrik",
      capital: "Ulaanbaatar",
      uniqueFact: "I'm the least densely populated country and home of Genghis Khan!",
      cultural: "Nomadic lifestyle, horseback culture, and throat singing",
      food: "Famous for mutton, dairy products, and fermented mare's milk"
    }
  },
  {
    id: 168,
    flag: "🇧🇳",
    difficulty: "hard",
    cluePool: [
      "I'm a small, very rich country in Southeast Asia on the island of Borneo.",
      "I'm ruled by a Sultan and have lots of oil and gas.",
      "I'm completely surrounded by Malaysia except for my coast.",
      "I speak Malay and my capital is Bandar Seri Begawan with golden mosques.",
      "I'm one of the richest countries in the world because of oil and gas.",
      "I have beautiful rainforests with orangutans, proboscis monkeys, and exotic birds.",
      "I'm an Islamic sultanate where the Sultan lives in a huge golden palace.",
      "I have traditional water villages built on stilts over the river.",
      "I eat delicious ambuyat starch with spicy dipping sauces and fresh seafood.",
      "I make beautiful traditional crafts like silverware and handwoven textiles.",
      "I have free education and healthcare for all my people.",
      "I celebrate Islamic holidays and have peaceful, family-focused culture."
    ],
    answer: "Brunei",
    funFact: {
      language: "Malay",
      currency: "Brunei Dollar",
      capital: "Bandar Seri Begawan",
      uniqueFact: "I'm one of the richest countries per person thanks to oil and gas!",
      cultural: "Islamic sultanate, traditional crafts, and oil wealth",
      food: "Famous for ambuyat starch, grilled fish, and tropical fruits"
    }
  },
  {
    id: 169,
    flag: "🇹🇱",
    difficulty: "hard",
    cluePool: [
      "I'm a small country in Southeast Asia that speaks Portuguese and Tetum.",
      "I'm on half of an island, with Indonesia on the other half.",
      "I'm one of the world's youngest countries, gaining independence in 2002.",
      "I speak Portuguese and Tetum and my capital is Dili by the ocean.",
      "I share the island of Timor with Indonesia and have beautiful beaches.",
      "I have mountains, coffee plantations, and traditional woven textiles.",
      "I'm mostly Catholic because of Portuguese colonial influence for 400 years.",
      "I grow delicious coffee beans that are exported around the world.",
      "I eat tasty ikan pepes grilled fish, rice, and Portuguese-influenced dishes.",
      "I have beautiful coral reefs perfect for snorkeling and diving.",
      "I celebrate independence day with traditional dancing and music.",
      "I'm working hard to build schools, hospitals, and roads for my people."
    ],
    answer: "East Timor",
    funFact: {
      language: "Portuguese and Tetum",
      currency: "US Dollar",
      capital: "Dili",
      uniqueFact: "I'm one of the world's youngest countries, independent since 2002!",
      cultural: "Portuguese colonial heritage, Catholic faith, and island traditions",
      food: "Famous for ikan pepes grilled fish, rice, and Portuguese-influenced dishes"
    }
  },
  {
    id: 170,
    flag: "🇲🇻",
    difficulty: "hard",
    cluePool: [
      "I'm made of 1,192 coral islands in the Indian Ocean.",
      "I'm the lowest and flattest country on Earth.",
      "I'm famous for luxury resorts and crystal-clear water.",
      "I speak Dhivehi and my capital Malé is very crowded on a small island.",
      "I'm the lowest country on Earth with an average height of only 5 feet above sea level.",
      "I have amazing coral reefs with colorful fish, sharks, and manta rays.",
      "I'm worried about climate change because rising oceans might cover my islands.",
      "I have luxury overwater bungalows where tourists can stay above the lagoon.",
      "I eat delicious fish curry, coconut rice, and fresh tropical fruits.",
      "I'm a Muslim country where people pray five times a day in beautiful mosques.",
      "I catch tuna fish and tourism is how most of my people make money.",
      "I have some of the clearest, bluest water in the world perfect for swimming."
    ],
    answer: "Maldives",
    funFact: {
      language: "Dhivehi",
      currency: "Maldivian Rufiyaa",
      capital: "Malé",
      uniqueFact: "I'm the lowest country on Earth with an average height of just 5 feet above sea level!",
      cultural: "Island paradise, luxury tourism, and fishing traditions",
      food: "Famous for fish curry, coconut rice, and tropical fruits"
    }
  },
  {
    id: 171,
    flag: "🇫🇲",
    difficulty: "hard",
    cluePool: [
      "I'm made of over 600 islands scattered across the Pacific Ocean.",
      "I speak English and have different island cultures.",
      "I'm in free association with the United States.",
      "I speak English and my capital Palikir is on Pohnpei island.",
      "I'm spread across 1 million square miles of beautiful Pacific Ocean.",
      "I have four main island states: Yap, Chuuk, Pohnpei, and Kosrae.",
      "I'm famous for traditional navigation using stars, waves, and wind patterns.",
      "I have amazing diving with coral reefs, sharks, and World War 2 shipwrecks.",
      "I eat fresh fish, taro root, breadfruit, and delicious coconut dishes.",
      "I use the US dollar and have close ties with America for defense.",
      "I have traditional stick charts that help sailors navigate the ocean.",
      "I celebrate island culture with dancing, weaving, and storytelling."
    ],
    answer: "Micronesia",
    funFact: {
      language: "English",
      currency: "US Dollar",
      capital: "Palikir",
      uniqueFact: "I'm spread across 1 million square miles of Pacific Ocean!",
      cultural: "Diverse island cultures, traditional navigation, and US ties",
      food: "Famous for fish, taro, breadfruit, and coconut dishes"
    }
  },
  {
    id: 172,
    flag: "🇲🇭",
    difficulty: "hard",
    cluePool: [
      "I'm a group of islands and atolls in the Pacific Ocean.",
      "I speak English and Marshallese and was used for nuclear testing.",
      "I'm in free association with the United States.",
      "I speak English and Marshallese and my capital is Majuro atoll.",
      "I was used for 67 nuclear bomb tests which affected my environment.",
      "I'm made of 29 coral atolls and over 1,000 tiny islands.",
      "I'm threatened by rising sea levels that could cover my low islands.",
      "I have amazing traditional navigation skills using stick charts and stars.",
      "I eat fresh fish, breadfruit, coconut, and rice dishes every day.",
      "I use the US dollar and my people can live and work in America.",
      "I'm worried about climate change making my islands disappear underwater.",
      "I celebrate traditional culture with canoe racing and mat weaving."
    ],
    answer: "Marshall Islands",
    funFact: {
      language: "English and Marshallese",
      currency: "US Dollar",
      capital: "Majuro",
      uniqueFact: "I was used for 67 nuclear tests and am threatened by rising sea levels!",
      cultural: "Traditional navigation, nuclear legacy, and climate change concerns",
      food: "Famous for fish, breadfruit, coconut, and rice dishes"
    }
  },
  {
    id: 173,
    flag: "🇵🇼",
    difficulty: "hard",
    cluePool: [
      "I'm a group of islands in the Pacific Ocean famous for diving.",
      "I speak Palauan and English and have beautiful coral reefs.",
      "I'm one of the world's youngest countries.",
      "I speak Palauan and English and my capital is Ngerulmud.",
      "I have the world's first shark sanctuary protecting these amazing fish.",
      "I have magical Jellyfish Lake where you can swim with harmless jellyfish.",
      "I'm famous for some of the best scuba diving in the world.",
      "I have pristine coral reefs with colorful fish and giant clams.",
      "I eat fresh fish, taro root, and sometimes traditional bat soup.",
      "I protect 80% of my ocean as a marine sanctuary for future generations.",
      "I have traditional culture with storytelling, dancing, and stone money.",
      "I work hard to fight climate change and protect my beautiful ocean environment."
    ],
    answer: "Palau",
    funFact: {
      language: "Palauan and English",
      currency: "US Dollar",
      capital: "Ngerulmud",
      uniqueFact: "I have one of the world's first shark sanctuaries and amazing jellyfish lakes!",
      cultural: "Marine conservation, traditional culture, and diving tourism",
      food: "Famous for fish, taro, bat soup, and coconut dishes"
    }
  },
  {
    id: 174,
    flag: "🇳🇷",
    difficulty: "hard",
    cluePool: [
      "I'm the world's third-smallest country, a tiny island in the Pacific.",
      "I was rich from phosphate mining but now it's almost gone.",
      "I don't have an official capital city.",
      "I speak Nauruan and English and I'm only 8 square miles big.",
      "I'm the world's smallest island nation with only about 10,000 people.",
      "I used to be very rich from bird poop (phosphate) mining.",
      "I don't have a capital city because I'm too small to need one.",
      "I have a road that goes all the way around my island in just 30 minutes.",
      "I eat lots of imported food, fish, coconut, and rice dishes.",
      "I use the Australian dollar and have close ties with Australia.",
      "I'm working to restore my land after phosphate mining damaged it.",
      "I have beautiful coral reefs and love traditional fishing and singing."
    ],
    answer: "Nauru",
    funFact: {
      language: "Nauruan and English",
      currency: "Australian Dollar",
      capital: "No official capital",
      uniqueFact: "I'm the world's smallest island nation and have no official capital!",
      cultural: "Phosphate mining history, traditional fishing, and Australian ties",
      food: "Famous for fish, coconut, and imported foods"
    }
  },
  {
    id: 175,
    flag: "🇹🇻",
    difficulty: "hard",
    cluePool: [
      "I'm the world's fourth-smallest country, made of coral atolls.",
      "I speak Tuvaluan and English and am threatened by rising seas.",
      "I earn money from my internet domain '.tv'.",
      "I speak Tuvaluan and English and my capital is Funafuti atoll.",
      "I'm the fourth smallest country in the world with only 12,000 people.",
      "I earn money by selling my internet address '.tv' to TV companies worldwide.",
      "I'm made of 9 coral atolls that are very low and flat islands.",
      "I'm seriously threatened by rising sea levels from climate change.",
      "I eat fresh fish, coconut, taro root, and delicious pulaka root vegetables.",
      "I use the Australian dollar and have traditional Polynesian culture.",
      "I have beautiful lagoons perfect for fishing and traditional canoe sailing.",
      "I might become one of the first countries to disappear underwater from global warming."
    ],
    answer: "Tuvalu",
    funFact: {
      language: "Tuvaluan and English",
      currency: "Australian Dollar",
      capital: "Funafuti",
      uniqueFact: "I earn money from my '.tv' internet domain and might disappear underwater!",
      cultural: "Polynesian traditions, threatened by climate change, internet domain wealth",
      food: "Famous for fish, coconut, taro, and pulaka root"
    }
  }
];

// Random clue selection algorithm
export const getRandomClues = (cluePool: string[], count: number = 3): string[] => {
  if (cluePool.length <= count) {
    // If pool has 3 or fewer clues, return all clues
    return [...cluePool];
  }

  const selectedClues: string[] = [];
  const availableClues = [...cluePool]; // Create a copy to avoid mutating original

  // Randomly select 'count' number of unique clues
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * availableClues.length);
    selectedClues.push(availableClues[randomIndex]);
    availableClues.splice(randomIndex, 1); // Remove selected clue to avoid duplicates
  }

  return selectedClues;
};

// Smart progression system for family sessions (20-30 countries)
export const getProgressiveCountries = (): Country[] => {
  const easy = countryData.filter(c => c.difficulty === 'easy');
  const medium = countryData.filter(c => c.difficulty === 'medium');
  const hard = countryData.filter(c => c.difficulty === 'hard');

  // Shuffle each difficulty level
  const shuffleArray = (array: Country[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffledEasy = shuffleArray(easy);
  const shuffledMedium = shuffleArray(medium);
  const shuffledHard = shuffleArray(hard);

  // Create progression pattern: E-M-H-E-M-H... for 30 countries
  const progressiveSequence: Country[] = [];
  let easyIndex = 0, mediumIndex = 0, hardIndex = 0;

  for (let i = 0; i < 30; i++) {
    const position = i % 3;

    if (position === 0 && easyIndex < shuffledEasy.length) {
      // Easy country
      progressiveSequence.push(shuffledEasy[easyIndex++]);
    } else if (position === 1 && mediumIndex < shuffledMedium.length) {
      // Medium country
      progressiveSequence.push(shuffledMedium[mediumIndex++]);
    } else if (position === 2 && hardIndex < shuffledHard.length) {
      // Hard country
      progressiveSequence.push(shuffledHard[hardIndex++]);
    } else {
      // Fallback to medium if we run out of easy/hard
      if (mediumIndex < shuffledMedium.length) {
        progressiveSequence.push(shuffledMedium[mediumIndex++]);
      }
    }
  }

  return progressiveSequence;
};

// Helper function for completely random countries (if needed)
export const getRandomCountries = (): Country[] => {
  const shuffled = [...countryData];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};