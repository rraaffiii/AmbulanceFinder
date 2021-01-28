import React, { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Section from '../components/Section'
import SubHeadingTitle from '../components/SubHeadingTitle'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import StaticImg from '../assets/signup.jpg'

const Signup = () => {
  const user = new URLSearchParams(useLocation().search).get('u')

  const [dob, setDob] = useState(new Date())

  const fname = useRef(null)
  const lname = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const gender = useRef(null)
  const city = useRef(null)
  const country = useRef(null)
  const proPic = useRef(null)
  const license = useRef(null)
  const nid = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      fname: fname.current.value,
      lname: lname.current.value,
      email: email.current.value,
      password: password.current.value,
      type: null,
      dob: dob,
      gender: gender.current.value,
      city: city.current.value,
      country: country.current.value,
      proPic: proPic.current.files[0],
    }
    if (userData.gender == 'Gender') {
      return console.log('Gender value required')
    }
    if (user == 'client') {
      userData.type = 0
    } else if (user == 'driver') {
      userData.type = 1
    }
    console.log(userData)
  }

  return (
    <>
      {!user && (
        <Section
          className='bg-light d-flex align-items-center sign_up'
          align='center'
        >
          <SubHeadingTitle
            subheading='Find an Ambulance!!'
            heading='Sign Up to Book'
            size='h2 big'
            to='/signup?u=client'
          />
          <SubHeadingTitle
            subheading='Start Earning!'
            heading='Sign Up to Drive'
            size='h2 big'
            to='/signup?u=driver'
          />
        </Section>
      )}
      {user && (
        <>
          <Section className='bg-light form_2' align='center'>
            <div className='col-lg-7 col-md-7 col-sm-10 text-center'>
              <form onSubmit={handleSubmit}>
                {/* client */}
                {user == 'client' && (
                  <h2 className='mb-30 small'>Sign Up to Book</h2>
                )}
                {/* driver */}
                {user == 'driver' && (
                  <h2 className='mb-30 small'>Sign Up to Drive</h2>
                )}
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
                    ref={email}
                    type='text'
                    name='email'
                    placeholder='Email'
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

                <input
                  type='text'
                  name=''
                  placeholder='Address'
                  required='required'
                  className='input mb-15 w-full border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
                />
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
                <div className='input-group mb-15'>
                  <DatePicker
                    className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left z-index-master'
                    selected={dob}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode='select'
                    onChange={(date) => setDob(date)}
                  />
                  <select
                    ref={gender}
                    defaultValue='Gender'
                    required='required'
                    className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
                    aria-label='Default select example'
                    id='type'
                  >
                    <option disabled>Gender</option>
                    <option value='0'>Male</option>
                    <option value='1'>Female</option>
                  </select>
                </div>
                <div className='input-group mb-15'>
                  <span className='f-18 bold'>Profile Picture:</span>
                  <input
                    ref={proPic}
                    type='file'
                    className='input form-control'
                    required='required'
                  />
                </div>
                {user == 'driver' && (
                  <>
                    <div className='input-group mb-15'>
                      <span className='f-18 bold'>Driving License:</span>
                      <input
                        type='file'
                        className='input form-control'
                        required='required'
                      />
                    </div>
                    <div className='input-group mb-15'>
                      <span className='f-18 bold'>National ID Card:</span>
                      <input
                        type='file'
                        className='input form-control'
                        required='required'
                      />
                    </div>
                  </>
                )}
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
              {/* driver */}
              {user == 'driver' && (
                <div className='p-4 rounded-3 border '>
                  <h2 className='text-center'>
                    Know if You’re Eligible to Join Us
                  </h2>
                  <div className='details mt-30'>
                    <span className='item d-block'>
                      <span className='badge bg-danger rounded-circle'>1</span>
                      <b className='align-middle pl-5'>
                        You must have your vehicle’s registration paper
                      </b>
                    </span>
                    <span className='item d-block'>
                      <span className='badge bg-danger rounded-circle'>2</span>
                      <b className='align-middle pl-5'>
                        You must have driving license
                      </b>
                    </span>
                    <span className='item d-block'>
                      <span className='badge bg-danger rounded-circle'>3</span>
                      <b className='align-middle pl-5'>National ID/Passport</b>
                    </span>
                  </div>
                </div>
              )}
              {/* client */}
              {user == 'client' && (
                <img src={StaticImg} alt='' className='img-fluid' />
              )}
            </div>
          </Section>
        </>
      )}
    </>
  )
}

export default Signup
