import React, { useState } from 'react'
import Section from '../components/Section'
import RowBookingRequest from '../components/RowBookingRequest'
import { bookingRequests as requestsData } from '../data'

const BookingRequest = () => {
  const [bookingRequests, setBookingRequests] = useState(requestsData)

  const reject = (id) => {
    setBookingRequests(bookingRequests.filter((request) => request.id != id))
  }

  return (
    <>
      <Section className='bg-light vehicle-add' align='center'>
        <div className='top-row pb-20 d-flex'>
          <h2>Booking Requests</h2>
        </div>

        <div className='table-responsive'>
          <table className='table'>
            <thead>
              <tr className='text-center'>
                <th>Username</th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookingRequests.map((request) => {
                return (
                  <RowBookingRequest
                    key={request.id}
                    reject={reject}
                    {...request}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  )
}

export default BookingRequest
