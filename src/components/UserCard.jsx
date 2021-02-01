import React from 'react'
import Button from '../components/Button'
import Rating from '../components/Rating'

const UserCard = ({ id, name, profile_photo, rating, rating_count, phone }) => {
  return (
    <>
      <div className='row p-3 border border-1 rounded'>
        <div className='col-lg-8 justify-content-start'>
          <h5 className='pb-1'>Booked User:</h5>
          <div className='mt-10 mb-1 f-20 title'>{name}</div>

          <div>
            <div className='d-flex align-items-center'>
              <Rating rating={rating} rating_count={rating_count} />
              <i className='fas fa-phone-square-alt f-18 pl-15'></i>
              <span>&nbsp;{phone}</span>
            </div>
            <a href={`tel:${phone}`}>
              <Button className='sm action-1 px-5 mt-2' text='Call' />
            </a>
          </div>
        </div>
        <div className='col-lg-4 justify-content-end'>
          <img
            src={require(`../assets/${profile_photo}`).default}
            alt=''
            className='img-fluid rounded-circle'
          />
        </div>
      </div>
    </>
  )
}

export default UserCard
