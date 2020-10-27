// You can use single-quote, double-quote, and back-tick to create Strings. However, you should be using the same format throughout a project. You can set up ESLint to make sure that all of your String Types are setup the same way.

// eslint-disable will disable eslint throughout the entire document, you can also use eslint-disable-line to disable eslint for a single line.

/* eslint-disable */
const name = 'jay';
const middle = "michael"; /* eslint-disable-line */
const last = `miller`;

// Using single-quote can cause issues when using strings that include apostrophe's as the apostrophe will be read as closing the String.

// const singleQuote = 'She's All That';

// To use an apostrophe within a string that uses signle-quotes you can "escape" the character by use \ in front of the apostrophe.

const singleQuote = 'She\'s All That';

// You can also use double-quotes to surround a String that includes apostrophe's, however you will then run in to the same issue with any double-quotes within the String and will need to escape them.

// const doubleQuote = "She's so angry, she said "God Damn!"";

// const doubleQuote = "She's so angry, she said \"God Damn!\"";

// Ultimately back-tick will allow both single-quote and double-quote, and will almost never need an escape (since back-tick is so rarely used, technical writing may be an exception)

const allQuotes = `She's so angry, she said "God Damn!"`;

// Back-ticks can also allow you to use multiple line strings and retain the line-break

const pizzaLove = `I
Love
Pizza!`;

console.log(pizzaLove);

// Using single-quote or double-quote will require you to escape each line, but will not maintain the line-break. The following example will be rendered on the same line.

const pizzaLoveBroken = 'I\
Love\
Pizza!';

console.log(pizzaLoveBroken);

// This becomes very useful when writing html within JS

const htmlExample = `
  <div>
    <p>Tags retain their spacing within the inspection tool/html files</p>
    <p>You can see this in the browser by pressing CTRL+SHIFT+C</p>
  </div>
`;

document.write(htmlExample);

// Concatenation VS. Interpretation

const info = `
  <h3>Information</h3>
  <p>These are the things you should know.</p>
  <p><b>Trust</b> me!</p>
`;

// Concatenation allows you to render a variable within strings (using single-quote or double-quote). The downside is that + is used with Numbers and can cause confusion and bugs.
document.write("<div id=\"container\"><h2>Concatenation Example</h2><p>Concatenate the info variable <div style=\"color:red\">(between here)</div></p>" + info + "<p><div style=\"color:red\">(and here)</div></p></div>");

// Interpretation, using back-ticks and surrounding variables with ${} allows you to remove concatenation. You can also format the same String from the above example so that it is readable.
document.write(`
<div id="container">
  <h2>Interpretation Example</h2>
  <p>
    Interprate the info variable <div style="color:red">(between here)</div>
  </p>
  ${info}
  <p>
    <div style="color:red">(and here)</div>
  </p>
</div>
`);

// Interpretation also allows you to run any Statement within ${}

document.write(`I am ${33 + 1} years old.`)