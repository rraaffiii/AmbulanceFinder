import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../components/Logo'
import NavMobile from './../components/NavMobile'

const NavBar = ({ navs, children }) => {
  const [displayWidth, setDisplayWidth] = useState()
  const [showMobileNav, setShowMobileNav] = useState(false)

  const handleMobileNav = () => {
    setShowMobileNav(!showMobileNav)
  }
  useEffect(() => {
    setDisplayWidth(window.innerWidth)
  }, [])

  const isMobile = displayWidth <= 640

  return (
    <>
      {(isMobile && (
        <>
          <div className='col-sm-12'>
            <Logo name='Ambulance Finder' />
            <i
              onClick={handleMobileNav}
              class='fa fa-bars color-white f-30 position-absolute top-0 end-0 mr-15 mb-5 lh-1'
            ></i>
          </div>
          {showMobileNav && <NavMobile navs={navs} />}
        </>
      )) || (
        <>
          <div className='col-md-4'>
            <Logo name='Ambulance Finder' />
          </div>
          <div className='col-md-6 nav-inner d-flex justify-content-end align-items-center'>
            {navs.map((nav, index) => (
              <NavLink
                exact
                to={nav.link}
                key={index}
                className='link color-white f-18 mx-15'
                activeClassName='active'
                onClick={nav.event || null}
              >
                {nav.btnText}
              </NavLink>
            ))}
            {children}
          </div>
        </>
      )}
    </>
  )
}

export default NavBar
