// import ResponsiveBackgroundImage
const ResponsiveBackgroundImage = require('srcsetBackgroundImage');

// variable - select all containing divs with corresponding class
const $srcsetBackgroundImages = $('.srcset-background-image');

// replace background with screen appropriate image extracted from image with srcset attribute
for (let i = 0; i < $elements.length; i++) {
  new ResponsiveBackgroundImage($elements[i]);
}
