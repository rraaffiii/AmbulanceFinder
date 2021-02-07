const router = require('express').Router()
const vehicleController = require('../controllers/vehicle')

router.post('/create', vehicleController.create_vehicle)

module.exports = router
