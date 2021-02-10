const Vehicle = require('../models/vehicle')

exports.create_vehicle = (req, res) => {
  const vehicle = new Vehicle({ ...req.body })
  vehicle
    .save()
    .then(() => {
      res.status(201).json({ message: 'Registered successfully' })
    })
    .catch((err) => {
      res.status(500).json({ message: 'Registration failed' })
    })
}
