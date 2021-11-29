let observedElements = document.querySelectorAll('.village, .dance, .newspaper, .television, .computer'); 

const options = { 
  threshold: 0.1,
  // rootMargin: "0px 0px 200px 0px"
}

console.log(options, "shabeer");

const inViewCallback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal', 'showup');
    }
    else {
      entry.target.classList.remove('reveal', 'showup');
    }
  });
}
let observer = new IntersectionObserver(inViewCallback,options); 

observedElements.forEach(element => {
  
  let dataDelay = element.getAttribute('data-delay');
  
  element.style.transitionDelay = dataDelay+'ms';
  observer.observe(element) 
  
});
