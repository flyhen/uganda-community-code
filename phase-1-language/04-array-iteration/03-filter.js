// 03-filter.js
// Builds on: 01-foreach.js, 02-map.js (same data, same records)
// Question: How do we keep only the records that match a condition?
// Mental model: All Records → filter() → Matching Records

const children = [
    { name: "Amina", family: "Okello", platesReceived: 2 },
    { name: "Sarah", family: "Nakato", platesReceived: 1 },
    { name: "David", family: "Mugisha", platesReceived: 3 }
];

// filter() returns a new array containing only the items for which the
// given function returns true. It never mutates the original array, and
// the result can be shorter than (or equal to) the original — never longer.

// 1. Children who may need extra support (fewer than 2 plates received)
const needingSupport = children.filter(function (child) {
    return child.platesReceived < 2;
});
console.log("Needing support:", needingSupport.map(c => c.name));

// 2. Children who are fully supported (2 or more plates)
const fullySupported = children.filter(function (child) {
    return child.platesReceived >= 2;
});
console.log("Fully supported:", fullySupported.map(c => c.name));

// Notice: filter() and map() combine naturally — filter() picks the
// records, map() reshapes what you do with them. This pairing is the
// core of 05-combined-report.js.

// Real work use case:
// Finding children who need extra support, listing active participants,
// or pulling only the completed training records from a larger set.

// Interview note:
// filter() never changes the original array — the source `children` array
// above is untouched after both filters run. This comes up often when
// discussing immutability and avoiding side effects.
