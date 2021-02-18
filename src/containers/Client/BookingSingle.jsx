import React, { useState, useEffect, useRef, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { useParams } from 'react-router-dom'
import Section from '../../components/Section'
import Button from '../../components/Button'
import Block from '../../components/Block'
import UserCard from '../../components/UserCard'
import BookingStatus from '../../components/BookingStatus'
import Review from '../../components/Review'
import Modal from '../../components/Modal'
import RatingStar from '../../components/RatingStar'
import BookingApi from '../../api/booking'
import ReviewgApi from '../../api/review'

const BookingSingle = () => {
  const { id } = useParams()
  const global = useContext(GlobalContext)

  const [booking, setBooking] = useState()
  const [reviews, setReviews] = useState([])

  // status section
  const [status, setStatus] = useState()
  const handleStatus = (newStatus) => {
    BookingApi.updateStatus(id, newStatus)
      .then((res) => {
        setStatus(newStatus)
      })
      .catch((err) => {
        global.setAlert(err.response.data.message)
      })
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
      receiver: booking.driver._id,
      rating: rating + 1,
      details: review_details.current.value,
    }
    // sumbit review
    ReviewgApi.createReview(reviewData)
      .then((res) => {
        global.setAlert(res.data.message)
        // set status
        const newStatus = 7
        BookingApi.updateStatus(id, newStatus)
          .then(() => {
            setStatus(newStatus)
          })
          .catch((err) => {
            global.setAlert(err.response.data.message)
          })
      })
      .catch((err) => {
        global.setAlert(err.response.data.message)
      })
    closeModal()
  }

  useEffect(() => {
    BookingApi.findBookingVehicleByBookingId(id)
      .then((res) => {
        setBooking(res.data)
        setStatus(res.data.status)

        ReviewgApi.getReviewsByReceiver(res.data.driver._id)
          .then((res) => {
            setReviews(res.data)
          })
          .catch((err) => {
            global.setAlert(err.response.data.message)
          })
      })
      .catch((err) => {
        global.setAlert({ type: 'danger', message: err.response.data.message })
      })
  }, [])

  let rowsBooking
  if (booking) {
    rowsBooking = [
      { label: 'Vehicle Name', value: booking.driver.vehicles[0].name },
      {
        label: 'Booking Time',
        value: booking.createdAt.slice(0, 19).replace('T', ' | '),
      },
      { label: 'Pickup', value: booking.pickup },
      { label: 'Destination', value: booking.destination },
      { label: 'Fare/KM', value: `$ ${booking.driver.vehicles[0].cost}` },
    ]
  }

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
                Status: <BookingStatus status={status} />
              </h5>

              {/* if status complete */}
              {status >= 5 && (
                <>
                  <div className='row py-4'>
                    <div className='col-lg-12 d-flex'>
                      <Button
                        className={`sm action-2 ${status >= 7 && 'disabled'}`}
                        link='# '
                        text='Submit Review'
                        event={openModal}
                      />
                    </div>
                  </div>
                </>
              )}

              {booking && <UserCard title='Driver' {...booking.driver} />}
            </div>
            <div className='col-lg-5'>
              {rowsBooking && (
                <Block heading='Booking Details' rows={rowsBooking} />
              )}
            </div>
          </div>
        </div>
      </Section>
      <Section className='bg-offwhite' align='center'>
        <div className='col-lg-12'>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <h4 className='pb-3'>Driver Reviews:</h4>
              {(reviews.length > 0 &&
                reviews.map((review) => {
                  return <Review key={review.id} {...review} />
                })) || <h5 className='pt-2 text-center'>No Reviews Found</h5>}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default BookingSingle
