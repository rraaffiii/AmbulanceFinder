const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({})

module.exports = mongoose.model('Booking', bookingSchema)
