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

console.log(factorial(6)) // 6 steps 
console.log(memo)
// console.log(factorial(100))
