// 9th JavaScript Exercise: Fortune Teller.

const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

// Generate a random number between 1 and 5, inclusive.
// The correct approach would be to use Math.floor instead of Math.round (which I used initially), as otherwise it would go from 1 to 6.
let randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
let selectedFortune;

// Utilize "===" for value comparison.
if (randomNumber === 1) { 
  selectedFortune = fortune1
}
else if (randomNumber === 2) {
  selectedFortune = fortune2
}
else if (randomNumber === 3) {
  selectedFortune = fortune3
}
else if (randomNumber === 4) {
  selectedFortune = fortune4
}
else if (randomNumber === 5) { 
  selectedFortune = fortune5
}
console.log(selectedFortune)
