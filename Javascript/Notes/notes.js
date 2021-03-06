// JavasScript OAA notes (review)

// Browser receives HTML to render
// Also gets some script code, which it starts executing(JS)
// script changes what we see on the screen, plays videos, sends request(AJAX)

// JavaScript was written in 10 days for Metscape 2
// originally named Mocha
// submitted in 1997 to ECMA for consideration as an industry standard
// standardized version: ECMAScript

// Why the name JavaScript?
// compliment to Java Applets for little animations
// vaguely similar syntax to Java
// lightweight and simple: no classes, no integers
// not for professionals

// AJAX became popular in the 2000s
// websites can send.receive data to/from server in background
// demand for richer apps on browser
// Faster performance became necessary

// Node developed in 2011 to allow us to write JS on back end
// Since June 2015, current version is ECMAScript6(ES6)


// JS Object is the equivalent as a Ruby Hash 

// JavaScript runs in 2 main environments:

// the browser;
// and server-side.

// JavaScript's genesis comes from the browser;
//  it was designed by Netscape to add dynamic code inside Netscape
//  Navigator. JavaScript code was traditionally run by the user's 
// browser, not the server.

// In this respect, it was used very differently than Ruby. 
// Programmers didn't write stand-alone JavaScript programs
//  (initially there wasn't a javascript my_script.js command 
// like ruby my_script.rb), nor was there a REPL (no irb or pry). 
// There are other differences rooted in JS's history as a browser
//  language that can make it frustrating for general use.

// In recent years, there has been interest in bringing JavaScript 
// to the server. Node.js is a server-side JavaScript framework 
// which allows programmers like us to run JavaScript from their terminals.
//  Our first JS programs won't feature the web browser at all; 
// they'll be a repeat of our first Ruby scripts.

// In Javascript, an expression is a line of code that returns a value. A statement is any line of code
// Every expression needs a semi-colon at the end. Statements that aren't expressions
//  don't generally require semi-colons, and may cause syntax errors.

// Curly braces are used to delineate code blocks such as in function 
// definitions, loops, and if blocks. Curly braces can also 
// be used to define JavaScript objects.

// Mathematical Operators
// +
// -
// *
// /
// %

// Comparison Operators
// >
// <
// >=
// <=
// ===
// !==




// Logical Operators
// &&: and
// ||: or
// !: not

// String Methods
// String.prototype.toLowerCase
// String.prototype.toUpperCase
// String.prototype.indexOf
// +: concatenation


// Array Methods
// Array.prototype.pop
// Array.prototype.push
// Array.prototype.unshift
// Array.prototype.shift
// Array.prototype.indexOf
// Similar to Array#index in Ruby, but returns -1 when it does not find an item.
// []
// Index using bracket notation (similar to Ruby).
// Array.prototype.slice([start, [end]])
// Makes a copy of an array from the start index up to but 
// not including the end index. Both arguments are optional (the first and last elements are used by default).
// Array.includes (ES6+)
// Identical to Array#include? in Ruby
// Array.isArray(ES6+):

// Class method that accepts one argument and returns a boolean 
// representing whether it is an Array.

//  This and That notes
// this

let cat = {
    purr: function () {
        console.log("meow")
    },
    purrMore: function () {
        for (let i = 0; i < 10; i++) {
            this.purr()
        }
    }
}

cat.purr()
cat.purrMore()

// Scope issues with this

function times(num, fun) {
    for (let i = 0; i < num; i++) {
        fun()
    }
}

const cast = {
    age: 5,

    ageOneYear: function() {
        this.age += 1;
    }
}

cat.ageOneYear()

times(10, cat.ageOneYear); // this.age is note defined

// Two ways to solve this problem ^^

// `times` is the same:
function times(num, fun) {
    for (let i = 0; i < num; i++) {
      fun(); // call is made "function-style"
    }
  }
  
  const cat = {
    age: 5,
  
    ageOneYear: function() {
      this.age += 1;
    }
  };
  
  // Function argument is different:
  times(10, function() {
    cat.ageOneYear();
  });
  

// set to window. But the closure doesn't care, because inside, 
// it explicitly calls ageOneYear method style on cat.

// This is a very common pattern, so there is another, less 
// verbose alternative using Function.prototype.bind.

// bind is a method you can call on JS functions.
// Other methods defined on Function objects live 
// in Function.prototype.

// bind works just like the closure we made, 
// in which cat#ageOneYear is called method style on the cat object. 
// cat.ageOneYear.bind(cat) returns a closure that will still be called function-style, but which calls cat.ageOneYear method-style inside of it.

// Note that you can bind functions to any scope, 
// not just this:

const crazyMethod = cat.ageOneYear.bind(dog);

// Anatomy of an Arrow Function
// (parameters, go, here) => {
//   statements;
//   return value;
// };

// Statements are, more generally, any line of cod