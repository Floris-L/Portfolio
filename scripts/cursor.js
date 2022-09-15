const cursor = document.querySelector(".cursor");
const cursorMessage = document.querySelector(".cursor-message");
const anchor = document.querySelectorAll("a");
const burgerContainer = document.querySelector(".burger-container");
const box = document.querySelectorAll(".box");

document.addEventListener("mousemove", (e) => {
    let leftPosition = e.pageX -27;
    let topPosition = e.pageY -27;
    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
})




const cursorBig = () => {
    cursor.style.width = "60px";
    cursor.style.height = "60px";
}

const cursorNormal = () => {
    cursor.style.width = "50px";
    cursor.style.height = "50px";
}

window.onmousedown = () => {
    cursor.style.borderColor = "#fff";
    cursor.style.borderWidth = "7px";
}
window.onmouseup = () => {
    cursor.style.borderColor = "var(--main-blue)"
    cursor.style.borderWidth = "5px";

}

box.forEach(element => {
    element.onmouseenter = cursorBig;
    element.onmouseleave = cursorNormal;
})

anchor.forEach(a => {
    a.onmouseenter = cursorBig;
    a.onmouseleave = cursorNormal;
})

burgerContainer.onmouseover = cursorBig;
burgerContainer.onmouseleave = cursorNormal;

