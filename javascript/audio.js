// let observedElements = document.querySelectorAll(
//   ".mute, .village-mute, .dance-mute, .newspaper-mute, .television-mute, .computer-mute"
// );

// const options = {threshold: 0.9};

// const inViewCallback = (entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("village-music");
//     } else {
//       entry.target.classList.remove("village-music");
//     }
//   });
// };
// let observer = new IntersectionObserver(inViewCallback, options);

// observedElements.forEach((element) => {
//   let dataDelay = element.getAttribute("data-delay");
//   element.style.transitionDelay = dataDelay + "ms";
//   observer.observe(element);
// });



// let cavemanMusic = document.getElementById("caveman-music");
// let cavemanIcon = document.getElementById("cavemanIcon");
// cavemanIcon.onclick = function () {
//   if (cavemanMusic.paused) {
//     cavemanMusic.play();
//     cavemanIcon.src = "./media/unmute.jpeg";
//   } else {
//     cavemanMusic.pause();
//     cavemanIcon.src = "./media/mute.jpeg";
//   }
// };

// let villageMusic = document.getElementById("village-music");
// let villageIcon = document.getElementById("villageIcon");
// villageIcon.onclick = function () {
//   if (villageMusic.paused) {
//     villageMusic.play();
//     villageIcon.src = "./media/unmute.jpeg";
//   } else {
//     villageMusic.pause();
//     villageIcon.src = "./media/mute.jpeg";
//   }
// };


// let danceMusic = document.getElementById("dance-music");
// let danceIcon = document.getElementById("danceIcon");
// danceIcon.onclick = function () {
//   if (danceMusic.paused) {
//     danceMusic.play();
//     danceIcon.src = "./media/unmute.jpeg";
//   } else {
//     danceMusic.pause();
//     danceIcon.src = "./media/mute.jpeg";
//   }
// };

// let newspaperMusic = document.getElementById("newspaper-music");
// let newspaperIcon = document.getElementById("newspaperIcon");
// newspaperIcon.onclick = function () {
//   if (newspaperMusic.paused) {
//     newspaperMusic.play();
//     newspaperIcon.src = "./media/unmute.jpeg";
//   } else {
//     newspaperMusic.pause();
//     newspaperIcon.src = "./media/mute.jpeg";
//   }
// };

// let televisionMusic = document.getElementById("television-music");
// let televisionIcon = document.getElementById("televisionIcon");
// televisionIcon.onclick = function () {
//   if (televisionMusic.paused) {
//     televisionMusic.play();
//     televisionIcon.src = "./media/unmute.jpeg";
//   } else {
//     televisionMusic.pause();
//     televisionIcon.src = "./media/mute.jpeg";
//   }
// };

// let computerMusic = document.getElementById("computer-music");
// let computerIcon = document.getElementById("computerIcon");
// computerIcon.onclick = function () {
//   if (computerMusic.paused) {
//     computerMusic.play();
//     computerIcon.src = "./media/unmute.jpeg";
//   } else {
//     computerMusic.pause();
//     computerIcon.src = "./media/mute.jpeg";
//   }
// };


// baskar

let audio = new Audio("../media/caveman.mp3");
audio.play();

let observedElements = document.querySelectorAll(
  ".village, .dance, .newspaper, .television, .computer"
);

const options = { threshold: 0.1 };

const inViewCallback = (entries) => {
  console.log(entries, 'sjabeer')
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal", "showup");
      console.log(entry.target.id, 'asd');
        if(entry.target.id ){
          audio.pause();
          audio = new Audio(entry.target.id);
          audio.play();
        }
    } else {
      entry.target.classList.remove("reveal", "showup");
    }
  });
};
let observer = new IntersectionObserver(inViewCallback, options);

observedElements.forEach((element) => {
  let dataDelay = element.getAttribute("data-delay");
  element.style.transitionDelay = dataDelay + "ms";
  observer.observe(element);
});
