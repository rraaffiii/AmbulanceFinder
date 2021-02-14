const router = require('express').Router()
const reviewController = require('../controllers/review')
const authToken = require('../middlewares/auth-token')

router.post(
  '/getReviewsByUserId',
  authToken,
  reviewController.get_review_by_user_id
)

module.exports = router
