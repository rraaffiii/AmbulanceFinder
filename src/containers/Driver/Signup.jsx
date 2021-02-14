import React, { useRef, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import { GlobalContext } from '../../context/GlobalContext'
import { Link, Redirect } from 'react-router-dom'
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

    const userData = {
      type: 1,
      available: true,
      approved: false,
      profile_photo: 'default.jpg',
      first_name: fname.current.value,
      last_name: lname.current.value,
      phone: phone.current.value,
      password: password.current.value,
      driving_license: drivingLicense.current.value,
      date_of_birth: dob,
      city: city.current.value,
      country: country.current.value,
    }
    UserApi.createDriver(userData)
      .then((res) => {
        Cookies.set('userId', res.data.user._id)
        Cookies.set('type', res.data.user.type)
        Cookies.set('token', res.headers.authorization)
        global.setAlert({ type: 'success', message: res.data.message })
        global.setRedirect('/')
      })
      .catch((err) => {
        global.setAlert({ type: 'danger', message: err.response.data.message })
        console.log(err)
      })
  }
  useEffect(() => {
    return global.setRedirect(null)
  }, [global.redirect])

  return (
    <>
      {/* redirect */}
      {global.redirect && <Redirect to={global.redirect} />}

      <Section className='bg-light form_2' align='center'>
        <div className='col-lg-7 col-md-7 col-sm-10 text-center'>
          <form onSubmit={handleSubmit}>
            <PageTitle title='Sign Up to Drive' />

            <div className='input-group mb-15'>
              <input
                ref={fname}
                type='text'
                name='fname'
                placeholder='First Name'
                required='required'
                className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
              <input
                ref={lname}
                type='text'
                name='lname'
                placeholder='Last Name'
                required='required'
                className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
            </div>
            <div className='input-group mb-15'>
              <input
                ref={phone}
                type='text'
                name='phone'
                placeholder='Phone'
                required='required'
                className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
              <input
                ref={password}
                type='password'
                name='password'
                placeholder='Password'
                required='required'
                className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
            </div>
            <div className='input-group mb-15'>
              <input
                ref={drivingLicense}
                type='text'
                name='drivingLicense'
                placeholder='Driving License'
                required='required'
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
                required='required'
                className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
              <input
                ref={country}
                type='text'
                name='country'
                placeholder='Country'
                required='required'
                className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
            </div>

            <div className='d-flex flex-wrap justify-content-center align-items-center buttons mt-25'>
              <button className='btn mr-20 mb-20 mb-xl-0 w-210 action-2'>
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
        <div className='col-lg-5 col-md-5 d-none d-md-block overflow-hidden my-auto f-20 text-start '>
          <div className='p-4 rounded-3 border '>
            <h3 className='text-center'>Are You Eligible to Join Us?</h3>
            <div className='details mt-30'>
              <span className='item d-block'>
                <span className='badge bg-danger rounded-circle'></span>
                <b className='align-middle pl-5'>
                  You Must have driving license
                </b>
              </span>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default SignupDriver
