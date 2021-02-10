const router = require('express').Router()
const userController = require('../controllers/user')

router.post('/createClient', userController.create_user)
router.post('/createDriver', userController.create_user)
router.get('/isUserExist', userController.is_user_exist)
router.get('/findUserByPhone', userController.find_user_by_phone)
router.get('/checkCredentials', userController.check_credentials)

module.exports = router
