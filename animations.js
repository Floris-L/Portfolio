const main = document.querySelector("main");
const mainWidth = main.clientWidth;
const mainHeight = main.clientHeight;


var tween1 = gsap.to(".b1", {
    duration: 2, 
    y: mainHeight * 0.5, 
    ease: "none", 
    paused: true
});

var tween2 = gsap.to(".b2", {
    duration: 2, 
    x: mainWidth * 0.02,
    y: mainHeight * 0.5, 
    ease: "none", 
    paused: true
});

var tween3 = gsap.to(".b3", {
  duration: 2, 
  x: mainWidth * -0.44,
  y: mainHeight * 0.165, 

  ease: "none", 
  paused: true
});

var tween4 = gsap.to(".b4", {
  duration: 2, 
  x: mainWidth * -0.42,
  y: mainHeight * 0.165, 
  ease: "none", 
  paused: true
});

var tween5 = gsap.to(".b5", {
  duration: 2, 
  y: mainHeight * 0.5, 
  ease: "none", 
  paused: true
});


  
  
tween1.play();
tween2.play();
tween3.play();
tween4.play();
tween5.play();
