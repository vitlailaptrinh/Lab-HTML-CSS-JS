const numNeighbours = Number(
  prompt("How many neighbor countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}


// Nên dùng === vì:

// === so sánh cả giá trị và kiểu dữ liệu, giúp tránh lỗi do ép kiểu tự động.
// == có thể tự chuyển đổi kiểu dữ liệu trước khi so sánh, dễ gây kết quả ngoài ý muốn