// Topic: Functions
// Goal: Foundational logic for community tools
// Method: Hand-written first, then typed.

// --- Function declaration ---
// Takes a name, returns a greeting string.
function greetChild(name) {
  return "Hello " + name + ", welcome to the learning center.";
}

// --- Arrow function with implicit return ---
// Same idea, shorter syntax. No braces, no `return` keyword.
// Both functions show the same concept in two syntaxes.
const greet = (name) => `Hello, ${name}!`;

// --- Testing with one of our children ---
const childName = "Amina";

console.log(greetChild(childName));
console.log(greet(childName));

// Expected output:
// "Hello Amina, welcome to the learning center."
// "Hello, Amina!"