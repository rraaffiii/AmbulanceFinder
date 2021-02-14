import axios from 'axios'
import Cookies from 'js-cookie'

const api_url = `http://localhost:3001/api/vehicle`

const getToken = () => {
  const token = Cookies.get('token')
  if (token === null) return ''
  return token
}

const VehicleApi = {
  createVehicle(vehicleData) {
    return axios.post(`${api_url}/create`, vehicleData, {
      headers: {
        authorization: getToken(),
        'content-type': 'multipart/form-data',
      },
    })
  },
  updateVehicle(vehicleData) {
    return axios.patch(`${api_url}/updateVehicle`, vehicleData, {
      headers: {
        authorization: getToken(),
        'content-type': 'multipart/form-data',
      },
    })
  },
  updateVehicleWithImg(vehicleData) {
    return axios.patch(`${api_url}/updateVehicleWithImg`, vehicleData, {
      headers: {
        authorization: getToken(),
        'content-type': 'multipart/form-data',
      },
    })
  },
  getVehiclesByUserId(userId) {
    return axios.post(`${api_url}/getVehiclesByUserId`, userId, {
      headers: { authorization: getToken() },
    })
  },
  getVehicleById(vehicleId) {
    return axios.post(`${api_url}/getVehicleById`, vehicleId, {
      headers: { authorization: getToken() },
    })
  },
}
export default VehicleApi
