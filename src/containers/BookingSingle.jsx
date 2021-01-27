import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Section from '../components/Section'
import Button from '../components/Button'
import Switch from '../components/Switch'
import BlockRow from '../components/BlockRow'
import UserCard from '../components/UserCard'
import Review from '../components/Review'
import { users, reviewsData } from '../data'

const BookingSingle = () => {
  const { id } = useParams()

  const [status, setStatus] = useState(0)
  const [user, setUser] = useState(0)
  const [showReviews, setShowReviews] = useState(false)

  const handleShowReviews = () => {
    setShowReviews(!showReviews)
  }
  const handleStatus = (id) => {
    setStatus(id)
  }

  const rowsBooking = [
    { label: 'Vehicle Name', value: 'Rocket Ambulance' },
    { label: 'Booking Date', value: '12-01-2021' },
    { label: 'Booking Time', value: '5:30 PM' },
    { label: 'Pickup', value: 'Uttara' },
    { label: 'Destination', value: 'Kuril' },
    { label: 'Fare/KM', value: '$8' },
    { label: 'Distance', value: '9.9KM' },
  ]
  const rowsPayment = [
    { label: 'Payment ID', value: '1324654' },
    { label: 'Payment Status', value: 'Paid' },
    { label: 'Payment Date', value: '12-01-2021' },
    { label: 'Payment Time', value: '5:30 PM' },
    { label: 'Payment Method', value: 'Cash' },
  ]
  return (
    <>
      <Section className='bg-light vehicle-add' align='center'>
        <div className='col-lg-12'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <h2>Booking #{id}</h2>
              <h3 className='pt-2'>
                Status:{' '}
                {status == 0
                  ? 'Accepted'
                  : status == 1
                  ? 'Arrived'
                  : status == 2
                  ? 'Started'
                  : 'Completed'}
              </h3>

              <div className='row pb-4'>
                <div className='col-lg-12 d-flex pt-15'>
                  {/* if user == driver */}
                  {user == 0 && (
                    <>
                      <Button
                        className={`sm primary`}
                        link='# '
                        text='Mark as Arrived'
                        event={handleStatus}
                        id='1'
                      />
                      <Button
                        className={`sm action-1 ${status >= 2 && 'disabled'}`}
                        link='# '
                        text='Mark as Started'
                        event={handleStatus}
                        id='2'
                      />
                      <Button
                        className={`sm action-2 ${status >= 3 && 'disabled'}`}
                        link='# '
                        text='Mark as Completed'
                        event={handleStatus}
                        id='3'
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className='col-lg-5'>
              <UserCard {...users[0]} />
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <Switch
                label='Show User Reviews'
                className='lg mb-4'
                event={handleShowReviews}
              />
              {showReviews && (
                <>
                  {reviewsData.map((review) => {
                    return <Review key={review.id} {...review} />
                  })}
                </>
              )}
              {!showReviews && (
                <>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <BlockRow heading='Booking Details' rows={rowsBooking} />
                    </div>
                    <div className='col-lg-6'>
                      <BlockRow heading='Payment Details:' rows={rowsPayment} />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default BookingSingle
