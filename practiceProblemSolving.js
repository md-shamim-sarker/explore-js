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