const main = document.querySelector("main");
const mainWidth = main.clientWidth;
const mainHeight = main.clientHeight;
let active = false;

const headerText = document.querySelector(".header-text-container");
console.log(headerText.children[0].children[0].style.display)

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
    y: mainHeight * - 0.2 -y,
    scaleX: 0,
    scaleY: 0,
    ease: "none",
    paused: true
  });


  tween1.play();
  tween2.play();
  tween3.play();
  tween4.play();
  tween5.play();
}

function rearrangeHeaderText() {
  headerText.children[0].children[0].style.display = "none";
  document.querySelector(".floris-lamfers").classList = "outlined";
}

function animateMenu() {
  rearrangeHeaderText();
  active = true;
}

// window.onclick = animateMenu;
animateMenu();

document.addEventListener("mousemove", parallax);
function parallax(e) {
  if (!active) return;
  const x = (window.innerWidth - e.pageX * 4) / 100;
  const y = (window.innerHeight - e.pageY * 4) / 100;
  tweens(x, y)
}


