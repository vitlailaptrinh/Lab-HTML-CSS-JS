// Dữ liệu 1
const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

// Tính BMI
const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

// So sánh
const markHigherBMI = markBMI > johnBMI;

// In kết quả
console.log("Mark BMI:", markBMI);
console.log("John BMI:", johnBMI);
console.log("Mark has higher BMI?", markHigherBMI);