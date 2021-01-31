import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../components/Logo'

const Header = () => {
  return (
    <>
      {/* Navigation Mobile type */}
      <a className='open_menu color-main bg-light radius_full'>
        <i className='fas fa-bars lh-40'></i>
      </a>
      <div className='navigation_mobile bg-light type2'>
        <a className='close_menu color-main'>
          <i className='fas fa-times'></i>
        </a>
        <div className='px-40 pt-60 pb-60 text-center inner'>
          <div>
            <a href='#' className='f-heading f-22 link color-main mb-20'>
              Home
            </a>
          </div>
          <div>
            <a href='#' className='f-heading f-22 link color-main mb-20'>
              Popular
            </a>
          </div>
          <div className='socials mt-60'>
            <a href='#' target='_blank' className='link color-main f-18 mx-10'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#' target='_blank' className='link color-main f-18 mx-10'>
              <i className='fab fa-facebook'></i>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className='bg-dark header_2'>
        <nav className='header_menu_2 transparent pt-15 pb-15'>
          <div className='container px-xl-0'>
            <div className='row justify-content-between align-items-baseline'>
              <div className='col-md-4'>
                <Logo name='Ambulance Finder' />
              </div>
              <div className='col-md-6 d-flex justify-content-end align-items-center'>
                <NavLink
                  exact
                  to='/booking-request'
                  className='link color-white f-18 mx-15'
                  activeClassName='active'
                >
                  Requests
                </NavLink>
                <NavLink
                  exact
                  to='/vehicle-add'
                  className='link color-white f-18 mx-15'
                  activeClassName='active'
                >
                  Add
                </NavLink>
                <NavLink
                  exact
                  to='/approve-driver'
                  className='link color-white f-18 mx-15'
                  activeClassName='active'
                >
                  Approve
                </NavLink>
                <NavLink
                  exact
                  to='/stats'
                  className='link color-white f-18 mx-15'
                  activeClassName='active'
                >
                  Stats
                </NavLink>
                <NavLink
                  exact
                  to='/signin'
                  className='link color-white f-18 mx-15'
                  activeClassName='active'
                >
                  Signin
                </NavLink>
                <NavLink
                  exact
                  to='/signup'
                  className='link color-white f-18 mx-15'
                  activeClassName='active'
                >
                  Signup
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
