const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {

    let folderName = 'PROYECTO8';
    /*
    if (file.mimetype === 'image/jpeg') {
      folderName = 'carpeta-jpeg';
    } else if (file.mimetype === 'image/jpg') {
      folderName = 'carpeta-jpg';
    }
    */

    return {
      folder: folderName,
      allowedFormats: ['jpg', 'jpeg', 'png', 'webp', 'gif'],
    }
  },
})
const upload = multer({ storage: storage })
module.exports = upload
