// Boolean and Equality
// A boolean value is true or false

const isDrawing = false;

const age = 18;
const ofAge = age >= 21;

document.write(`

<b>You are ${age} years old.</b>
<p>You are of legal drinking age: <span style="color:red">${ofAge}</span></p>

You are approximately ${age * 365} days old
`);

// Equals

// Triple equals checks that the value and type are the same - should almost always be used

console.log("21" === 21); /* eslint-disable-line */
// return false - a string and a number are not equal

// Double equals checks that two values are the same.

console.log("21" == 21); /* eslint-disable-line */
// return true - The String "21" is read as a number, and the Number 21 is added to it.
