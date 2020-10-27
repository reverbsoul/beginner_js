console.log(`running... dom_classes.js`);

const coolPics = document.querySelectorAll('.photo');

/* Adds alt tag to querySelectorAll() */
// coolPics.classList = '.cool .nice .new';
// console.log(coolPics.classList);

// coolPics.alt = 'By Jay Miller';

/* Replaces alt tag for each image. */
// coolPics.forEach((x) => {
//   x.alt = 'By Jay Miller';
// });

// Add alt tag "By J Miller" if an alt tag does not already exist. Existing alt tag stays as is, if it exists.
// $ coolPics - in console
coolPics.forEach((e) => {
  if (e.alt === '') {
    e.alt = 'By Jay Miller';
  }
});

// Apply addEventListener() to each node, listener passes the specific (e)lement to the toggleRound() function.
coolPics.forEach((e) => {
  e.addEventListener('click', toggleRound); // eslint-disable-line
  function toggleRound() {
    e.classList.toggle('round');
  }
});
