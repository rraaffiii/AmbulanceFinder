import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import Vehicle from '../components/Vehicle'
import Select from '../components/Select'
import PageTitle from '../components/PageTitle'
import Button from '../components/Button'
import { vehiclesData } from '../data'

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([])
  const [type, setType] = useState('0')

  const handleChange = (e) => {
    setType(e.target.value)
    setVehicles(vehiclesData)
  }

  useEffect(() => {
    if (type == '0') {
      return setVehicles(vehiclesData)
    }
    setVehicles(vehicles.filter((vehicle) => vehicle.type == type))
  }, [type])

  const selectOptions = [
    { value: 0, label: 'ALL' },
    { value: 1, label: 'NON AC' },
    { value: 2, label: 'AC' },
    { value: 3, label: 'FREEZER' },
    { value: 4, label: 'ICU' },
  ]

  return (
    <>
      <Section className='bg-light ecommerce_2' align='center'>
        <div className='d-flex'>
          <PageTitle title='Search Result' />

          <Select
            className='pl-4 ms-auto'
            event={handleChange}
            selectedValue={type}
            options={selectOptions}
          />
        </div>
        {vehicles.map((vehicle) => {
          return (
            <Vehicle key={vehicle.id} {...vehicle}>
              <div className='d-flex align-items-center'>
                <Link to={`/profile/${vehicle.userId}`}>
                  Driver: <span className='underline'>{vehicle.userId}</span>
                </Link>
                <div className='ml-15 me-auto'>
                  <i className='fas fa-star color-red'></i>&nbsp;
                  <span>4</span> (<span>4</span>)
                </div>

                <Button link='/checkout' className='action-2' text='Book' />
              </div>
            </Vehicle>
          )
        })}
      </Section>
    </>
  )
}

export default Vehicles
