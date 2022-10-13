const cursor = document.querySelector(".cursor");
const cursorMessage = document.querySelector(".cursor-message");
const anchor = document.querySelectorAll("a");
const burgerContainer = document.querySelector(".burger-container");
const box = document.querySelectorAll(".box");
let cursorColor = "var(--main-blue)";
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

const cursorReset = () => {
    cursor.style.backgroundImage = "";
    cursor.style.border = "4px #fff solid";
    cursor.style.filter = "";
}

window.onmousedown = () => {
    cursor.style.borderColor = cursorColor;
    cursor.style.borderWidth = "7px";
}
window.onmouseup = () => {
    cursor.style.borderColor = "#fff";
    cursor.style.borderWidth = "5px";
    
}

box.forEach(element => {
    element.onmouseleave = cursorReset;
})

anchor.forEach(a => {
    a.onmouseenter = cursorBig;
    a.onmouseleave = cursorNormal;
})



burgerContainer.onmouseover = cursorBig;
burgerContainer.onmouseleave = cursorNormal;

// set random favicon 

const emoji = [
    "🦃",
    "🐓",
    "🦆",
    "🦢",
    "🦜",
    "🐳",
    "🐍",
    "🦄",
    "🐦",
    "🐟",
    "🐠",
  ];
  
  //utility functions
  function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  function randomFavicon(){
    favicon.setAttribute(
      "href",
      `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji[randomNumberBetween(0, 10)]
      }</text></svg>`
    );
  };


  randomFavicon();

  b1.onmouseenter = () => {
    cursor.style.border = "0px";
    cursor.style.filter = "invert(1)";
    cursor.style.backgroundImage = "url(../media/images/controller.png";
}
b2.onmouseenter = () => {
    cursor.style.border = "0px";
    cursor.style.filter = "invert(1)";
    cursor.style.backgroundImage = "url(../media/images/profile.png";
}
b3.onmouseenter = () => {
    cursor.style.border = "0px";
    cursor.style.filter = "invert(1)";
    cursor.style.backgroundImage = "url(../media/images/graph-icon.png";
}
b4.onmouseenter = () => {
    cursor.style.border = "0px";
    cursor.style.filter = "invert(1)";
    cursor.style.backgroundImage = "url(../media/images/laptop.png";
}
b5.onmouseenter = () => {
    cursor.style.border = "0px";
    cursor.style.filter = "invert(1)";
    cursor.style.backgroundImage = "url(../media/images/rocket.png";
}