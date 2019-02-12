// function with one parametr, show in the console log using return valuse
function capitalization(text) {
  let lowerCase = text.toLowerCase();
  let Long = text.length;
  const firstL = lowerCase.substring(0, 1).toUpperCase();
  const otherL = lowerCase.substring(1, Long);

  let newStr = `${firstL}${otherL}`;

  return newStr;
}

const name = "PeTeR";

const cap = capitalization(name);
console.log(cap);
