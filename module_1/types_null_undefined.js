// UNDEFINED
// Is returned when a variable that exists is called but does not have a value.

let dog;

console.log(dog);

// This is different than the error in the browser when you reference a variable that does not exist, such as person.name (ex. ReferenceError: person is not defined).

// NULL
// Has a value of nothing. Nothing in this context IS the value, where undefined is the absence of a value.

const somethingNull = null;

console.log(somethingNull);

// Penn & Teller reference
// Raymond Joseph Teller famously changed his full legal name to "Teller"
const teller = {
  first: 'Raymond',
  last: 'Teller',
};

teller.first = 'Teller';
teller.last = null;

console.log(teller);
