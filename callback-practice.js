function addition(x, y) {
    console.log('Addition is : ' + (x + y));
}

function subtraction(x, y) {
    console.log('Subtraction is : ' + (x - y));
}

function multiplication(x, y) {
    console.log('Multiplication is : ' + (x * y));
}

function division(x, y) {
    console.log('Division is : ' + (x / y));
}

function operation(x, y, callback) {
    callback(x, y);
}

operation(10, 5, division)