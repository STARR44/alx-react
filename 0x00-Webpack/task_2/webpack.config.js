const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  // Add the plugin

module.exports = {
  mode: 'production', // Set Webpack mode to production
  entry: './js/dashboard_main.js', // Main JavaScript file
  output: {
    path: path.resolve(__dirname, 'public'), // Location where the bundle is saved
    filename: 'bundle.js', // Name of the bundled file
    clean: true, // Clears old assets in the output folder before each build
  },
  performance: {
    maxAssetSize: 1000000, // Avoid warnings for large assets
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, // Use the plugin to extract the CSS
          'css-loader', // Handle CSS imports
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i, // Image files
        type: 'asset/resource', // Handle images as separate assets
        generator: {
          filename: 'assets/[name][ext]', // Output images to public/assets
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/i, // Optimizing images
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // Skip optimization during debugging
              disable: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Reference to the index.html file
      filename: 'index.html', // Output file name for HTML
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css', // Output CSS file name
    }),
  ],
};
