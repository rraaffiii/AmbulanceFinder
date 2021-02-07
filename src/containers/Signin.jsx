import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import PageTitle from '../components/PageTitle'
import PhoneVerify from '../components/PhoneVerify'

const Signin = () => {
  return (
    <>
      <Section className='bg-light form_2' align='center'>
        <div className='col-lg-5 col-md-6 col-sm-10 text-center'>
          <PageTitle title='Sign In' />

          <PhoneVerify btnTxt='Signin' />

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
