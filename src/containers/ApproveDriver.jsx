import React, { useState, useEffect } from 'react'
import Section from '../components/Section'
import RowApproveDriver from '../components/RowApproveDriver'
import { users as usersData } from '../data'

const ApproveDriver = () => {
  const [users, setUsers] = useState(usersData)

  useEffect(() => {}, [])

  return (
    <>
      <Section className='bg-light vehicle-add' align='center'>
        <div className='top-row pb-20 d-flex'>
          <h2>Approve Driver</h2>
        </div>

        <div className='table-responsive'>
          <table className='table'>
            <thead>
              <tr className='text-center'>
                <th>Username</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return <RowApproveDriver key={user.id} {...user} />
              })}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  )
}

export default ApproveDriver
