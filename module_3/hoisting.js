console.log(`Hoisting for Duty, Sir!`);

/* eslint-disable */
sayHi();

function sayHi() {
  console.log('Hi');
}

// JS automatically moves functions to the top, allowing you to run sayHi() before it's declared in the app. What is actually run, looks like this:

function sayHello() {
  console.log('Hello');
}

sayHello();

// Variable declarations are also hoisted, but their values are not assigned.

console.log(age); // undefined, which means the variable exists but is not set. Removing the age variable below causes ReferenceError:
var age = 10;

// What JS runs looks like, this:

// var age;
// console.log(age);
// age = 10;

function ageTest(x) {
  console.log(age); // Uses the value of Global age.
  age = x; // resets age
  console.log(age); // logs reset age value x
}

ageTest(14);
