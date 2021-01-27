import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import FormSmall from '../components/FormSmall'
import StaticImg from '../assets/signup.jpg'

const Signin = () => {
  const [form, setForm] = useState({ username: '', password: '' })
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    console.log({ ...form })
  }
  const inputs = [
    { label: 'username', type: 'text' },
    { label: 'password', type: 'password' },
  ]
  return (
    <>
      <Section className='bg-light form_2' align='center'>
        <div className='col-lg-5 col-md-6 col-sm-10 d-flex align-items-center text-center'>
          <div className='d-block'>
            <h2 className='mb-45 small'>Sign In to Book/Drive</h2>
            <FormSmall
              btnText='Sign In'
              btnLink='# '
              style='dark'
              inputs={inputs}
              setForm={setForm}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <p className='mt-15'>
              No account yet?{' '}
              <Link to='/signup' className='color-red'>
                Sign Up
              </Link>{' '}
              now!
            </p>
          </div>
        </div>
        <div className='col-sm-1'></div>
        <div className='col-lg-6 col-md-5 d-none d-md-block overflow-hidden my-auto'>
          <img src={StaticImg} alt='' className='img-fluid' />
        </div>
      </Section>
    </>
  )
}

export default Signin
