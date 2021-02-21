import React from 'react'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import SocialLink from '../components/SocialLink'

const Footer = () => {
  const type = Cookies.get('type')
  return (
    <>
      <footer className='py-3 bg-dark text-center footer_1'>
        <div className='container px-xl-0'>
          <div className='row justify-content-between align-items-center lh-40 links'>
            <div className='col-lg-4 col-sm-6 text-sm-right text-lg-left order-1 order-lg-0'>
              <Link
                to='/'
                className='link color-white f-18 mx-15'
                activeClassName='action-2'
              >
                Home
              </Link>
              {!type && (
                <>
                  <Link
                    to='/signup'
                    className='link color-white f-18 mx-15'
                    activeClassName='action-2'
                  >
                    Signup
                  </Link>
                  <Link
                    to='/admin/signin'
                    className='link color-white f-18 mx-15'
                    activeClassName='action-2'
                  >
                    Admin
                  </Link>
                </>
              )}
            </div>
            <div className='mb-10 mb-lg-0 col-lg-auto order-0'>
              <div className='color-heading text-adaptive'>
                &copy; 2021 All rights reserved.
              </div>
            </div>
            <div className='col-lg-4 col-sm-6 text-sm-left text-lg-right order-2 order-lg-0'>
              <SocialLink
                link='https://facebook.com'
                color='white'
                icon='facebook'
              />
              <SocialLink
                link='https://twitter.com'
                color='white'
                icon='twitter'
              />
              <SocialLink
                link='https://instagram.com'
                color='white'
                icon='instagram'
              />
            </div>
          </div>
        </div>
      </footer>

      {/* forms alerts */}
      {/* <div
        className='alert alert-success alert-dismissible fixed-top alert-form-success'
        role='alert'
      >
        <button
          type='button'
          className='close'
          data-dismiss='alert'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
        Thanks for your message!
      </div>
      <div
        className='alert alert-warning alert-dismissible fixed-top alert-form-check-fields'
        role='alert'
      >
        <button
          type='button'
          className='close'
          data-dismiss='alert'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
        Please, fill in required fields.
      </div>
      <div
        className='alert alert-danger alert-dismissible fixed-top alert-form-error'
        role='alert'
      >
        <button
          type='button'
          className='close'
          data-dismiss='alert'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
        <div className='message'>
          An error occurred while sending data :( Please, check if your hosting
          supports PHP and check how to set form data sending{' '}
          <a
            href='https://designmodo.com/startup/documentation/#form-handler'
            target='_blank'
            className='link color-transparent-white'
          >
            here
          </a>
          .
        </div>
      </div> */}
    </>
  )
}

export default Footer
