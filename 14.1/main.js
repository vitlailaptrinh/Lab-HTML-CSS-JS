// lab 14.1

let country = "Vietnam";
let continent = "Asia";
let population = 100; // triệu dân

console.log(country);
console.log(continent);
console.log(population);

// lab 15.1
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Lab 15.2
language = "Vietnamese";

// Thử đổi giá trị const sẽ bị lỗi
// country = "USA";

// Lab 15.3

// 1
console.log(population / 2);

// 2
population++;
console.log(population);

// 3
console.log(population > 6);

// 4
console.log(population < 33);

// 5
let description =
  country +
  " and its " +
  population +
  " million people speak " +
  language;

console.log(description);

// Lab 15.4

description = `${country} and its ${population} million people speak ${language}`;

console.log(description);

// Lab 15.5

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}