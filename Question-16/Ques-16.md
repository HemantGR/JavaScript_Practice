## Exercise 16: The "Star Pattern" (Nested Loops)

### Goal
Build logic visualization (classic programming interview warmup).

### Output
You want to print a square of stars (5 rows, 5 columns):
```
*****
*****
*****
*****
*****
```

### Task
- Write a `for` loop (outer loop) that runs `5` times (for the rows).
- Inside that loop, define a string variable `rowString = ""`.
- Write another `for` loop (inner loop) inside the first one that runs `5` times.
- Inside the inner loop, add a star `"*"` to `rowString`.
- After the inner loop finishes (but still inside the outer loop), log `rowString`.