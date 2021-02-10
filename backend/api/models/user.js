const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    type: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: String,
    first_name: String,
    last_name: String,
    driving_license: String,
    date_of_birth: Date,
    city: String,
    country: String,
    profile_photo: String,
    vehicle: Number,
    rating: Number,
    rating_count: Number,
    last_location: String,
    available: Boolean,
    approved: Boolean,
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
