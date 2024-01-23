import React from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'

const Loader = ({children, className}) => {
  return (
    <div>
      <SkeletonTheme className={className} baseColor="#555" highlightColor="#999">
        {children}
      </SkeletonTheme>
    </div>
  )
}

export default Loader