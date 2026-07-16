// Hàm từ Lab 17.2
function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}

// Mảng dân số của 4 quốc gia
const populations = [
  100000000,   // Vietnam
  1441000000,  // China
  331000000,   // USA
  126000000    // Japan
];

// Kiểm tra mảng có 4 phần tử hay không
console.log(populations.length === 4);

// Mảng chứa phần trăm dân số thế giới
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3])
];

// In kết quả
console.log(populations);
console.log(percentages);