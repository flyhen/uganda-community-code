// 02-map.js
// Builds on: 01-foreach.js (same data, same records)
// Question: How do we transform each record into something new?
// Mental model: Child Records → map() → New List

const children = [
    { name: "Amina", family: "Okello", platesReceived: 2 },
    { name: "Sarah", family: "Nakato", platesReceived: 1 },
    { name: "David", family: "Mugisha", platesReceived: 3 }
];

// map() returns a brand-new array, always the same length as the original.
// Every input record produces exactly one output value.
// Where forEach() just "visits" each item, map() "converts" each item.

// 1. A simple names list
const names = children.map(function (child) {
    return child.name;
});
console.log("Names:", names);

// 2. An attendance-style list, reshaped for a report
const attendance = children.map(function (child) {
    return `${child.name} — present`;
});
console.log("Attendance:", attendance);

// 3. Certificate messages, generated from the same records
const certificates = children.map(function (child) {
    return `Certificate of participation awarded to ${child.name} of the ${child.family} family.`;
});
console.log("Certificates:\n" + certificates.join("\n"));

// Real work use case:
// Turning raw records into names lists, attendance summaries, or generated
// messages — anything where you need one new value per existing record.

// Interview note:
// map() always returns an array the same length as the input. If your
// output should be shorter (some records dropped) or a single combined
// value, map() is the wrong tool — see filter() and reduce() next.
