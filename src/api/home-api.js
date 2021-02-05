import axios from 'axios'
// require('dotenv')
const api_url = `http://localhost:3001/api/`

const HomeApi = {
  submitLocationsQuery(locations) {
    return axios.post(api_url, locations)
  },
}
export default HomeApi
