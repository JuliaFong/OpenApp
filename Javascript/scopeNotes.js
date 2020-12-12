// levels of scope in JS
// Javascript has a function level scope
// Scope in Javascript is lexical
// lexical scope means there is a concept
// of parent and childe scopes. Child scopes
// can access "anything" defined in the parent scope
// A function inside a function is a child and parent scope



// Global Scope
// Anything defined in a global scope can be accessed
// anywhere in your code


// Function or Local Scope
// Variables declared inside a function is inside the local scope
// can be accessed from within the function,
// but not from outside the code


// Block Scope
// ES6 introduced let and const variables
// unlike the car, they can be scoped to the nearest pair
// of curly braces. That means, they can't be accessed from outside
// that pair of curly braces.

// Nested Scope
// similar to functions, a scope can be "nested" inside
// another scope

// Lexical Scope or the Static Scope
// The scope determines the lexing time(compiling)
// rather than at runtime
// can determine the scope of the variable just by looking
// at the source code

// Scope Chain
// When a variable is used in Javascript the Js engine
// will try to find the variable's value in the current scope

// ""