const cloudinary = require("cloudinary").v2;
const connectCloudinary = require("../config/cloudinary")

/////////////////////////
// Uploads an image file
/////////////////////////
const uploadImage = async (imagePath) => {

    const file = req.files;

    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };

    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(imagePath, options);
      console.log(result);
      return result.public_id;
    } catch (error) {
      console.error(error);
    }
};