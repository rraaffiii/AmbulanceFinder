import React from 'react'

const Switch = ({ label, event, className }) => {
  return (
    <>
      <div class={`form-check form-switch form-switch-${className}`}>
        <label class='form-check-label h6' htmlFor='flexSwitchCheckDefault'>
          {label}
        </label>
        <input
          class='form-check-input'
          type='checkbox'
          onClick={event}
          id='flexSwitchCheckChecked'
        />
      </div>
    </>
  )
}

export default Switch
