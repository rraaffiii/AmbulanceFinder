const Review = require('../models/review')

exports.get_review_by_user_id = (req, res) => {
  Review.find({ _id: req.userId })
    .then((reviews) => res.status(200).send(reviews))
    .catch((err) => {
      res.status(500).json({ message: 'Server error' })
    })
}
