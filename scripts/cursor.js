const cursor = document.querySelector(".cursor");
const cursorMessage = document.querySelector(".cursor-message");
const anchor = document.querySelector("a");

document.addEventListener("mousemove", (e) => {
    let leftPosition = e.pageX -25;
    let topPosition = e.pageY -25;
    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
})

anchor.onmouseenter = (e) => {
    cursor.style.width = "60px";
    cursor.style.height = "60px";
}
anchor.onmouseleave = (e) => {
    cursor.style.width = "50px";
    cursor.style.height = "50px";
}



