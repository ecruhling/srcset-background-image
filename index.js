// import ResponsiveBackgroundImage
const srcsetBackgroundImage = require('srcsetBackgroundImage');

// variable - select all containing divs with corresponding class
const $srcsetBackgroundImages = $('.srcset-background-image');

// replace background with screen appropriate image extracted from image with srcset attribute
for (let i = 0; i < $srcsetBackgroundImages.length; i++) {
  new srcsetBackgroundImage($srcsetBackgroundImages[i]);
}
