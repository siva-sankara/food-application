import React from 'react'

const ProductsItems = ({ categories, handleCategoryChange }) => {
  return (
    <div>
      {categories.map((category) => (
        <button key={category} onClick={() => handleCategoryChange(category)}>
          {category}
        </button>
      ))}
    </div>
  )
}

export default ProductsItems
