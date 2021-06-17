const randomText = [
  "🌙 Finally, I can sleep",
  "Continue to fight, continue to win.",
  "Nothing comes from rushing.",
];

const random = Math.floor(Math.random() * randomText.length);
document.getElementById("random-text").innerHTML = randomText[random];
