// Insertion Sort
// With Bubble Sort and Selection Sort now in our tool box, 
// we're starting to get some experience points under our belt! 
// Let's a learn another sort to round out our naive, slow category of sorting algorithms!

// The Algorithm: "Insert into the sorted region"
// Insertion Sort is similar to Selection Sort in that it gradually builds up a larger and larger sorted region at the left-most end of the array.

// However, Insertion Sort differs from Selection Sort because this algorithm does not focus on searching for the right element to place (the next smallest in our Selection Sort) on each pass through the array. Instead, it focuses on sorting each element in the order they appear from left to right, regardless of their value, and inserting them in the most appropriate position in the sorted region.

// The Steps
// Insertion Sort grows a sorted array on the left side of the input array by:

// Iterating across the input array one element at a time
// Selecting the current element
// Finding the position in the left sorted region that our element can be inserted whilst maintaining sorted order
// And inserting the current element into that position.
// These steps are easy to confuse with selection sort, so you'll want to watch the video lecture and drawing that accompanies this reading as always!

// Insertion Sort JS Implementation
// Take a look at the snippet below and try to understand how it corresponds to our conceptual understanding of the Insertion Sort algorithm. 

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currElement = arr[i];
        for(let j = i - 1; j >= 0 && currElement < arr.j; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currElement
    }
    return arr;
}

// There are a few key pieces to point out in the above solution before moving forward:

// Our outer for loop starts at the 1st index, not the 0th index, and moves to the right.

// Our inner for loop starts immediately to the left of the current element, and moves to the left.

// The condition for our inner for loop is complicated, and behaves similarly to a while loop!

// We continue iterating to the left toward j = 0, only while the currElement is less than arr[j].
// We do this over and over until we find the proper place to insert currElement, and then we exit the inner loop!
// When shifting elements in the sorted region to the right, we do not replace their value at their old index!

// If the input array is [1, 2, 4, 3], and currElement is 3, after comparing 4 and 3, but before inserting 3 between 2 and 4, the array will look like this: [1, 2, 4, 4].
// I did say we were going to level up a bit! Some students will grasp this algorithm quickly, and others will need more time. If you are currently scratching your head, that is perfectly okay because when this one clicks, it clicks for good.

// If you're struggling, I cannot emphasize enough how helpful it will be to take out a pen and paper or grab a whiteboard marker and step through the solution provided above one step at a time. Keep track of i, j, currElement, arr[j], and the input arr itself at every step. 