import React from 'react'

const Switch = ({ label, event, className }) => {
  return (
    <>
      <div className={`form-check form-switch form-switch-${className}`}>
        <input
          className='form-check-input'
          type='checkbox'
          onClick={event}
          id='flexSwitchCheckDefault'
        />
        <label className='form-check-label h6' htmlFor='flexSwitchCheckDefault'>
          {label}
        </label>
      </div>
    </>
  )
}

export default Switch
