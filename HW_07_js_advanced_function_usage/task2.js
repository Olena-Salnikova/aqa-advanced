function recursiveCounter(num) {
    console.log(num);
    if (num <= 0) {
        console.log("Done!");
        return;
    }
    recursiveCounter(num - 1);
}  
// Example usage:
recursiveCounter(5); // 5 4 3 2 1 0