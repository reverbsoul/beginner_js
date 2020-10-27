const age = 34; // Number Types are either integer values (whole numbers) or floating point values (decimel values)
const name = `justin`;

// You can view the Type of the variable by using "typeof" in the console.
// $ typeof age
// return "number"

// $ typeof name
// return "string"

// You can also use Helpers to evaluate numbers, for example you can use Math.round() in the console to round a number up or down.
// $ Math.round(20.2)
// return 20

// $ Math.round(20.5)
// return 21

// Math.floor() will always round down and Math.ceil() will always round up.
// $ Math.floor(20.99)
// return 20

// $ Math.ceil(20.01)
// return 21

// Math.random() creates a random number between 0-1

// How many pieces of candy will each child get? No one wants to share part of a candy!

const candy = 500;
const children = 17;
const candyDistribution = candy / children;

document.write(`
<p>Each kid gets ${Math.floor(candyDistribution)} pieces of candy.</p>
`);

const usGDP = 2142700000;
const usPop = 330500000;
const dollarsPerCitizen = Math.floor(usGDP / usPop);

document.write(`
<p>Each citizen would have $${dollarsPerCitizen}.</p>
`);

// The % operator will perform division and return the remainder.
const leftoverDollars = usGDP % usPop;

document.write(`
<p>After each citizen received $${dollarsPerCitizen} there would be $${leftoverDollars} dollars left over.</p>
`);

// Keep in mind that floating point math is not exact, and shouldn't be used in returning things like currency.

const tax = 0.1;
const cost = 0.2;

document.write(`
<p>The cost of one piece of candy is $${cost} and the tax is $${tax}, the total price is $${
  cost + tax
}</p>
`);

// For more information use the following in the console
// window.location = `https://${0.1 + 0.2}.com`;

// To avoid doing currency wrong you can instead do calculations in cents which avoids using a floating point number

// Special Number Types:
// Infinity for extremely large numbers, test:
console.log(1000 ** 2000); // where ** is "to the power of"
// return Infinity

// -Infinity (opposite of Infinity)

// Nan (Not a Number)
console.log(1 / 'dog');
// return NaN

// You can see that all three are Number Types
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
