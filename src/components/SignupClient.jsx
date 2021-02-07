import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import PageTitle from '../components/PageTitle'
import PhoneVerify from '../components/PhoneVerify'
import 'react-datepicker/dist/react-datepicker.css'

const Signup = () => {
  return (
    <>
      <Section className='bg-light form_2' align='center'>
        <div className='col-lg-5 col-md-6 col-sm-10 text-center'>
          <PageTitle title='Sign Up to Book' />

          <PhoneVerify btnTxt='Signup' />

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
