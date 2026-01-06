## Exercise 17: The "Prime Number Seeker" (Nested Loops & Flags)

### Goal
Determine if a number is prime using logic flags.

### Task 1
Write a function `isPrime(num)` that returns `true` or `false`.

### Logic
A prime number is divisible only by `1` and itself.
- Loop from `2` up to `num - 1`.
- Inside the loop, check: `if (num % i === 0)`.
  - If true, the number is not prime (return `false` immediately).
- If the loop finishes without returning `false`, return `true`.

### Challenge
Write a loop that prints all prime numbers between `1` and `50`.
