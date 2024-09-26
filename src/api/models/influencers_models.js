const mongoose = require('mongoose')
const influencerSchema = new mongoose.Schema(
  {
    nombre: { type: String, trim: true, required: true },
    seguidoresIg: { type: Number, trim: true, required: true },
    imgURL: { type: String, trim: true, required: true },

    campanias: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'campanias',
        required: false,
        trim: true
      }
    ]
  },
  {
    timestamp: true,
    collection: 'influencers'
  }
)
const Influencer = mongoose.model(
  'influencers',
  influencerSchema,
  'influencers'
)

module.exports = Influencer
