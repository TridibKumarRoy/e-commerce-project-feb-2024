var cloudinary = require("cloudinary").v2;

const connectCloudinary = () => {
    console.log("cloudenary connected");
    cloudinary.config({
      cloud_name: "dljm2aypb",
      api_key: "317455924922199",
      api_secret:
        "CLOUDINARY_URL=cloudinary://317455924922199:Q54d0Dlss1dy36yDB7Otij0VVZI@dljm2aypb",
    });
}
module.exports = connectCloudinary;