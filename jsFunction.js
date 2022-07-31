// Process 1 (Previous)
function functionName1(x, y) {
    return x + y;
}
console.log(functionName1(5, 6));

// Process 2 (ES5)
const functionName2 = function (x, y) {
    return x + y;
}
console.log(functionName2(10, 15));

// Process 3 (ES6)
const functionName3 = (x, y) => {
    return x + y;
}
console.log(functionName3(50, 10));

// Process 4 (ES6)
const functionName4 = (x, y) => x + y;
console.log(functionName4(100, 200));