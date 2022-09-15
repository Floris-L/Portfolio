const typingLine = document.querySelector(".typing-line");
const trailingLine = document.querySelector(".trailing-line");
const txtArr = [];
let typing = false;
let i = 1;
let errors = 0;
let a = 0;
let seconds = 0;
let minutes = 0;

const beeMovie = "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.";


// Putting submitted elements in array
const wordRemover = () => {
  let word = document.querySelectorAll("span");
  word.forEach((element) => {
    element.remove();
  });
};
const textToArray = (txt) => {
  for (let k = 0; k < txt.length; k++) {
    txtArr[k] = txt[k];
  }

  const wordPlacer = (word) => {
    a++;
    word.forEach((element) => {
      let newSpan = document.createElement("span");
      newSpan.id = a.toString();
      newSpan.innerHTML = element;
      typingLine.appendChild(newSpan);
      a++;
    });

    const space = document.createElement("span");
    space.innerHTML = "&nbsp;";
    space.id = a.toString();
    typingLine.appendChild(space);
  };


  while (txtArr.length > 1) {
    let word = txtArr.includes(" ")
      ? txtArr.splice(0, txtArr.indexOf(" ") + 1)
      : txtArr.splice(0, txtArr.length);
    word.pop();
    wordPlacer(word);
  }
};

// Typing logic
window.onkeydown = (e) => {
  let input = e.key;
  let current = document.getElementById(i.toString());
  console.log(input)
  if(input === "Shift") {
    console.log("mika");
    return 0;
  };
  if (current.innerHTML === "&nbsp;" && input === " ") {
    typing = true;
    input = "&nbsp;";
  }
  console.log(errors)
  if (input === current.innerHTML) {
    current.style.color = "#444";
    typingLine.style.borderColor = "white";
    trailingLine.appendChild(current);
    i++;
  }

  if (input !== current.innerHTML) {
    typingLine.style.borderColor = "red";
    current.style.borderBottomColor = "red";
    errors++;
  }
};

textToArray(beeMovie);

// wpm
var wpmCaller = window.setInterval(function () {
  if (typing) wordsPerMinute();
}, 1000);

const wordsPerMinute = () => {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  let timer = minutes + seconds / 60;
  let wpm = (i - errors) / 5 / timer;
  document.querySelector(".wpm").innerHTML = `wpm: <b>${Math.ceil(wpm)}</b>`;
};
