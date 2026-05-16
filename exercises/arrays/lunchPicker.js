// 18th JavaScript Exercise: Lunch Picker.

const lunches = [];

function addLunchToEnd(lunches, str) {
  lunches.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return lunches;
}

function addLunchToStart(lunches, str) {
  lunches.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return lunches;
}

function removeLastLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = lunches.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
  }
  return lunches;
}

function removeFirstLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = lunches.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
  }
  return lunches;
}

function getRandomLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches available.");
  } else {
    // This function chooses a random lunch.
    const random = lunches[Math.floor(Math.random() * lunches.length)]; 
    console.log(`Randomly selected lunch: ${random}`);
  }
  return lunches;
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`);
  }
  return arr;
}

// Testing the code.
addLunchToEnd(lunches, "Tacos");
addLunchToEnd(["Pizza", "Tacos"], "Burger");
addLunchToStart(lunches, "Sushi");
addLunchToStart(["Burger", "Sushi"], "Pizza");
removeLastLunch(["Ensopado", "Sopa", "Torrada"]);
removeLastLunch(["Sushi", "Pizza", "Noodles"]);
removeFirstLunch(["Salada", "Ovos", "Queijo"]);
removeFirstLunch(["Sushi", "Pizza", "Burger"]);
showLunchMenu(["Verduras", "Milhos", "Feijões"]);
showLunchMenu(["Pizza", "Hambúrguer", "Batatas Fritas", "Salada"]);
getRandomLunch(["Pizza", "Hambúrguer", "Batatas Fritas", "Salada"]);

// Testing negative cases.
removeLastLunch([]);
removeFirstLunch([]);
getRandomLunch([]);