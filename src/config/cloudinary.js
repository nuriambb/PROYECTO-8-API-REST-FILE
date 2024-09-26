const cloudinary = require('cloudinary').v2
const connectCloudinary = () => {
  if (
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET
    })
  ) {
    console.log('Conectado con exito a Cloudinary 😍')
  } else {
    console.log('No se ha podido conectar a Cloudinary 😭')
  }
}
module.exports = { connectCloudinary }
