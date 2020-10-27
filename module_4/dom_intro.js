console.log(`DOM Intro is working!`);

// DOM is Document Object Model
// The DOM is responsible for holding all of the parts of a given web page, it contains all of the HTML, CSS, and elements from the page, contained within an object.

// This allows JS to interface with the DOM to select elements, change CSS, move elements, etc.

/* Window Object */
// The window object holds everything related to the open window. Example, the URL, browser tabs, scroll bars, etc.
function windowSizing() {
  console.log(`The window height is currently ${window.innerHeight}.`);
  console.log(`The window width is currently ${window.innerWidth}.`);
}
windowSizing();

/* Document Object */
// Contains everything within the HTML document, from <DOCTYPE> or <html> through the closing </html> tag.

document.write('Writing to the Document');

/* Navigator Object */
// Device specific elements. Such as operating system or device information.

console.log(`${navigator.appName} v.${navigator.appVersion}`);

// Query Selector

// Selects the first p element and logs the innerText, converting it toUpperCase
const p = document.querySelector('p').innerText.toUpperCase();
console.log(p);

// Selects all .item elements and using a forEach loop applies .red if it is not a class, and removes it if it is.

/* eslint-disable */
const el = document.querySelectorAll('.item');

function colorChange() {
  el.forEach((el) => {
    el.classList.toggle('red');
  });

  return `color changed`;
}

function colorAdd() {
  el.forEach((el) => {
    el.classList.add('blue');
  });

  return `you make me blue`;
}

function colorRemove() {
  el.forEach((el) => {
    el.classList.remove('blue');
  });

  return `you make me blue`;
}

// textContent Method
// Selects only the readable text. Shares functionality with old methods like innerHTML, innerText, outerHTML, outerText
const heading = document.querySelector('h1');

console.log(heading.textContent);

heading.textContent = `This heading has changed...`;

console.log(heading.textContent);

// className and classList
// Selects the classes assigned to an element.
heading.className = `heading h1 title`;

console.log(heading.className);

// className allows you to pass an empty string (clearing all classes) - ie. destructive
heading.className = '';

console.log(heading.className);

// add(), remove(), toggle(), and replace() are only available to classList - ie. non-destructive
heading.className = `heading h1 title`;

heading.classList.remove('title');

console.log(heading.classList);
console.log(heading.className);

// inerstAdjacentText
// allows you to input before the begining of the element(beforebegin), inside the element but before the content(afterbegin), after the content and in the element(beforeend), or after the element entirely (afterend)
heading.insertAdjacentText('beforebegin', 'beforebegin:');
heading.insertAdjacentText('afterbegin', 'afterbegin:');
heading.insertAdjacentText('beforeend', ':beforeend');
heading.insertAdjacentText('afterend', ':afterend:');

// insertAdjecentHTML
// add HTML markup, same positions as insertAdjacentText
heading.insertAdjacentHTML('afterbegin', '<span class="red">');
