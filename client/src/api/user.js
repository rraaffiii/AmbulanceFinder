import axios from 'axios'
import Cookies from 'js-cookie'

const locationiqKey = process.env.REACT_APP_LOCATIONIQ_API_KEY
const api_uri = `/api/user`

const getToken = () => {
  const token = Cookies.get('token')
  if (token === null) return ''
  return token
}

const UserApi = {
  createClient(clientData) {
    return axios.post(`${api_uri}/createClient`, {
      ...clientData,
      ...{ type: 0 },
    })
  },
  createDriver(driverData) {
    return axios.post(`${api_uri}/createDriver`, driverData)
  },
  isUserExist(phone) {
    return axios.get(`${api_uri}/isUserExist`, {
      params: { phone },
    })
  },
  checkCredentials({ phone, password }) {
    return axios.post(`${api_uri}/checkCredentials`, { phone, password })
  },
  loginWithPhone(phone) {
    return axios.post(`${api_uri}/loginWithPhone`, { phone })
  },
  findUserByPhone(phone) {
    return axios.get(`${api_uri}/findUserByPhone`, {
      params: { phone },
    })
  },
  findUserByToken() {
    return axios.get(`${api_uri}/findUserByToken`, {
      headers: { authorization: getToken() },
    })
  },
  findUserById(id) {
    return axios.get(`${api_uri}/findUserById`, {
      headers: { authorization: getToken() },
      params: { id },
    })
  },
  setAvailability({ id, available }) {
    return axios.get(`${api_uri}/setAvailability`, {
      headers: { authorization: getToken() },
      params: { id, available },
    })
  },
  setAccountStatus({ id, approved }) {
    return axios.get(`${api_uri}/setAccountStatus`, {
      headers: { authorization: getToken() },
      params: { id, approved },
    })
  },
  updateProfile(formData) {
    return axios.post(`${api_uri}/updateProfile`, formData, {
      headers: {
        authorization: getToken(),
      },
    })
  },
  uploadLicense(formData) {
    return axios.post(`${api_uri}/uploadLicense`, formData, {
      headers: {
        authorization: getToken(),
      },
    })
  },
  updateProfileWithImg(formData) {
    return axios.post(`${api_uri}/updateProfileWithImg`, formData, {
      headers: {
        authorization: getToken(),
        'content-type': 'multipart/form-data',
      },
    })
  },
  findVehiclesByDriver({ pickup, destination }) {
    return axios.post(`${api_uri}/findVehiclesByDriver`, {
      pickup,
      destination,
    })
  },
  updateProfileRating(profileRating) {
    return axios.get(`${api_uri}/updateProfileRating`, {
      headers: { authorization: getToken() },
      params: { profileRating },
    })
  },
  updateLocation(locationData) {
    return axios.post(`${api_uri}/updateLocation`, locationData, {
      headers: {
        authorization: getToken(),
      },
    })
  },
  getUserLastLocation() {
    return axios.get(`${api_uri}/getUserLastLocation`, {
      headers: { authorization: getToken() },
    })
  },
  updateFields(data) {
    return axios.get(`${api_uri}/updateFields`, {
      headers: { authorization: getToken() },
      params: { data },
    })
  },
  getDriver() {
    return axios.get(`${api_uri}/getDriver`, {
      headers: { authorization: getToken() },
    })
  },
  getLocation(lat, lng) {
    return axios.get(
      `https://us1.locationiq.com/v1/reverse.php?key=${locationiqKey}&lat=${lat}&lon=${lng}&format=json`
    )
  },
}
export default UserApi
