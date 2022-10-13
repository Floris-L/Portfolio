const main = document.querySelector("main");
const headerText = document.querySelector(".header-text-container");
const boxTitle = document.querySelectorAll(".box-title");
const redHeaderText = document.querySelector(".red-header-text");
const whiteHeaderText = document.querySelector(".white-header-text");
const shortIntro = document.querySelector(".short-intro");
const motivation = document.querySelector(".motivation");
const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");
const b4 = document.querySelector(".b4");
const b5 = document.querySelector(".b5");
const favicon = document.getElementById("favicon");
const mainWidth = main.clientWidth;
const mainHeight = main.clientHeight;
const fAnimationDuration = 0.5;

let active = false;

//utility functions
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setBg(element, percent, color) {
  element.style.background = `linear-gradient(to left, rgba(0, 0, 0, 0) ${percent}%, var(${color}) ${percent}%)`;
}

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
    x: mainWidth * -0.15 + x,
    y: 0 + y,
    scaleX: 0.6,
    scaleY: 0.3,
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

  var tween7 = gsap.to(".i1", {
    duration: fAnimationDuration,
    x:  - x,
    y:  - y,
    ease: "none",
    paused: true
  });

  var tween8 = gsap.to(".i2", {
    duration: fAnimationDuration,
    x:  - x,
    y:  - y,
    ease: "none",
    paused: true
  });


  tween1.play();
  tween2.play();
  tween3.play();
  tween4.play();
  tween5.play();
  tween6.play();
  tween7.play();
  tween8.play();
}


function color() {

  setTimeout(() => {
    whiteHeaderText.style.color = "#fff";
  }, 100);

  setTimeout(() => {
    redHeaderText.style.color = "var(--main-red)";
  }, 2200);

  setTimeout(() => {
    setBg(b1, 0, "--main-red");
  }, 600);

  setTimeout(() => {
    setBg(b2, 0, "--main-blue");
  }, 1500);

  setTimeout(() => {
    setBg(b3, 0, "--main-yellow");
  }, 1200);

  setTimeout(() => {
    setBg(b4, 0, "--main-green");
  }, 2000);

  setTimeout(() => {
    setBg(b5, 0, "--main-blue");
  }, 400);
}

function smallerGradient() {
  setBg(b1, 92, "--main-red");
  setBg(b2, 92, "--main-blue");
  setBg(b3, 92, "--main-yellow");
  setBg(b4, 92, "--main-green");
  setBg(b5, 92, "--main-blue");
}



function onload() {
  color();
  setTimeout(() => {
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
  cursorMessage.style.display = "none";
  rearrangeHeaderText();
  smallerGradient();
  tweens(30, 30);
  active = true;
}

window.onclick = animateMenu;

function parallax(e) {
  if (!active) return;
  const x = (window.innerWidth - e.pageX * 4) / 100;
  const y = (window.innerHeight - e.pageY * 4) / 100;
  tweens(x, y)
}

onload();
document.addEventListener("mousemove", parallax);

b5.onclick = (e) => {
  motivation.style.display = "flex";
  box.forEach(box => {
    if (box.classList[1] !== "b5") {
      box.style.display = "none";
    }
  })
}