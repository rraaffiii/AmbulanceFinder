const router = require('express').Router()
const routesController = require('../controllers/routes-controller')

router.post('/', routesController.submit_route_query)

module.exports = router
