const router = require('express').Router()
const userController = require('../controllers/user')
const authToken = require('../middlewares/auth-token')
const upload = require('../middlewares/upload')

router.get('/isUserExist', userController.is_user_exist)
router.get('/findUserByPhone', userController.find_user_by_phone)
router.get('/findUserByToken', authToken, userController.find_user_by_token)
router.get('/findUserById', userController.find_user_by_id)
router.post('/createClient', userController.create_user)
router.post('/createDriver', userController.create_user)
router.post('/checkCredentials', userController.check_credentials)
router.post('/loginWithPhone', userController.login_with_phone)
router.post('/findVehiclesByDriver', userController.find_vehicles_by_driver)
router.get('/setAvailability', authToken, userController.set_availability)
router.get('/setAccountStatus', authToken, userController.set_account_status)
router.post('/updateLocation', authToken, userController.update_location)
router.get('/updateFields', authToken, userController.update_fields)
router.get('/getDriver', authToken, userController.get_driver)
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
router.post(
  '/uploadLicense',
  authToken,
  upload.license.single('license_photo'),
  userController.upload_license
)
router.get(
  '/updateProfileRating',
  authToken,
  userController.update_profile_rating
)
router.get(
  '/getUserLastLocation',
  authToken,
  userController.get_user_last_location
)

module.exports = router
