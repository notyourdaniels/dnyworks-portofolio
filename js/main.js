//shadow header
window.onscroll = () => {
  shadowHeader();
};

const shadowHeader = () => {
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
];

const random = Math.floor(Math.random() * randomText.length);
document.getElementById("random-text").innerHTML = randomText[random];
