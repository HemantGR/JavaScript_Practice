## Exercise 19: The "Palindrome Checker" (String Logic)

### Goal
Compare characters from opposite ends of a string.

### Note
Don’t use built-in array methods like `.reverse()`. Use raw logic.

### Task
Write a function `isPalindrome(word)` (e.g., `"racecar"`, `"madam"`).

### Logic
- Use a `for` loop to iterate through the string.
- Compare the character at index `i` with the character at index `word.length - 1 - i`.
- If they do not match at any point, return `false`.
- If the loop finishes, return `true`.
