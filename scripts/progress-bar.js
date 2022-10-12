const progress = document.querySelector(".completed").innerHTML;
const progressBar = document.querySelector(".progressbar");
const inverseProgressPercent = -Math.floor(progress / 60 * 100) + 100; 
const aside = document.querySelector("aside");
const collapseButton = document.querySelector(".collapse-aside");
let collapsed = false;

progressBar.style.background = `linear-gradient(to left, transparent ${inverseProgressPercent}%, var(--main-yellow)  ${inverseProgressPercent}%)`;

aside.onclick = e => {
    if(collapsed === true) {
    aside.style.translate = "-190px";
    collapsed = false;
    }
}

collapseButton.onclick = e => {
    aside.style.translate = "190px";
    collapsed = true;
}
