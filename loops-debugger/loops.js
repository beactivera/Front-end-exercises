"use strict";

// from 0 to 9
for (let counter = 0; counter < 10; counter++) {
  console.log(counter);
}

// from 1 to 10
let counter = 1;
while (counter < 11) {
  console.log(counter);
  counter++;
}

// from 10 to 0, followed by the text: “liftoff”  console.log(“liftoff”)
for (let counter = 10; counter > 0; counter--) {
  console.log("liftoff" + counter);
}

// From 1 to 19, but only odd numbers
let counter = 1;
while (counter < 20) {
  counter *= 2;
  console.log(counter);
}

//From 1 to 16777216, but doubling each time (2, 4, 8, 16 …)
for (let i = 1; i < 16777216; i *= 2) {
  console.log(i);
}

// From 111 to 138, in steps of three
for (let i = 1; i < 16777216; i += 3) {
  console.log(i);
}

// From 100 to 0 in steps of 10
for (let i = 100; i > 0; i -= 10) {
  console.log(i);
}
