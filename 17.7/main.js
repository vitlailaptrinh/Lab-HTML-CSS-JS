// Hàm tính điểm trung bình
const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

// Dữ liệu 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

// Hàm kiểm tra đội thắng
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins!");
  }
}

// Kiểm tra dữ liệu 1
checkWinner(avgDolphins, avgKoalas);

// Dữ liệu 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

// Kiểm tra dữ liệu 2
checkWinner(avgDolphins, avgKoalas);


// Tip Calculator
// Hàm tính tiền tip
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Kiểm tra với bill = 100
console.log(calcTip(100));

// Mảng hóa đơn
const bills = [125, 555, 44];

// Mảng tiền tip
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[2])
];

// Mảng tổng tiền
const total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
];

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total:", total);