import React, { useState, useEffect, useContext } from 'react'
import Cookies from 'js-cookie'
import { GlobalContext } from '../../context/GlobalContext'
import Section from '../../components/Section'
import PageTitle from '../../components/PageTitle'
import Rating from '../../components/Rating'
import Switch from '../../components/Switch'
import Review from '../../components/Review'
import Button from '../../components/Button'
import UserApi from '../../api/user'
import ReviewApi from '../../api/review'

const Profile = () => {
  const id = Cookies.get('userId')
  const global = useContext(GlobalContext)
  const [user, setUser] = useState({})
  const [reviews, setReviews] = useState([])
  const [available, setAvailable] = useState(user.available)

  const getProfileData = () => {
    UserApi.findUserById(id)
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => {
        global.setAlert(err.response.data.message)
      })
  }
  const getReviews = () => {
    ReviewApi.getReviewsByUserId(id)
      .then((res) => {
        setReviews(res.data)
      })
      .catch((err) => {
        global.setAlert({
          type: 'danger',
          message: err.response.data.message,
        })
      })
  }

  const updateAvailable = (available) => {
    UserApi.setAvailability({ id, available })
      .then((res) => {
        global.setAlert({
          type: 'success',
          message: res.data.message,
        })
      })
      .catch((err) => {
        global.setAlert({
          type: 'danger',
          message: err.response.data.message,
        })
      })
  }
  const handleAvailability = () => {
    setAvailable(!available)
  }
  useEffect(() => {
    getProfileData()
    getReviews()
  }, [])
  useEffect(() => {
    if (available !== null && typeof available !== 'undefined') {
      updateAvailable(available)
    }
  }, [available])
  return (
    <>
      <Section className='bg-light d-flex align-items-center' align='center'>
        <PageTitle title='Profile' />

        <div className='col-lg-3 profile text-center'>
          <img
            src={`/photos/profile/${user.profile_photo}`}
            className='img-fluid border rounded pb-2'
          />
          <div className='pl-5'>
            <h3>{user.first_name}</h3>
            {(user.rating && (
              <Rating rating={user.rating} rating_count={user.rating_count} />
            )) || <Rating rating='No reviews' />}
          </div>
          {/* user can edit own profile if logged in*/}
          <Button
            className='btn mb-2 border-gray action-1'
            link={`/profile/edit`}
            text='Edit Profile'
            type='submit'
          />
          <Switch
            label='Set Available'
            className='lg'
            isChecked={user.available}
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
              Date of Birth:{' '}
              <b>
                {user.date_of_birth &&
                  user.date_of_birth.toString().slice(0, 10)}
              </b>
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
            <div className='item'>
              Status: <b>{(user.approved && 'Approved') || 'Not approved'}</b>
            </div>
          </div>
        </div>
      </Section>

      <Section className='bg-offwhite d-flex align-items-center' align='center'>
        <PageTitle title='Reviews' />
        <div className='col-lg-12'>
          {(reviews.length > 0 &&
            reviews.map((review) => {
              return <Review key={review._id} {...review} />
            })) || <div className='h5 text-center'>No reviews yet</div>}
        </div>
      </Section>
    </>
  )
}

export default Profile
