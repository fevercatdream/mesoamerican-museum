const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your API credentials
cloudinary.config({
  cloud_name: '"dntnkupqr"',
  api_key: '667642448287716',
  api_secret: 'lmD9OXng0LlDcRDOkwAhAR_9npY'
});

// Define a function to upload an image to Cloudinary
function uploadImage(imagePath) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(imagePath, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// Export the uploadImage function so it can be used in other files
module.exports = {
  uploadImage
};
