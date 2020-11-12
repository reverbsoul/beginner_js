console.log(`running... events_listener.js`);

// --> EVENT LISTENERS <--

// Buttons
const btn = document.querySelector('.btns');
console.log(btn);
// (typeOfEvent, function callback)
// A "callback function" is not a special type of function, it simply asks the browser to run a specific function when the event is triggered.
// btn.addEventListener('click', function () {
//   console.log(`You just clicked`);
// });

function handleClick() {
  console.log(`You just clicked`);
}

// --> BINDING <--
// Assings the event listener to the element.

// Do not add parenthasis, the browser will automatically run the function.
btn.addEventListener('click', handleClick);

// You might use the same handleClick() function for multiple events. Keeps code DRY, and you do not have to update multiple events if you change something.
const fancyButton = document.querySelector('.fancy');

fancyButton.addEventListener('click', handleClick);

// --> UNBINDING <--
// Removing a event listener

// You can remove events, but you can not only specifiy the event, you also need to specificy the function callback.
fancyButton.removeEventListener('click', handleClick);

// --> W/ ARROW FUNCTION <--
const fancy = () => console.log('Oooh, fancy!');

// JS assumes the function name from the variable hooray
fancyButton.addEventListener('click', fancy);

// --> MULTIPLE EVENTS <--

// Create an array of buttons with event listeners.
const buyButtons = document.querySelectorAll('button.buy');
// Create function that logs 'success' when an item is bought.
const boughtItem = () => {
  console.log('success');
};
// Creates an event listener forEach buyButtons element.
buyButtons.forEach((x) => {
  x.addEventListener('click', boughtItem);
});
