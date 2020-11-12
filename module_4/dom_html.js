console.log(`running... dom_html.js`);

// Create a paragraph element and then add text to it, then add a class to it.
const myParagraph = document.createElement('p');
myParagraph.textContent = `I am a paragraph`;
myParagraph.classList.add('special');

console.log(myParagraph.textContent);

// Create an image element and assign src and alt.
const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/600';
myImage.alt = 'Image by picsum.photos';

// myImage alone will write an object, and textContent won't write anything because it does not contain a String. So, use outerHTML to write HTML to the page.
// document.write(myImage.outerHTML);
console.log(myImage);

// Create a div element and add a class of wrapper.
const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

// Append child elements inside the div and return myDiv.outerHTML
// myDiv.appendChild(myParagraph).appendChild(myImage);
// document.write(myDiv.outerHTML);

// Or to simplify target document.body and append children there.
document.body
  .appendChild(myDiv)
  .appendChild(myParagraph)
  .insertAdjacentElement('afterend', myImage);

// Also...
// document.body.appendChild(myDiv);
// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImage);
// Do NOT do this! Each time you appendChild() over myDiv it will cause document.body to repaint the entire body. Instead you can assign myDiv.appendChild() BEFORE you call document.body.appendChild(myDiv)

// Correct way...
myDiv.appendChild(myParagraph); // Appends myParagraph
myDiv.appendChild(myImage); // Appends myImage
document.body.appendChild(myDiv); // Calls for a single paint of document.body

/* Creating a List */

function createList() {
  // create ul list.
  const list = document.createElement('ul');

  // set iterator.
  let i;

  // while i is less than 5 run function.
  // OPEN LOOP
  for (i = 0; i < 5; i += 1) {
    // create item element li
    const item = document.createElement('li');
    // add a unique class to the item
    item.classList.add(`listItem-${i + 1}`);

    // append newly created item to list
    list.appendChild(item);

    // console.log(`item-${i + 1} added`);
  }
  // CLOSE LOOP

  // append list to document.body
  document.body.appendChild(list);
}

createList();
