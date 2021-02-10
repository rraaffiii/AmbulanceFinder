import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Section from '../../components/Section'
import PageTitle from '../../components/PageTitle'
import firebase from '../../firebase'
import UserApi from '../../api/user'

const Signup = () => {
  const phone = useRef(null)

  const handleClick = (e) => {
    e.preventDefault()
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
                      console.log(JSON.stringify(res.data))
                    })
                    .catch((err) => {
                      console.log(JSON.stringify(err.response.data.message))
                    })
                })
                .catch((err) => {
                  console.log(err)
                })
            })
            .catch((err) => {
              console.log(err)
            })
        }
        //user found, show error
        else {
          console.log(JSON.stringify(res.data.message))
        }
      })
      //server error
      .catch((err) => {
        console.log(JSON.stringify(err.response.data.message))
      })
  }
  return (
    <>
      <Section className='bg-light form_2' align='center'>
        <div className='col-lg-5 col-md-6 col-sm-10 text-center'>
          <PageTitle title='Sign Up to Book' />

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
          <div className='d-flex flex-wrap justify-content-center align-items-center buttons mt-25'>
            <button
              onClick={handleClick}
              className='btn mr-20 mb-20 mb-xl-0 w-210 action-2'
              type='submit'
            >
              Signup
            </button>
          </div>
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
