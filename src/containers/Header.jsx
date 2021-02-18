import React from 'react'
import Cookies from 'js-cookie'
import Logo from '../components/Logo'
import NavBar from '../components/NavBar'

const Header = () => {
  const type = Cookies.get('type')

  const handleSignout = () => {
    Cookies.remove('userId')
    Cookies.remove('type')
    Cookies.remove('token')
    Cookies.remove('redirectUrl')
    window.location.replace('/')
  }

  const generalNavs = [
    { link: '/signin', btnText: 'Signin' },
    { link: '/signup', btnText: 'Signup' },
  ]
  const clientNavs = [
    { link: '/booking', btnText: 'Bookings' },
    { link: '/profile', btnText: 'Profile' },
    { link: '/#', btnText: 'Signout', event: handleSignout },
  ]
  const driverNavs = [
    { link: '/booking', btnText: 'Bookings' },
    { link: '/vehicle', btnText: 'Vehicles' },
    { link: '/profile', btnText: 'Profile' },
    { link: '/#', btnText: 'Signout', event: handleSignout },
  ]
  const adminNavs = [
    { link: '/approve/driver', btnText: 'Approve' },
    { link: '/stats', btnText: 'Stats' },
    { link: '/#', btnText: 'Signout', event: handleSignout },
  ]

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
              <div className='col-md-6 nav-inner d-flex justify-content-end align-items-center'>
                {/* general nav */}
                {!type && <NavBar navs={generalNavs} />}

                {/* client nav */}
                {type && type == 0 && <NavBar navs={clientNavs} />}

                {/* driver nav */}
                {type && type == 1 && <NavBar navs={driverNavs} />}

                {/* admin nav */}
                {type && type == 2 && <NavBar navs={adminNavs} />}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
