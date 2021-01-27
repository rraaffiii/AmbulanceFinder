import React, { useState } from 'react'
import Button from './Button'

const RowApproveDriver = ({ id, username, name, statusData, docs }) => {
  const [status, setStatus] = useState(null)
  const [doc, setDoc] = useState(null)
  const handleApprove = () => {
    setStatus(true)
  }
  const handleReject = () => {
    setStatus(false)
  }
  const handleDetails = () => {
    setDoc(!doc)
  }
  return (
    <>
      <tr className='text-center'>
        <td>{username}</td>
        <td>{name}</td>
        <td>
          {(status && 'Approved') || (!status && 'Rejected') || 'Not Reviewed'}
        </td>
        <td>
          <>
            <Button className='sm' event={handleDetails} text='Docs' />
            <Button
              className={`sm action-1 ${status !== null && 'disabled'}`}
              color='action-1'
              link='# '
              text={(status && 'Approved') || 'Approve'}
              event={handleApprove}
            />
            <Button
              className={`sm action-2 ${status !== null && 'disabled'}`}
              link='# '
              text='Reject'
              event={handleReject}
              id={id}
            />
          </>
        </td>
      </tr>
      {doc && (
        <tr>
          <td colSpan={4} className='text-center'>
            Photo Photo Photo
          </td>
        </tr>
      )}
    </>
  )
}

export default RowApproveDriver
