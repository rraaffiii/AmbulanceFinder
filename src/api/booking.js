import axios from 'axios'
import Cookies from 'js-cookie'
// require('dotenv')
const api_url = `http://localhost:3001/api/booking/`

const getToken = () => {
  const token = Cookies.get('token')
  if (token === null) return
  return token
}

const BookingApi = {
  bookDriver(bookingData) {
    return axios.post(`${api_url}/bookDriver`, bookingData, {
      headers: { authorization: getToken() },
    })
  },
  bookDriverFromRedirect(redirectUrl) {
    const pickup = redirectUrl.split('?p=').pop().split('&d')[0]
    const destination = redirectUrl.split('&d').pop().split('&driver')[0]
    const driver = redirectUrl.split('&driver=').pop()
    const bookingData = {
      pickup,
      destination,
      driver,
    }
    return axios.post(`${api_url}/bookDriver`, bookingData, {
      headers: { authorization: getToken() },
    })
  },
}
export default BookingApi
