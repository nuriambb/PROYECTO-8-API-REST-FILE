const Campania = require('../models/campanias_models')
const { deleteFile } = require('../../utils/deleteFile')
const getCampania = async (req, res, next) => {
  try {
    const campanias = await Campania.find().populate('influencer', 'id nombre')
    return res.status(200).json(campanias)
  } catch (error) {
    return res.status(400).json({
      message: 'Hay un error leyendo los campanias',
      error: error.message
    })
  }
}
const postCampania = async (req, res, next) => {
  try {
    const newCampania = new Campania(req.body)
    if (req.file) {
      newCampania.imgURL = req.file.path
    }
    const campaniaSaved = await newCampania.save()
    const campaniaSavedName = await Campania.findById(campaniaSaved._id).populate(
      'influencer',
      'id nombre'
    )
    return res.status(200).json(campaniaSavedName)
  } catch (error) {
    return res.status(400).json({
      message: 'Hay un error creando los campanias',
      error: error.message
    })
  }
}

const putCampania = async (req, res, next) => {
  try {
    const { id } = req.params
    const newCampania = new Campania(req.body)
    newCampania._id = id
    if (req.file) {
      newCampania.imgURL = req.file.path
      const oldCampania = await Campania.findById(id)
      deleteFile(oldCampania.imgURL)
    }
    const campaniaUpdate = await Campania.findByIdAndUpdate(id, newCampania, {
      new: true
    })
    return res.status(200).json(campaniaUpdate)
  } catch (error) {
    return res.status(400).json({
      message: 'Hay un error actualizando los campanias',
      error: error.message
    })
  }
}
const deleteCampania = async (req, res, next) => {
  try {
    const { id } = req.params
    const campania = await Campania.findById(id)
    if (!campania) {
      return res.status(400).json('No se ha encontrado el campania')
    }
    await deleteFile(campania.imgURL)
    const campaniaDeleted = await Campania.findByIdAndDelete(id)
    return res.status(200).json({
      message: 'Elemento eliminado',
      elemento: campaniaDeleted
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Hay un error borrando los campanias',
      error: error.message
    })
  }
}
module.exports = {
  getCampania,
  postCampania,
  putCampania,
  deleteCampania
}
