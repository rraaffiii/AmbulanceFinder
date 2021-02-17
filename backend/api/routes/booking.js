const router = require('express').Router()
const bookingController = require('../controllers/booking')
const authToken = require('../middlewares/auth-token')

router.post('/bookDriver', authToken, bookingController.book_driver)

module.exports = router
