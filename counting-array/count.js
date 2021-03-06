//Plan

// init:
// - set counter = 0
// - make an empty array
// - start the loop

// loop:
// - increment the counter
// - display the counter
// - loop the loop -with a delay

let counter = 0;
const arr = [];

loop();

function loop() {
  // - increment counter
  counter++;

  // - insert the counter in th ebeggining of the array
  arr.unshift(counter);

  const MAX_LENGTH_OF_ARRAY = 9;
  // - make sure that the array doesn't get longer than 9
  if (arr.lastIndexOf > MAX_LENGTH_OF_ARRAY) {
    arr.pop();
  }

  // - display the array
  console.log(arr);

  // - loop the loop - with a delay
  setTimeout(loop, 1000);
}
