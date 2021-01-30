import React, { useState, useRef } from 'react'
import Section from '../components/Section'
import Button from '../components/Button'
import PageTitle from '../components/PageTitle'

const VehicleAdd = () => {
  const name = useRef(null)
  const cost = useRef(0)
  const seat = useRef(0)
  const type = useRef(null)
  const vehiclePhoto = useRef(null)
  const registrationPhoto = useRef(null)
  const [wheelchair, setWheelchair] = useState(false)
  const [oxygen, setOxygen] = useState(false)
  const [stretcher, setStretcher] = useState(false)

  const handleSelectedChange = (e) => {
    if (e.target.name == 'wheelchair') {
      setWheelchair(!wheelchair)
    } else if (e.target.name == 'oxygen') {
      setOxygen(!oxygen)
    } else if (e.target.name == 'stretcher') {
      setStretcher(!stretcher)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const vehicleData = {
      driver: 'user3',
      name: name.current.value,
      type: type.current.value,
      cost: cost.current.value,
      features: {
        wheelChair: wheelchair,
        oxygen: oxygen,
        stretcher: stretcher,
        seat: seat.current.value,
      },
      vehiclePhoto: vehiclePhoto.current.files[0],
      registrationPhoto: registrationPhoto.current.files[0],
    }
    console.log(vehicleData)
  }
  return (
    <>
      <Section className='bg-light vehicle-add' align='center'>
        <PageTitle title='Add Vehicle' />

        <div className='col-lg-12'>
          <div className='row'>
            <div className='col-lg-6'>
              <input
                ref={name}
                type='text'
                name='name'
                placeholder='Name'
                required='required'
                className='input mb-15 w-full border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
              <input
                ref={cost}
                type='text'
                name='cost'
                placeholder='Fare/KM'
                required='required'
                className='input mb-15 w-full border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
              <input
                ref={seat}
                type='text'
                name='seat'
                placeholder='Seat'
                required='required'
                className='input mb-15 w-full border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
              />
              <select
                ref={type}
                className='input w-full border-gray focus-action-1 color-heading placeholder-main text-center text-md-left'
                aria-label='Default select example'
                id='type'
                defaultValue='default'
              >
                <option value='default' disabled>
                  Type
                </option>
                <option value='0'>Non AC</option>
                <option value='1'>AC</option>
                <option value='2'>Freezer</option>
                <option value='3'>ICU</option>
              </select>
            </div>

            <div className='col-lg-6'>
              <div className='d-inline-flex mt-15'>
                <span className='f-18 bold'>Features:</span>
                <div>
                  <div className='form-check'>
                    <input
                      onClick={(e) => handleSelectedChange(e)}
                      type='checkbox'
                      name='wheelchair'
                      id='wheelchair'
                      className='input form-check-input d-none border-transparent-white focus-action-1'
                    />
                    <label htmlFor='wheelchair'>Wheelchair</label>
                  </div>

                  <div className='form-check'>
                    <input
                      onClick={(e) => handleSelectedChange(e)}
                      type='checkbox'
                      name='oxygen'
                      id='oxygen'
                      className='input d-none border-transparent-white focus-action-1'
                    />
                    <label htmlFor='oxygen'>Oxygen</label>
                  </div>

                  <div className='form-check'>
                    <input
                      onClick={(e) => handleSelectedChange(e)}
                      type='checkbox'
                      name='stretcher'
                      id='stretcher'
                      className='input d-none border-transparent-white focus-action-1'
                    />
                    <label htmlFor='stretcher'>Stretcher</label>
                  </div>
                </div>
              </div>

              <div className='input-group mt-15'>
                <span className='f-18 bold'>Vehicle Photo:</span>
                <input
                  ref={vehiclePhoto}
                  type='file'
                  className='input form-control'
                  id='inputGroupFile02'
                />
              </div>

              <div className='input-group mt-15'>
                <span className='f-18 bold'>Vehicle Registration Photo:</span>
                <input
                  ref={registrationPhoto}
                  type='file'
                  className='input form-control'
                  id='inputGroupFile02'
                />
              </div>
              <Button
                className='float-end mt-15 mr-15 btn border-gray action-2'
                link='# '
                text='Confirm'
                type='submit'
                event={handleSubmit}
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default VehicleAdd
