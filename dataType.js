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