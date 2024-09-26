const Influencer = require('../models/influencers_models')
const { deleteFile } = require('../../utils/deleteFile')

const getInfluencer = async (req, res, next) => {
  try {
    const influencers = await Influencer.find().populate(
      'campanias',
      'id marca'
    )
    return res.status(200).json(influencers)
  } catch (error) {
    return res.status(400).json({
      message: 'Hay un error leyendo los influencers',
      error: error.message
    })
  }
}
const postInfluencer = async (req, res, next) => {
  try {
    const newInfluencer = new Influencer(req.body)
    if (req.file) {
      newInfluencer.imgURL = req.file.path
    }
    const influencerSaved = await newInfluencer.save()
    return res.status(200).json(influencerSaved)
  } catch (error) {
    return res.status(400).json({
      message: 'Hay un error creando los influencers',
      error: error.message
    })
  }
}

const putInfluencer = async (req, res, next) => {
  try {
    const { id } = req.params
    const newInfluencer = new Influencer(req.body)
    newInfluencer._id = id
    if (req.file) {
      newInfluencer.imgURL = req.file.path
      const oldInfluencer = await Influencer.findById(id)
      deleteFile(oldInfluencer.imgURL)
    }
    const influencerUpdate = await Influencer.findByIdAndUpdate(
      id,
      newInfluencer,
      { new: true }
    )
    return res.status(200).json(influencerUpdate)
  } catch (error) {
    return res.status(400).json({
      message: 'Hay un error actualizando los influencers',
      error: error.message
    })
  }
}
const deleteInfluencer = async (req, res, next) => {
  try {
    const { id } = req.params
    const influencer = await Influencer.findById(id)
    if (!influencer) {
      return res.status(400).json('No se ha encontrado el influencer')
    }
    await deleteFile(influencer.imgURL)
    const influencerDeleted = await Influencer.findByIdAndDelete(id)
    return res.status(200).json({
      message: 'Elemento eliminado',
      elemento: influencerDeleted
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Hay un error borrando los influencers',
      error: error.message
    })
  }
}
module.exports = {
  getInfluencer,
  postInfluencer,
  putInfluencer,
  deleteInfluencer
}
