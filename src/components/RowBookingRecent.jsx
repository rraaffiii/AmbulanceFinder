import React, { useState } from 'react'
import Button from './Button'

const RowBookingRecent = ({ id, username, name, date, time, status }) => {
  return (
    <tr className='text-center'>
      <td>{username}</td>
      <td>{name}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>
        {status == 0
          ? 'Accepted'
          : status == 1
          ? 'Arrived'
          : status == 2
          ? 'Started'
          : 'Completed'}
      </td>
      <td>
        <Button className='sm' link={`/booking/${id}`} text='Details' />
        {status == 3 && (
          <Button
            className='sm action-2'
            link={`/invoice/${id}`}
            text='Invoice'
          />
        )}
      </td>
    </tr>
  )
}

export default RowBookingRecent
