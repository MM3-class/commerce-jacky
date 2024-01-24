import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { icon, title, path } = category || {}

  return (
    <Link to={`category${path}`} className="border cursor-pointer flex flex-col justify-center items-center gap-4 mx-6 my-8 lg:min-w-fit py-4 px-8 truncate hover:bg-bg-btn transition duration-300">
      <span className="text-4xl">{icon}</span>
      <p className=" text-xl hidden lg:block">{title}</p>
    </Link>
  )
}

export default Category