// Mảng các nước láng giềng của Việt Nam
const neighbours = ["China", "Laos", "Cambodia"];

// Thêm "Utopia" vào cuối mảng
neighbours.push("Utopia");
console.log(neighbours);

// Xóa "Utopia" khỏi cuối mảng
neighbours.pop();
console.log(neighbours);

// Kiểm tra xem có "Germany" hay không
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

// Đổi tên một nước láng giềng
const index = neighbours.indexOf("China");

if (index !== -1) {
  neighbours[index] = "People's Republic of China";
}

console.log(neighbours);