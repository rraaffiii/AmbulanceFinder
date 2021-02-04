import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Section from '../../components/Section'
import Button from '../../components/Button'
import Switch from '../../components/Switch'
import Block from '../../components/Block'
import UserCard from '../../components/UserCard'
import Review from '../../components/Review'
import Modal from '../../components/Modal'
import RatingStar from '../../components/RatingStar'
import { usersData, reviewsData } from '../../data'

const BookingSingle = () => {
  const { id } = useParams()

  const [user, setUser] = useState([])
  // status section
  const [status, setStatus] = useState(0)
  const handleStatus = (id) => {
    setStatus(id)
  }
  // show reviews section
  const [showReviews, setShowReviews] = useState(false)
  const handleShowReviews = () => {
    setShowReviews(!showReviews)
  }
  // modal section
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  // modal body data
  const [rating, setRating] = useState(4)
  const review_details = useRef(null)
  const submitModal = () => {
    const reviewData = {
      rating: rating + 1,
      review_details: review_details.current.value,
    }
    console.log(reviewData)
    setStatus(4)
    closeModal()
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

  useEffect(() => {
    setUser(usersData[2])
  }, [])

  return (
    <>
      <Section className='bg-light' align='center'>
        <div className='col-lg-12'>
          {showModal && (
            <>
              <Modal
                title='Submit Review'
                closeEvent={closeModal}
                submitEvent={submitModal}
              >
                {/* modal body */}
                <form>
                  <div className='mb-3'>
                    <label htmlFor='recipient-name' className='col-form-label'>
                      Rating:
                    </label>
                    <span className='rating'>
                      <RatingStar
                        stars={5}
                        rating={rating}
                        setRating={setRating}
                      />
                    </span>
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='message-text' className='col-form-label'>
                      Details:
                    </label>
                    <textarea
                      ref={review_details}
                      className='input w-full radius10 border-gray focus-action-1 color-heading placeholder-main text-left'
                    ></textarea>
                  </div>
                </form>
              </Modal>
            </>
          )}
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <h2>Booking #{id}</h2>
              <h5 className='pt-2'>
                Status:{' '}
                {status == 0
                  ? 'Accepted'
                  : status == 1
                  ? 'Arrived'
                  : status == 2
                  ? 'Started'
                  : status == 3
                  ? 'Completed'
                  : 'Feedback Submitted'}
              </h5>

              <div className='row pb-2'>
                <div className='col-lg-12 d-flex pt-15'>
                  {/* if user == driver */}
                  {user.type == 1 && (
                    <>
                      <Button
                        className={`sm mr-5 primary ${
                          status >= 1 && 'disabled'
                        }`}
                        link='# '
                        text='Mark as Arrived'
                        event={handleStatus}
                        id='1'
                      />
                      <Button
                        className={`sm mr-5 action-1 ${
                          status >= 2 && 'disabled'
                        }`}
                        link='# '
                        text='Mark as Started'
                        event={handleStatus}
                        id='2'
                      />
                      <Button
                        className={`sm mr-5 action-2 ${
                          status >= 3 && 'disabled'
                        }`}
                        link='# '
                        text='Mark as Completed'
                        event={handleStatus}
                        id='3'
                      />
                    </>
                  )}
                </div>
              </div>

              {/* review modal */}
              <div className='row pb-2'>
                <div className='col-lg-12 d-flex'>
                  {/* if status complete */}
                  {status >= 3 && (
                    <>
                      <Button
                        className={`sm action-2 ${status >= 4 && 'disabled'}`}
                        link='# '
                        text='Submit Review'
                        event={openModal}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className='col-lg-5'>
              <UserCard {...user} />
            </div>
          </div>
        </div>
      </Section>
      <Section className='bg-offwhite' align='center'>
        <div className='col-lg-12'>
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
                      <Block heading='Booking Details' rows={rowsBooking} />
                    </div>
                    <div className='col-lg-6'>
                      <Block heading='Payment Details:' rows={rowsPayment} />
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
