console.log(`running... dom_cardio.js`);
// Creates wrapper div
const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

// Creates unordered list
const myList = document.createElement('ul');

// Creates list items and appends to myList(ul)
function createList() {
  let i;
  for (i = 0; i < 3; i += 1) {
    const li = document.createElement('li');
    myList.appendChild(li);
  }
  document.body.appendChild(myList);
}
createList();

// Adding the unordered list to the wrapper div
myDiv.append(myList);

// Sending myDiv to the DOM
document.body.append(myDiv);

// Create image
const myImg = document.createElement('img');
myImg.width = 200;
myImg.src = `https://picsum.photos/${myImg.width}`;
myImg.classList.add('cute');
myImg.alt = `Photo by PicSum`;

document.body.append(myImg);

// HTML String with div and two paragraphs.
const myParagraph = `
  <div class="paragraph">
    <p class="p1">Paragraph 1</p>
    <p class="p2">Paragraph 2</p>
  </div>
`;
document.write(myParagraph);
