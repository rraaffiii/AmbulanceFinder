import axios from 'axios'
import Cookies from 'js-cookie'

const locationiqKey = process.env.REACT_APP_LOCATIONIQ_API_KEY
const api_url = `http://localhost:3001/api/user`

const getToken = () => {
  const token = Cookies.get('token')
  if (token === null) return ''
  return token
}

const UserApi = {
  createClient(clientData) {
    return axios.post(`${api_url}/createClient`, {
      ...clientData,
      ...{ type: 0 },
    })
  },
  createDriver(driverData) {
    return axios.post(`${api_url}/createDriver`, driverData)
  },
  isUserExist(phone) {
    return axios.get(`${api_url}/isUserExist`, {
      params: { phone },
    })
  },
  checkCredentials({ phone, password }) {
    return axios.post(`${api_url}/checkCredentials`, { phone, password })
  },
  loginWithPhone(phone) {
    return axios.post(`${api_url}/loginWithPhone`, { phone })
  },
  findUserByPhone(phone) {
    return axios.get(`${api_url}/findUserByPhone`, {
      params: { phone },
    })
  },
  findUserByToken() {
    return axios.get(`${api_url}/findUserByToken`, {
      headers: { authorization: getToken() },
    })
  },
  findUserById(id) {
    return axios.get(`${api_url}/findUserById`, {
      headers: { authorization: getToken() },
      params: { id },
    })
  },
  setAvailability({ id, available }) {
    return axios.get(`${api_url}/setAvailability`, {
      headers: { authorization: getToken() },
      params: { id, available },
    })
  },
  setAccountStatus({ id, approved }) {
    return axios.get(`${api_url}/setAccountStatus`, {
      headers: { authorization: getToken() },
      params: { id, approved },
    })
  },
  updateProfile(formData) {
    return axios.post(`${api_url}/updateProfile`, formData, {
      headers: {
        authorization: getToken(),
      },
    })
  },
  uploadLicense(formData) {
    return axios.post(`${api_url}/uploadLicense`, formData, {
      headers: {
        authorization: getToken(),
      },
    })
  },
  updateProfileWithImg(formData) {
    return axios.post(`${api_url}/updateProfileWithImg`, formData, {
      headers: {
        authorization: getToken(),
        'content-type': 'multipart/form-data',
      },
    })
  },
  findVehiclesByDriver({ pickup, destination }) {
    return axios.post(`${api_url}/findVehiclesByDriver`, {
      pickup,
      destination,
    })
  },
  updateProfileRating(profileRating) {
    return axios.get(`${api_url}/updateProfileRating`, {
      headers: { authorization: getToken() },
      params: { profileRating },
    })
  },
  updateLocation(locationData) {
    return axios.post(`${api_url}/updateLocation`, locationData, {
      headers: {
        authorization: getToken(),
      },
    })
  },
  getUserLastLocation() {
    return axios.get(`${api_url}/getUserLastLocation`, {
      headers: { authorization: getToken() },
    })
  },
  updateFields(data) {
    return axios.get(`${api_url}/updateFields`, {
      headers: { authorization: getToken() },
      params: { data },
    })
  },
  getDriver() {
    return axios.get(`${api_url}/getDriver`, {
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
