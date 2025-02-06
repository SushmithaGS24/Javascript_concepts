A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. In simpler terms, a closure allows a function to "remember" the environment in which it was created.

How Closures Work
Lexical Scope: A function's scope is determined by its position in the source code. It has access to variables defined in its own scope, the scope of the outer functions, and the global scope.

Creating a Closure:

When a function is defined within another function, it forms a closure. The inner function retains access to the variables of the outer function.