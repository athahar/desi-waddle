// Simple test for random clue selection
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

// Test with a sample country (United States with expanded clue pool)
const usCluePool = [
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
];

console.log("Testing random clue selection:");
console.log("Total clues available:", usCluePool.length);
console.log("");

// Test multiple selections to verify randomness
for (let i = 1; i <= 5; i++) {
  const randomClues = getRandomClues(usCluePool, 3);
  console.log(`Test ${i}: Selected ${randomClues.length} clues:`);
  randomClues.forEach((clue, index) => {
    console.log(`  ${index + 1}. ${clue}`);
  });
  console.log("");
}

console.log("✅ Random clue selection test completed!");