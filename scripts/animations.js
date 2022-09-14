const main = document.querySelector("main");
const headerText = document.querySelector(".header-text-container");
const boxTitle = document.querySelectorAll(".box-title");
const redHeaderText = document.querySelector(".red-header-text");
const whiteHeaderText = document.querySelector(".white-header-text");
const box = document.querySelectorAll(".box");
const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");
const b4 = document.querySelector(".b4");
const b5 = document.querySelector(".b5");
const favicon = document.getElementById("favicon");
const mainWidth = main.clientWidth;
const mainHeight = main.clientHeight;
let active = false;
const emoji = [
  "🦃",
  "🐓",
  "🦆",
  "🦢",
  "🦜",
  "🐳",
  "🐍",
  "🦄",
  "🐦",
  "🐟",
  "🐠",
];

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomFavicon = () => {
  favicon.setAttribute(
    "href",
    `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${
      emoji[randomNumberBetween(0, 10)]
    }</text></svg>`
  );
};

randomFavicon();





const fAnimationDuration = 0.5;

function tweens(x, y) {
  var tween1 = gsap.to(".b1", {
    duration: fAnimationDuration,
    x: x,
    y: mainHeight * 0.5 + y,
    ease: "none",
    paused: true
  });

  var tween2 = gsap.to(".b2", {
    duration: fAnimationDuration,
    x: mainWidth * 0.02 + x + 10,
    y: mainHeight * 0.5 + y,
    ease: "none",
    paused: true
  });

  var tween3 = gsap.to(".b3", {
    duration: fAnimationDuration,
    x: mainWidth * -0.44 + x,
    y: mainHeight * 0.165 + y,

    ease: "none",
    paused: true
  });

  var tween4 = gsap.to(".b4", {
    duration: fAnimationDuration,
    x: mainWidth * -0.42 + x,
    y: mainHeight * 0.165 + y,
    ease: "none",
    paused: true
  });

  var tween5 = gsap.to(".b5", {
    duration: fAnimationDuration - 0.5,
    x: x,
    y: mainHeight * - 0.2 - y,
    scaleX: 0,
    scaleY: 0,
    ease: "none",
    paused: true
  });

  var tween6 = gsap.to(".outlined", {
    duration: fAnimationDuration - 0.5,
    x: mainWidth * 0.05 - x,
    y: mainHeight * -0.04 - y,
    ease: "none",
    paused: true
  });

  tween1.play();
  tween2.play();
  tween3.play();
  tween4.play();
  tween5.play();
  tween6.play();
}

function color() {
  
  setTimeout(() => {
    whiteHeaderText.style.color = "#fff";
  }, 100);
  
  setTimeout(() => {
    redHeaderText.style.color = "var(--main-red)";
  }, 2200);
  
  setTimeout(() => {
    b1.style.backgroundColor = "var(--main-red)";
  }, 600);

  setTimeout(() => {
    b2.style.backgroundColor = "var(--main-blue)";
  }, 1500);

  setTimeout(() => {
    b3.style.backgroundColor = "var(--main-yellow)";
  }, 1200);

  setTimeout(() => {
    b4.style.backgroundColor = "var(--main-green)";
  }, 2000);

  setTimeout(() => {
    b5.style.backgroundColor = "var(--main-blue)";
  }, 400);
}

function giveBoxGradient() {

b1.style.background = "linear-gradient(to left, rgba(0, 0, 0, 0) 50%, var(--main-red) 50%)"
b2.style.background = "linear-gradient(to left, rgba(0, 0, 0, 0) 50%, var(--main-red) 50%)"
b3.style.background = "linear-gradient(to left, rgba(0, 0, 0, 0) 50%, var(--main-red) 50%)"
b4.style.background = "linear-gradient(to left, rgba(0, 0, 0, 0) 50%, var(--main-red) 50%)"
b5.style.background = "linear-gradient(to left, rgba(0, 0, 0, 0) 50%, var(--main-red) 50%)"
}



function onload() {
  color();

  setTimeout(() => {
    cursorMessage.style.display = "inline";
  }, 2200);
}

function rearrangeHeaderText() {
  headerText.children[0].children[0].style.display = "none";
  document.querySelector(".floris-lamfers").classList = "outlined";
  box.forEach(box => {
    box.style.transition = "none";
  })
  boxTitle.forEach(title => {
    title.style.display = "inline";
  })
}

function animateMenu() {
  rearrangeHeaderText();
  giveBoxGradient();
  tweens(30, 30);
  active = true;
}

window.onclick = animateMenu;
// animateMenu();

function parallax(e) {
  if (!active) return;
  const x = (window.innerWidth - e.pageX * 4) / 100;
  const y = (window.innerHeight - e.pageY * 4) / 100;
  tweens(x, y)
}

onload();
document.addEventListener("mousemove", parallax);

