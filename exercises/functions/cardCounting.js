// 12th JavaScript Exercise: Card Counting.

let count = 0
function cardCounter(card){
  // Use === to compare values and types, and || for logical OR.
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6){
    count++
  } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A"){
    count--
  } 
  if (count <= 0){
    return `${count} Hold`
  } 
  else if(count > 0){
    return `${count} Bet`
  }
}
cardCounter(2); cardCounter(3); cardCounter(4); cardCounter(5);
console.log(cardCounter(6)); 

count = 0; // Reset count for next test.
cardCounter(7); cardCounter(8);
console.log(cardCounter(9)); 