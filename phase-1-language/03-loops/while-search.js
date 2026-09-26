// Topic: Loops — search with early exit
// Goal: Find "David" in the list and STOP. Never walk past him.
// Why it matters: on a budget phone, a loop that finishes faster
// means the screen stays alive and the user stays.
// Method: Hand-written trace first, then typed
// Builds on: for-loop-drills.js

let children = ["Amina", "Sarah", "David"];

let i = 0;                              // 1. Walker starts at box 0
while (i < children.length) {           // 2. Gate: is there still a box?
    if (children[i] === "David") {      // 3. Check THIS box
        console.log("David is at index " + i + ", position " + (i + 1));
        break;                          // 4. Found — leave the market
    }
    i++;                                // 5. Step forward — EVERY round
}

// Expected output:
// David is at index 2, position 3

// Paper trace (see notes/while-search-trace.jpg):
// i=0: "Amina"?  No  → i++
// i=1: "Sarah"?  No  → i++
// i=2: "David"?  Yes → print, break. Never touches the end of the list.

