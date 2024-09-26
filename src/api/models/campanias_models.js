const mongoose = require('mongoose')
const campaniaSchema = new mongoose.Schema(
  {
    marca: { type: String, trim: true, required: true },
    titulo: { type: String, trim: true, required: true },
    fecha: { type: String, trim: true, required: true },
    imgURL: { type: String, trim: true, required: false },

    influencer: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'influencers',
        required: false,
        trim: true
      }
    ]
  },
  {
    timestamp: true,
    collection: 'campanias'
  }
)

const Campania = mongoose.model('campanias', campaniaSchema, 'campanias')
module.exports = Campania
