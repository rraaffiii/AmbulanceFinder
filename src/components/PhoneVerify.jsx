import React, { useState, useRef } from 'react'

const PhoneVerify = ({ btnTxt }) => {
  const [verifyClicked, setVerifyClicked] = useState(false)

  const phone = useRef(null)
  const code = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      phone: phone.current.value,
    }
    console.log(userData)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <>
          <div className='input-group mb-15'>
            <input
              ref={phone}
              type='text'
              name='phone'
              placeholder='Phone'
              required='required'
              className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
            />
          </div>
          {verifyClicked && (
            <div className='input-group mb-15'>
              <input
                ref={code}
                type='text'
                name='code'
                placeholder='Verification Code'
                required='required'
                className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
            </div>
          )}
        </>

        <div className='d-flex flex-wrap justify-content-center align-items-center buttons mt-25'>
          {(verifyClicked && (
            <button className='btn mr-20 mb-20 mb-xl-0 w-210 action-2'>
              {btnTxt}
            </button>
          )) || (
            <button
              className='btn mr-20 mb-20 mb-xl-0 w-210 action-2'
              onClick={() => setVerifyClicked(!verifyClicked)}
            >
              Send Verification Code
            </button>
          )}
        </div>
      </form>
    </>
  )
}

export default PhoneVerify
