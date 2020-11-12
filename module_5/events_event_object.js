console.log(`running... events_event_object.js`);

// --> EVENT OBJECT <--

// --> PROPAGATION <--
// It's possible that you may have multiple events fire from a single action. Example, if you click a button within the window you will trigger window.event as well as the button.event. This going down and up the DOM tree is called propagation.

// The propagation downwards from the window to the element is called the CAPTURE phase, and the upward propagation after reaching the element is called the BUBBLING phase.

// You may use stopPropagation() in combination with CAPTURE or BUBBLING events.

// Create an array of buttons with event listeners.
const buyButtons = document.querySelectorAll('button.buy');

// You can pass information about the event object by passing "event" as the first parameter.
function handleBuyButtonClick(event) {
  console.log('You are buying!');
  // returns information about the event.
  console.log(event);

  // returns the element which was clicked. Returns the element clicked, not necessarily the element which triggered the event. For example, a nested <strong> tag inside a button would return the <strong> element instead of the <button> which contains it, see event.currentTarget below.
  console.log(event.target);

  // event.target hass all of the functionality of other objects.
  const button = event.target.classList;
  console.log(button);

  // returns the element that triggered the event. This is different from event.target in that it returns the element triggering, and not the element clicked.
  console.log(event.currentTarget);

  // --> BUBBLING <--
  // The handleBuyButtonClick() function bubbles back up to the window. Use stopPropagation() to stop once the target event is reached, after the capture process.
  // event.stopPropagation();
}

buyButtons.forEach((button) => {
  button.addEventListener('click', handleBuyButtonClick);
});

// --> PROPAGATION <--
// It's possible that you may have multiple events fire from a single action. Example, if you click a button within the window you will trigger window.event as well as the button.event. This is called propagation.

// Actions don't exist in a vacuum. A click may click and HTML button element, a text element, the window element, your browser window, your OS window, etc.
window.addEventListener(
  'click',
  function (event) {
    console.log(`Window Clicked!`);
    // Using stopPropagation() here will stop bubbling.
    // event.stopPropagation();
  },
  // --> CAPTURE <--
  // Third argument that you can pass to an event listener, called options (more info on MDN). This tells the event to return the event during the capture process, hitting the window first and then down to the button element.

  // Clicking on a button with capture set to true will list this "Window Clicked!" event before the handleButtonClick event triggers "You are buying!"
  { capture: true }
);

// Reference: https://www.w3.org/TR/DOM-Level-3-Events/#event-flow
