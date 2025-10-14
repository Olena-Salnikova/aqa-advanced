const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const sortedNumbers = structuredClone(numbersList).sort((a, b) => a - b);

// Output the original and sorted arrays
console.log("Original Array: ", numbersList);
console.log("Sorted Array: ", sortedNumbers);
