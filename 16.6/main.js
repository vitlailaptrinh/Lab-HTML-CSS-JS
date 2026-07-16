// Scores
const dolphins = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;

console.log("Dolphins:", dolphins);
console.log("Koalas:", koalas);

if (dolphins > koalas) {
  console.log("Dolphins win!");
} else if (koalas > dolphins) {
  console.log("Koalas win!");
} else {
  console.log("Draw!");
}


// Tip Calculator
const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);