import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { icon, title, path } = category || {}
  
  return (
    <Link to={`category${path}`} className="border cursor-pointer flex flex-col justify-center items-center gap-4 mx-6 lg:mx-3 lg:p-2 p-4 truncate hover:bg-bg-btn transition duration-300 w-[100px] h-[100px] lg:w-[170px] lg:h-[170px]">
      <span className="text-4xl">{icon}</span>
      <p className=" text-xl hidden lg:block">{title}</p>
    </Link>
  )
}

export default Category