const myCountry = {
  country: "Việt Nam",
  capital: "Hà Nội",
  language: "Tiếng Việt",
  population: 101,
  neighbours: ["Trung Quốc", "Lào", "Campuchia"]
};

// In thông tin ra console
console.log(
  `${myCountry.country} has ${myCountry.population} million Vietnamese-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

// Tăng dân số thêm 2 triệu (dùng dấu chấm)
myCountry.population += 2;

console.log(myCountry.population); // 103

// Giảm dân số đi 2 triệu (dùng dấu ngoặc)
myCountry["population"] -= 2;

console.log(myCountry.population); // 101