// Merge Sort
// We've explored a few sorting algorithms already, all of them being quite slow
//  with a runtime of O(n2). It's time to level up and learn our first time efficent 
// sorting algorithm! We'll explore mergeSort in detail soon, but let's jot down some key ideas for now.
//  The following points are not steps to algorithm yet, rather they are ideas that will motivate 
// how we will design this algorithm:

// it is easy to merge elements of two sorted arrays into a single sorted array
// we can consider an array containing only a single element as already trivially sorted
// we can also consider an empty array as trivially sorted

// The Algorithm: "Divide and Conquer"
// We're going to need a helper function that solves the first major point from above.
//  How might we merge two sorted arrays?
//  In other words we want a merge function that will behave like so:

let arr1 = [1, 5, 10, 15]
let arr2 = [0, 2, 3, 7, 10]
merge(arr1, arr2) // => [0, 1, 2, 3, 5, 7, 10, 10, 15]

// Merge
// Merging two sorted arrays is simple. 
// Since both arrays are sorted, we know the smallest numbers to always be at the front of the arrays.
//  We can construct the new array by comparing the first elements of both input arrays. 
// We remove the smaller element from it's respective array and add it to our new array.
//  Do this until both input arrays are empty:

function merge(array1, array2) {
    let merged = []

    while (array1.length || array2.length) {
        let ele1 = array1.length ? array1[0] : Infinity
        let ele2 = array2.length ? array2[0] : Infinity

        let next;
        if (ele1 < ele2) {
            next = array1.shift();
        } else {
            next = array2.shift()
        }

        merged.push(next);
    }
    return merged
}

// 0 is considered a falsey value, meaning it acts like false when used in boolean expressions.
//  All other numbers are truthy.
// Infinity is a value that is guaranteed to be greater than any other quantity
// shift is an array method that removes and returns the first element

// By using Infinity as the default ele when an array is empty,
//  we are able to elegantly handle the scenario where one array empties before the other. 
// We know that any actual element will be less than Infinity so we will continually take the other element 
// into our merged array.

// We now have a way to merge two sorted arrays into a single sorted array.
//  It's worth mentioning that merge will have a O(n) runtime where n is the combined length of the two input arrays.
//  This is what we meant when we said it was "easy" to merge two sorted arrays; linear time is fast! We'll find fact this useful later.

// Merge Sort Recursion
// Now that we satisfied the merge idea, 
// let's handle the second point. That is,
//  we say an array of 1 or 0 elements is already sorted. 
//  This will be the base case of our recursion.
//   Let's begin adding this code:

// If our base case pretains to an array of a very small size,
//  then the design of our recursive case should make progress toward hitting this base scenario.
//  In other words, we should recursively call mergeSort on smaller and smaller arrays.
//  A logical way to do this is to take the input array and split it into left and right halves.

// We know that mergeSort will take in an array and return the sorted version;
//  we assume that it works. That means the two recursive calls will 
// return the sortedLeft and sortedRight halves.

// Okay, so we have two sorted arrays.
//  We want to return one sorted array.
//  So merge them! Using the merge function

function mergeSort(array) {
    if (array.length <= 1) {
        return array
    }

    let midIdx = Math.floow(array.length / 2)
    let leftHalf = array.slice(0, midIdx)
    let rightHalf = array.slice(midIdx)

    let sortedLeft = mergeSort(leftHalf)
    let sortedRight = mergeSort(rightHalf)

    return merge(sortedLeft, sortedRight)
}

// mergeSort 
// is a classic example of a "Divide and Conquer" algorithm. 
// In other words, we keep breaking the array into smaller and smaller sub arrays. 
// This is the same as saying we take the problem and break it down into smaller and smaller subproblems.
// We do this until the subproblems are so small that we trivially know the answer to them 
// (an array length 0 or 1 is already sorted). 
// Once we have those subanswers we can combine to reconstruct the larger problems that we previously divided
// (merge the left and right subarrays).

// Time and Space Complexity Analysis

// Time Complexity: O(n log(n))
// n is the length of the input array
// We must calculate how many recursive calls we make.
//  The number of recursive calls is the number of times we must split the array to reach the base case. 
// Since we split in half each time, the number of recursive calls is O(log(n)).
// for example, say we had an array of length 32
// then the length would change as 32 -> 16 -> 8 -> 4 -> 2 -> 1, 
// we have to split 5 times before reaching the base case, log(32) = 5
// in our algorithm, log(n) describes how many times we must halve n until the quantity reaches 1.
// Besides the recursive calls, 
// we must consider the while loop within the merge function, which contributes O(n) in isolation
// We call merge in every recursive mergeSort call, so the total complexity is O(n * log(n))
// Space Complexity: O(n)
// Merge Sort is the first non-O(1) space sorting algorithm we've seen thus far.

// The larger the size of our input array, the greater
//  the number of subarrays we must create in memory. 
// These are not free! They each take up finite space, 
// and we will need a new subarray for each element in the original input. 
// Therefore, Merge Sort has a linear space complexity, O(n).

// When should we use Merge Sort?
// Unless we, the engineers, have access in advance to some unique, 
// exploitable insight about our dataset, it turns out that O(n log n) time is the best we can do when sorting unknown datasets.

// That means that Merge Sort is fast! It's way faster than 
// Bubble Sort, Selection Sort, and Insertion Sort. 
// However, due to its linear space complexity, 
// we must always weigh the tradeoff between speed and memory consumption when making the choice to use Merge Sort. Consider the following:

// If you have unlimited memory available, use it, it's fast!
// If you have a decent amount of memory available and a medium sized dataset,
//  run some tests first, but use it!
// If you have very limited memory and you've got time to kill,
//  maybe you should consider other options.
// If you have very limited memory and no time to kill...well, 
// you're going to have to do some data analysis to look for some exploitable feature of the data set, 
// but that takes human time.