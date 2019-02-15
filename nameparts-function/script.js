"use strict";

function nameParts(fullName) {
  const firstSpace = fullName.indexOf(" ");
  const lastSpace = fullName.lastIndexOf(" ");
  const firstName = fullName.slice(0, firstSpace + 1);
  const middleNames = fullName.slice(firstSpace + 1, lastSpace);
  const lastName = fullName.slice(lastSpace + 1);

  if (firstSpace === lastSpace) {
    let message = `${firstName} --- ${lastName}`;
    return message;
  } else {
    let message = `${firstName} --- ${middleNames} --- ${lastName}`;
    return message;
  }
}

const name = "Weronika AAAAA bbbbbbbb 0000000 Wdowiak";

let dividedName = nameParts(name);

console.log(dividedName);
