import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Section from '../../components/Section'
import BlockObject from '../../components/BlockObject'
import PageTitle from '../../components/PageTitle'
import Rating from '../../components/Rating'
import Review from '../../components/Review'
import Button from '../../components/Button'
import { usersData, reviewsData } from '../../data'

const Profile = () => {
  const { id } = useParams()
  const [user, setUser] = useState({})
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    setUser(usersData.find((user) => user.username == id))
    setReviews(reviewsData.filter((review) => review.receiver == id))
  }, [user])

  return (
    <>
      <Section className='bg-light d-flex align-items-center' align='center'>
        <PageTitle title='Profile' />

        <div className='col-lg-3'>
          <img
            src={`/photos/profile/${user.profile_photo}`}
            className='img-fluid rounded pb-2'
          />
          <div className='pl-5'>
            <h3>{user.name}</h3>
            <Rating rating={user.rating} rating_count={user.rating_count} />
          </div>
          {/* user can edit own profile if logged in*/}
          <Button
            className='btn mb-2 border-gray action-1'
            link={`/client/profile/${id}/edit`}
            text='Edit Profile'
            type='submit'
          />
        </div>
        <div className='col-lg-9'>
          <BlockObject rows={user} />
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
