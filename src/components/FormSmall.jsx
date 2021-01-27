import React from 'react'
import Button from './Button'

const FormSmall = ({
  btnText,
  btnLink,
  style,
  inputs,
  handleChange,
  handleSubmit,
}) => {
  const className =
    style == 'dark'
      ? 'border-gray focus-action-1 color-heading placeholder-main'
      : 'border-transparent-white focus-white color-white placeholder-transparent-white'
  return (
    <>
      <form className='row align-items-center no-gutters mt-50'>
        {inputs.map(({ label, type }, index) => (
          <input
            type={type}
            name={label}
            placeholder={`Enter ${label}`}
            required='required'
            key={index}
            className={`input mb-2 d-block text-center text-md-left ${className}`}
            onChange={handleChange}
          />
        ))}
        <Button
          className='action-2 mx-auto mw-320 text-center'
          link={btnLink || null}
          text={btnText}
          event={handleSubmit}
        />
      </form>
    </>
  )
}

export default FormSmall
