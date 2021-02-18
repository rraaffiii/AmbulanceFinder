import React from 'react'

const Review = ({ _id, user_id, receiver, rating, details, createdAt }) => {
  return (
    <>
      <div className='py-2 border-top'>
        <div className='row'>
          <div className='col-md-2 col-sm-2 text-center'>
            <img
              className='col-md-6 rounded-circle w-50'
              src={`/photos/profile/default.jpg`}
            />
            <span className='d-block pt-1'>
              <i className='fas fa-star color-red pl-10'></i>
              &nbsp;{rating}
            </span>
            <small className='d-block'>{createdAt.slice(0, 10)}</small>
          </div>
          <div className='col-md-10 col-sm-8 align-self-center title'>
            <span className='d-block'>
              <p>{details}</p>
            </span>
          </div>

          <b></b>
        </div>
      </div>
    </>
  )
}

export default Review
