## Exercise 20: The "Pyramid Builder" (Advanced Nested Loops)

### Goal
Control spacing and stars to create a centered shape.

### Task
Print a pyramid pattern of height 5:
    *
   ***
  *****
 *******
*********

You need one outer loop (for rows) and two inner loops (inside the outer one).
- Inner Loop 1: Print spaces (decreases as you go down).
- Inner Loop 2: Print stars (increases as you go down, formula: `2 * row - 1`).
- Build the string for each row and log it.
