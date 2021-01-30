// Quick Sort
// Time for another efficient sorting algorithm! 
// You'll see that quickSort has a similar "divide and conquer" strategy to mergeSort. 
// Here are a few key ideas that will motivate our design:

// it is easy to sort elements of an array relative to a particular target value
// for example given [7, 3, 8, 9, 2] and a target of 5, we know [3, 2] are numbers
//  less than 5 and [7, 8, 9] are numbers greater than 5.
// we can consider an array of 0 or 1 elements as already trivially sorted

// How does it work?
// In general, the strategy is to divide the input array into two subarrays;
//  one with the smaller elements, and one with the larger elements. 
// Then, it recursively operates on the two new subarrays, and continues
//  this process until we reach subarrays of length 1 or smaller.
//  As we have seen with Merge Sort, arrays of such length are automatically sorted (for obvious reasons).

// The steps, when discussed on a high level, are simple:

// Select one element called the "pivot". (This step varies by the implementation.)
// Find the index in the final output at which the pivot element should end up. To do this:
// Move all elements smaller than the pivot to the pivot's left, and all elements greater than than the pivot to the pivot's right.
// Repeat the process, individually, for the left side, and then for the right side, by recursively calling Quick Sort on each subarray.

// The Algorithm: "Divide and Conquer"
// Let's hone in on the first major point above. 
// Formally, we want to partition elements of an array relative to a pivot value. 
// That is, we want elements less than the pivot to be separated from elements that are greater than or equal to the pivot. 
// Our goal is to create a function with this behavior:

let arr = [7, 3, 8, 9, 2]
partition(arr, 5) // => [[3, 2], [7,8,9]]

function partition(array, pivot)
    let left = []
    let right = []

    array.forEAch(el => {
        if (el < pivot) {
            left.push(el)
        } else {
            right.push(el)
        }

        rteurn [left, right]
    })


// OR

function partitions(arrary, pivot) {
    let left = array.filter(el => el < pivot) 
    let right = array.filter(el => el >= pivot)
    return [left, right]
}

// Both of the above implementations are correct, but we'll use the second one as it is 
// cleaner. It's worth mentioning that the partition function will have a runtime of O(n).
//  forEach and filter both have linear, O(n), time complexity. 
// Although our fancy partition does filter twice, this is a constant we drop, O(2n) = O(n). 
// Linear time is fast so we are quite happy with partition.


// We won't be using an explicit partition helper function in our quickSort implementation,
//  however we will borrow heavily from this pattern. As you design algorithms, it helps to think about 
// key patterns in isolation, although your solution may not feature that exact helper.
//  Some would say we like to divide and conquer.

// Quick Sort Recursion
// Let's begin structuring the recursion.
//  The base case of any recursive problem is where the input is so trivial, 
// we immediately know the answer without calculation. 
// If our problem is to sort an array, what is the trivial array? 
// An array of 1 or 0 elements! Let's establish the code:

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivot = array.shift()
    let left = array.filter(el => el < pivot)
    let right = array.filter(el => el >= pivot)

    let leftSorted = quickSort(left)
    let rightSorted = quickSort(right)

    return leftSorted.concst([pivot]).concat(rightSorted)
}