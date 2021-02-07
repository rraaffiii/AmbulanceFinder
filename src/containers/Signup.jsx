import React from 'react'
import { useLocation } from 'react-router-dom'
import Section from '../components/Section'
import SubHeadingTitle from '../components/SubHeadingTitle'
import SignupDriver from '../components/SignupDriver'
import SignupClient from '../components/SignupClient'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-phone-input-2/lib/style.css'

const Signup = () => {
  const user = new URLSearchParams(useLocation().search).get('u')

  return (
    <>
      {!user && (
        <Section
          className='bg-light d-flex align-items-center sign_up'
          align='center'
        >
          <SubHeadingTitle
            subheading='Find an Ambulance!'
            heading='Sign Up to Book'
            size='h1 big'
            to='/signup?u=client'
          />
          <SubHeadingTitle
            subheading='Start Earning!'
            heading='Sign Up to Drive'
            size='h1 big'
            to='/signup?u=driver'
          />
        </Section>
      )}
      {user && (
        <>
          {/* client */}
          {user == 'client' && <SignupClient />}
          {/* driver */}
          {user == 'driver' && <SignupDriver />}
        </>
      )}
    </>
  )
}

export default Signup
