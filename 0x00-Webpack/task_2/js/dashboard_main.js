const $ = require( "jquery" );
// Load the full build
const _ = require("lodash");


// Counter variable to track button clicks
let count = 0;

// Function to update the click count
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Create and dynamically add the required elements to the DOM
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');

// Create a button element and bind the `debounce` function to its click event
const $button = $('<button>Click here to get started</button>');
$button.on('click', _.debounce(updateCounter, 500));
$('body').append($button);

// Add the count display paragraph
$('body').append('<p id="count"></p>');

// Add the copyright paragraph
$('body').append('<p>Copyright - Holberton School</p>');
