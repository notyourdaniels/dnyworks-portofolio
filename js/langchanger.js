const lang = [
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

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const text = (count) => {
  greetings1.innerHTML = lang[count][0];
  actionSwipe.innerHTML = lang[count][1];
  greetings2.innerHTML = lang[count][2];
  greetings3.innerHTML = lang[count][3];
};

const opacity = (value) => {
  greetings1.style.opacity = value;
  actionSwipe.style.opacity = value;
  greetings2.style.opacity = value;
  greetings3.style.opacity = value;
};

let counter = 1;
let begin = false;
let intervalText = 6000;
const transition = async () => {
  if (!begin) {
    text(0);
    await sleep(intervalText);
    begin = true;
    transition();
  } else if (counter == lang.length - 1) {
    opacity(0);
    await sleep(1000);
    opacity(1);
    text(counter);
    await sleep(intervalText);
    counter = 0;
    transition();
  } else {
    opacity(0);
    await sleep(1000);
    opacity(1);
    text(counter);
    counter++;
    await sleep(intervalText);
    transition();
  }
};

transition();

// counter = 0;
// opacity(0);
// await sleep(intervalText);
// opacity(1);
// text(counter);
// counter++;
// await sleep(intervalText);
