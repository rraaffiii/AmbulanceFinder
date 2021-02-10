import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import Alert from '../components/Alert'
import PageTitle from '../components/PageTitle'
import firebase from '../firebase'
import UserApi from '../api/user'

const Signin = () => {
  const [alert, setAlert] = useState({ type: null, message: null })
  const phone = useRef(null)
  const pass = useRef(null)

  const [showPass, setShowPass] = useState(false)

  const handlePhoneSubmit = (e) => {
    e.preventDefault()
    const number = phone.current.value

    UserApi.isUserExist(number)
      .then((res) => {
        //client found, send code to signin
        if (res.data.exist && res.data.type == 0) {
          const recaptcha = new firebase.auth.RecaptchaVerifier(
            'recaptcha-container',
            { size: 'invisible' }
          )
          firebase
            .auth()
            .signInWithPhoneNumber(number, recaptcha)
            .then((response) => {
              let code = prompt('Enter the verification code: ', '')
              response
                .confirm(code)
                .then(() => {
                  // client login action
                  setAlert({ type: 'success', message: 'Login successful' })
                  console.log('Logged in')
                })
                .catch((err) => {
                  console.log(err)
                })
            })
            .catch((err) => {
              console.log(err)
            })
        }
        //driver found, show password
        else if (res.data.exist && res.data.type == 1) {
          setShowPass(true)
        }
        //user not found, show error
        else {
          setAlert({ type: 'danger', message: res.data.message })
          console.log(JSON.stringify(res.data.message))
        }
      })
      //server error
      .catch((err) => {
        setAlert({ type: 'danger', message: err.response.data.message })
        console.log(JSON.stringify(err.response.data.message))
      })
  }
  const handlePassSubmit = (e) => {
    e.preventDefault()
    const number = phone.current.value
    const password = pass.current.value
    UserApi.checkCredentials({ phone: number, password })
      .then((res) => {
        //driver login
        if (res.data.valid) {
          setAlert({ type: 'success', message: res.data.message })
          console.log(JSON.stringify(res.data.message))
        } else {
          setAlert({ type: 'danger', message: res.data.message })
          console.log(JSON.stringify(res.data.message))
        }
      })
      .catch((err) => {
        setAlert({ type: 'danger', message: err.response.data.message })
        console.log(JSON.stringify(err.response.data.message))
      })
  }
  return (
    <>
      <Section className='bg-light form_2' align='center'>
        <div className='col-lg-5 col-md-6 col-sm-10 text-center'>
          {/* show alert */}
          {alert.message && <Alert alert={alert} event={setAlert} />}

          <PageTitle title='Sign In' />
          <div className='input-group mb-15'>
            <input
              ref={phone}
              type='text'
              name='phone'
              placeholder='Phone'
              required='required'
              className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
            />
          </div>
          {(!showPass && (
            <>
              <div className='d-flex flex-wrap justify-content-center align-items-center buttons mt-25'>
                <button
                  onClick={handlePhoneSubmit}
                  className='btn mr-20 mb-20 mb-xl-0 w-210 action-2'
                  type='submit'
                >
                  Submit
                </button>
              </div>
              <div
                id='recaptcha-container'
                className='d-flex justify-content-center'
              ></div>
            </>
          )) || (
            <>
              <div className='input-group mb-15'>
                <input
                  ref={pass}
                  type='password'
                  name='password'
                  placeholder='Password'
                  required='required'
                  className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
                />
              </div>
              <div className='d-flex flex-wrap justify-content-center align-items-center buttons mt-25'>
                <button
                  onClick={handlePassSubmit}
                  className='btn mr-20 mb-20 mb-xl-0 w-210 action-2'
                  type='submit'
                >
                  Signin
                </button>
              </div>
            </>
          )}

          <p className='mt-15'>
            No account yet?{' '}
            <Link to='/signup' className='color-red'>
              Sign Up
            </Link>{' '}
            now!
          </p>
        </div>
      </Section>
    </>
  )
}

export default Signin
