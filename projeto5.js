// 5º Projeto Javascript. Formatador de Springs.

const userInput = "   Hello World!   ";
console.log("Original input:");
console.log(userInput);

const cleanedInput = userInput.trim();
console.log("\nResult of trimming whitespace from both ends:");
console.log(cleanedInput);

const trimmedStart = userInput.trimStart();
console.log("\nAfter using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

const trimmedEnd = userInput.trimEnd();
console.log("\nAfter using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

const upperCaseInput = cleanedInput.toUpperCase();
console.log("\nResult of using the toUpperCase() method:");
console.log(upperCaseInput);

const lowerCaseInput = cleanedInput.toLowerCase();
console.log("\nResult of using the toLowerCase() method:");
console.log(lowerCaseInput);

const lowercaseWord = "camelcase";
let camelCasedVersion = lowercaseWord.slice(0, 5)
console.log("\nCamel cased version:");
camelCasedVersion = `${lowercaseWord.slice(0, 5)}${lowercaseWord[5].toUpperCase()}${lowercaseWord.slice(-3)}`
console.log(camelCasedVersion);