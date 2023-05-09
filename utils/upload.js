require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// DOCS: https://cloudinary.com/documentation/image_upload_api_reference

//////
// Basic Upload Method
//////
cloudinary.uploader.upload("./assets/cat.jpg")
	.then(result => {console.log(result)})
	.catch(error => {console.log(error)});
