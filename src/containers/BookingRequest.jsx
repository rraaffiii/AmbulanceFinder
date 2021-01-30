import React, { useState } from 'react'
import Section from '../components/Section'
import RowBookingRequest from '../components/RowBookingRequest'
import PageTitle from '../components/PageTitle'
import { bookingRequests as requestsData } from '../data'

const BookingRequest = () => {
  const [bookingRequests, setBookingRequests] = useState(requestsData)

  const reject = (id) => {
    setBookingRequests(bookingRequests.filter((request) => request.id != id))
  }

  return (
    <>
      <Section className='bg-light vehicle-add' align='center'>
        <PageTitle title='Booking Requests' />

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
