// gab dom elements
const images = document.querySelector(".images");
const imagesCollection = document.querySelectorAll(".image");
const prevBtn = document.querySelector(".prev");
const nexBtn = document.querySelector(".next");

prevBtn.addEventListener("click", prevSlide);
nexBtn.addEventListener("click", nextSlide);
// utility css

let index = 0;

// set ineterval
let interval = setInterval(startInterval, 2000);

// function startInterval(){
function startInterval() {
  index++;
  moveCarousel();
}
//
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(startInterval, 2000);
}

function moveCarousel() {
  if (index > imagesCollection.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = imagesCollection.length - 1;
  }
  images.style.transform = `translateX(-${index * 800}px)`;
}

// bottones
function prevSlide() {
  //   console.log("PREV");
  index--;
  //   resetInterval();
  clearInterval(interval);
  moveCarousel();
}

function nextSlide() {
  index++;
  //   console.log("NEXT");
  //   resetInterval();
  clearInterval(interval);
  moveCarousel();
}
