console.log(`running... dom_traversing_nodes.js`);

// --> TRAVERSING THE DOM <--
// Moving up, down, left, right within nodes

//

// Element with children elements
const block = document.querySelector('.wrapper');
// .wrapper is in dom_strings_xss.jas - if that script is not running this will not work.

// Inner element of block
const child = document.querySelector('.item');

// Elements - these fall within HTML tags

// Element with children traversal
console.log(block.children); // List child elements
console.log(block.firstElementChild); // Lists first child in block
console.log(block.lastElementChild); // Lists last child in block
// Inner element traversal
console.log(child.previousElementSibling); // Lists sibling above
console.log(child.nextElementSibling); // Lists sibling below
console.log(child.parentElement); // Lists parent
// Remove element
child.parentElement.remove(); // Since parent is <ul> removing removes all children as well.
console.log(child.parentElement); // The element still exists, it has only been removed from the DOM

// Nodes - these separate text nodes from the element tags
console.log(block.childNodes);
