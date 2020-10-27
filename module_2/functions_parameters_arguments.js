// The values passed in to a function are called arguments, the take the place of the parameters to the function. In the following example x is the parameter and the number passed in when calling the function is the argument

function calculateTab(x) {
  console.log(`Running CalculateTab!`);

  // assings x which was passed in to the function calculateTab(x)
  const cost = x;

  const taxRate = 1.975;

  const total = cost * taxRate;

  return total.toFixed(2);
}

// Now code can call the function and pass in a value for x
document.write(`

<ul>
  <li>${calculateTab(1)}</li>
  <li>${calculateTab(8324)}</li>
  <li>${calculateTab(485)}</li>
  <li>${calculateTab(429)}</li>
  <li>${calculateTab(1490)}</li>
  <li>${calculateTab(402)}</li>
</ul>

`);

// For more readable code, x can be any name.

function runningTotal(currentTotal, additionalDeposit) {
  console.log(`Running runningTotal!`);
  // You do not need to create the variable that represents the parameter which is passed in. Uncomment the console.log below to show that both currentTotal and additionalDeposit are created without being declared.

  // console.log(
  //   `${currentTotal} & ${additionalDeposit} - These variables were created automatically from the arguments passed in to the parameters.`
  // );

  const runningTotal = currentTotal + additionalDeposit;

  return runningTotal;
}

// The first parameter will automatically become currentTotal in the function and the second parameter will become additionalDeposit

document.write(`${runningTotal(70, 180)}`);

// You can also assign the functions return to a variable

const foodBill = calculateTab(17);
document.write(`Food Bill is: ${foodBill}`);

const bankAccount = runningTotal(200, 1200);
document.write(`Your running total is: ${bankAccount}`);

// Tying it all together, calling both functions to know how much money you have.

document.write(`
  <p>You ate at the restaurant and spent: $${foodBill}</p>
  <p>You deposited $200 to your bank account that had $1200, for a total of: $${bankAccount}</p>
  <p>You have $${bankAccount - foodBill} remaing, spend it wisely!</p>
`);

// When you use a variable as the argument it is passed into the function parameter, using the parameter's name. In this example the value for jBill which is 100 is passed into the function calculateTab(x) as x. When the function calls the parameter it will do so using x and not jBill.

const jBill = 100;
document.write(`J's Bill is: ${calculateTab(jBill)}`);
