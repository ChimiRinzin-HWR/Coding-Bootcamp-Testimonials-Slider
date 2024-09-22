const left = document.getElementById("left");
const right = document.getElementById("right");
const seconddiv = document.getElementById("second-div");
const firstdiv = document.getElementById("first-div");

const main = document.querySelector("main");

left.classList.add("arrow-disable");

right.addEventListener("click", next);
left.addEventListener("click", prev);

var flag = false;

function next(){
    seconddiv.classList.add("sdclicked");
    firstdiv.classList.add("fdclicked");
    right.classList.add("arrow-disable");
    left.classList.remove("arrow-disable");
    setTimeout(flagfalse,500);      
}
function prev(){
    seconddiv.classList.remove("sdclicked");
    firstdiv.classList.remove("fdclicked");
    left.classList.add("arrow-disable");
    right.classList.remove("arrow-disable");
    setTimeout(flagfalse,500);      
}
let startX = 0;

main.addEventListener('touchstart', (event) => {
  // Get the starting X coordinate when the touch begins
  startX = event.touches[0].clientX;
});

main.addEventListener('touchmove', (event) => {
  // Get the current X coordinate during the swipe
  const moveX = event.touches[0].clientX;
  
  // Calculate swipe distance
  const diffX = startX - moveX;
  
  // If the swipe is significant enough, trigger the next or previous testimonial
  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      // Swipe left (Next)
      next();
    } else {
      // Swipe right (Previous)
      prev();
    }
  }
});

main.addEventListener('wheel', (event) => {
    if (event.deltaX > 0 && !flag) {
      // Scroll down (Next)
      flag = true;
      next();
    } else if (event.deltaX < 0 && !flag){
      // Scroll up (Previous)
      flag = true;
      prev();
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === 'ArrowRight') next();
    else if(event.key === 'ArrowLeft') prev();
})

function flagfalse(){
    flag = false;
}