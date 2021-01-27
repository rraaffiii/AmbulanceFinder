import React, { useState, useRef } from 'react'
import Section from '../components/Section'
import Button from '../components/Button'
import Select from '../components/Select'

const Checkout = () => {
  const [type, setType] = useState(0)

  const cardIssuer = useRef(null)
  const cardNumber = useRef(null)
  const amount = useRef(0)

  const handleChange = (e) => {
    setType(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (type == 0) {
      const paymentData = {
        cardIssuer: cardIssuer.current.value,
        cardNumber: cardNumber.current.value,
        amount: amount.current.innerText,
      }
      console.log(paymentData)
    }
  }

  const selectOptions = [
    { value: 0, label: 'Credit Card' },
    { value: 1, label: 'Cash' },
  ]
  return (
    <>
      <Section className='bg-light pricing_table_1' align='center'>
        <div className='top-row pb-20 d-flex'>
          <h2 className='me-auto'>Checkout</h2>
        </div>

        <div className='col-lg-8'>
          <div className='input-group'>
            <input
              type='text'
              name=''
              placeholder='First Name'
              required='required'
              className='flex-fill input mb-25 border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
            />
            <input
              type='text'
              name=''
              placeholder='Last Name'
              required='required'
              className='flex-fill input mb-25 border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
            />
          </div>
          <input
            type='text'
            name=''
            placeholder='Address'
            required='required'
            className='input mb-25 w-full border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
          />
          <div className='input-group'>
            <input
              type='text'
              name=''
              placeholder='City'
              required='required'
              className='flex-fill input mb-25 border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
            />
            <input
              type='text'
              name=''
              placeholder='Country'
              required='required'
              className='flex-fill input mb-25 border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
            />
          </div>
          <div className='input-group'>
            <input
              type='text'
              name=''
              placeholder='Email'
              required='required'
              className='flex-fill input mb-25 border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
            />
            <input
              type='text'
              name=''
              placeholder='Phone'
              required='required'
              className='flex-fill input mb-25 border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
            />
          </div>
          {type == 0 && (
            <div className='input-group'>
              <select
                ref={cardIssuer}
                defaultValue='Card Issuer'
                required='required'
                className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
                aria-label='Default select example'
                id='type'
              >
                <option disabled>Card Issuer</option>
                <option value='0'>MasterCard</option>
                <option value='1'>Visa</option>
              </select>
              <input
                ref={cardNumber}
                type='text'
                name='cardNumber'
                placeholder='Card Number'
                required='required'
                className='flex-fill input mb-25 border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
            </div>
          )}
        </div>

        <div className='col-lg-4'>
          <div className='pl-15 radius10 block'>
            <div className='d-flex pt-15'>
              <span className='align-self-center me-auto'>Payment: </span>
              <Select
                className='pl-4'
                event={handleChange}
                selectedValue={type}
                options={selectOptions}
              />
            </div>
            <div className='item f-18'>
              <b>Rocket Ambulance</b>
            </div>
            <div className='item'>
              Route: <b>Uttara - Kuril</b>
            </div>
            <div className='item'>
              Cost: <b>9.9</b> km X $<b>8</b>
            </div>
            <div className='item'>
              <div className='f-22 title'>Total</div>
              <div className='d-flex f-58 relative price'>
                <span className='absolute ml-15 f-16'>$</span>
                <b ref={amount} className='ml-15 me-auto'>
                  79.2
                </b>
                <Button
                  className='action-2 mr-10'
                  link='# '
                  text='Confirm'
                  type='submit'
                  event={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Checkout
