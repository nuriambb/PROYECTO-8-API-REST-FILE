const influencersRoutes = require('express').Router()
const {
  getInfluencer,
  postInfluencer,
  putInfluencer,
  deleteInfluencer
} = require('../controllers/influencers_controllers')
const upload = require('../../middlewares/file')

influencersRoutes.get('/', getInfluencer)
influencersRoutes.post('/', upload.single('imgURL'), postInfluencer)
influencersRoutes.put('/:id', upload.single('imgURL'), putInfluencer)
influencersRoutes.delete('/:id', deleteInfluencer)

module.exports = influencersRoutes
