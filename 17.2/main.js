// Hàm khai báo (Function Declaration)
function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}

const vietnam1 = percentageOfWorld1(100000000);
const china1 = percentageOfWorld1(1441000000);
const usa1 = percentageOfWorld1(331000000);

console.log(vietnam1);
console.log(china1);
console.log(usa1);

// Hàm biểu thức (Function Expression)
const percentageOfWorld2 = function (population) {
  return (population / 7900000000) * 100;
};

const vietnam2 = percentageOfWorld2(100000000);
const china2 = percentageOfWorld2(1441000000);
const usa2 = percentageOfWorld2(331000000);

console.log(vietnam2);
console.log(china2);
console.log(usa2);