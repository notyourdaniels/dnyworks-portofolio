//shadow header
window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("solidHeader").className = "solidHeaderShadow";
  } else {
    document.getElementById("solidHeader").className = "solidHeader";
  }
};

//darkmode
if (typeof Storage !== "undefined") {
  if (localStorage.darkMode === "true") {
    document.body.classList.toggle("dark");
    document.getElementById("check").checked = true;
  }
}

const check = document.getElementById("check");
const burgerMenu = document.getElementById("burger-menu");
const crossBurger = document.getElementById("cross-burger");
const navbar = document.getElementsByTagName("nav")[0];

check.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  if (typeof Storage !== "undefined") {
    if (check.checked) {
      localStorage.darkMode = true;
    } else {
      localStorage.darkMode = false;
    }
  }
});

//Header burgermenu
burgerMenu.onclick = () => {
  navbar.style.transition = "0.5s ease-in-out";
  navbar.classList.add("nav-mobile");
  setTimeout(() => {
    navbar.style.transition = "";
  }, 500);
};

crossBurger.onclick = () => {
  navbar.style.transition = "0.5s ease-in-out";
  navbar.classList.remove("nav-mobile");
  setTimeout(() => {
    navbar.style.transition = "";
  }, 500);
};

//footerRandom
const randomText = [
  "🌙 Finally, I can sleep",
  "Continue to fight, continue to win.",
  "Nothing comes from rushing.",
  "Actually, I'm not a big fan of coffee",
  "It cost $ 0.00 to be a nice person",
  "Relax, you got this !",
  "My first programming language is PASCAL",
  "Alien speaks Java language",
];

let random = 0;
if (typeof Storage !== "undefined") {
  if (localStorage.randomFooter) {
    random = Math.floor(Math.random() * randomText.length);
    while (random === localStorage.randomFooter) {
      random = Math.floor(Math.random() * randomText.length);
    }
  } else {
    localStorage.randomFooter = Math.floor(Math.random() * randomText.length);
  }
} else {
  random = Math.floor(Math.random() * randomText.length);
}

if (document.getElementById("random-text")) {
  document.getElementById("random-text").innerHTML = randomText[random];
}

//console log styling
console.log(
  "%c HAYO KAMU MAU NGAPAIN ?!",
  "font-weight: bold; font-size: 50px;color: red"
);
console.log(
  `%c Yahh ketauan dehhh 😔 \n \n \n © dnyworks 2021 \n ${randomText[random]}`,
  "font-size: 20px; margin-left: 15px"
);
