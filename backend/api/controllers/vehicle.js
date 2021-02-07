const Vehicle = require('../models/vehicle')

exports.create_vehicle = (req, res) => {
  const vehicle = new Vehicle({ ...req.body })
  vehicle
    .save()
    .then(() => {
      res.json({ message: 'Added succesfully' })
    })
    .catch((err) => {
      console.log(err)
    })
}
