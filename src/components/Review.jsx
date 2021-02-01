import React from 'react'

const Review = ({ id, username, rating, receiver, date, details }) => {
  // const Review = () => {
  return (
    <>
      <div className='py-2 border-top'>
        <div className='row'>
          <div className='col-md-2 col-sm-2 text-center'>
            <img
              className='col-md-6 rounded-circle'
              src={`/photos/profile/team_2_img_2.jpg`}
            />
            <span className='d-block pt-2'>
              {username}
              <i className='fas fa-star color-red pl-10'></i>
              &nbsp;{rating}
            </span>
            <small className='d-block'>{date}</small>
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
