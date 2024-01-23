import VerticalList from "../VerticalList";
import Category from "./CategoryBar";
import categories from "../../data/categories";

const Categories = () => {
  return (
    <div className='border-b-2 pb-14'>
      <div>
        <VerticalList resourceName="category" items={categories} itemComponent={Category} />
      </div>
    </div>
  )
}

export default Categories
