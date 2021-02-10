import axios from 'axios'
// require('dotenv')
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
    return axios.get(`${api_url}/checkCredentials`, {
      params: { phone, password },
    })
  },
  findUserByPhone(phone) {
    return axios.get(`${api_url}/findUserByPhone`, {
      params: { phone },
    })
  },
}
export default UserApi
