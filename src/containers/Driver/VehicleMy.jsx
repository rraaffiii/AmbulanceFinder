import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Cookies from 'js-cookie'
import Section from '../../components/Section'
import Button from '../../components/Button'
import PageTitle from '../../components/PageTitle'
import VehicleApi from '../../api/vehicle'
import Vehicle from '../../components/Vehicle'

const VehicleMy = () => {
  const id = Cookies.get('userId')
  const global = useContext(GlobalContext)

  const [vehicles, setVehicles] = useState([])

  const getVehicles = (id) => {
    VehicleApi.getVehiclesByUserId(id)
      .then((res) => {
        setVehicles(res.data)
      })
      .catch((err) => {
        global.setAlert({
          type: 'danger',
          message: err.response.data.message,
        })
      })
  }

  useEffect(() => {
    getVehicles(id)
  }, [])

  return (
    <>
      <Section className='bg-light vehicle-add ecommerce_2' align='center'>
        <div className='d-flex'>
          <PageTitle title='My Vehicle' />
          {(vehicles.length > 0 &&
            vehicles[0].user_id.approved === true &&
            vehicles[0].user_id.vehicles.length == 0 && (
              <Button
                link={`/vehicle/add`}
                className='action-1 ms-auto'
                text='Add Vehicle'
              />
            )) || (
            <Button
              link={`#`}
              className='action-1 ms-auto disabled'
              text='Add Vehicle'
            />
          )}
        </div>

        {(vehicles.length > 0 &&
          vehicles.map((vehicle) => {
            return (
              <Vehicle
                btnText='Modify'
                btnLink={`/vehicle/modify/${vehicle._id}`}
                key={vehicle._id}
                {...vehicle}
              >
                <div className='d-flex justify-content-end'>
                  <Button
                    link={`/vehicle/modify/${vehicle._id}`}
                    className='action-2'
                    text='Modify'
                  />
                </div>
              </Vehicle>
            )
          })) || <div className='h5 text-center'>No vehicle found!</div>}
      </Section>
    </>
  )
}

export default VehicleMy
