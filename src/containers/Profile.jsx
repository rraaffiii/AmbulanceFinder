import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Section from '../components/Section'
import BlockObjectRow from '../components/BlockObjectRow'
import PageTitle from '../components/PageTitle'
import Rating from '../components/Rating'
import Switch from '../components/Switch'
import Review from '../components/Review'
import { usersData, reviewsData } from '../data'

const Profile = () => {
  const { id } = useParams()
  const [user, setUser] = useState({})
  const [reviews, setReviews] = useState([])
  const [available, setAvailable] = useState(user.available)

  const handleAvailability = () => {
    setAvailable(!available)
  }

  useEffect(() => {
    setUser(usersData.find((user) => user.username == id))
    setReviews(reviewsData.filter((review) => review.receiver == id))
    setAvailable(user.available)
  }, [user])

  console.log(user)
  console.log(reviews)
  console.log(available)
  return (
    <>
      <Section className='bg-light d-flex align-items-center' align='center'>
        <PageTitle title='Profile' />

        <div className='col-lg-3'>
          <img
            src={`/photos/profile/${user.profile_photo}`}
            className='img-fluid rounded pb-3'
          />
          <div className='pl-5'>
            <h3>{user.name}</h3>
            <Rating rating={user.rating} rating_count={user.rating_count} />
          </div>
          {user.type == 1 && (
            <Switch
              label='Show Available Now'
              className='lg'
              isChecked={available}
              event={handleAvailability}
            />
          )}
        </div>
        <div className='col-lg-9'>
          <BlockObjectRow rows={user} />
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
