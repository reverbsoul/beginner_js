console.log(`running dom_strings_xss.js`);

// --> SECURITY / SANITIZATION <--
// Many times the variables you use will be the result of a user inputting data. For example you may ask a user what their profile image should be (imgLink). If the user enter HTML code it would then be rendered to the DOM. To make sure this does not happen you will want to sanitize the input.

// Via <script> tags which can be rendered within HTML, a user could even hijack an entire page or website.

const xss = `<h1>HIJACKED!<script></h1>`;
console.log(xss);

// --> CHANGE HTML <--
// Use innerHTML() to change the heading.
// Add a h2 subheading.

const heading = document.querySelector('h1');
const newHeading = `I've changed`;
const subHeading = `I've been added`;
const width = 500;
const imgLink = `https://picsum.photos/${width}`;

// Create myHTML - the variable that will be rendered to the DOM
const myHTML = `
  <div class='wrapper'>
    <h1>${newHeading}</h1>
    <h2 class="subheading">${subHeading}</h2>
    <img src="${imgLink}" alt="${newHeading}">
  </div>
`;

heading.innerHTML = myHTML;
console.log(heading.innerHTML);
// Doing this does not allow you to dynamically interact with the values as the output is rendered as a string.
console.log(typeof myHTML);
// subHeading.classList.add('updateFailure');

// Instead you would need to render to the DOM and then use document.querySelector()

const headingBlock = document.querySelector('.subheading');

headingBlock.classList.add('updated');
console.log(headingBlock.classList);

// --> CHANGE STRING TO DOM ELEMENT <--
// Using createRange() and createContextualFragment() to target a string before being added to the DOM
const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment.querySelector('h2'));
console.log(myFragment.querySelector('.wrapper'));
console.log(myFragment.querySelector('img'));

// Loads to the DOM
document.body.appendChild(myFragment);
