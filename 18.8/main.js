const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

// Tính BMI
mark.calcBMI();
john.calcBMI();

// So sánh BMI
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`
  );
}


// Hàm tính tiền boa
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Mảng hóa đơn
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Mảng rỗng
const tips = [];
const totals = [];

// Tính tip và total
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);

  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);

// Hàm tính trung bình
function calcAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

console.log("Average Total:", calcAverage(totals));