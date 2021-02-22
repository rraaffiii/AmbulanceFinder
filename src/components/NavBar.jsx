import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({ navs, children }) => {
  return (
    <>
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
    </>
  )
}

export default NavBar
