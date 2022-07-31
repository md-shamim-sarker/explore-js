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