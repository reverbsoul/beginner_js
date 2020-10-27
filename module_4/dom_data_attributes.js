console.log(`running... dom_data_attributes.js`);

const pic = document.querySelector('img.photo');

pic.alt = 'Reset pic.alt'; // setter
console.log(pic.alt); // getter

// Requires an event listener to ensure the image is loaded before console.log() is ran
console.log(pic.naturalWidth); // getter

// Returns the appropriate value.
window.addEventListener('load', function () {
  console.log(pic.naturalWidth);
});

// pic.naturalWidth = 500; // getter, can not be set
// pic.width = 500; // setter, works.

// Displays message to the console when submit button is pressed.
const submit = document.querySelector('form');

// submit.addEventListener('submit', function(e) {
//   console.log(`Form Submitted`);
//   e.preventDefault();
// })

// Arrow Function version
submit.addEventListener('submit', (e) => {
  console.log(`Form Submission`);
  e.preventDefault();
});
