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
let highestS;
let isWhite = false;
let iniTime;
let speed;
let wrongHit = 0;

const randStream = (Math.random() * 5).toFixed();
console.log(randStream);

inp.focus(); //for focusing on the input section without clicking explicitly

//for setting the highest score from local storage
if (window.localStorage.highest) {
  highestS = window.localStorage.highest;
  localhighest.innerText = `highest: ${highestS} WPM`;
} else {
  highestS = 0;
  window.localStorage.setItem("highest", 0);
}


//to render the paragraph
function streamRender(streams) {
  let wordEliment ="";
  for (let i = 0; i < streams.length; i++) {
    let temp = `<div class="ltr${i} letters">${streams[i]}</div>`;
    wordEliment +=temp;
    if (streams[i]==" "){
      textStream.insertAdjacentHTML("beforeend", `<div class="word">${wordEliment}</div>`);
      wordEliment = "";

    }
  }
}

//to validate if the input char is the right one, also calculate and render the speed, accuracy and highest score;
function inputChecker(streams) {
  letter = 0;
  inp.addEventListener("input", (event) => {
    if (event.target.value === streams[letter]) {
      document.querySelector(`.ltr${letter}`).style.color = "gray";
      letter++;
      if (!iniTime) {
        iniTime = new Date();
      }
    } else {
      wrongHit += 1;
    }
    speed = ((letter / ((new Date() - iniTime) / 1000)) * 60) / 5; // this will calculate the speed in WPM
    errorPercentage = (letter / (letter + wrongHit)) * 100; // to calculate the accuracy

    if ((letter > 333) & (highestS < speed)) {
      //to determine if the current typing speed is the highsest speed
      highestS = speed.toFixed();
      window.localStorage.setItem("highest", highestS);
    }

    //for rendering the the speed, accuracy and highest score
    accuracy.innerText = `accuracy: ${errorPercentage.toFixed(2)}%`;
    bench.innerText = `Speed: ${speed.toFixed()} WPM`;
    localhighest.innerText = `highest: ${highestS} WPM`;
    event.target.value = "";
  });
}

const setGlobalHigh = (speed)=>{
  fetch(
    "https://type0-a8335-default-rtdb.asia-southeast1.firebasedatabase.app/stats.json",
    { method: "PUT", body: JSON.stringify({ globalHigh: speed }) }
  );
}



fetch(
  "https://type0-a8335-default-rtdb.asia-southeast1.firebasedatabase.app/stats/globalHigh.json"
)
  .then((response) => response.json())
  .then((response) => {
    if (response<highestS){
      setGlobalHigh(highestS)
      response = highestS
    }
    globalHighest.innerText = `globalHighest: ${response} WPM`;
  });
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
    root.style.setProperty("--fontColor", "white");
    isWhite = false;
  } else {
    root.style.setProperty("--background", "white");
    root.style.setProperty("--statsBackground", "white");
    root.style.setProperty("--fontColor", "black");
    isWhite = true;
  }
});
