// Declare a variable for the cylinder radius
const radius = 2;

// Declare a variable for the cylinder height
const height = 10;

// Calculate the volume of the cylinder using the formula π * r^2 * h
const volume = Math.PI * radius ** 2 * height;

// Round to 2 decimal places
const roundedVolume = volume.toFixed(2);

// Output the result to the console
console.log("Radius:", radius);
console.log("Height:", height);
console.log("Volume of the cylinder:", roundedVolume);