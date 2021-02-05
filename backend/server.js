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
  .then(() => {
    app.listen(port)
    console.log('DB connencted and app started!')
  })
  .catch((err) => console.log(err))

//Routes
const homeRoutes = require('./routes/home-routes')
const registerRoutes = require('./routes/register-routes')
const authRoutes = require('./routes/auth-routes')
const searchRoutes = require('./routes/search-routes')
const clientRoutes = require('./routes/client-routes')
const driverRoutes = require('./routes/driver-routes')
const adminRoutes = require('./routes/admin-routes')
app.use('/api/', homeRoutes)
app.use('/api/signup', registerRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/search', searchRoutes)
app.use('/api/client', clientRoutes)
app.use('/api/driver', driverRoutes)
app.use('/api/admin', adminRoutes)
