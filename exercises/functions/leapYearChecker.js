// 13th JavaScript Exercise: Leap Year Checker.

const year = 1900; // You can change this value to test with different years.
function isLeapYear(year){
// The order priorizes the most specific conditions.
  if (year % 400 === 0){
    return `${year} is a leap year.`
  } else if (year % 100 === 0){
  return `${year} is not a leap year.`
  } else if(year % 4 === 0){
    return `${year} is a leap year.`
  } else {
    return `${year} is not a leap year.`
  }
  }
const result = isLeapYear(year);
console.log(result);