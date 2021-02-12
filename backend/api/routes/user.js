const router = require('express').Router()
const userController = require('../controllers/user')
const authToken = require('../middlewares/auth-token')

router.post('/createClient', userController.create_user)
router.post('/createDriver', userController.create_user)
router.get('/findUserByPhone', userController.find_user_by_phone)
router.post('/checkCredentials', userController.check_credentials)
router.get('/isUserExist', userController.is_user_exist)
router.post('/findUserById', authToken, userController.find_user_by_id)

module.exports = router
