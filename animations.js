const main = document.querySelector("main");
const mainWidth = main.clientWidth;
const mainHeight = main.clientHeight;

const headerText = document.querySelector(".header-text-container");
console.log(headerText.children[0].children[0].style.display)


var tween1 = gsap.to(".b1", {
    duration: 0.1, 
    y: mainHeight * 0.5, 
    ease: "none", 
    paused: true
});

var tween2 = gsap.to(".b2", {
    duration: 0.1, 
    x: mainWidth * 0.02,
    y: mainHeight * 0.5, 
    ease: "none", 
    paused: true
});

var tween3 = gsap.to(".b3", {
  duration: 0.1, 
  x: mainWidth * -0.44,
  y: mainHeight * 0.165, 

  ease: "none", 
  paused: true
});

var tween4 = gsap.to(".b4", {
  duration: 0.1, 
  x: mainWidth * -0.42,
  y: mainHeight * 0.165, 
  ease: "none", 
  paused: true
});

var tween5 = gsap.to(".b5", {
  duration: 0.1, 
  y: mainHeight * - 0.2,
  scaleX: 4,
  scaleY: 2,
  backgroundColor: "#fff",
  ease: "none", 
  paused: true
});

var tween6 = gsap.to(".floris-lamfers", {
  duration: 0.1, 
  y: mainHeight * - 0.01,
  x: mainWidth * 0.2,
  scale: 2,
  ease: "none", 
  paused: true
});

function rearrangeHeaderText () {
  headerText.children[0].children[0].style.display = "none";
  document.querySelector(".floris-lamfers").classList = "outlined";
  document.querySelector(".floris-lamfers").style.fontSize = `${mainWidth * 0.1}px`;
}
  

function animateMenu() {
  tween1.play();
  tween2.play();
  tween3.play();
  tween4.play();
  tween5.play();
  tween6.play();
  rearrangeHeaderText();
}

animateMenu();