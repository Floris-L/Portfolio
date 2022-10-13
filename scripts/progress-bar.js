const progress = document.querySelector(".completed").innerHTML;
const progressBar = document.querySelector(".progressbar");
const inverseProgressPercent = -Math.floor(progress / 60 * 100) + 100; 
const needMoreEC = document.querySelector(".need-more-ec");


progressBar.style.background = `linear-gradient(to left, transparent ${inverseProgressPercent}%, var(--main-yellow)  ${inverseProgressPercent}%)`;
needMoreEC.innerHTML = progress > 44 ? "You have enough EC to pass!" : `${45 - progress} more EC needed`;

