import React from 'react'
import Section from '../components/Section'
import BlockRow from '../components/BlockRow'

const Stats = () => {
  const stats = [
    { label: 'Total User', value: '120' },
    { label: 'Total Booking', value: '320' },
    { label: 'Total Transactions', value: '315' },
    { label: 'Total Vehicle', value: '350' },
    { label: 'New User', value: '20' },
    { label: 'New Vehicle', value: '12' },
    { label: 'Canceled Bookings', value: '20' },
  ]
  return (
    <>
      <Section className='bg-light d-flex align-items-center' align='center'>
        <div className='top-row pb-20 d-flex'>
          <h2 className='me-auto'>Stats</h2>
        </div>

        <div className='col-lg-6'>
          <BlockRow heading='User Stats' rows={stats} />
        </div>
        <div className='col-lg-6'>
          <BlockRow heading='Booking Stats:' rows={stats} />
        </div>
      </Section>
    </>
  )
}

export default Stats
