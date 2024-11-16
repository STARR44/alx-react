const path = require('path');

module.exports = {
  mode: 'production', // Set Webpack mode to production
  entry: './js/dashboard_main.js', // main JavaScript file
  output: {
    path: path.resolve(__dirname, 'public'), // Location where the bundle is saved
    filename: 'bundle.js', // Name of the bundled file
  },
};
