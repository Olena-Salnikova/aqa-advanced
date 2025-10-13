function printMessage(message, delay) {
    return setTimeout(() => console.log(message), delay); // Using setTimeout to simulate a delay
}

printMessage("Hello after 1 second", 1000);
printMessage("Hello after 2 seconds", 2000);
printMessage("Hello after 3 seconds", 3000);
printMessage("Hello after 4 seconds", 4000);
printMessage("Hello after 5 seconds", 5000);