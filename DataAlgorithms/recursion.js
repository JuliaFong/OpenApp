// Recursion review notes

// Recursion is when a function calls itself

// function sayHello() {
//     console.log("hello")
//     sayHello()
// }

// sayHello(); 

// ^^ this prints hello forever 
//  it enters an infinite recursive loop

// Recursion function still follows all the evaluation rules
// as a normal function

// Recursive countdown example

// function countDown(num) {
//     console.log(num)
//     countDown(num - 1)
// }

// countDown(10) // this prints decreasing numbers starting at 10 forever

//  ^^ this also continues forever

// You can modify the function so it stops at zero

function countDown(num) {
    // base case
    if (num === 0) {
        console.log("Houston we have lift-off!!")
        return;
    }

    console.log(num)
    countDown(num - 1)
}

countDown(10)

// Anatomy of Recursive Function

// recursive function consists of two fundamental parts:

// base case where we halt the recursion by not making a further call

// the recursive step where we continue the recursion by making another subsequent call

// Recursive Factorial Example Notes

// factorial

// Write a method `factorial(n)` which takes a number and returns the factorial of n.
// A factorial is the product of all whole numbers between 1 and n, inclusive.
// For example, `factorial(5)` is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(n) {
    if (n === 1) {
        return 1
    }

    return n * factorial(n - 1)
}

console.log(factorial(4)) // => 24
console.log(factorial(5)) // => 120

// Solving a Problem Recursively:
// Because every recursive problem must have a base and recursive case, we can follow these steps to help us write a recursive method:

// Identify the base case in the problem and code it. The base case should explicity handle the scenario(s) where the arguments are so trivially "small", that we immediately know the result without further calculation. Be sure it works by testing it.
// Solve the next level of the problem, using the result of the base case. Test it.
// Modify the code in step 2, generalizing it for every level of the problem.

// Recursive Fibonacci Example Notes

// Write a method fib(n) that takes in a number and returns the nth number of
// the fibonacci sequence.

// In the fibonacci sequence, the 1st number is 1 and the 2nd number is 1. To generate the
// next number in the sequence, we take the sum of the previous two fibonacci numbers.
// For example the first 5 numbers of the fibonacci sequence are `1, 1, 2, 3, 5`

// Examples:

// fib(1) // => 1
// fib(2) // => 1
// fib(3) // => 2
// fib(4) // => 3
// fib(5) // => 5
// fib(6) // => 8
// fib(7) // => 13

function fib(n) {
    if ( n === 1 || n === 2) {
        return 1
    }

    return fib(n-1) + fib(n -2 )
}

console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(9))
console.log(fib(15))

