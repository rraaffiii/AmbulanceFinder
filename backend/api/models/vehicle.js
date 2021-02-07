const mongoose = require('mongoose')
const vehicleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    number_plate: {
      type: String,
      required: true,
    },
    seat: { type: Number, required: true },
    features: {
      wheelChair: { type: Boolean, required: true },
      oxygen: { type: Boolean, required: true },
      stretcher: { type: Boolean, required: true },
    },
    photo: String,
  },
  { timestamps: true }
)

module.exports = mongoose.model('Vehicle', vehicleSchema)
