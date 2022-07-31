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



/*
The splice() method adds new items to an array.
The slice() method slices out a piece of an array.
https://www.w3schools.com/js/js_array_methods.asp
*/