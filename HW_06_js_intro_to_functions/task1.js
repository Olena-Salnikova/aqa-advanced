// Function Declaration
function calcRectAreaDeclaration (width, height) {
    return width * height;
}
console.log(`function declaration: ${  calcRectAreaDeclaration(5, 10)}`);

// Function Expression
const calcRectAreaExpression = function (width, height) {
    return width * height;
}; 
console.log(`function expression: ${  calcRectAreaExpression(5, 10)}`);

// Arrow Function
const calcRectAreaArrow = (width, height) => width * height;
console.log(`arrow function: ${  calcRectAreaArrow(5, 10)}`);