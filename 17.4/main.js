// Hàm đã tạo ở Lab 17.2
function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}

// Hàm describePopulation
function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);

  return `${country} has ${population / 1000000} million people, which is about ${percentage.toFixed(1)}% of the world`;
}

// Gọi hàm với 3 quốc gia
console.log(describePopulation("China", 1441000000));
console.log(describePopulation("Vietnam", 100000000));
console.log(describePopulation("USA", 331000000));