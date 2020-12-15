// Closures and Scope

// Scope of a method is the set variable that are available for use within the method

// scope of a function includes
// the functions arguemrtns
// any local variable declare inside the function
// any variables that were already declared when the function was defined

function sayHelloNTimes(name, n) {
    function greet() {
        console.log(`Hi, ${name}!`)
    }

    for (let i = 0; i < n; i++) {
        greet()
    }
}

sayHelloNTimes("Bob", 3)
sayHelloNTimes("Sally", 6)

// Closures functions such as greet that us (capture) such variables
// are called closures

// Free variables can be modified by closures
// Consider this function:

function sum(nums) {
    let count = 0;

    function addNum(num) {
        count += num;
    }
    for (let i = 0; i < nums.length; i++) {
        addNum(nums[i])
    }

    return count;
}

sum([1, 3, 5])  // => 9

// Passing arguments implicitlky

// We can use closures to pass down arguments to helper functions without explicity listing them as arguemtns

function isPalindrome(string) {
    function reverse() {
        return string.split('').reverse().join('')
    }

    return string === reverse()
}

// Private State
// Another major use of closures is to create private states

function createCounter() {
    let count = 0;

    // here ++count means increment the value of the count vairbale by 1 and then
    // the count variable is evaluated in the statement

    // count++ means the count variable is evaluated in the statement and then the value is incremented by 1.
    // If we used count++ our counter would be off by 1

    return () => ++count;
}

let counter = createCounter();
console.log(counter()) // => 1
console.log(counter()) // => 2
counter.count
let counter2 = createCounter();
console.log(counter2()) // => 1

// By closing over (or capturing)

function Counter() {
    this._count = 0;
}

Counter.prototype.fire = funtion() {
    this.count += 1
    return this._count
}

let counter = new Counter()
counter.fire(); // 1
counter.fire(); // 2
counter._count // 2
counter._count = 0 // 0 (this works);



// the count is truly private which is an advantage of using a closure

// Global Scope

// Js has a global scope, represented by the window object
// in the browser aand global object in Node.js

// If you declare a variable without var, let, or const 
// keywords anywhere in your code it can do weird things

