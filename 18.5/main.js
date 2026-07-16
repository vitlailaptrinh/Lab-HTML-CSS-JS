function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [1441, 331, 83, 10];

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);