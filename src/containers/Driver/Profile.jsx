import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import Section from '../../components/Section'
import BlockObject from '../../components/BlockObject'
import PageTitle from '../../components/PageTitle'
import Rating from '../../components/Rating'
import Switch from '../../components/Switch'
import Review from '../../components/Review'
import Button from '../../components/Button'
import UserApi from '../../api/user'
import { reviewsData } from '../../data'

const Profile = () => {
  const id = Cookies.get('userId')
  const [user, setUser] = useState({})
  const [reviews, setReviews] = useState([])
  const [available, setAvailable] = useState()

  const handleAvailability = () => {
    setAvailable(!available)
  }
  const getProfileData = () => {
    UserApi.findUserById(id).then((res) => {
      setUser(res.data)
    })
  }
  useEffect(() => {
    getProfileData()
    setReviews(reviewsData.filter((review) => review.receiver == id))
    setAvailable(user.available)
  }, [])

  return (
    <>
      <Section className='bg-light d-flex align-items-center' align='center'>
        <PageTitle title='Profile' />

        <div className='col-lg-3 text-center'>
          <img
            src={`/photos/profile/${user.profile_photo}`}
            className='img-fluid border rounded pb-2'
          />
          <div className='pl-5'>
            <h3>{user.name}</h3>
            {(user.ratin && (
              <Rating rating={user.rating} rating_count={user.rating_count} />
            )) || <Rating rating='No reviews' />}
          </div>
          {/* user can edit own profile if logged in*/}
          <Button
            className='btn mb-2 border-gray action-1'
            link={`/driver/profile/${id}/edit`}
            text='Edit Profile'
            type='submit'
          />
          <Switch
            label='Set Available'
            className='lg'
            isChecked={available}
            event={handleAvailability}
          />
        </div>
        <div className='col-lg-9'>
          <div className='block radius10 p-3'>
            <div className='item'>
              ID: <b>{user._id}</b>
            </div>
            <div className='item'>
              Name: <b>{user.first_name + ' ' + user.last_name}</b>
            </div>
            <div className='item'>
              Phone: <b>{user.phone}</b>
            </div>
            <div className='item'>
              Date of Birth: <b>{user.date_of_birth.toString().slice(0, 10)}</b>
            </div>
            <div className='item'>
              City: <b>{user.city}</b>
            </div>
            <div className='item'>
              Country: <b>{user.country}</b>
            </div>
            <div className='item'>
              Driving License: <b>{user.driving_license}</b>
            </div>
          </div>
        </div>
      </Section>

      <Section className='bg-offwhite d-flex align-items-center' align='center'>
        <PageTitle title='Reviews' />
        <div className='col-lg-12'>
          {reviews.map((review) => {
            return <Review key={review.id} {...review} />
          })}
        </div>
      </Section>
    </>
  )
}

export default Profile
