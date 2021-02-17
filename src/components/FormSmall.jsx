import React from 'react'
import Button from './Button'

const FormSmall = ({
  btnText,
  btnLink,
  style,
  inputs,
  handleChange = null,
  handleSubmit = null,
}) => {
  const className =
    style == 'dark'
      ? 'border-gray focus-action-1 color-heading placeholder-main'
      : 'border-transparent-white focus-white color-white placeholder-transparent-white'
  return (
    <>
      <form className='row align-items-center no-gutters'>
        {inputs.map(({ label, type }, index) => (
          <input
            type={type}
            name={label}
            placeholder={label}
            required='required'
            key={index}
            className={`input mb-15 d-block text-center text-md-left ${className}`}
            onChange={handleChange}
          />
        ))}
        <Button
          className='action-2 mx-auto w-250 text-center'
          link={btnLink || null}
          text={btnText}
          event={handleSubmit}
        />
      </form>
    </>
  )
}

export default FormSmall
