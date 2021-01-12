// Constant - O1

// function constant_1(n) {
//     return n * 2 + 1
// }

// function constant_2(n) {
//     for (let i = 1; i <= 100; i++ ) {

//     }
// }

//  ^^ T(100) => O(!)

// Logarithmic - O(log(n))

function logarithmic(n) {
    if (n <= 1) return;
    logarithmic(n / 2)
}

// Linear - O(n)

function linear_1(n) {
    for (let i = 1; i <= n; i++) {

    }
}

function linear_2(n) {
    if (n === 1) return;
    linear_2(n - 1)
}

// Loglinear - O(n*log(n))

function loglinear(n) {
    if (n <= 1) return;
    for (let i = 1; i <= n; i++) {  
    }
    loglinear(n / 2)
    loglinear(n / 2)
}

// Polynomial - O(n^2)
function quadratic(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {  
        }
    }
}

// Polynomial = O(n^3)
function cubic(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 1; k <= n; k++) {
            }
        }
    }
}

// Exponential - O(2^n)
function exponential_2n(n) {
    if (n === 1) return;
    exponential_2n(n - 1)
    exponential_2n(n - 1)
}

// Exponential - O(3^n)
function exponential_3n(n) {
    if (n === 0) return
    exponential_3n(n - 1)
    exponential_3n(n - 1)
    exponential_3n(n - 1)
}

// Factorial - O(n!)
function factorial(n) {
    if (n === 1) return

    for (let i = 1; i <= n; i++) {
        factorial(n - 1)
    }
}

// Big O notation examples
function example1(array) {
    for (var i = 1; i <= 20; i++) {
        for(var j = 0; j < array.length; j++) {

        }
    }
}

// un-big O version T(20n)
// using bigO comnplexitity it would be O(n)

function example2(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {

        }
    }

    for (var k = 0; k < array.length; k++) {
    }
}

// the unsimplified version it T(n^2+n)
// Simplified big O notation O(n^2)

function example3(n) {
    for (var i = 0; i < (n / 2); i++) {
    }
}

// unsimplified T(n/2) =>T(1/2n)
// simplified to big O notation is O(n)

// example 4 is a recursive example

function example4(n) {
    if (n === 0) return;

    for (var i = 1; i <= 23; i++) {    
    }

    example4(n - 1)
}


function example5(n) {
    if (n <= 1) return;

    example5(n - 1);
    example5(n - 1);
    example5(n - 1);
    example5(n - 1);

}

// runtime ^^ O(4^n)

function example6(n) {
    if (n <= 1) return
    for (var i = 1; i <= 4; i++) {
        example6(n - 1)
    }
}

function example7(str) {
    if (str.length <= 1) return;

    let midIdx = Math.floor(str.length / 2);
    let left = str.slice(0, midIdx)
    let right = str.slice(midIdx)

    example7(left)
    example7(right)
}

// ^^ O(nlog2^n)

