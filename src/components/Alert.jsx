import React from 'react'

const Alert = ({ alert, event }) => {
  return (
    <>
      <div
        className={`alert alert-${alert.type} alert-dismissible fade show text-center mx-15 mt-15`}
        role='alert'
      >
        {alert.message}
        <button
          type='button'
          className='btn-close'
          onClick={() => event({ message: null })}
        ></button>
      </div>
    </>
  )
}

export default Alert
