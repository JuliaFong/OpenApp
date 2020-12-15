// Variable notes (review)

// Few ways to delcare variables and constants in JS

// var
// let (ES6+)
// const (ES6+)
// window and global

// Declaration

// In order to use a vairbale or constant in Js, we must declre
// it by prepebding the variable's name with var, let, or const
// Declaring a variable is the only way to introduce it to the environment

// Var


// to declare a functionally-scoped variable use the var keyword
// Since ES6 came out, var is not preferred use let or const

// let (ES6+)
//  let is a new feature in ES6
// we can use let to declare block-scoped variables
// JS will raise a syntax error if you try to declare the same
// let variable twice in one block

// Const(ES6+)

// const is a new feature in ES6
// use const to declare constants. Constants should be used for 
// constructs that will not be re-declared or re-assigned

// Poperties of constants
// They are block-scoped like let
// Unline Ruby constants, JS will actually enforce constants by
// raising an error if you try to reassign them
// Trying to redeclare a constant with a var or let by using the
// same name will also raise an error
// Constants are not immutable, only the ninding is immutable

// Globals

// If you leave off a declaration when initializing a variable,
// it will become a global * NEVER DO THIS *
// They create unpredictable and confusing errors