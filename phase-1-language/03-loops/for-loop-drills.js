// Topic: Loops — the manual walk (for & while)
// Goal: Walk the children list box by box, counting on the walker's finger
// Method: Hand-written first, then typed
// Builds on: 02-arrays/children-list.js

let children = ["Amina", "Sarah", "David"];

// ---------- Drill 1: the for walker ----------
// The walker has a fixed route: start, gate, step — all bundled together
for (let i = 0; i < children.length; i++) {
    console.log((i + 1) + ". " + children[i]);
}

// Expected output:
// 1. Amina
// 2. Sarah
// 3. David

// ----------  countdown with while ----------
// The guard asks one question before every pass. No counter built in —
// WE must change something, or the gate never opens (infinite loop).
let count = 3;
while (count > 0) {
    console.log("Counting down: " + count);
    count--;
}
console.log("Loop finished. The walker left the market.");

// Expected output:
// Counting down: 3
// Counting down: 2
// Counting down: 1
// Loop finished. The walker left the market.