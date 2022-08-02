function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}

myFirst();
mySecond();

function myDisplayer(some) {
    console.log(some);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    // return sum;
    myCallback(sum);
}

let result = myCalculator(5, 5, myDisplayer);
// myDisplayer(result);

// A callback is a function passed as an argument to another function
// This technique allows a function to call another function