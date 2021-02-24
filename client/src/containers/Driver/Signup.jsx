import React, { useRef, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import { GlobalContext } from '../../context/GlobalContext'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import Section from '../../components/Section'
import PageTitle from '../../components/PageTitle'
import UserApi from '../../api/user'
import 'react-datepicker/dist/react-datepicker.css'

const SignupDriver = () => {
  const global = useContext(GlobalContext)
  const [dob, setDob] = useState()

  const fname = useRef(null)
  const lname = useRef(null)
  const phone = useRef(null)
  const password = useRef(null)
  const drivingLicense = useRef(null)
  const city = useRef(null)
  const country = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.target.checkValidity()) {
      return
    }
    if (password.current.value.trim().length < 6) {
      global.setAlert({
        type: 'danger',
        message: 'Password must be min 6 characters long',
      })
      return
    }
    if (city.current.value.trim() == '') {
      global.setAlert({
        type: 'danger',
        message: `Invalid ${city.current.name}`,
      })
      return
    }
    if (country.current.value.trim() == '') {
      global.setAlert({
        type: 'danger',
        message: `Invalid ${country.current.name}`,
      })
      return
    }
    const userData = {
      type: 1,
      available: true,
      approved: false,
      profile_photo: 'default.jpg',
      license_photo: null,
      first_name: fname.current.value,
      last_name: lname.current.value,
      phone: phone.current.value,
      password: password.current.value,
      driving_license: drivingLicense.current.value,
      date_of_birth: dob,
      city: city.current.value,
      country: country.current.value,
      vehicles: [],
    }
    UserApi.createDriver(userData)
      .then((res) => {
        Cookies.set('userId', res.data.user._id, { expires: 1 })
        Cookies.set('type', res.data.user.type, { expires: 1 })
        Cookies.set('token', res.headers.authorization, { expires: 1 })
        window.location.replace('/')
      })
      .catch((err) => {
        global.setAlert({ type: 'danger', message: err.response.data.message })
      })
  }

  return (
    <>
      <Section className='bg-light form_2' align='center'>
        <div className='col-lg-8 col-md-9 col-sm-12 text-center'>
          <PageTitle title='Sign Up to Drive' />

          <form onSubmit={handleSubmit}>
            <div className='input-group mb-15'>
              <input
                ref={fname}
                type='text'
                name='fname'
                placeholder='First Name'
                required
                className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
              <input
                ref={lname}
                type='text'
                name='lname'
                placeholder='Last Name'
                required
                className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
            </div>
            <div className='input-group mb-15'>
              <input
                ref={phone}
                type='text'
                name='phone'
                placeholder='Phone'
                required
                className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
              <input
                ref={password}
                type='password'
                name='password'
                placeholder='Password'
                required
                className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
            </div>
            <div className='input-group mb-15'>
              <input
                ref={drivingLicense}
                type='text'
                name='drivingLicense'
                placeholder='Driving License'
                required
                className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
              <DatePicker
                className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
                selected={dob}
                placeholderText='Date of Birth'
                showMonthDropdown
                showYearDropdown
                dropdownMode='select'
                onChange={(date) => setDob(date)}
              />
            </div>
            <div className='input-group mb-15'>
              <input
                ref={city}
                type='text'
                name='city'
                placeholder='City'
                required
                className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
              <input
                ref={country}
                type='text'
                name='country'
                placeholder='Country'
                required
                className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
            </div>

            <b className='text-center align-middle'>
              * You Must have driving license
            </b>

            <div className='d-flex flex-wrap justify-content-center align-items-center buttons mt-25'>
              <button
                className='btn mr-20 mb-20 mb-xl-0 w-210 action-2'
                type='submit'
              >
                Sign Up
              </button>
            </div>
            <span className='d-block mt-15'>
              <p className='text-center'>
                Already have account?{' '}
                <Link to='/signin' className='color-red'>
                  Sign In
                </Link>{' '}
                now!
              </p>
            </span>
          </form>
        </div>
      </Section>
    </>
  )
}

export default SignupDriver
