// Built In Functions

// Functions - allow us to group together multiple statements.

// Math.max is a built in function that returns the highest value. You can pass multiple arguments to Math.max by using a comma between each.
// The data you pass into a function is called an argument (ref. above).
console.log(Math.max(10, 12, 27, 21, 14, 19));

// Even console.log() is a function

// console.log(`Hello!`); written in the console will return the value "Hello!" but will also return undefined. This is because not all functions will store a value, they may just create something and then discard it as it does with the string "Hello!"

// querySelector is a built in function that selects a tag in your HTML file.

const h1 = document.querySelector('h1');

console.log(h1.textContent);

// getElementById, similarly grabs an element based on it's ID tag

const idText = document.getElementById('idText');

console.log(idText.textContent);

// scrollTo() is another example of a built in function - see https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo

// Use the following commands in the console

// Provides x and y coordinates as arguments
scrollTo(0, 100);

// Uses an array of arguments.
scrollTo({
  top: 0,
  bottom: 0,
  behavior: 'smooth',
});
