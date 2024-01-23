import React from 'react'

const CategoryCard = ({product}) => {
    const { thumbnail, title, price, rating, discountPercentage } = product;
  return (
    <div>
      <h1>{thumbnail}</h1>
      <h1>{title}</h1>
      <h1>{price}</h1>
      <h1>{rating}</h1>
      <h1>{discountPercentage}</h1>
    </div>
  )
}

export default CategoryCard