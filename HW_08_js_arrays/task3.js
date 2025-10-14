const numbers = [10, 20, 30, 40, 50];
const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Output the sum of the numbers
console.log("Sum of Numbers: ", sumOfNumbers);