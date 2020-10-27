console.log(`Running scope.js`);

// Global Variable
// A variable that is available anywhere. Created outside of functions or methods in your application.

const globalVariable = `Use Me!`;

// Function Scope

function go() {
  const hair = `blonde`;
}

// The following console.log() will not work, because the variable is within go() and can not be referenced outside the function.
// console.log(hair());

// In order for console.log(hair()) to work it would need to be called within the function, or the value neets to be returned within the function.

function fnScope() {
  const age = 100;
  console.log(age); // Works
}

// Does NOT work
// console.log(age);

// Works
fnScope();

function returnScope() {
  const returnValue = true;
  return returnValue;
}

// The returnValue variable is now available outside the function by way of calling returnScope().
console.log(returnScope());

// You can call Global Variables within a function.
function deliverGlobal() {
  console.log(globalVariable);
}

deliverGlobal();

// Shadow Variable - naming a Function Scope variable the same as a global variable. The function will first use local variables before looking at global variables.

function overideGlobal() {
  const globalVariable = `You changed me!`;
  console.log(globalVariable);
}

overideGlobal();

// Not recommended. A shadow variable overwrites the global variable. This means that you can no longer use the global variable. You should try to use more precise naming to avoid errors.

/* BLOCK SCOPE */
/* eslint-disable */

// Does not work as cool is defined within the block.
if (1 === 1) {
  const cool = true;
}

// console.log(cool);

// Works, because the block changes the Global Variable
let cooler;
if (1 === 1) {
  cooler = `truer`;
}

console.log(cooler);

// Generally you would want to put the block inside of a function. So the global variable has a Function Scope instead of a global scope.

function makeCool(name) {
  let isCool;
  if (name === `j`) {
    isCool = `J is cool!`;
  }
  console.log(isCool);
  return isCool;
}

makeCool(`j`);

// Another Example

const dog = `Cheech`;

function logDog() {
  console.log(dog);
}

function dogName() {
  const dog = `Max`; // Sets the global var to `Max`
  logDog(); // Calls the function logDog() above.
  console.log(dog); // Shows the local variable dog.
}

// Will return 'Cheech' as JS looks up all contained functions regardless of where they exist in the function. The block that includes logDog() is thus asking for logDog() before setting the dog variable assigned to the go() function.
dogName();

// Generally you will never want to use Global Variables as they quickly become a source of errors when Function Schope variables have the same name.

// Putting a function within the scope of another function works similarly.

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}

sayHi(`j miller`);
sayHi(`Marky`)

// All together now.

const bestFriend = `Andy`;

// function logBestFriend() {
//   return bestFriend;
// }

// console.log(logBestFriend()); // Returns Andy


// function bestFriendTest() {
//   const bestFriend = `Terry`;
//   const trueBest = logBestFriend();
//   console.log(`It's a trick question, you can have more than one best friend. Both ${trueBest} and ${bestFriend} are best friends.`);
// }

function logBestFriend(name) {
  const bestFriend = name;
  return bestFriend;
}

function bestFriendsTest(x, y) {
  const bestFriend = y;
  const trueBest = logBestFriend(x);
  console.log(`It's a trick question, you can have more than one best friend. Both ${trueBest} and ${bestFriend} are best friends.`);
}
bestFriendsTest('Andy', 'Terry');
