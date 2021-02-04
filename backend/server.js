const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

// middlewares
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000
const uri = process.env.DB_URI

// DB connection
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port)
    console.log('DB connencted and app started!')
  })
  .catch((err) => console.log(err))

//Routes
const routes = require('./routes')
const routes_clients = require('./routes/clients')
const routes_drivers = require('./routes/drivers')
const routes_admins = require('./routes/admins')
app.use('/clients', routes_clients)
app.use('/drivers', routes_drivers)
app.use('/admins', routes_admins)
app.use('/', routes)
