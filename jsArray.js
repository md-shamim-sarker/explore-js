const personNames = [
    "Shamim",
    "Snigdha",
    "Sneha"
];

console.log(personNames);
// console.log(personNames[1]);
// console.log(typeof personNames);
// console.log(Array.isArray(personNames));
// console.log(personNames instanceof Array);

personNames.push("Sarker"); // Add at last
console.log(personNames);
var str = personNames.toString();
console.log(typeof str);
console.log(str);
console.log(personNames.join(" @ "));
personNames.pop(); //Remove from last
console.log(personNames);
personNames.shift(); //Remove from first
console.log(personNames);
personNames.unshift("Shihab"); //Add at first
console.log(personNames);
personNames[0] = "Siyam";
console.log(personNames);
// delete personNames[1];
// console.log(personNames);

const lastNames = ["Sarker", "Haque", "Mony"];
const otherNames = ["Milon", "Bhubon", "Rahim"];
console.log(personNames.concat(lastNames, otherNames));



const persons = {
    firstName: "Shamim",
    lastName: "Sarker",
    district: "Lalmonirhat",
    thana: "Aditmari"
};

// console.log(persons.lastName);
// console.log(typeof persons);
// console.log(Array.isArray(persons));


// const personNames = new Array("Shamim", "Snigdha", "Sneha");
// console.log(personNames[1]);
// console.log(personNames[0]);
// console.log(personNames[personNames.length - 1]);
// console.log(typeof personNames);


/*
The Difference Between Arrays and Objects
-----------------------------------------

1. In JavaScript, arrays use numbered indexes.  
2. In JavaScript, objects use named indexes.
3. Arrays are a special kind of objects, with numbered indexes.
*/