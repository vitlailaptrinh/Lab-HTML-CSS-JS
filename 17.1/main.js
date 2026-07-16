function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry("Finland", 6, "Helsinki");
const country2 = describeCountry("Vietnam", 100, "Hanoi");
const country3 = describeCountry("Japan", 125, "Tokyo");

console.log(country1);
console.log(country2);
console.log(country3);