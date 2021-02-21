import React, { useState } from 'react'
import Button from './Button'
import UserApi from '../api/user'

const FormSearch = ({ btnText, style = null }) => {
  const [form, setForm] = useState({ pickup: '', destination: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleAutoDetect = () => {
    //if html5 geolocation api supports in browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude

        UserApi.getLocation(lat, lng)
          .then((res) => {
            setForm({ ...form, pickup: res.data.address.city })
          })
          .catch((err) => {
            global.setAlert({
              type: 'danger',
              message: err.response.data.message,
            })
          })
      })
    } else {
      console.log('Browser dont support')
    }
  }
  const className =
    style == 'dark'
      ? 'border-gray focus-action-1 color-heading placeholder-main'
      : 'border-transparent-white focus-white color-white placeholder-transparent-white'
  return (
    <>
      <form className='row align-items-center no-gutters'>
        <div className='position-relative px-0'>
          <i
            class='fas fa-crosshairs float-end mr-2 color-white f-24 locationDetect'
            onClick={handleAutoDetect}
          ></i>
          <input
            value={form.pickup}
            type='text'
            name='pickup'
            placeholder='Pickup Point'
            required='required'
            className={`input mb-15 w-full d-block text-center text-md-left ${className}`}
            onChange={handleChange}
          />
        </div>
        <input
          value={form.destination}
          type='text'
          name='destination'
          placeholder='destination'
          required='required'
          className={`input mb-15 d-block text-center text-md-left ${className}`}
          onChange={handleChange}
        />
        <Button
          className='action-2 mx-auto w-250 text-center'
          link={`/search?p=${form.pickup}&d=${form.destination}`}
          text={btnText}
        />
      </form>
    </>
  )
}

export default FormSearch
