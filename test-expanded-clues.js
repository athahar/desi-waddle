// Test expanded clue pools for major countries
const getRandomClues = (cluePool, count = 3) => {
  if (cluePool.length <= count) {
    return [...cluePool];
  }

  const selectedClues = [];
  const availableClues = [...cluePool];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * availableClues.length);
    selectedClues.push(availableClues[randomIndex]);
    availableClues.splice(randomIndex, 1);
  }

  return selectedClues;
};

// Test countries with expanded clue pools
const testCountries = [
  {
    name: "United States",
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
    ]
  },
  {
    name: "Japan",
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
    ]
  }
];

console.log("Testing expanded clue pools:");
console.log("========================================");

testCountries.forEach(country => {
  console.log(`\n🏁 ${country.name} (${country.cluePool.length} total clues)`);

  // Test 3 random selections to show variety
  for (let i = 1; i <= 3; i++) {
    const randomClues = getRandomClues(country.cluePool, 3);
    console.log(`\nSelection ${i}:`);
    randomClues.forEach((clue, index) => {
      console.log(`  ${index + 1}. ${clue}`);
    });
  }
  console.log("\n" + "=".repeat(40));
});

console.log("\n✅ Expanded clue system test completed!");
console.log("✅ Each country now provides varied gameplay experiences!");
console.log("✅ Kids won't be able to memorize the clues!");