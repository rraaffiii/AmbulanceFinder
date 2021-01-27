import React from 'react'
import { Link } from 'react-router-dom'

const ButtonSm = ({ className, link, text, event, id }) => {
  return (
    <>
      {(!link && (
        <button
          className={`btn ${className} border-gray color-main medium f-16`}
          onClick={event || null}
        >
          {text}
        </button>
      )) ||
        (id && (
          <Link
            to={link}
            className={`btn ${className} border-gray color-main medium f-16`}
            onClick={() => event(id) || null}
          >
            {text}
          </Link>
        )) || (
          <Link
            to={link}
            className={`btn ${className} border-gray color-main medium f-16`}
            onClick={event || null}
          >
            {text}
          </Link>
        )}
    </>
  )
}

export default ButtonSm
