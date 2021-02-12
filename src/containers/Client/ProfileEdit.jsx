import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Section from '../../components/Section'
import PageTitle from '../../components/PageTitle'
import RowProfileEdit from '../../components/RowProfileEdit'
import Button from '../../components/Button'
import DatePicker from 'react-datepicker'
import { usersData } from '../../data'

const ProfileEdit = () => {
  const { id } = useParams()
  const [user, setUser] = useState({})
  const [dob, setDob] = useState()

  const username = useRef(null)
  const password = useRef(null)
  const fullname = useRef(null)
  const phone = useRef(null)
  const email = useRef(null)
  const city = useRef(null)
  const country = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedUser = {
      username: username.current.value,
      password: password.current.value,
      fullname: fullname.current.value,
      phone: phone.current.value,
      email: email.current.value,
      city: city.current.value,
      country: country.current.value,
    }
    const updatedData = { dob, ...updatedUser }
    console.log(updatedData)
  }

  useEffect(() => {
    setUser(usersData.find((user) => user.username == id))
    user.date_of_birth && setDob(new Date(user.date_of_birth))
  }, [user])

  return (
    <>
      <Section className='bg-light d-flex align-items-center' align='center'>
        <PageTitle title='Edit Profile' />

        <div className='col-lg-9'>
          <div className='block radius10 p-3'>
            <table className='table table-borderless'>
              <tbody>
                <RowProfileEdit
                  label='username'
                  value={user.username}
                  ref={username}
                  disabled={true}
                />
                <RowProfileEdit
                  label='phone'
                  value={user.phone}
                  ref={phone}
                  disabled={true}
                />
                <RowProfileEdit label='name' value={user.name} ref={fullname} />
              </tbody>
            </table>
            <Button
              className='btn float-end mt-30 border-gray action-2'
              link='# '
              text='Update'
              type='button'
              event={handleSubmit}
            />
          </div>
        </div>
      </Section>
    </>
  )
}

export default ProfileEdit
