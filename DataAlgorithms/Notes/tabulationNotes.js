// Tabulation
// Now that we are familiar with Memoization, 
// let's explore another Dynamic Programming strategy:
//  Tabulation. In case you forgot, Memoization and Tabulation are two 
// distinct Dynamic Programming strategies. 
// That being said, our goal for Tabulation is still to solve 
// large problems efficiently by breaking them down into many subproblems. 
// There are two main features that comprise the Tabulation strategy:

// the function is iterative and not recursive
// the additional data structure used is typically an array (we refer to this as the table!)
// Many problems that can be solved with Memoization can also be solved with Tabulation, 
// so let's begin by attacking a familar problem with a fresh set of eyes. Don't worry, 
// we'll also work on some brand new problems in the upcoming project.

// Tabulating Fib
// Tabulation is all about creating a table (array) and filling it out with elements. 
// In general, we will complete the table by filling entries from left to right. 
// This means that the first entry of our table (first element of the array) will correspond to the smallest subproblem. 
// Naturally, the final entry of our table (last element of the array) will correspond to the largest problem, 
// which is also our final answer.

// Let's tabulate fib. As always, 
// we want fib(n) to return the n-th number of the Fibonacci sequence:

// fib(0);      // => 0
// fib(1);      // => 1
// fib(2);      // => 1
// fib(6);      // => 8
// fib(7);      // => 13