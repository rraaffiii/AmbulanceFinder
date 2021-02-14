const router = require('express').Router()
const userController = require('../controllers/user')
const authToken = require('../middlewares/auth-token')
const upload = require('../middlewares/upload')

router.get('/isUserExist', userController.is_user_exist)
router.get('/findUserByPhone', userController.find_user_by_phone)
router.post('/createClient', userController.create_user)
router.post('/createDriver', userController.create_user)
router.post('/checkCredentials', userController.check_credentials)
router.post('/loginWithPhone', userController.login_with_phone)
router.post('/findUserById', authToken, userController.find_user_by_id)
router.post('/setAvailability', authToken, userController.set_availability)
router.post(
  '/updateProfile',
  authToken,
  upload.profile.none(),
  userController.update_profile
)
router.post(
  '/updateProfileWithImg',
  authToken,
  upload.profile.single('profile_photo'),
  userController.update_profile
)

module.exports = router
