// Function to check the order status
function checkOrder (available, ordered) {
    switch (true) {
        case (available < ordered):
            return "Your order is too large, we don’t have enough goods.";
        case (ordered === 0):
            return "Your order is empty";
        case (available >= ordered):
            return "Your order is accepted";
        default:
            return "Invalid order";
    }
}
// Test the function with different values
console.log(checkOrder(10, 15)); // "Your order is too large, we don’t have enough goods."
console.log(checkOrder(10, 0));  // "Your order is empty"
console.log(checkOrder(10, 5));  // "Your order is accepted"
