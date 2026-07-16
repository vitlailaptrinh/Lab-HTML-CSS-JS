const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "Finnish",
  population: 6,
  neighbours: ["Sweden", "Norway", "Russia"],

  // Phương thức describe
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },

  // Phương thức checkIsland
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  }
};

// Gọi phương thức describe
myCountry.describe();

// Gọi phương thức checkIsland
myCountry.checkIsland();

// Kiểm tra object
console.log(myCountry);