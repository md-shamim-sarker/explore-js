# Explore-JS
## Variables
```js
/*
Variable declaration:
---------------------
var/let/const variableName;

Variable assignation:
---------------------
variableName = value;

Both declaration & assignation:
-------------------------------
var/let/const variableName = value;
*/

/*
Variable Naming Convention:
--------------------------
1. No JavaScript keywords (var, let, const)
2. No space (my variable name)
3. No quotation mark ("variable")
4. No start with number (10variable)
5. Number is end is allowed (variable10)
6. No hyphen or dash (my-variable-name)
7. Snakecase is allowed but not recommended (my_variable_name)
8. Camelcase is allowed and recommended (myVariableName)
9. Pascalcase is allowed but not recommended (MyVariableName)
10. JS variable is case sensitive (MYVARIABLE != myvariable)
*/

var myFistName = "Shamim";
var myLastName = "Sarker";
var myFullName = myFistName + " " + myLastName;
console.log(myFullName);

var myFistName = "Sneha";
var myLastName = " Mony";
var myFullName = myFistName + myLastName;
console.log(myFullName);
```

## Data Types
```js
/*
Data types in JS
----------------
    |--Primitive type
        |--Number
        |--String
        |--Boolean
        |--Null
        |--Undefined
    |--Composite/Non-primitive type
        |--Array
        |--Object
        |--Function
*/

var a = 52;
console.log(typeof a);

var b = "Shamim Sarker";
console.log(typeof b);

var c = 5 > 4;
console.log(typeof c);

var d = null;
console.log(typeof d);
console.log(d === null);

var e;
console.log(typeof e);

var f = [1, 2, 3];
console.log(typeof f);
console.log(Array.isArray(f));

var g = {
    firstName: "Sneha",
    lastName: "Mony"
}
console.log(typeof g);

var h = function (x, y) {
    return x * y;
}
console.log(typeof h);
```
## Operations
```js
var x = 80;
var y = 7;

// Addition
var addition = x + y;
console.log(addition);

// Subtraction
var subtraction = x - y;
console.log(subtraction);

// Multiplication
var multiplication = x * y;
console.log(multiplication);

// Division
var division = x / y;
console.log(division);

// Reminder/Modulus
var modulus = x % y;
console.log(modulus);

// Concatenation of string
var firstName = "Sneha";
var lastName = "Mony";
var fullName = firstName + " " + lastName;
console.log(fullName);

/*
Here,
x & y are called operand
+, -, *, /, % are called operator
*/

// NB: typeof is a operator

console.log(typeof x);
```

## Shorthands
```js
var a = 5;
// a = a + 10;
a += 10; //This is shorthand
console.log(a);

var b = 10;
// b = b - 5;
b -= 5; //This is shorthand
console.log(b);

var c = 4;
// c = c * 2;
c *= 2; //This is shorthand
console.log(c);

var d = 20;
// d = d / 2;
d /= 2; //This is shorthand
console.log(d);

var e = 10;
// e = e + 1;
e++; //This is shorthand (Increment)
console.log(e);

var f = 10;
// f = f - 1;
f--; //This is shorthand (Decrement)
console.log(f);
```

## Methods
```js
var a = 10;
var b = 15;
var total = a + b;
console.log("a + b = " + total);

var c = "10";
var d = 15;
console.log(c + d);
console.log(parseInt(c) + d);

var e = 20;
var f = "25";
console.log(e + f);
console.log(e + parseInt(f));

var g = 0.1;
var h = 0.2;
var total = g + h;
console.log(total);
total = total.toFixed(1);
console.log(total);
console.log(typeof total);
total = parseFloat(total);
console.log(total);
console.log(typeof total);
```

## Practice Problem Solving
```js
/*
Practice Problem 1:
------------------
Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to 
help Harry calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka Harry’s mom gave him.
The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.

Sample Input: 1000, 700
Sample Output: 300
*/

var givenMoney = 1000;
var costMony = 700;
var remainingMoney = givenMoney - costMony;
// console.log(remainingMoney);


/*
Practice Problem 2:
-------------------
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and 
Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input: 75.25, 65, 80, 35.45, 99.50
Sample Output: 71.04
*/

var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;

var totalMarks = mathematics + biology + chemistry + physics + bangla;

var averageMarks = totalMarks / 5;
averageMarks = averageMarks.toFixed(2);
// console.log(typeof averageMarks);
averageMarks = parseFloat(averageMarks);
// console.log(typeof averageMarks);

// console.log(averageMarks);


/*
Practice Problem 3:
-------------------
John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to 
combine these two strings and print them in one line. Help John write the program.

Input:
The first and the second lines of the input contain the strings.

Output:
Print the result in one line.

Sample Input: I am going to be, an awesome web developer
Sample Output: I am going to be an awesome web developer
*/

var firstLine = "I am going to be ";
var secondLine = "an awesome web developer."
var combineLine = firstLine + secondLine;
// console.log(combineLine);
// console.log(firstLine.concat(secondLine));

/*
Practice Problem 4:
-------------------
Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the 
remainder would be if she divided the number by 5. Help Sarah write the program.

Input:
The first line of the input contains the number.

Output:
Print the remainder.

Sample Input: 119
Sample Output: 4

--------------------------------
ভাগ = Division
ভাজক = Divisor
ভাজ্য = Divedend
ভাগফল = Quotient
ভাগশেষ = Reminder
ভাজ্য = ভাজক * ভাগফল + ভাগশেষ
--------------------------------
*/

var givenNumber = 119;
var divisor = 5;
var reminder = givenNumber % divisor;

console.log(reminder);
```