import axios from 'axios'
import Cookies from 'js-cookie'
// require('dotenv')

const token = Cookies.get('token')
const api_url = `http://localhost:3001/api/user`

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
  findUserByPhone(phone) {
    return axios.get(`${api_url}/findUserByPhone`, {
      params: { phone },
    })
  },
  findUserById(id) {
    return axios.post(`${api_url}/findUserById`, id, {
      headers: { authorization: token },
    })
  },
}
export default UserApi
