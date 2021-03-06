let audio = new Audio("../media/caveman.mp3");
audio.play();

let isMute = false; 

let mute = document.getElementById("muteIcon");

muteIcon.onclick = function() {
  if (audio.paused) {
    audio.play();
    isMute=false;
    mute.src = "./media/unmute.jpeg"
  } else {
    audio.pause();
    isMute=true;
    mute.src = "./media/mute.jpeg"
  }
}


let observedElements = document.querySelectorAll(
  ".caveman, .village, .dance, .newspaper, .television, .computer"
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
          // audio.play();
          if(!isMute){
            audio.play();
          }
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
