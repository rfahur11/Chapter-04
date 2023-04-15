// Require the Cloudinary library
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dksealqvr",
    api_key: "447364991552599",
    api_secret: "RPQctYxqCnoTcPh3Hyx2Ijluk2g",
    secure: true,
});

module.exports = cloudinary;
