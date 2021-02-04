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