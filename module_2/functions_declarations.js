// In JS functions can be used to put a function into a variable.

/* Plain Function */
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// console.log(doctorize(`Jay Miller`));

/* Anon Function - function that does not have a name. */
// function(firstName) {
//   return `Dr. ${firstName}`;
// }

/* Function Expression - stores a function in a variable */
const doctorize = function (firstName) {
  // doesntExist();
  return `Dr. ${firstName}`;
};

// Notice that this function is Anonymous, it has no name. The browser will assume the name of the variable, but still report the function as being anonymous. Uncomment doesntExist() and check the console error, the error is occuring within the dotorize variable from an <anonymous> function.
console.log(doctorize(`J Miller`));

// So what's the difference? A named function is hoisted in JS. This means that a function with a declared name will be automatically loaded at the top of the application so it can be called anywhere in the app. For example:

// console.log(namedFunction(`Regular Function`));

// function namedFunction(functionName) {
//   return `This is a ${functionName}`;
// }

// The function is hoisted to the top, so that the console.log() statement works as intended.

// VS.

// The variable that contains the Function Expression is not hoisted and thus gives an error in the console that the variable is called before initialization.
// console.log(anonFunction(`Function Expression`));

// const anonFunction = function(functionName) {
//   return `This is an ${anonFunction}`;
// };

/* Arrow Funtions */
// Arrow functions are ALWAYS function expressions, they can not be used as regular functions.

// Regular Function
// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }

// Shorten code by not declaring a variable cm. Using a return that only references the argument.
// function inchToCM(inches) {
//   return inches * 2.54;
// }

// Anonymous Function
const inchToCM = function (inches) {
  return inches * 2.54;
};

console.log(inchToCM(2));

// Arrow Function
// Part One - remove the word function and use a fat-arrow on the other side of the variable.

/* eslint-disable */
const cmToInch = (cm) => {
  return  cm / 2.54;
}

// Part Two - remove the explicit "return" keyword and put the whole statement on a single line

/* eslint-enable */
const name = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(name(`Fred`, `Astair`));
console.log(doctorize(name(`Shakey`, `Hands`)));

// Is the same as:

function makeName(first, last) {
  const fullName = `${last}, ${first}`;
  return fullName;
}

console.log(makeName(`Juke`, `Wilson`));

// You don't always have to use arrow functions, you should aim to write readable JS

// Example 2 - using only numbers.
const footToMeter = (feet) => (feet * 12) / 32;

console.log(footToMeter(28));

// If you only have one parameter you can even remove the () around the parameter.
// const footToMeter = feet => feet * 12 / 30;

const add = (a, b = 3) => a + b; // requires () for 2 variables

console.log(add(1)); // uses default value for b
console.log(add(1, 2));

// IIFE
// Immediately Invoked Function Expression

// Regular Function
const anon = function (x) {
  console.log(`Running Anon Function`);
  return x;
};
console.log(anon(2));

// IIFE Example 1
(function (x) {
  console.log(`IIFE Function`);
  return console.log(x);
})(2);

// IIFE Example 2 - using multiple arguments
(function (firstName, lastName) {
  console.log(`IIFE # 2`);
  return console.log(`${firstName} ${lastName}`);
})(`Judd`, `Aptow`);

/* Methods */

// console.log('Hi'); - In this example console is actually an object and log() is a function.

// Functions that live within an Object are called Methods

/* eslint-disable */
// Note: The function set to the value of the property sayHi does not need to be named. As with setting a function to a variable, the browser will assume the name of the function based on the name of the property it is assigned to.
const imAnObject = {
  yourName: `Jim Carrey`,
  // Method
  sayHi: function () { // "sayHi: function sayHi ()"
    return `Hi Friend`;
  }
}

console.log(imAnObject.sayHi());

/* eslint-enable */
const oblongObject = {
  size: `oblong`,
  // Short-hand Method
  sayWeird() {
    return `That's some weird shit!`;
  },
};

console.log(oblongObject.sayWeird());

const parkRec = {
  episode: 500,
  // Short-hand Method
  sayRon(x) {
    return `${x}`;
  },
  // Arrow Functions/Methods
  sayArrow: (x) => x,
  sayMath: () => 1 + 2,
};

console.log(parkRec.sayRon(`"Do you think they got eaten?"`));

console.log(
  `In episode ${parkRec.episode}, Ron says, ${parkRec.sayRon(
    `"Do you think they got eaten?"`
  )}`
);

console.log(parkRec.sayArrow(`Arrow has been said.`));

console.log(parkRec.sayMath());

/* Callback Functions */

// When (x) happens, then run (y)
