const $ = require("jquery"); // Import jQuery
const _ = require("lodash"); // Import Lodash

// Import the CSS file
import '../css/main.css';

// Counter variable to track button clicks
let count = 0;

// Function to update the click count
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Create and append required HTML elements dynamically
$('body').append('<p>Holberton Dashboard</p>'); // Dashboard title
$('body').append('<p>Dashboard data for the students</p>'); // Description text

// Create a button and attach a debounced click event to it
const $button = $('<button>Click here to get started</button>');
$button.on('click', _.debounce(updateCounter, 500)); // Debounce click event
$('body').append($button);

// Add a paragraph to display the click count
$('body').append('<p id="count"></p>');

// Add copyright text
$('body').append('<p>Copyright - Holberton School</p>');
