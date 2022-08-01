/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log(fruits.toString());
console.log(fruits.join(" * "));
fruits.push("Grapes");  // Add item at last
console.log(fruits);
fruits.pop();           // Remove item from last
console.log(fruits);
fruits.unshift("Cherry"); // Add item at first
console.log(fruits);
fruits.shift();         // Remove item from first
console.log(fruits);
fruits[1] = "Jackfruit";
console.log(fruits);
console.log(fruits.length);
//delete fruits[1];       // Delete item remaining undefined hole
console.log(fruits);

const boys = ["Rafiq", "Shafiq", "Jabbar"];
const girls = ["Marry", "Pritilata", "Rokeya"];
const pets = ["Tomi", "Pussy", "Mahesh"];
const all = boys.concat(girls, pets);
console.log(all);
*/


/*
The splice() method adds new items to an array.
The slice() method slices out a piece of an array.
The slice() method creates a new array.
The slice() method does not remove any elements from the source array.
*/

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits);
var fruits2 = fruits.slice(3, 4);
// console.log(fruits2);

fruits.splice(2, 0, "Jackfruit", "Kiwi");
fruits.splice(3, 1);
console.log(fruits);

console.log(fruits.toString());

console.log(fruits);

fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort()); // Wrong way

var myFunction = function (a, b) {
    //return a - b; // Ascending Order
    // return b - a; // Descending Order
    return 0.5 - Math.random();
}

console.log(points.sort(myFunction));

console.log(Math.max(2, 4, 6, 8));
console.log(Math.min(2, 4, 6, 8));