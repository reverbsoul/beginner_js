// At the base level functions take in values (called arguments), often from a user. They manipulate or do something with those values and then return a result.

// Calculate Bill

// Function Definition - is when you create a function (you define it).
function calculateBill() {
  // this is the function body
  console.log(`Running Calculate Bill!`);
  const cost = 117;
  const tax = 1.095; // 9.5% tax
  const total = cost * tax;

  document.write(
    `<p>Your meal costs $${cost}. Tax in your area is ${tax}%. After tax, your meal was $${total.toFixed(
      2
    )}.</p>`
  );

  return total.toFixed(2);
}

// Normally the above function will return the total, but it is not stored as a variable. Using 'return' allows you to store the result to be used in the console or in other functions.

// toFixed(number) allows you to limit the decimal places, as well as rounding the total

// Function Call - runs the function
// calculateBill();

// In the console you can also call the function as a variable, but it will return the function definition instead of running the function.

// To use the return value outside of the function you will create a new variable with the value of the function. Example:

const myBill = calculateBill();

document.write(
  `The myBill value, returned from calculateBill() is $${myBill}.`
);

// You can also skip defining the return value as a variable by using the function within String Interpretation.

document.write(
  `String Interpretation can also return my bill, my total is $${calculateBill()}.`
);

// This runs the entire function, including document.write - comment out the document.write() line to remove the duplicate text.
