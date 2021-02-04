import React, { useState, useEffect } from 'react'
import Section from '../../components/Section'
import RowBookingRecent from '../../components/RowBookingRecent'
import PageTitle from '../../components/PageTitle'
import { bookingsData } from '../../data'

const BookingRecent = () => {
  const [bookingRecents, setBookingRecents] = useState([])

  useEffect(() => {
    setBookingRecents(bookingsData)
  }, [])

  return (
    <>
      <Section className='bg-light' align='center'>
        <PageTitle title='Recent Bookings' />

        <div className='table-responsive'>
          <table className='table'>
            <thead>
              <tr className='text-center'>
                <th>Username</th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookingRecents.map((bookingRecent) => {
                return (
                  <RowBookingRecent key={bookingRecent.id} {...bookingRecent} />
                )
              })}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  )
}

export default BookingRecent
