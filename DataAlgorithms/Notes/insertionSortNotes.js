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

// Time Complexity
// Insertion Sort runtime is O(n2) because:

// In the worst case scenario where our input array is entirely unsorted, since this algorithm contains a nested loop, its run time behaves similarly to bubbleSort and selectionSort. In this case, we are forced to make a comparison at each iteration of the inner loop. Not convinced? Let's derive the complexity. We'll use much of the same argument as we did in selectionSort. Say we had the worst case scenario where are input array is sorted in full decreasing order, but we wanted to sort it in increasing order:

// n is the length of the input array
// The outer loop i contributes O(n) in isolation, this is plain to see
// The inner loop j is more complicated. We know j will iterate until it finds an appropriate place to insert the currElement into the sorted region. However, since we are discussing the case where the data is already in decreasing order, the element must travel the maximum distance to find it's insertion point! We know this insertion point to be index 0, since every currElement will be the next smallest of the array. So:
// the 1st element travels 1 distance to be inserted
// the 2nd element travels 2 distance to be inserted
// the 3rd element travels 3 distance to be inserted
// ...
// the n-1th element travels n-1 distance to be inserted
// This means that our inner loop j will contribute roughly O(n / 2) on average
// The two loops are nested so our total time complexity is O(n * n / 2) = O(n2)

// Space Complexity
// O(1)

// The amount of memory consumed by the algorithm does not increase relative to the size of the input array. We use the same amount of memory and create the same amount of variables regardless of the size of our input. A quick indicator of this is the fact that we don't create any arrays.

// When should we use Insertion Sort?
// "Online Algorithms": the input data is streamed in pieces
// Insertion Sort has one advantage that makes it absolutely supreme in one special case. Insertion Sort is what's known as an "online" algorithm. Online algorithms are great when you're dealing with streaming data, because they can sort the data live as it is received.

// If you must sort a set of data that is ever-incoming, for example, maybe you are sorting the most relevant posts in a social media feed so that those posts that are most likely to impact the site's audience always appear at the top of the feed, an online alogirthm like Insertion Sort is a great option.

// Insertion Sort works well in this situation because the left side of the array is always sorted, and in the case of nearly sorted arrays, it can run in linear time. The absolute best case scenario for Insertion Sort is when there is only one unsorted element, and it is located all the way to the right of the array.

// Well, if you have data constantly being pushed to the array, it will always be added to the right side. If you keep your algorithm constantly running, the left side will always be sorted. Now you have linear time sort.

// Else:
// Insertion Sort is, in general, useful in all the same situations as Bubble Sort. It's a good option when:

// You are sorting really small arrays where run time will be negligible no matter what algorithm we choose.
// You are sorting an array that you expect to already be nearly sorted.