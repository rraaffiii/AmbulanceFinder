const Booking = require('../models/booking')

exports.book_driver = (req, res) => {
  const booking = new Booking({
    ...req.body,
    ...{ client: req.userId },
    ...{ status: 0 },
  })
  booking
    .save()
    .then(() => {
      res.status(201).json({ message: 'Booking successful' })
    })
    .catch(() => {
      res.status(500).json({ message: 'Booking failed' })
    })
}
