function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Both numerator and denominator must be numbers");
    }
    
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero");
    } 
    
    return numerator / denominator;
}  

// Testing the function with try-catch-finally blocks
try {
    console.log(divide(10, 2)); // 5
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}
console.log("---------------");

// Additional test cases to demonstrate error handling
try {
    console.log(divide(10, 0)); // Error
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}
console.log("---------------");

// Additional test cases to demonstrate error handling
try {
    console.log(divide(10, 'a')); // Error
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}