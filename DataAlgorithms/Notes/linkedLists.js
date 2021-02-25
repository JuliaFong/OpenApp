// Linked Lists
//  Linked list don't have the most practical real-world applictions,
// they're important and effective education tool on what data

// Linked list are simple
// They can be applied as the underlying data structure while implementing
// a variety of other prevalent abstract data types such as Lists, Stacks, and queues. 


// A linked list data structure represents a linear sequence of vertices and tracks three important properties

// Linked List Properties 

//  Property: Head
// Description: The first node in the list

// Property: Tail
// Description: The last node in the list

// Property: Length
// Description: The number of nodes in the listl the list's length.

// Data being tracked by a particular Linked List does not live inside the 
// linked list instance itself. 

// Node instances track important properties as well

// Linked List Node Properties:

// Property: Value
// Description: The actual value this node represents

// Property: Next
// Description: The next noden in the list(relative to this node)

// Property: Previous
// The previous node in the list(relative to this node)

// Linked lists contain ordered data, just like arrays. The first node in the list is indeed, first.
// From the perspective of the very first node in the list, the next node is the previous node is the first node,
// and the next node is the third node etc. etc. etc.

// Linked lists and Arrays are both implrmentations of the List ADT

// The important distinction to be made between Arrahs and Linked List,
// is how they physically store their data
// As opposed to how they represent the order of their data

// Arrays contain contiguous data. Each element of an array is actually stored
// next to it's neighboring element in the actual hardware
// of your machine in a single continuous block in memory

// Linked Lists contain non-contiguous data.
// Linked Lists represent data that is ordered linearly, that mental model is just that -
// an interpretation of the representation of information, not reality

// In reality the actualy hardware of your machinem whether it be in a disk
// or in a memory, a Linked List's Nodes are not stored in a single
// continuous block of addresses. Linked List Nodes live at randomly distributed addresses throughout your machine.
// The only reason we know which node comes next in the list is because we've assigned its reference to the current
// node's next pointer

// Linked List Nodes have not indices, and no random access
// withouth random access, we don't have the ability to look up individual Linked List Node in constant time.
// Instead, to find a particular Node, we have to start at the very first Node and iterate through
// the Linked List one node at a time

//When implementing a Linked List, we must implement both the
// Linked List class and the Node class.
// Since the acual data lives in the Nodes,
// it's simplier to implement the Nodes class first

// Types of Linked Lists
// There are four tpyes of Linked lists you should be familiar with

// Linked List Types:

// List Type: Singly Linked
// Description: Nods have asibglepointer connecting them in a single direction
// Directionality: Head => Tails

// List Type: Doubly Linked
// Description: Nodes have two pointers connection them bi-directionally
// Directionality: Head => <= Tail

// List Type: Multiply Linked
// Description: Nodes have two or more pointers, providing a variety of 
// potential node orderings
// Directionality: Head <=> Tail, A => Z, Jan => Dec, Etc

// List type: Circularly Linked
// Description: Final node's next pointer points to the first node,
// creating a non-linear, circular version of a Linked List
// Directionality: Head => Tail => Head => Tail

// Any type of Linked List can be implemented Circularly(Circular Doubly Linked List)
// Doubly Linked Lust is actually a special case of a Multiply Linked List


// Linked List Methods

// Linked Lists are great foundation builders when learning about data structure
// they share a number of similar methods with other common data structures
// You will find that many of the concepts discussed here will repeat themselves as we dive
// into some of the more compllex non-linear data structures later on, like Trees and Graphs

// Type: Insertion
// Name: addToTial
// Description: Adds a new node to the tail of the Linked List
// Returns: Updated Linked List

// Type: Insertion
// Name: addToHead
// Description: Add a new node to the head of the Linked List
// Returns: Updated Linked List

// Type: Insertion
// Name: instertAt
// Description: Insterts a new node at the "index", or position, specified
// Returns: Boolean

// Type: Deletion
// Name: removeTail
// Descriptiom: Removes the node at the tail of the Linked List
// Returns: Removed node

// Type: Deletion
// Name: removeHead
// Description: Removes the node at the head of the Linked List
// Returns: Removed node

// Type: Deletion
// Name: removeFrom
// Description: Removes the node at the "index" or position, specified
// Returns: Removed node

// Type: Search
// Name: contains
// Description: Searches the Linked List for a node with the value specified
// Returns: Boolean

// Type: Access
// Name: get
// Description: Gets the node at the "index", or position, specified
// Returns: Node at index

// Type: Access
// Name: set
// Description: Updates the value of a node at the "index", or position, specified
// Returns: Boolean

// Type: Meta
// Name: size
// Description: Returns the current size of the Linked List
// Returns: Integer

// Time and Space Complexity Analysis
// The complexities below apply to both Singly and Doubly Linked Lists:

// Data Structure Operation: Access
// Time Complexity(Avg): Θ(n)
// Time Complexity(Worst): O(n)
// Space Complexity(Worst): O(n)

// Data Structure Operation: Search
// Time Complexity(Avg): Θ(n)
// Time Complexity(Worst): O(n)
// Space Complexity(Worst): O(n)

// Data Structure Operation: Insertion
// Time Complexity: Θ(1)
// Time Complexity(Worst): O(1)
// Space Complexity(Worst): O(n)

// Data Structure Operation: Deletion
// Time Complexity(Avg): Θ(1)
// Time Complexity(Worst): O(1)
// Space Complexity(Worst): O(n)


// Time Complexity - Access and Search:

// Scenarios:
// We have a Linked List, and we'd like to find the 8th item in the list.
// We have a Linked List of sorted alphabet letters, and we'd like to see if the letter "Q" is inside that list.

// Unlike Arrays, Linked Lists Nodes are not stored contiguously 
// in memory, and thereby do not have an indexed set of memory 
// addresses at which we can quickly lookup individual nodes in constant time. 
// Instead, we must begin at the head of the list (or possibly at the tail, if we have a Doubly Linked List), 
// and iterate through the list until we arrive at the node of interest.

// In the worst case scenario, we may have to traverse the 
// entire Linked List until we arrive at the final node. 
// This makes both Access & Search Linear Time operations.

// Time Complexity - Insertion and Deletion:
// Scenarios:
// We have an empty Linked List, and we'd like to insert our first node.
// We have a Linked List, and we'd like to insert or delete a node at the Head or Tail.
// We have a Linked List, and we'd like to insert or delete a node fr

// Discussion:
// Since we have our Linked List Nodes stored in a non-contiguous manner that relies on pointers to keep track of where the next and previous nodes live, Linked Lists liberate us from the linear time nature of Array insertions and deletions. We no longer have to adjust the position at which each node/element is stored after making an insertion at a particular position in the list. Instead, if we want to insert a new node at position i, we can simply:

// Create a new node.
// Set the new node's next and previous pointers to the nodes that live at postions i and i - 1, respectively.
// Adjust the next pointer of the node that lives at position i - 1 to point to the new node.
// // Adjust the previous pointer of the node that lives at position i to point to the new node.
// And we're done, in Constant Time. No iterating across the entire list necessary.

// it's tempting to call insertion or deletion in the middle of a Linked List a linear time operation since there is lookup involved.
//  However, it's usually the case that you'll already have a reference to the node where your desired insertion or deletion will occur.
// For this reason, we separate the Access time complexity from the Insertion/Deletion time complexity, and formally state 
// that Insertion and Deletion in a Linked List are Constant Time across the board.



// Without a reference to the node at which an insertion or deletion will occur, 
// due to linear time lookup, an insertion or deletion in the middle of a Linked List will still take Linear Time, sum total.

// Space Complexity:
// Scenarios:
// We're given a Linked List, and need to operate on it.
// We've decided to create a new Linked List as part of strategy to solve some problem.
// Discussion:
// It's obvious that Linked Lists have one node for every one item in the list, and for that reason we know that Linked Lists take up Linear Space in memory. However, when asked in an interview setting what the Space Complexity of your solution to a problem is, it's important to recognize the difference between the two scenarios above.

// In Scenario 1, we are not creating a new Linked List. We simply need to operate on the one given. Since we are not storing a new node for every node represented in the Linked List we are provided, our solution is not necessarily linear in space.

// In Scenario 2, we are creating a new Linked List. If the number of nodes we create is linearly correlated to the size of our input data, we are now operating in Linear Space.

// NOTE:
// Linked Lists can be traversed both iteratively and recursively. If you choose to traverse a Linked List recursively, there will be a recursive function call added to the call stack for every node in the Linked List. Even if you're provided the Linked List, as in Scenario 1, you will still use Linear Space in the call stack, and that counts.

