const randomText = [
  "🌙 Finally, I can sleep",
  "Continue to fight, continue to win.",
  "Desain itu bersih, layout itu putih.",
];

const random = Math.floor(Math.random() * randomText.length);
document.getElementById("random-text").innerHTML = randomText[random];
