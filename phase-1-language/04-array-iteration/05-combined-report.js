// 05-combined-report.js
// Builds on: 01-foreach.js, 02-map.js, 03-filter.js, 04-reduce.js
// This file puts all four methods to work together on the same data,
// producing one small community report.
//
//   forEach() → Display information
//   map()     → Create names lists
//   filter()  → Find children needing support
//   reduce()  → Calculate totals

const children = [
    { name: "Amina", family: "Okello", platesReceived: 2 },
    { name: "Sarah", family: "Nakato", platesReceived: 1 },
    { name: "David", family: "Mugisha", platesReceived: 3 }
];

console.log("=== Community Report ===\n");

// 1. forEach() — display each record as a report line
console.log("-- Records --");
children.forEach(function (child) {
    console.log(`${child.name} (${child.family}): ${child.platesReceived} plate(s)`);
});

// 2. map() — build a simple names list for the report header
const names = children.map(function (child) {
    return child.name;
});
console.log("\nNames:", names.join(", "));

// 3. filter() — find children who may need extra support
const needingSupport = children
    .filter(function (child) {
        return child.platesReceived < 2;
    })
    .map(function (child) {
        return child.name;
    });
console.log("Needing support:", needingSupport.length ? needingSupport.join(", ") : "None");

// 4. reduce() — calculate the total plates distributed
const totalPlates = children.reduce(function (total, child) {
    return total + child.platesReceived;
}, 0);
console.log("Total plates distributed:", totalPlates);

console.log("\n=== End of Report ===");

// This is the first step toward building practical applications such as:
// - Community program trackers
// - Meal distribution reports
// - Learning progress dashboards
// - Offline-first data collection systems
//
// Everything above runs on the same three records used in files 01-04.
// Swap in real data (e.g. from IndexedDB or a JSON file) and this same
// four-line pipeline still works unchanged.
