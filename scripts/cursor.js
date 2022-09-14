const cursor = document.querySelector(".cursor");
const cursorMessage = document.querySelector(".cursor-message");

document.addEventListener("mousemove", (e) => {
    let leftPosition = e.pageX -25;
    let topPosition = e.pageY -25;
    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
})



