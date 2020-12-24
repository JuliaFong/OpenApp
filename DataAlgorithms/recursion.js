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

// recursive step where we continue toe recursion by making another subsequeny call