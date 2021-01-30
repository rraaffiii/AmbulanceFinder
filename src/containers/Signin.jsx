import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import FormSmall from '../components/FormSmall'
import PageTitle from '../components/PageTitle'

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
            <PageTitle title='Sign In' />

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
      </Section>
    </>
  )
}

export default Signin
