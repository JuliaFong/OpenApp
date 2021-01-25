// Tabulation Strategy (Dynamic Programming)

// write a `fib(n)` function to return the 
// n-th number of the fibonacci sequence


function fib(n) {
    let table = new Array(n + 1)
    table[0] = 0;
    table [1] = 1

    for (let i = 2; i < table.length; i++) {

    }

    return table[n]
}

console.log(fib(7))

// Leet Code 139 Word Break

// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
//  determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

function wordBreak(s, wordDict) {
    let table = new Array(s.length + 1).fill(false)
    table[0] = true;

    for (let i = 0; i < table.length; i++) {
        if (table[i] === false) continue

        for (let j = i + 1; j < table.length; j++) {
            let word = s.slice(i, j)
            if (wordDict.includes(word)) {
                table[j] = true
            }
        }
    }

    return table[table.length - 1];
}