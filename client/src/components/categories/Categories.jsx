
import Category from "./CategoryBar";
import categories from "../../data/categories";
import uuid from "react-uuid";

const Categories = () => {
  return (
    <div className='border-b-2'>
      <div className='flex justify-between gap-6 md:gap-10 overflow-x-auto no-scrollbar'>
        {categories.map((category) => (
          <Category key={uuid()} category={category} />
        ))}
      </div>
    </div>
  )
}

export default Categories