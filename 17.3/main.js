// Arrow Function
const percentageOfWorld3 = (population) => {
  return (population / 7900000000) * 100;
};

const vietnam = percentageOfWorld3(100000000);
const china = percentageOfWorld3(1441000000);
const usa = percentageOfWorld3(331000000);

console.log(vietnam);
console.log(china);
console.log(usa);