import React, { useState } from 'react'
import Button from './Button'

const RowApproveDriver = ({ id, username, name, statusData, docs }) => {
  const [status, setStatus] = useState(0)
  const [doc, setDoc] = useState(null)
  const handleDetails = () => {
    setDoc(!doc)
  }
  const handleChange = (id) => {
    setStatus(id)
  }
  return (
    <>
      <tr className='text-center'>
        <td>{username}</td>
        <td>{name}</td>
        <td>
          {(status == 0 && 'Not Reviewed') ||
            (status == 1 && 'Approved') ||
            (status == 2 && 'Rejected')}
        </td>
        <td>
          <>
            <Button className='sm' event={handleDetails} text='Docs' />
            <Button
              className={`sm action-1 ${status !== 0 && 'disabled'}`}
              color='action-1'
              link='# '
              text={(status && 'Approved') || 'Approve'}
              event={handleChange}
              id={1}
            />
            <Button
              className={`sm action-2 ${status !== 0 && 'disabled'}`}
              link='# '
              text='Reject'
              event={handleChange}
              id={2}
            />
          </>
        </td>
      </tr>
      {doc && (
        <tr>
          <td colSpan={4} className='text-center'>
            Driving License
          </td>
        </tr>
      )}
    </>
  )
}

export default RowApproveDriver
