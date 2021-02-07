import axios from 'axios'
// require('dotenv')
const api_url = `http://localhost:3001/api/vehicle`

const VehicleApi = {
  createVehicle(vehicleData) {
    return axios.post(`${api_url}/create`, vehicleData)
  },
}
export default VehicleApi
