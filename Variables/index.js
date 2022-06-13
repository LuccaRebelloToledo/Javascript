let firstName = "Lucca";
let age = 19;
let student = true;

console.log("Hello", firstName); // Strings
console.log("You are", age, "years old"); // numbers
console.log("Enrolled:", student); // booleans

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrroled: " + student;