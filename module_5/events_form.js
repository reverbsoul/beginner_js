console.log(`running... events_form.js`);

// --> PREVENT DEFAULT <--
// preventDefault() allows you to stop an action from being performed, such as opening a new tab when you click on a link, or refreshing the page on form submission.
const signup = document.querySelector('.signup-form');

function collectForm(e) {
  console.log('you clicked');
  e.preventDefault();
  const changePage = confirm( // eslint-disable-line
    `You are navigating away from this site, do you wish to proceed?`
  );
  // if statement does not require "true" instead of (changePage, true) use (changePage) which equals true, or (!changePage) which equals false.
  if (changePage) {
    console.log('You are leaving');
  }
}

signup.addEventListener('submit', collectForm);

// Arrow function version
// signup.addEventListener('click', (e) => {
//   console.log('clickity click');
//   e.preventDefault();
// });

// --> CURRENT TARGET <--
// use [] to select an element by a tag that is not class or id
const signupForm = document.querySelector('[name="signup"]');

// use currentTarget and the name value for the input.
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // value returns the input value
  console.log(e.currentTarget.name.value);
  console.log(e.currentTarget.email.value);
  // checked returns boolean, true when checked
  console.log(e.currentTarget.agree.checked);
  const agree = e.currentTarget.agree.checked;
  if (!agree) {
    alert('Please agree to the terms and conditions');
  }
});

// --> TYPES OF EVENT LISTENERS <--

// 'keyup' = value AFTER a key press
// 'keydown' = value BEFORE a key press
// 'focus' = when a field is selected
// 'blur' = when a focused field is unfocused
// 'click' = when an element is clicked
// 'submit' = when a form is submitted
