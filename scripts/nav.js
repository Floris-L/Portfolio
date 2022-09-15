const navExpand = document.querySelector(".nav-expand")
const viewWidth = window.innerWidth;

let open = false;

burgerContainer.onclick = activateNav;
navExpand.onclick = activateNav;

function activateNav() {
    
    open === false ? open = true : open = false;
    console.log(open);  
    var tween = gsap.to(".nav-expand", {
        duration: 0.3,
        x: open === true ?  0 : -viewWidth,
        ease: "none",
        paused: true
      });
      tween.play()
}
