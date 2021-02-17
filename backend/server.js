require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 5000
const uri = process.env.DB_URI

// middlewares
app.use(cors({ exposedHeaders: 'authorization' }))
app.use(express.json())

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
mongoose.set('useFindAndModify', false)

// API routes
app.use('/api/user', require('./api/routes/user'))
app.use('/api/booking', require('./api/routes/booking'))
app.use('/api/vehicle', require('./api/routes/vehicle'))
app.use('/api/review', require('./api/routes/review'))
