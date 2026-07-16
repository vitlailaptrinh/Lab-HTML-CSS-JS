const language = prompt("What language is spoken?");
const population = Number(prompt("What is the population (million)?"));
const isIsland = prompt("Is it an island? (yes/no)") === "yes";

if (language === "English" && population < 50 && !isIsland) {
  console.log("You should live in Portugal :)");
} else {
  console.log("Portugal does not meet your criteria :(");
}