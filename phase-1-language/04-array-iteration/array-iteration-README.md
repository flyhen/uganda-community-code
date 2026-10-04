# Array Methods: Helpers That Walk For Us

**Part of my public JavaScript learning log**

After learning how to manually walk a list using `for` and `while`, this stage of the journey is about the built-in helpers that already know how to walk. Instead of writing the loop yourself, you describe what should happen at each stop, and the method handles the walking.

```js
// The manual way
for (let i = 0; i < children.length; i++) {
    console.log(children[i]);
}

// The array-methods way
children.forEach(child => console.log(child));
```

This stage covers `forEach`, `map`, `filter`, `reduce`, and how they combine into a small report.

---

## How to Run

Each file is a standalone Node script.

```bash
git clone https://github.com/flyhen/<repo-name>.git
cd <repo-name>
node 01-foreach.js
node 02-map.js
node 03-filter.js
node 04-reduce.js
node 05-combined-report.js
```

No dependencies or build step — plain Node.js (v18+) is enough. Each file logs its output to the console so you can see the result of that method on its own.

---

## Learning Philosophy

This repository follows one process, applied consistently across every file:

**Think → Sketch → Trace → Code → Test → Reflect**

Before writing code, every concept is worked out on paper first — diagrams, traces, whiteboard notes, and hand-written drills. This forces understanding of the problem before any syntax is involved. Supporting material for each file lives in the `notes/` folder.

---

## Why We Upgrade the Data

Earlier stages used a flat list, which was enough for learning loops:

```js
let children = ["Amina", "Sarah", "David"];
```

Array methods are most useful on structured data, so from this stage onward the records are upgraded to resemble real community data:

```js
let children = [
    { name: "Amina", family: "Okello", platesReceived: 2 },
    { name: "Sarah", family: "Nakato", platesReceived: 1 }
];
```

Each record now holds information that can be filtered, transformed, and summarized — the same shape of data you'd work with in a real tracking system.

---

## Lesson Files

### 01 — `forEach()`: The Walker

**Question:** How do we visit every child without writing the walker ourselves?

```
Walker
  ↓
Visits every child
```

Use `forEach()` when you want to perform an action for every item, and don't need a new array back.

**Real work use case:** Printing an attendance list, logging each record to a dashboard, sending a notification to every family in a program.

**Interview angle:** `forEach()` always returns `undefined`. If you're asked to build a new array, `forEach` is the wrong tool — that's what `map()` is for.

---

### 02 — `map()`: The Transformer

**Question:** How do we transform each record into something new?

```
Child Records
      ↓
     map()
      ↓
  New List
```

Use `map()` when you need a new array built from an existing one, one output per input.

**Real work use case:** Building a names list for a report, generating attendance summaries, producing certificate messages from a roster.

**Interview angle:** Be ready to explain that `map()` always returns an array of the same length as the original — if your output list is shorter or longer, `map` was the wrong choice.

---

### 03 — `filter()`: The Gatekeeper

**Question:** How do we keep only the records that match a condition?

```
All Records
     ↓
  filter()
     ↓
Matching Records
```

Use `filter()` when searching for a subset that meets a requirement.

**Real work use case:** Finding children who need extra support, listing active participants, pulling completed training records.

**Interview angle:** `filter()` never mutates the original array — it returns a new one. This is a common follow-up question when discussing immutability.

---

### 04 — `reduce()`: The Combiner

**Question:** How do we combine many values into a single result?

```
Many Values
     ↓
  reduce()
     ↓
  One Value
```

Use `reduce()` when calculating a total or building a single summary from a list.

**Real work use case:** Total meals distributed, total attendance across a term, total donations received.

**Interview angle:** `reduce()` is the most general of the four — `map` and `filter` can technically be written using `reduce`. Interviewers sometimes ask you to prove this; it's worth practicing once.

---

### 05 — `combined-report.js`: Putting It Together

This file combines everything learned so far into one small community report.

```text
forEach() → Display information
map()     → Create names lists
filter()  → Find children needing support
reduce()  → Calculate totals
```

**Before:**
```js
let children = [ { name: "Amina", platesReceived: 2 }, ... ];
```

**After (report output):**
```text
Names: Amina, Sarah, David
Needing support: Sarah
Total plates distributed: 6
```

This is the first step toward building practical applications such as:
- Community program trackers
- Meal distribution reports
- Learning progress dashboards
- Offline-first data collection systems

---

## Notes Folder

The `notes/` folder holds the thinking behind the code — not just the final answer:

```text
notes/
├── foreach-walker.jpg
├── map-transformation.jpg
├── filter-gatekeeper.jpg
├── reduce-basket.jpg
├── handwritten-trace-01.jpg
└── learning-journal.md
```

The goal isn't only to show the final code. The goal is to make the learning process visible.

---

## Where This Goes Next

With `forEach`, `map`, `filter`, and `reduce` in place, the next stage moves into:

- Chaining array methods (`filter().map().reduce()`) into a single pipeline
- Destructuring, to pull fields out of records more cleanly
- Async data — fetching real records instead of hard-coded arrays

This is one entry in an ongoing, public record of learning JavaScript from first principles — not a finished course. Some files will get revisited and rewritten as the understanding deepens.

**Think → Sketch → Trace → Code → Test → Reflect.**
