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

