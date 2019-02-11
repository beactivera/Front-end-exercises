"use strict";

const fullName = "Weronika Anna Weronika Wdowiak";

const firstSpace = fullName.indexOf(" ");
console.log(firstSpace);

const lastSpace = fullName.lastIndexOf(" ");
console.log(lastSpace);

const firstName = fullName.slice(0, firstSpace + 1);
console.log(firstName);
const middleNames = fullName.slice(firstSpace + 1, lastSpace);
console.log(middleNames);
const lastName = fullName.slice(lastSpace + 1);
console.log(lastName);

console.log(`first:_${firstName}_${middleNames}_${lastName}`);
