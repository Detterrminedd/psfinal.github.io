let observedElements = document.querySelectorAll(
  ".village, .dance, .newspaper, .television, .computer"
);

const options = {threshold: 0.1};

const inViewCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal", "showup");
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

let cavemanMusic = document.getElementById("caveman-music");
let cavemanIcon = document.getElementById("cavemanIcon");
cavemanIcon.onclick = function () {
  if (cavemanMusic.paused) {
    cavemanMusic.play();
    cavemanIcon.src = "./media/unmute.jpeg";
  } else {
    cavemanMusic.pause();
    cavemanIcon.src = "./media/mute.jpeg";
  }
};

