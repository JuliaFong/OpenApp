// Binary Search
// We've explored many ways to sort arrays so far, 
// but why did we go through all of that trouble? 
// By sorting elements of an array, 
// we are organizing the data in a way that gives us
//  a quick way to look up elements later on. 
// For simplicity, we have been using arrays of numbers 
// up until this point. However, these sorting concepts 
// can be generalized to other data types.
//  For example, it would be easy to modify our comparison-based 
// sorting algorithms to sort strings: instead of leveraging facts like 0 < 1, we can say 'A' < 'B'.


// BINARY SEARCH IRL
// Think of a dictionary. A dictionary contains alphabetically
//  sorted words and their definitions. 
// A dictionary is pretty much only useful if it is ordered 
// in this way. Let's say you wanted to look up the
//  definition of "stupendous." What steps might you take?

// you open up the dictionary at the roughly middle page
// you land in the "m" section
// you know "s" comes somewhere after "m"
//  in the book, so you disregard all pages before 
// the "m" section. Instead, you flip to the roughly 
// middle page between "m" and "z"
// you land in the "u" section
// you know "s" comes somewhere before "u", 
// so you can disregard all pages after the "u"
//  section. Instead, you flip to the roughly middle
//  page between the previous "m" page and "u"
// ...
// You are essentially using the binarySearch algorithm in the real world

// THE ALGORITHM: CHECK THE MIDDLE AND HALF THE SEARCH SPACE

// Formally, our binarySearch will seek to solve the following problem:

// Given a sorted array of numbers and a target num,
//  return a boolean indicating whether or not that target is contained in the array.
// Programmatically, we want to satisfy the following behavior:
 
binarySearch([5, 10, 12, 15, 20, 30, 70], 12) // => true
binarySearch([5, 10, 12, 15, 20, 30, 70,], 24) // => false

// Before we move on, really internalize the fact that 
// binarySearch will only work on sorted arrays! 
// Obviously we can search any array, sorted or unsorted,
//  in O(n) time. But now our goal is be able to search the array
//  with a sub-linear time complexity (less than O(n)).

// BINARY SEARCH RECURSION

//  We'' implement binary serach recursively. As always,
// we start with a base case that captures the scenario of the inout array
// being so trivial, that we know the answer without further calculation
// if we are given an empty array and a target, we can be certain that the target is not inside of the array

function binarySearch(array, target) {
    if (array.length === 0) {
        return false
    }

    let midIdx = Math.floor(array.length / 2)
    let leftHalf = array.slice(0, midIdx)
    let rightHalf = array.slice(midIdx + 1)

    if (target < array[midIdx]) {
        return binarySearch(leftHalf, target)
    } else if (target > array[midIdx]) {
        return binarySearch(rightHalf, target)
    } else {
        return true
    }
}

// The binarySearch will return the correct boolean
// we just pass that result up by returning it ourselves
// the left and right halves do not contain the middle element we chose
// If the target is less than the middle, 
// then the target must be in the left half of the array. 
// If the target is greater than the middle, 
// then the target must be in the right half of the

// TIME AND SPACE COMPLEXITY ANALYSIS

// The complexity analysis of this algorithm is easier to explain through visuals.

// Time Complexity: O(log(n))
// n is the length of the input array
// We have no loops, so we must only consider the number of recursive calls it takes to hit the base case
// The number of recursive calls is the number of times we must halve the array until it's length becomes 0. 
// This number can be described by log(n)
// for example, say we had an array of 8 elements, n = 8
// the length would halve as 8 -> 4 -> 2 -> 1
// it takes 3 calls, log(8) = 3
// Space Complexity: O(n)
// Our implementation uses n space due to half arrays we create using slice.
//  Note that JavaScript slice creates a new array, 
// so it requires additional memory to be allocated.

// When should we use Binary Search?
// Use this algorithm when the input data is sorted!!! 
// This is a heavy requirement, but if you have it,you'll have an insanely fast algorithm.

