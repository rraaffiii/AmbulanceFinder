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

        <div className='col-lg-3'>
          <img
            src={`/photos/profile/${user.profile_photo}`}
            className='img-fluid rounded'
          />
          <Button
            className='btn mt-15 border-gray action-1'
            link='# '
            text='Change Photo'
            type='submit'
          />
        </div>
        <div className='col-lg-9'>
          <div className='block radius10 p-3'>
            <table className='table table-borderless'>
              <tbody>
                <RowProfileEdit
                  label='username'
                  value={user.username}
                  ref={username}
                />
                <RowProfileEdit
                  label='password'
                  value={user.password}
                  ref={password}
                />
                <RowProfileEdit label='name' value={user.name} ref={fullname} />
                <RowProfileEdit label='phone' value={user.phone} ref={phone} />
                <RowProfileEdit label='email' value={user.email} ref={email} />
                <tr className='item'>
                  <td>
                    <b>Date of Birth: </b>
                  </td>
                  <td>
                    <DatePicker
                      className='input flex-fill border-gray focus-action-1 color-heading placeholder-main text-center text-md-left sm'
                      selected={dob}
                      placeholderText='Date of Birth'
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode='select'
                      onChange={(date) => setDob(date)}
                    />
                  </td>
                </tr>

                <RowProfileEdit label='city' value={user.city} ref={city} />
                <RowProfileEdit
                  label='country'
                  value={user.country}
                  ref={country}
                />
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
