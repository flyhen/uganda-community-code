// 01-foreach.js
// Question: How do we visit every child without writing the walker ourselves?
// Mental model: Walker → visits every child

const children = [
    { name: "Amina", family: "Okello", platesReceived: 2 },
    { name: "Sarah", family: "Nakato", platesReceived: 1 },
    { name: "David", family: "Mugisha", platesReceived: 3 }
];

// forEach() runs the given function once for every item in the array.
// It does not build a new array and does not return anything (undefined).
// Use it when the goal is simply "do something for each item" — like logging,
// printing a report line, or triggering a side effect (e.g. sending an email).

children.forEach(function (child) {
    console.log(`${child.name} (${child.family} family) received ${child.platesReceived} plate(s).`);
});

// Real work use case:
// This is the same shape of code you'd use to print an attendance sheet,
// log each record to a monitoring dashboard, or notify every family in a
// program — anywhere you touch every item but don't need a new list back.

// Interview note:
// forEach() always returns undefined. If someone asks you to "return a new
// array of X", forEach is the wrong tool — that's what map() does (next file).
