import axios from 'axios'
import Cookies from 'js-cookie'

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
  findUserById(id) {
    return axios.post(`${api_url}/findUserById`, id, {
      headers: { authorization: getToken() },
    })
  },
  setAvailability({ id, available }) {
    return axios.post(
      `${api_url}/setAvailability`,
      { id, available },
      { headers: { authorization: getToken() } }
    )
  },
  updateProfile(formData) {
    return axios.post(`${api_url}/updateProfile`, formData, {
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
}
export default UserApi
