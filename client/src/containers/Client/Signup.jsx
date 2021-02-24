import React, { useRef, useContext } from 'react'
import Cookies from 'js-cookie'
import { GlobalContext } from '../../context/GlobalContext'
import { Link } from 'react-router-dom'
import Section from '../../components/Section'
import PageTitle from '../../components/PageTitle'
import firebase from '../../firebase'
import UserApi from '../../api/user'
import BookingApi from '../../api/booking'

const Signup = () => {
  const global = useContext(GlobalContext)
  const phone = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!e.target.checkValidity()) {
      return
    }
    const number = phone.current.value

    UserApi.isUserExist(number)
      .then((res) => {
        //user not found, send code to signup
        if (!res.data.exist) {
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
                  UserApi.createClient({ phone: number })
                    .then((res) => {
                      Cookies.set('userId', res.data.user._id, { expires: 1 })
                      Cookies.set('type', res.data.user.type, { expires: 1 })
                      Cookies.set('token', res.headers.authorization, {
                        expires: 1,
                      })
                      global.setAlert({
                        type: 'success',
                        message: res.data.message,
                      })

                      // check if redirected from booking page
                      if (!Cookies.get('redirectUrl')) {
                        window.location.replace('/')
                      } else {
                        BookingApi.bookDriverFromRedirect(
                          Cookies.get('redirectUrl')
                        )
                          // if booking successful
                          .then((res) => {
                            global.setAlert({
                              type: 'success',
                              message: res.data.message,
                            })
                            window.location.replace('/booking')
                          })
                          .catch((err) => {
                            global.setAlert({
                              type: 'success',
                              message: res.data.message,
                            })
                          })
                      }
                    })
                    .catch((err) => {
                      global.setAlert({
                        type: 'danger',
                        message: err.response.data.message,
                      })
                    })
                })
                .catch((err) => {
                  global.setAlert({
                    type: 'danger',
                    message: 'Error sending verification code',
                  })
                })
            })
            .catch((err) => {
              global.setAlert({
                type: 'danger',
                message: err.response.data.message,
              })
            })
        }
        //user found, show error
        else {
          global.setAlert({
            type: 'danger',
            message: res.data.message,
          })
        }
      })
      //server error
      .catch((err) => {
        global.setAlert({
          type: 'danger',
          message: err.response.data.message,
        })
      })
  }

  return (
    <>
      <Section className='bg-light form_2' align='center'>
        <div className='col-lg-5 col-md-6 col-sm-10 text-center'>
          <PageTitle title='Sign Up as Client' />

          <form onSubmit={handleSubmit}>
            <div className='input-group mb-15'>
              <input
                ref={phone}
                type='text'
                name='phone'
                placeholder='Phone'
                required
                className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
            </div>
            <div className='d-flex flex-wrap justify-content-center align-items-center buttons mt-25'>
              <button
                className='btn mr-20 mb-20 mb-xl-0 w-210 action-2'
                type='submit'
              >
                Signup
              </button>
            </div>
          </form>
          <div
            id='recaptcha-container'
            className='d-flex justify-content-center'
          ></div>

          <span className='d-block mt-15'>
            <p className='text-center'>
              Already have account?{' '}
              <Link to='/signin' className='color-red'>
                Sign In
              </Link>{' '}
              now!
            </p>
          </span>
        </div>
      </Section>
    </>
  )
}

export default Signup
