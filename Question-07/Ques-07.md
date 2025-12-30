## Exercise 7: The "Grade Assignor" (Conditionals & Logic)

### Goal
Practice ranges in logic using `&&` (AND) operators.

### Instructions
- Create a variable `score` and assign it a number between `0` and `100` (e.g., `85`).

### Task
Write a chain of `if / else if` statements to log a grade based on these rules:
- If `score` is `90` or above: Log `"Grade: A"`.
- If `score` is between `80` and `89` (inclusive): Log `"Grade: B"`.
- If `score` is between `70` and `79`: Log `"Grade: C"`.
- If `score` is below `70`: Log `"Grade: F"`.

### Hint
To check "between", you use AND: `score >= 80 && score <= 89`.

### Test
Change `score` to `72` and `45` to make sure your logic works for all cases.
