"use Strict";

const body = document.querySelector("body");
const html = document.querySelector("html");
const textStream = document.querySelector(".textStream");
const inp = document.querySelector(".inp");
const bench = document.querySelector(".speed");
const accuracy = document.querySelector(".accuracy");
const localhighest = document.querySelector(".highest");
const globalHighest = document.querySelector(".globalHighest");
const root = document.querySelector(":root");
let highestScoreLocal;
let isWhite = false;
let iniTime;
let speed;
let wrongHit = 0;
let highestScoreGlobal;

const randStream = (Math.random() * 5).toFixed();
console.log(randStream);
inp.focus(); //for focusing on the input section without clicking explicitly



//to render the paragraph
function streamRender(streams) {
  let wordEliment = "";
  for (let i = 0; i < streams.length; i++) {
    let temp = `<div class="ltr${i} letters">${streams[i]}</div>`;
    wordEliment += temp;
    if (streams[i] == " ") {
      textStream.insertAdjacentHTML(
        "beforeend",
        `<div class="word">${wordEliment}</div>`
      );
      wordEliment = "";
    }
  }
}

//to validate if the input char is the right one, also calculate and render the speed, accuracy and highest score;
function inputChecker(streams) {
  letter = 0;
  inp.addEventListener("input", (event) => {
    if (event.target.value === streams[letter]) {
      // document.querySelector(`.ltr${letter}`).style.color = "gray";
      document.querySelector(`.ltr${letter}`).classList.add("visitedLetters");
      letter++;
      if (!iniTime) {
        iniTime = new Date();
      }
    } else {
      wrongHit += 1;
      // document.querySelector(`.ltr${letter}`).style.backgroundColor = "white";
      // letter++;
    }
    speed = ((letter / ((new Date() - iniTime) / 1000)) * 60) / 5; // this will calculate the speed in WPM
    errorPercentage = (letter / (letter + wrongHit)) * 100; // to calculate the accuracy

    //to determine if the current typing speed is the highsest speed 
    if (letter > 333){
      if (highestScoreLocal < speed){
      highestScoreLocal = speed.toFixed();
      window.localStorage.setItem("highest", highestScoreLocal);
      }
      if (highestScoreGlobal<speed){
        setGlobalHigh(speed.toFixed())
        highestScoreGlobal=speed;
      }
    }


    //for rendering the the speed, accuracy and highest score
    accuracy.innerText = `accuracy: ${errorPercentage.toFixed(2)}%`;
    bench.innerText = `Speed: ${speed.toFixed()} WPM`;
    localhighest.innerText = `highest: ${highestScoreLocal} WPM`;
    event.target.value = "";
  });
}

//sends global highscore to the backend
const setGlobalHigh = (speed) => {
  fetch(
    "https://type0-a8335-default-rtdb.asia-southeast1.firebasedatabase.app/stats.json",
    { method: "PUT", body: JSON.stringify({ globalHigh: speed }) }
  );
  globalHighest.innerText = `globalHighest: ${speed} WPM`;
};




//for setting the highest score from local storage
if (window.localStorage.highest) {
  highestScoreLocal = window.localStorage.highest;
  localhighest.innerText = `highest: ${highestScoreLocal} WPM`;
} else {
  highestScoreLocal = 0;
  window.localStorage.setItem("highest", 0);
}

//for getting the global highscore form the backend
fetch(
  "https://type0-a8335-default-rtdb.asia-southeast1.firebasedatabase.app/stats/globalHigh.json"
)
  .then((response) => response.json())
  .then((response) => {
    highestScoreGlobal=response
    globalHighest.innerText = `globalHighest: ${response} WPM`;
  });


//calls previously defined funtions to render texts and check inputs
fetch(
  `https://type0-a8335-default-rtdb.asia-southeast1.firebasedatabase.app/txtStreams/stream00${randStream}.json`
)
  .then((response) => response.json())
  .then((response) => {
    const streams = response;
    streamRender(streams);
    inputChecker(streams);
  });


//implement theme change when double clicking
html.addEventListener("dblclick", () => {
  if (isWhite) {
    root.style.setProperty("--background", "black");
    root.style.setProperty("--statsBackground", "black");
    root.style.setProperty("--visited", "white");
    isWhite = false;
  } else {
    root.style.setProperty("--background", "white");
    root.style.setProperty("--statsBackground", "white");
    root.style.setProperty("--visited", "black");
    isWhite = true;
  }
});

//setGlobalHigh(0); // to reset the global highscore in the backend
