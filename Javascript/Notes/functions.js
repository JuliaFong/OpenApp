// Javascript Functions

// functions in Js are a special type of JS Objects.
// you can do anything to a function that you can do to an object.

// Declaring functions

// there are multiple ways to declare a function and assign
// it to a variable in JS

// Invoke a function with ()

// In JS referencing the function name by itself will only return
// a pointer to the function, to execute it, you must invoke the function
// with arguments. If no arguments are required, this looks like() appended to the function name

// In JS functions usually do NOT have implicit returns


// Assigning properties to a function
const fun = function() {
    console.log("A lot of fun!")
}
fun.amount = 120
console.log(fun.amount)
// 120

// Passing a function as an argument to another function

// Functions that are passed as an argument to another function are called callbacks

function logIfEven(num) {
    if (num % 2 === 0) {
        console.log(`${num} is an even number!`)
    }
}
[2, 3, 4].forEach(logIfEven);

// Here we pass the function logIfEven to Array's forEach 
// method. forEach will call logIfEven for each element 
// in the array, passing in the value. forEach is a 
// function that takes another function (ie. a callback) 
// as an argument.

function myForEach(array, cb) {
    for (let i = 0; i < array,length; i++) {
        cb(array[i]);
    }
}

myForEach([1, 2, 3], logIfEven)


// it is very common to pass anonymous functions as arguments:

[1, 2, 3].forEach(function(num) {
    if (num % 2 === 0) {
        console.log(num)
    }
});

// The difference between a function and an object in JS
// is functions can be invoked with () operator while
// regular objects cannot

// JS functions in Ruby

// In Ruby you can accomplish a similar thing by create a Proc from
// a block, but the importance of functions as first class objects
// is greater in JS

// a Proc is an object oriented version of a function

// my_proc = Proc.new { |name| puts "Hi #{name}!"}