import { useState } from 'react'
import { ChevronRight } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'

const SideBarItems = ({ sideBar }) => {
  const { title, children, path, icon } = sideBar || {}
  const [isOpen, setIsOpen] = useState(false);
  
  if (sideBar.children) {
    return (
      <ul className='w-full'>
        <li className='cursor-pointer text-lg p-2 my-2 rounded-md' onClick={() => setIsOpen((prev) => !prev)}>
          <div className='flex justify-between items-center w-full opacity-100 hover:opacity-50 hover:duration-200'>
            <span className=' font-semibold'>{title}</span> <span className={`${isOpen && "rotate-90 duration-200"}`}><ChevronRight /></span>
          </div>
          <ul className={`space-y-2 ${!isOpen && "hidden"}`}>
            {children?.map(category => (
              <Link key={uuid()} to={`category${category.path}`} className='cursor-pointer pl-2 text-lg hover:opacity-50'>
                <li className='pl-2'>{category.title}</li>
              </Link>
            ))}
          </ul>
        </li>
      </ul>
    )
  } else {
    return (
      <ul className='w-full'>
        <Link className='flex items-center gap-2' to={`category${path}`}>
          <span className='text-2xl text-secondary'>{icon}</span>
          <li className='cursor-pointer text-lg py-3 opacity-100 hover:opacity-50 hover:duration-500 p-2 my-2 rounded-md'>{title}</li>
        </Link>
      </ul>
    )
  }
}

export default SideBarItems