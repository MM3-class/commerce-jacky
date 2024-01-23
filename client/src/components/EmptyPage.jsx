import React from 'react'

const EmptyPage = ({children, className}) => {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default EmptyPage