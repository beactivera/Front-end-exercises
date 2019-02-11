"use strict";

const fullName = "Weronika Anna eee aaaaa Wdowiak";

let space = fullName.split(" ");
const firstName = space[0];
console.log(firstName);
const middleName = space[1];
console.log(middleName);
const lastName = space[2];
console.log(lastName);

console.log(`first:_${firstName}_${middleName}_${lastName}`);
