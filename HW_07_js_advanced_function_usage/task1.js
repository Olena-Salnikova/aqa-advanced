function processEven() {
    console.log("number is even");
}

function processOdd() {
    console.log("number is odd");  
} 

function handleNum(num, handleEven, handleOdd) {
    if (num % 2 === 0) {
        handleEven(num);
    } else {
        handleOdd(num);
    }
}

// Example usage:
handleNum(3, processEven, processOdd); // number is odd
handleNum(4, processEven, processOdd); // number is even