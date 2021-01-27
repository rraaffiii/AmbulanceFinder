import React from 'react'

const BlockRow = ({ heading, rows }) => {
  return (
    <>
      <div className='block radius10 p-3'>
        <h5 className='pb-3'>{heading}</h5>
        {rows.map((row) => {
          return (
            <>
              <div className='item'>
                {row.label}: <b>{row.value}</b>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default BlockRow
