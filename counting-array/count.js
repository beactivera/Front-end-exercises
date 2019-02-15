//Plan

// init:
// - set counter = 0
// - make an empty array
// - start the loop

// loop:
// - increment the counter
// - display the counter
// - loop the loop -with a delay

let counter;

counter = 0;

const array = [];

window.addEventListener("DOMLoaded", counting);

setInterval(counting, 1000);

function counting() {
  //   console.log(counter);
  counter++;
  // array not longer than 9
  if (array.length < 9) {
    // insert counter to an array
    array.unshift(counter);
    console.log(array);
  }
}
