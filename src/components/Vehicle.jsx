import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Vehicle = ({
  id,
  driver,
  name,
  type,
  cost,
  features: { wheelChair, oxygen, stretcher, seat },
  photo,
}) => {
  return (
    <>
      <div className='col-md-10 col-lg-7 col-xl-6'>
        <div className='mx-auto mb-30 px-30 pt-15 pb-15 radius20 color-heading product big'>
          <div className='d-flex flex-column justify-content-between'>
            <div className='d-flex'>
              <div className='f-14 semibold text-uppercase sp-20 brand me-auto'>
                {(type == 1 && 'NON AC') ||
                  (type == 2 && 'AC') ||
                  (type == 3 && 'FREEZER') ||
                  (type == 4 && 'ICU')}
              </div>
              <span className='mr-15 semibold text-uppercase sp-20 action-2 f-18'>
                ${cost}/km
              </span>
            </div>
            <div className='f-22 semibold color-main title'>{name}</div>
            <ul className='m-0 pl-10'>
              <li
                className={`float-left mr-25 ${
                  !wheelChair && 'text-decoration-line-through'
                }`}
              >
                Wheel Chair
              </li>
              <li
                className={`float-left mr-25 ${
                  !oxygen && 'text-decoration-line-through'
                }`}
              >
                Oxygen
              </li>
              <li
                className={`float-left mr-25 ${
                  !stretcher && 'text-decoration-line-through'
                }`}
              >
                Stretcher
              </li>
              <li className='float-left mr-25'>
                Seat: <span>{seat}</span>
              </li>
            </ul>
            <div className='d-flex align-items-center'>
              <Link to={`/user/${driver}`}>
                Driver: <span className='underline'>{driver}</span>
              </Link>
              <div className='ml-15 me-auto'>
                <i className='fas fa-star color-red'></i>&nbsp;
                <span>4</span> (<span>4</span>)
              </div>

              <Button
                link='/client/checkout'
                className='action-2'
                text='Book'
              />
            </div>
            <div className='d-block'>
              <img
                src={`/photos/vehicle/${photo}`}
                alt=''
                className='radius10 mt-25 w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vehicle
