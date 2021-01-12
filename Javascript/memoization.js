// Memoization

// Runtime: 0(n)
let memo = {}

function factorial(n) {
    // if the arg is already in the memo, then fetch the value
    if (n in memo) { return memo[n]
    console.log('fetching memo for', n)
    return memo[n]
}
    if (n === 1) return 1
    // otherwise the arg is not in the memo, so calculate it recursive,
    // but store the answer in the memo for later
  let ans =  n * factorial(n-1)
  memo[n] = ans
  return ans;
}

// console.log(factorial(6)) // 6 steps 
// console.log(memo)
// console.log(factorial(100))

// unoptimized solution
//O(2^n)
// function fib(n) {
//     if (n === 1 || n === 2) return 1
//     return fib(n-1) + fib(n - 2)
// }

// console.log(fib(50)) // => 8

// memoized version
// can have impact on our code
// linear time complexity
// O(n)
function fibo(n, memo = {}) {
    if (n in memo) return memo[n]
    if (n === 1 || n === 2) return 1

    // if the arg is not in the memo, calculate it recursice
    // but save it in the memo for the future
    memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)
    return memo[n]
}

console.log(fibo(60))