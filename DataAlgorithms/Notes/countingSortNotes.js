// Counting Sort
// Counting Sort is another non-comparison, integer sorting algorithm.
//  Just like Radix Sort, its time complexity is superior to every other comparison-based sorting algorithm we've encountered thus far,
//  but it can only be used in the special case where we are sorting integer data. 
// Additionally, we must know the largest interger value in the input array (which we'll refer to as k) prior to beginning our sort.
//  (Or...we must be willing to take the time to search for it first.)

// Why Integer Data?
// The reason we can only run Counting Sort on integer data is similar to Radix Sort;
//  because it works by exploiting some specific properties of the integer data type. 
// In this case, the property we're exploiting about integers is simpler, 
// and is linked to our friend the array data structure. We're simply going to take advantage
//  of the fact that an arrays indices are integers, and that they are pre-sorted for us.
//  We'll use an array data structure as a storage device for us to count the number of occurences 
// of each integer in our input array. (Thus, the name "Counting Sort".)

// Why we need to know the largest integer of the input array in advance:

// If we're going to use an array as a counting device, 
// and that array must have one element for every possible integer in our input array, 
// we must know in advance how long our counter array will be. 
// This way, when we encounter a new, previously-uncounted integer while iterating through our input, 
// we have a position in the counter array to...count it!

// NOTE: *** This strategy will only work for input arrays containing exclusively positive integers. ***

// However, we can adapt our strategy to work with an input that contains negative integers as well.
//  With just a little extra preliminary information - 
// the smallest integer in the input array - we can allocate largest - 
// smallest (where smallest is negative) elements to our counter array upon initialization,
//  remembering that our counter array's indices now represent values that are offset by Math.abs(smallest).

// For simplicity, and to get the base algorithm down, let's just assume our input has all positive integers for now.