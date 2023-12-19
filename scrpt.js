"use Strict";

const body = document.querySelector("body");
const html = document.querySelector("html");
const textStream = document.querySelector(".textStream");
const inp = document.querySelector(".inp");
const bench = document.querySelector(".speed");
const accuracy = document.querySelector(".accuracy");
const highest = document.querySelector(".highest");
const root = document.querySelector(':root');
let highestS;
if (window.localStorage.highest) {
  highestS = window.localStorage.highest;
  highest.innerText = `highest: ${highestS} WPM`;
} else {
  highestS = 0;
  window.localStorage.setItem("highest", 0);
}
let isWhite = false;
let iniTime;
let speed;
let wrongHit = 0;


let p1 = "Artificial Intelligence (AI) is a branch of computer science that aims to create intelligent machines. It has become an essential part of the technology industry. Research associated with artificial intelligence is highly technical and specialized. The core problems of artificial intelligence include programming computers for certain traits such as knowledge, reasoning, problem-solving, perception, learning, planning, and the ability to manipulate and move objects. Knowledge engineering is a core part of AI research. Machines can often act and react like humans only if they have abundant information relating to the world. Artificial intelligence must have access to objects, categories, properties, and relations between all of them to implement knowledge engineering. Initiating common sense, reasoning, and problem-solving power in machines is a difficult and tedious task. Machine learning is also a core part of AI. Learning without any kind of supervision requires an ability to identify patterns in streams of inputs, whereas learning with adequate supervision involves classification and numerical regressions. Classification determines the category an object belongs to and regression deals with obtaining a set of numerical input or output examples, thereby discovering functions enabling the generation of suitable outputs from respective inputs. Mathematical analysis of machine learning algorithms and their performance is a well-defined branch of theoretical computer science often referred to as computational learning theory. Machine perception deals with the capability to use sensory inputs to deduce the different aspects of the world, while computer vision is the power to analyze visual inputs with a few sub-problems such as facial, object, and gesture recognition."
let p2 = "Double click to inverse theme. The Internet, sometimes called simply the Net, is a worldwide system of computer networks. It is a network of networks in which users at any one computer can, if they have permission, get information from any other computer (and sometimes talk directly to users at other computers). It was conceived by the Advanced Research Projects Agency (ARPA) of the U.S. government in 1969 and was first known as the ARPANET. The original aim was to create a network that would allow users of a research computer at one university to be able to “talk to” research computers at other universities. A side benefit of ARPANET’s design was that, because messages could be routed or rerouted in more than one direction, the network could continue to function even if parts of it were destroyed in the event of a military attack or other disaster. Today, the Internet is a public, cooperative, and self-sustaining facility accessible to hundreds of millions of people worldwide. Physically, the Internet uses a portion of the total resources of the currently existing public telecommunication networks. Technically, what distinguishes the Internet is its use of a set of protocols called TCP/IP (for Transmission Control Protocol/Internet Protocol). Two recent adaptations of Internet technology, the intranet and the extranet, also make use of the TCP/IP protocol. For many Internet users, electronic mail (e-mail) has practically replaced the Postal Service for short written transactions. Electronic mail is the most widely used application on the Net. You can also carry on live conversations with other computer users, using Internet Relay Chat (IRC). There are many other usages of the Internet, including some you may not have thought of before."
let p3 = "Double click to inverse theme. Technology has become an integral part of our daily life. From smartphones to smart homes, the impact of technological advancements can be seen in every aspect of our lives. It has not only made our lives easier but also opened up new avenues for knowledge and learning. The internet, for instance, provides us with a wealth of information at our fingertips, making it possible to learn about virtually anything from the comfort of our homes. Similarly, advancements in medical technology have revolutionized healthcare, making it possible to diagnose and treat diseases more effectively. In the field of education, technology has transformed the way we learn and teach. Online learning platforms have made education accessible to everyone, regardless of their location. Furthermore, technology has also significantly contributed to economic growth and development. It has created new industries, jobs, and opportunities for economic advancement. However, while technology has numerous benefits, it is also important to be aware of its potential drawbacks, such as privacy concerns and the digital divide. Therefore, while we embrace technology, it is also crucial to use it responsibly and ethically. In conclusion, technology plays a vital role in our lives and will continue to shape our future in ways we can only imagine."
let p4 = "Double tap to inverse. The vast expanse of the universe is a topic that has fascinated humans for centuries. The universe, in all its infinite glory, is a vast, boundless expanse of space that is home to countless galaxies, stars, and planets. It's a place where the laws of physics as we know them can be bent and twisted, where time and space intertwine in ways that are beyond our comprehension. The universe is a place of mystery and wonder, a place where the very fabric of reality is woven from the threads of the cosmos. It's a place where the smallest particles can have the greatest impact, where the faintest whisper of a distant star can echo across the cosmos. The universe is a place of beauty and awe, a testament to the incredible complexity and diversity of nature. It's a place where the possibilities are endless, where the only limit is our imagination. The universe is a place of discovery and exploration, a place where every day brings new insights and revelations. It's a place where we can learn about our place in the cosmos, about the origins of life and the future of our species. The universe is a place of inspiration and wonder, a place that reminds us of our insignificance in the grand scheme of things, but also of our potential to achieve great things. It's a place that challenges us to push the boundaries of our knowledge and understanding, to strive for a better understanding of the world around us. The universe is a place of endless possibilities, a place where the only limit is our imagination. It's a place where we can dream, explore, and discover, a place where we can learn, grow, and evolve. The universe is a place of wonder and awe, a place that inspires us to reach for the stars and beyond. It's a place where we can find our place in the cosmos, where we can understand our place in the universe, and where we can explore the mysteries of the universe. The universe is a place of endless possibilities, a place where we can dream, explore, and discover, a place where we can learn, grow, and evolve. The universe is a place of wonder and awe, a place that inspires us to reach for the stars and beyond. It's a place where we can find our place in the cosmos, where we can understand our place in the universe, and where we can explore the mysteries of the universe. The universe is a place of endless possibilities, a place where we can dream, explore, and discover, a place where we can learn, grow, and evolve. The universe is a place of wonder and awe, a place that inspires us to reach for the stars and beyond. It's a place where we can find our place in the cosmos, where we can understand our place in the universe, and where we can explore the mysteries of the universe. The universe is a place of endless possibilities, a place where we can dream, explore, and discover, a place where we can learn, grow, and evolve. The universe is a place of wonder and awe, a place that inspires us to reach for the stars and beyond. It's a place where we can find our place in the cosmos, where we can understand our place in the universe, and where we can explore the mysteries of the universe. The universe is a place of endless possibilities, a place where we can dream, explore, and discover, a place where we can learn, grow, and evolve. The universe is a place of wonder and awe, a place that inspires us to reach for the stars and beyond. It's a place where we can find our place in the cosmos, where we can understand our place in the universe, and where we can explore the mysteries of the universe. The universe is a place of endless possibilities, a place where we can dream, explore, and discover, a place where we can learn, grow, and evolve. The universe is a place of wonder";
let paralst = [p1,p2,p3,p4]
const chooseR = function(){
  let rand = Math.floor(Math.random()*paralst.length);
  return paralst[rand]
}
//implement theme change when double clicking
html.addEventListener("dblclick", () => {
  if (isWhite) {
    // body.classList.remove("whiteGround");
    // body.classList.add("blackGround");
    root.style.setProperty('--background','black')
    root.style.setProperty('--statsBackground','black');
    root.style.setProperty('--fontColor','white')
    isWhite = false;
  } else {
    // body.classList.remove("blackGround");
    // body.classList.add("whiteGround");
    root.style.setProperty('--background','white')
    root.style.setProperty('--statsBackground','white');
    root.style.setProperty('--fontColor','black')
    isWhite = true;
  }
});
//for rendering the text section
streams = chooseR() + chooseR() + chooseR();
  
for (let i = 0; i < streams.length; i++) {
  let temp = `<div class="ltr${i} letters">${streams[i]}</div>`;
  textStream.insertAdjacentHTML("beforeend", temp);
}

//to calculate typing speed and change visited letter colors
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
  // speed = ((streams.length / ((new Date() - iniTime) / 1000)) * 60) / 5;
  // console.log(speed);
  // if (letter >= streams.length) {
  //   speed = ((streams.length / ((new Date() - iniTime) / 1000)) * 60) / 5;
  //   console.log(speed);
  // }
  speed = ((letter / ((new Date() - iniTime) / 1000)) * 60) / 5; // this will calculate the speed in WPM
  errorPercentage = (letter / (letter + wrongHit)) * 100; // to calculate the accuracy
  if ((letter > 333) & (highestS < speed)) {
    highestS = speed.toFixed();
    window.localStorage.setItem("highest", highestS);
  }

  accuracy.innerText = `accuracy: ${errorPercentage.toFixed(2)}%`;
  bench.innerText = `Speed: ${speed.toFixed()} WPM`;
  highest.innerText = `highest: ${highestS} WPM`;

  event.target.value = "";
});
// while (true) {
//   setTimeout(() => {
//     console.log("Hello after 2 seconds");
//   }, 2000);
// }
