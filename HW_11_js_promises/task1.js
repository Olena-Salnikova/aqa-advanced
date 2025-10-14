function printMessageWithDelay(message, delay) {
    return setTimeout(() => console.log(message), delay); // Using setTimeout to simulate a delay
}

printMessageWithDelay("Hello after 1 second", 1000);
printMessageWithDelay("Hello after 2 seconds", 2000);
printMessageWithDelay("Hello after 3 seconds", 3000);
printMessageWithDelay("Hello after 4 seconds", 4000);
printMessageWithDelay("Hello after 5 seconds", 5000);