import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import Section from '../components/Section'
import PageTitle from '../components/PageTitle'
import 'react-datepicker/dist/react-datepicker.css'

const SignupDriver = () => {
  const [dob, setDob] = useState()

  const fname = useRef(null)
  const lname = useRef(null)
  const phone = useRef(null)
  const city = useRef(null)
  const country = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      fname: fname.current.value,
      lname: lname.current.value,
      type: 1,
      dob: dob,
      city: city.current.value,
      country: country.current.value,
    }
    if (userData.gender == 'Gender') {
      return console.log('Gender value required')
    }
    console.log(userData)
  }

  return (
    <>
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
                <span className='badge bg-danger rounded-circle'>1</span>
                <b className='align-middle pl-5'>
                  Must have vehicle’s registration paper
                </b>
              </span>
              <span className='item d-block'>
                <span className='badge bg-danger rounded-circle'>2</span>
                <b className='align-middle pl-5'>Must have driving license</b>
              </span>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default SignupDriver
