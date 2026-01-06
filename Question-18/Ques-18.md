## Exercise 18: The "Fibonacci Generator" (Swapping Variables)

### Goal
Generate a sequence where each number is the sum of the two preceding ones.

### Task
Print the first `10` numbers of the Fibonacci sequence: `0, 1, 1, 2, 3, 5, 8, 13...`

### Steps
- Initialize two variables: `a = 0` and `b = 1`.
- Write a loop that runs `10` times.
- Inside the loop:
  - Print `a`.
  - Calculate the next number: `next = a + b`.
  - Swap/update: `a = b` and `b = next`.
