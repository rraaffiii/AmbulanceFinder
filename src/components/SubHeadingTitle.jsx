import React from 'react'
import { Link } from 'react-router-dom'

const SubHeadingTitle = ({ subheading, heading, size, to }) => {
  return (
    <>
      <div className='col-lg-6 text-center'>
        <div className='f-14 color-heading semibold text-uppercase sp-20'>
          {subheading}
        </div>
        <Link to={to}>
          <span className={`color-red fw-bold ${size}`}>{heading}</span>
        </Link>
      </div>
    </>
  )
}

export default SubHeadingTitle
