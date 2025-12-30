## Exercise 9: The "Login Checker" (Logical Operators)

### Goal
Use `&&` (AND), `||` (OR), and `!` (NOT) to simulate a real-world scenario.

### Setup
Create three variables:
- `isLoggedIn` (set to `true`)
- `hasPermissions` (set to `false`)
- `isAdmin` (set to `true`)

### Task
Write an `if` statement that grants access if:
- The user is logged in AND has permissions, OR
- The user is an Admin (Admins always get access, regardless of permissions).

If access is granted, log `"Access Granted"`. Otherwise, log `"Access Denied"`.
