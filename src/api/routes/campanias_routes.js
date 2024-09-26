const campaniasRoutes = require('express').Router()
const upload = require('../../middlewares/file')
const {
  getCampania,
  postCampania,
  putCampania,
  deleteCampania
} = require('../controllers/campanias_controllers')

campaniasRoutes.get('/', getCampania)
campaniasRoutes.post('/', upload.single('imgURL'), postCampania)
campaniasRoutes.put('/:id', upload.single('imgURL'), putCampania)
campaniasRoutes.delete('/:id', deleteCampania)

module.exports = campaniasRoutes
