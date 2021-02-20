import React, { useState, useEffect, useContext } from 'react'
import Cookies from 'js-cookie'
import { GlobalContext } from '../../context/GlobalContext'
import Section from '../../components/Section'
import PageTitle from '../../components/PageTitle'
import ProfileClient from '../../components/ProfileClient'
import Review from '../../components/Review'
import Button from '../../components/Button'
import UserApi from '../../api/user'
import ReviewApi from '../../api/review'

const Profile = () => {
  const id = Cookies.get('userId')
  const global = useContext(GlobalContext)
  const [user, setUser] = useState({})
  const [reviews, setReviews] = useState([])
  const getProfileData = () => {
    UserApi.findUserByToken()
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => {
        global.setAlert({
          type: 'danger',
          message: err.response.data.message,
        })
      })
  }
  const getReviews = () => {
    ReviewApi.getReviewsByReceiver(id)
      .then((res) => {
        console.log(res.data)
        setReviews(res.data)
      })
      .catch((err) => {
        global.setAlert({
          type: 'danger',
          message: err.response.data.message,
        })
      })
  }
  useEffect(() => {
    getProfileData()
    getReviews()
  }, [])

  return (
    <>
      <Section className='bg-light d-flex align-items-center' align='center'>
        <PageTitle title='Profile' />

        <ProfileClient user={user}>
          {/* user can edit own profile if logged in*/}
          <Button
            className='btn mb-2 border-gray action-1'
            link={`/profile/edit`}
            text='Edit Profile'
            type='submit'
          />
        </ProfileClient>
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
