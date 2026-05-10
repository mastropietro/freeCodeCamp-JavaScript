// 6th JavaScript Project. String Transformer.

const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

// replace() method replaces a specified value with another value in a string.
const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

// replaceAll() method replaces all occurrences of a specified value with another value in a string.
const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

// the . link the methods repeat() and trimEnd().
const repeatedLove = "love ".repeat(3).trimEnd()
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);