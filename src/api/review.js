import axios from 'axios'
import Cookies from 'js-cookie'

const api_url = `http://localhost:3001/api/review/`

const getToken = () => {
  const token = Cookies.get('token')
  if (token === null) return ''
  return token
}

const ReiviewApi = {
  getReviewsByUserId(id) {
    return axios.post(`${api_url}/getReviewsByUserId`, id, {
      headers: { authorization: getToken() },
    })
  },
}
export default ReiviewApi
