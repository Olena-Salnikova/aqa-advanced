// Function to check if a person is an adult
function isAdult(age) {
    if (age >= 18) {
        return true;
    }   else {
        return false;
    }
}
// Test the function with different ages
let age = 25;
console.log("Is age " + age + " adult? " + isAdult(age));// Expected: false

age = 15;
console.log("Is age " + age + " adult? " + isAdult(age));// Expected: true