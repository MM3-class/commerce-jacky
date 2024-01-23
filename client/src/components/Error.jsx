import React from 'react'

const Error = ({children}) => {
  return (
    <>
        <h1 className='text-red-400 text-4xl'>{children}</h1>
    </>
  )
}

export default Error