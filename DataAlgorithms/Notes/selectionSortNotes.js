// Selection Sort
// Selection Sort is very similar to Bubble Sort.
//  The major difference between the two is that Bubble Sort bubbles the largest elements up to the end of the array,
//  while Selection Sort selects the smallest elements of the array and directly places them at the beginning of the array in sorted position.
//  Selection sort will utilize swapping just as bubble sort did. 
// Let's carefully break this sorting algorithm down.

// The Algorithm: "Select the next smallest"

// Selection sort works by maintaining a sorted region on the left side of the input array; 
// this sorted region will grow by one element with every "pass" of the algorithm. 
// A single "pass" of selection sort will select the next smallest element of unsorted region of the array and move it to the sorted region. 
// Because a single pass of selection sort will move an element of the unsorted region into the sorted region,
//  this means a single pass will shrink the unsorted region by 1 element whilst increasing the sorted region by 1 element.
//  Selection sort is complete when the sorted region spans the entire array and the unsorted region is empty!

// Finding the Minimum Value
// Since a component of Selection Sort requires us to locate the smallest value in the array,
//  let's focus on that pattern in isolation:

function minimumValueIndex(arr) {
    let minIndex = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[minIndex] > arr[j]) {
            minIndex = j
        }
    }

    return minIndex
}

// We won't use this explicit helper function to solve selection sort, 
// however we will borrow from this pattern soon.

// Selection Sort JS Implementation
// We'll also utilize the classic swap pattern that we introduced in bubbleSort. To refresh:

function swap(arr, index1, index2) {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

// Take a look at the snippet below and try to understand how it corresponds to our 
// conceptual understanding of the selection sort algorithm.

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        swap(arr, i, minIndex)
    }
    return arr;
}

// Time and Space Complexity Analysis

// Time Complexity
// Selection Sort runtime is O(n2) because:

// n is the length of the input array
// The outer loop i contributes O(n) in isolation, this is plain to see
// The inner loop j is more complicated, it will make one less iteration for every iteration of i.
// for example, let's say we have an array of 10 elements, n = 10.
// the first full cycle of j will have 9 iterations
// the second full cycle of j will have 8 iterations
// the third full cycle of j will have 7 iterations
// the last full cycle of j will have 1 iteration
// This means that the inner loop j will contribute roughly O(n / 2) on average
// The two loops are nested so our total time complexity is O(n * n / 2) = O(n2)
// You'll notice that during this analysis we said something silly like O(n / 2). In some analyses such as this one, we'll prefer to drop the constants only at the end of the sketch so you understand the logical steps we took to derive a complicated time complexity.

// Space Complexity: O(1)
// The amount of memory consumed by the algorithm does not increase relative to the size of the input array.
//  We use the same amount of memory and create the same amount of variables regardless of the size of our input.
//  A quick indicator of this is the fact that we don't create any arrays.

// When should we use Selection Sort?
// There is really only one use case where Selection Sort becomes superior to Bubble Sort. 
// Both algorithms are quadratic in time and constant in space, but the point at which they differ is in the number of swaps they make.

// Bubble Sort, in the worst case,
//  invokes a swap on every single comparison.
//  Selection Sort only swaps once our inner loop has completely finished traversing the array. 
// Therefore, Selection Sort is optimized to make the least possible number of swaps.

// Selection Sort becomes advantageous when making a swap is the most expensive operation in your system. 
// You will likely rarely encounter this scenario, but in a situation where you've built (or have inherited) 
// a system with suboptimal write speed ability, for instance, maybe you're sorting data in a specialized database tuned strictly for fast read speeds
//  at the expense of slow write speeds, using Selection Sort would save you a ton of expensive operations 
// that could potential crash your system under peak load.

// Though in industry this situation is very rare, 
// the insights above make for a fantastic conversational piece when weighing technical tradeoffs while strategizing solutions in an interview setting.
//  This commentary may help deliver the impression that you are well-versed in system design and technical analysis, a key indicator that someone is prepared for a senior level position.