require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const { connectCloudinary } = require('./src/config/cloudinary')
const influencersRoutes = require('./src/api/routes/influencers_routes')
const campaniasRoutes = require('./src/api/routes/campanias_routes')
const app = express()
app.use(express.json())

connectDB()
connectCloudinary()

app.use('/api/v1/influencer', influencersRoutes)
app.use('/api/v1/campania', campaniasRoutes)
app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})
app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000')
})
