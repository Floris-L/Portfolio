const main = document.querySelector("main");
const mainWidth = main.clientWidth;
const mainHeight = main.clientHeight;

const headerText = document.querySelector(".header-text-container");
console.log(headerText.children[0].children[0].style.display)

const fAnimationDuration = 0.5;

function tweens() {

  var tween1 = gsap.to(".b1", {
    duration: fAnimationDuration,
    y: mainHeight * 0.5,
    ease: "none",
    paused: true
  });

  var tween2 = gsap.to(".b2", {
    duration: fAnimationDuration,
    x: mainWidth * 0.02,
    y: mainHeight * 0.5,
    ease: "none",
    paused: true
  });

  var tween3 = gsap.to(".b3", {
    duration: fAnimationDuration,
    x: mainWidth * -0.44,
    y: mainHeight * 0.165,

    ease: "none",
    paused: true
  });

  var tween4 = gsap.to(".b4", {
    duration: fAnimationDuration,
    x: mainWidth * -0.42,
    y: mainHeight * 0.165,
    ease: "none",
    paused: true
  });

  var tween5 = gsap.to(".b5", {
    duration: fAnimationDuration,
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

  tween1.play();
  tween2.play();
  tween3.play();
  tween4.play();
  tween5.play();
  tween6.play();
}

function rearrangeHeaderText() {
  headerText.children[0].children[0].style.display = "none";
  document.querySelector(".floris-lamfers").classList = "outlined";
}

function animateMenu() {
  tweens()
  rearrangeHeaderText();
}

// window.onclick = animateMenu;
animateMenu();

document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  });
}