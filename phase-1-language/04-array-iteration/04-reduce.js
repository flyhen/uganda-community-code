// 04-reduce.js
// Builds on: 01-foreach.js, 02-map.js, 03-filter.js (same data, same records)
// Question: How do we combine many values into a single result?
// Mental model: Many Values → reduce() → One Value

const children = [
    { name: "Amina", family: "Okello", platesReceived: 2 },
    { name: "Sarah", family: "Nakato", platesReceived: 1 },
    { name: "David", family: "Mugisha", platesReceived: 3 }
];

// reduce() walks the array like forEach() does, but it carries a running
// value (the "accumulator") from one item to the next, and returns that
// single final value at the end.
//
// reduce(callback, startingValue)
//   callback(accumulator, currentItem) → returns the next accumulator

// 1. Total plates distributed across all children
const totalPlates = children.reduce(function (total, child) {
    return total + child.platesReceived;
}, 0); // 0 is the starting value of the accumulator
console.log("Total plates distributed:", totalPlates);

// 2. Total number of children tracked (a simple count via reduce)
const totalChildren = children.reduce(function (count) {
    return count + 1;
}, 0);
console.log("Total children tracked:", totalChildren);

// 3. Group children by family (reduce can build objects too, not just numbers)
const byFamily = children.reduce(function (groups, child) {
    groups[child.family] = child.name;
    return groups;
}, {});
console.log("Children by family:", byFamily);

// Real work use case:
// Totaling meals distributed, summing attendance across a term, or adding
// up donations received — any time many records collapse into one number
// or one summary object.

// Interview note:
// reduce() is the most general of the four methods — map() and filter()
// can both technically be written using reduce(). It's worth practicing
// that once, since interviewers sometimes ask for it directly. Example:
//
// const namesViaReduce = children.reduce(function (list, child) {
//     list.push(child.name);
//     return list;
// }, []);
