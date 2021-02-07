const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

// middlewares
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000
const uri = process.env.DB_URI

// DB connection
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(console.log('DB connencted!'))
  .then(() => {
    app.listen(port)
    console.log('App started!')
  })
  .catch((err) => console.log(err))

//API Routes
const bookingRoutes = require('./api/routes/booking')
const reviewRoutes = require('./api/routes/review')
const routeRoutes = require('./api/routes/route')
const userRoutes = require('./api/routes/user')
const vehicleRoutes = require('./api/routes/vehicle')
app.use('/api/booking', bookingRoutes)
app.use('/api/review', reviewRoutes)
app.use('/api/route', routeRoutes)
app.use('/api/user', userRoutes)
app.use('/api/vehicle', vehicleRoutes)
