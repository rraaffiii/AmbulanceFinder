import axios from 'axios'
// require('dotenv')
const api_url = `http://localhost:3001/api/client/`

const ClientApi = {
  submitLocationsQuery(locations) {
    return axios.post(api_url, locations)
  },
}
export default ClientApi
