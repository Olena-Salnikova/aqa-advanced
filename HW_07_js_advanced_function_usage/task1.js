function isEven() {
    console.log("number is even");
}

function isOdd() {
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
handleNum(3, isEven, isOdd); // number is odd
handleNum(4, isEven, isOdd); // number is even