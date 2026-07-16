const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"]
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  // Chỉ xử lý nếu mảng con có ít nhất 2 phần tử
  if (listOfNeighbours[i].length >= 2) {
    // In từ phần tử thứ 2 trở đi (chỉ số 1)
    for (let j = 1; j < listOfNeighbours[i].length; j++) {
      console.log(listOfNeighbours[i][j]);
    }
  }
}