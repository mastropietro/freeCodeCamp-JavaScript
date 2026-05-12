// 5th JavaScript Exercise: String Formatter.

const userInput = "   Hello World!   ";
console.log("Original input:");
console.log(userInput);

// trim() method removes whitespace from both ends of a string.
const cleanedInput = userInput.trim();
console.log("\nResult of trimming whitespace from both ends:");
console.log(cleanedInput);

// trimStart() method removes whitespace from the beginning of a string.
const trimmedStart = userInput.trimStart();
console.log("\nAfter using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

// trimEnd() method removes whitespace from the end of a string.
const trimmedEnd = userInput.trimEnd();
console.log("\nAfter using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

// toUpperCase() method converts a string to uppercase.
const upperCaseInput = cleanedInput.toUpperCase();
console.log("\nResult of using the toUpperCase() method:");
console.log(upperCaseInput);

// toLowerCase() method converts a string to lowercase.
const lowerCaseInput = cleanedInput.toLowerCase();
console.log("\nResult of using the toLowerCase() method:");
console.log(lowerCaseInput);

// slice() method extracts a part of a string.
const lowercaseWord = "camelcase";
let camelCasedVersion = lowercaseWord.slice(0, 5)
console.log("\nCamel cased version:");
camelCasedVersion = `${lowercaseWord.slice(0, 5)}${lowercaseWord[5].toUpperCase()}${lowercaseWord.slice(-3)}`
console.log(camelCasedVersion);
