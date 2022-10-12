const progress = document.querySelector(".completed").innerHTML;
const progressBar = document.querySelector(".progressbar");
const inverseProgressPercent = -Math.floor(progress / 60 * 100) + 100; 

progressBar.style.background = `linear-gradient(to left, transparent ${inverseProgressPercent}%, var(--main-yellow)  ${inverseProgressPercent}%)`;