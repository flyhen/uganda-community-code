# 03 - Loops

**Status:** ✅ Complete

## What I Learned
A loop is a person walking past a row of boxes, one at a time.

- `for` = a walker with a fixed route. He knows the start, the gate,
  and the step — all three bundled into one line.
- `while` = a guard at a gate. He asks one question before every pass.
  He has no counter — I must change something inside, or he asks forever.
- `break` = the walker leaves the market the moment he finds what he
  came for. He doesn't walk past the answer.

## Why This Matters (my context)
I'm building tools for low-resource environments in Uganda, including
inexpensive Android phones. A loop that checks 10,000 records when the
answer was at position 2 is a frozen screen and a lost user. Early exit
isn't an optimization — it's respect for the user.

## Key Concepts
- `for (let i = 0; i < list.length; i++)` — start, gate, step
- `while (condition)` — gate only; the counter is my responsibility
- `break` — exit the loop immediately when the goal is found
- Index vs position: index 2 = position 3 (machines count from 0, humans from 1)

## Method
Hand-written drills first (black, blue, red pens). Paper trace every loop
round by round BEFORE typing. Four stages: copy, recall, modify, create.
Red pen = traps.

## Files
- `for-loop-drills.js` — the for walker + a while countdown
- `while-search.js` — finding "David" with early exit
- `notes/` — whiteboard photos: walker diagram, gate diagram, traps wall

## How to Run
```bash
node for-loop-drills.js
node while-search.js