import React from 'react'
import { ArrowUpShort } from 'react-bootstrap-icons'

const ArrowToUp = () => {
    function goToUp () {
        window.scrollTo({top: 0})
    }
    return (
        <div onClick={goToUp} className='cursor-pointer float-right absolute right-0 bottom-5 m-auto p-1 rounded-full bg-gray-200'>
            {<ArrowUpShort size={20} />}
        </div>
    )
}

export default ArrowToUp