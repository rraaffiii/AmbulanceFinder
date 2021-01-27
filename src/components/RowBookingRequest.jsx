import React, { useState } from 'react'
import Button from './Button'

const RowBookingRequest = ({ id, username, name, date, time, reject }) => {
  let [accepted, setAccepted] = useState(false)
  const accept = () => {
    setAccepted(!accepted)
  }

  return (
    <tr className='text-center'>
      <td>{username}</td>
      <td>{name}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>
        {(!accepted && (
          <>
            <Button
              className='sm action-1'
              color='action-1'
              link='# '
              text='Accept'
              event={accept}
            />
            <Button
              className='sm action-2'
              link='# '
              text='Reject'
              event={reject}
              id={id}
            />
          </>
        )) || <Button className='sm' link={`/booking/${id}`} text='Details' />}
      </td>
    </tr>
  )
}

export default RowBookingRequest
