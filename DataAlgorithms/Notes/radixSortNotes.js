// Radix Sort

// Radix Sort is a non-comparison, integer sorting algorithm. 
// Its time complexity is superior to every other sorting algorithm we've encountered thus far, 
// but it can only be used in the special case where we are strictly sorting integer data.

// Radix Sort is most often used on lists of binary numbers, 
// but that doesn't mean that its only application is to sort cryptic machine code!
//  All sorts of data can be converted into binary format before being processed, 
// including long strings of text and image data.
//  Regardless of the type of data we'd like to sort, 
// it is critical that all data be converted to binary (or some other integer representation) 
// before Radix Sort is invoked.

// Why Interger Data?

// The reason we can only run Radix Sort on integer data is because 
// it works by exploiting some specific properties of that data.
// Numbers have meta information about themselves baked into their representation
// and we're going to take advantage of it

//  When working with positive numbers, we know that any 3 digit
// number is greater than any other 2 digit number. The individual
// digits themselves are irrelevant. We can write our algorithm
// without actually comparing any values,
// simply sorting based on an integer's digit-length

// In order to implement Radix Sort, there are some basic questions
// we'll need to answer.

// Implementation:
// In order to implement Radix Sort, there are some basic questions
// we'll need to answer. Since we'll need to answer them repeatedly
// throughout out algorithm, we can abstract the process of answering
// each question out into a set of helper functions

// Radix Sort

function radixSort(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let maxDigits = getMaxDigits(arr);
    for (let k = 0; k < maxDigits; k++) {
        let buckets = Array.from({length: 10}, () => [])

        for (let i = 0; i < arr.length; i++) {
            let digit = getDigitFrom(arr[i], k)
            buckets[digit].push(arr[i])
        }

        arr = [].concat(...buckets)
    }
    return
}

// solution for position and negative integers

function radixSortWithNegatives(arr) {
    if (!Array.isArray(arr)) {
      return null;
    }
  
    var negatives = arr.filter(item => item < 0);
    var negativesSorted = [];
    if (negatives.length > 0) {
      negativesSorted = radixSort(negatives.map(item => Math.abs(item)))
                          .reverse()
                          .map(item => -item);
    }
  
    var positives = arr.filter(item => item >= 0);
    let maxDigits = getMaxDigits(positives);
  
    for(let k = 0; k < maxDigits; k++){
      let buckets = Array.from({length: 10}, () => []);
  
      for (let i = 0; i < positives.length; i++) {
          let digit = getDigitFrom(positives[i], k);
          buckets[digit].push(positives[i]);
      }
      positives = [].concat(...buckets);
    }
    return negativesSorted.concat(positives);
  }

//   Time and Space Complexity Analysis
// Time Complexity
// In general, the best, average, and worst case time complexities of Radix Sort are all the same.

// Since this algorithm requires iterating over all n elements of the input array, and doing so k times, where k is the length (number of digits) of the longest integer in the array, we wind up with a run time of O(n * k). This makes Radix Sort faster than any of the previous comparison-based algorithms we've seen earlier in the course!

// However, there is actually some debate in the computer science community over this topic. There exists a camp that believes that when Radix Sort's input array contains entirely unique values, due to a characteristic of the way computers store numerical data, that k becomes log k. (See Wikipedia: Radix Sort)

// If this is true, the absolute worst case scenario becomes the case where the length of the longest integer in the input array, k, is equal to (or greater than) the total number of elements in the array, n. In this scenario, we wind up with an O(n log(k)), or approximately O(n log(n)), run time, making Radix Sort, at worst, equal in speed to our fastest comparison-based sorting algorithm.

// Though it will require some additional research, this may be a worthwhile talking point in an interview setting!

// Space Complexity
// Radix Sort is an O(n + k) space algorithm.

// The amount of memory consumed by the algorithm increases relative to both the size of the input array and the length of the longest integer.

// When should we use Radix Sort?
// You should consider using Radix sort whenever you need to:

// Sort a list of any sort of binary data, including numeric, text, or image data in binary format.
// Sort a list of integers, and you don't know the value of the largest element in the list.
// If you do know the largest element in the list, see countingSort!
// Radix Sort's run time, O(n * k), is dependent on the length (number of digits) of the largest integer in the input, k. For this reason, it is fastest when k is relatively small.

