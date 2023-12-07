"use Strict";

const body = document.querySelector("body");
const html = document.querySelector("html");
const textStream = document.querySelector(".textStream");
const inp = document.querySelector(".inp");
const bench = document.querySelector(".speed");
let isWhite = false;
let iniTime;
let speed;


//implement theme change when double clicking
html.addEventListener("dblclick", () => { 
  if (isWhite) {
    body.classList.remove("whiteGround")
    body.classList.add("blackGround");
    textStream.classList.add("whiteTheme");
    isWhite = false;
  } else {
    body.classList.remove("blackGround");
    body.classList.add("whiteGround");
    textStream.classList.remove("whiteTheme")
    textStream.classList.add("blackTheme");
    isWhite = true;
  }
});
//for rendering the text section
streams =
  "Double tap to inverse. The vast expanse of the universe is a topic that has fascinated humans for centuries. The universe, in all its infinite glory, is a vast, boundless expanse of space that is home to countless galaxies, stars, and planets. It's a place where the laws of physics as we know them can be bent and twisted, where time and space intertwine in ways that are beyond our comprehension. The universe is a place of mystery and wonder, a place where the very fabric of reality is woven from the threads of the cosmos. It's a place where the smallest particles can have the greatest impact, where the faintest whisper of a distant star can echo across the cosmos. The universe is a place of beauty and awe, a testament to the incredible complexity and diversity of nature. It's a place where the possibilities are endless, where the only limit is our imagination. The universe is a place of discovery and exploration, a place where every day brings new insights and revelations. It's a place where we can learn about our place in the cosmos, about the origins of life and the future of our species. The universe is a place of inspiration and wonder, a place that reminds us of our insignificance in the grand scheme of things, but also of our potential to achieve great things. It's a place that challenges us to push the boundaries of our knowledge and understanding, to strive for a better understanding of the world around us. The universe is a place of endless possibilities, a place where the only limit is our imagination. It's a place where we can dream, explore, and discover, a place where we can learn, grow, and evolve. The universe is a place of wonder and awe, a place that inspires us to reach for the stars and beyond. It's a place where we can find our place in the cosmos, where we can understand our place in the universe, and where we can explore the mysteries of the universe. The universe is a place of endless possibilities, a place where we can dream, explore, and discover, a place where we can learn, grow, and evolve. The universe is a place of wonder and awe, a place that inspires us to reach for the stars and beyond. It's a place where we can find our place in the cosmos, where we can understand our place in the universe, and where we can explore the mysteries of the universe. The universe is a place of endless possibilities, a place where we can dream, explore, and discover, a place where we can learn, grow, and evolve. The universe is a place of wonder and awe, a place that inspires us to reach for the stars and beyond. It's a place where we can find our place in the cosmos, where we can understand our place in the universe, and where we can explore the mysteries of the universe. The universe is a place of endless possibilities, a place where we can dream, explore, and discover, a place where we can learn, grow, and evolve. The universe is a place of wonder and awe, a place that inspires us to reach for the stars and beyond. It's a place where we can find our place in the cosmos, where we can understand our place in the universe, and where we can explore the mysteries of the universe. The universe is a place of endless possibilities, a place where we can dream, explore, and discover, a place where we can learn, grow, and evolve. The universe is a place of wonder and awe, a place that inspires us to reach for the stars and beyond. It's a place where we can find our place in the cosmos, where we can understand our place in the universe, and where we can explore the mysteries of the universe. The universe is a place of endless possibilities, a place where we can dream, explore, and discover, a place where we can learn, grow, and evolve. The universe is a place of wonder";

for (let i = 0; i < streams.length; i++) {
  console.log(i);
  let temp = `<div class="ltr${i} letters">${streams[i]}</div>`;
  textStream.insertAdjacentHTML("beforeend", temp);
}



//to calculate typing speed and change visited letter colors
letter = 0;
inp.addEventListener("input", (event) => {
  if (event.target.value === streams[letter]) {
    if (!iniTime) {
      iniTime = new Date();
    }
    document.querySelector(`.ltr${letter}`).style.color = "gray";
    letter++;
  }
  // speed = ((streams.length / ((new Date() - iniTime) / 1000)) * 60) / 5;
  // console.log(speed);
  // if (letter >= streams.length) {
  //   speed = ((streams.length / ((new Date() - iniTime) / 1000)) * 60) / 5;
  //   console.log(speed);
  // }
  speed = ((letter / ((new Date() - iniTime) / 1000)) * 60) / 5; // this will calculate the speed in WPM
  bench.innerText = speed.toFixed();
  event.target.value = "";
});
// while (true) {
//   setTimeout(() => {
//     console.log("Hello after 2 seconds");
//   }, 2000);
// }
