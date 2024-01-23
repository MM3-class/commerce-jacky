import React from 'react'

const Button = ({children, className, onClick}) => {
  return (
    <button className={`${className} max-md:px-4 max-md:py-2 max-md:text-xs max-md:rounded-md`} onClick={onClick}>{children}</button>
  )
}

export default Button