const personNames = [
    "Shamim",
    "Snigdha",
    "Sneha"
];

console.log(personNames[1]);
console.log(typeof personNames);
console.log(Array.isArray(personNames));

const persons = {
    firstName: ["Shamim", "Snigdha", "Sneha"],
    lastName: ["Sarker", "Haque", "Mony"],
    district: ["Lalmonirhat", "Rangpur", "Dhaka"],
    thana: ["Aditmari", "Sadar", "Kafrul"]
};

console.log(persons.lastName);
console.log(typeof persons);
console.log(Array.isArray(persons));
console.log(persons.lastName[1]);


// const personNames = new Array("Shamim", "Snigdha", "Sneha");
// console.log(personNames[1]);
// console.log(personNames[0]);
// console.log(personNames[personNames.length - 1]);
// console.log(typeof personNames);