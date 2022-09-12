const burgerContainer = document.querySelector(".burger-container");
const navExpand = document.querySelector(".nav-expand")
//nav 

burgerContainer.onclick = activateNav;


function activateNav() {
    var tween = gsap.to(".nav-expand", {
        duration: 0.3,
        x: 0,
        ease: "none",
        paused: true
      });
      tween.play()
}
