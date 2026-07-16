function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [1441, 331, 83, 10];

const percentages3 = [];

let i = 0;

while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages3);