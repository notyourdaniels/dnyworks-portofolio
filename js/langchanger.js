let lang = [
  ["Hello", "scroll down", "Welcome to My", "Portfolio !"],
  ["Halo", "geser ke bawah", "Selamat Datang di", "Portofolio Saya !"],
  ["こんにちは", "下へスクロール", "私のポートフォリオへ", "ようこそ !"],
  ["你好", "向下滚动", "欢迎来到", "我的投资组合 !"],
  ["Ahoy", "scroll down", "ahoy t'", "me portfolio !"],
  ["404", "just kidding", "Welcome to My", "Portfolio !"],
];

const greetings1 = document.getElementById("greetings-1");
const greetings2 = document.getElementById("greetings-2");
const greetings3 = document.getElementById("greetings-3");
const actionSwipe = document.getElementById("action-swipe");
// greetings1.innerHTML = "Coba";

let counter = 1;
setInterval(() => {
  if (counter > lang.length - 1) {
    counter = 0;
    greetings1.innerHTML = lang[counter][0];
    actionSwipe.innerHTML = lang[counter][1];
    greetings2.innerHTML = lang[counter][2];
    greetings3.innerHTML = lang[counter][3];
    counter++;
  } else {
    greetings1.innerHTML = lang[counter][0];
    actionSwipe.innerHTML = lang[counter][1];
    greetings2.innerHTML = lang[counter][2];
    greetings3.innerHTML = lang[counter][3];
    counter++;
  }
}, 1000);
