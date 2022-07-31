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