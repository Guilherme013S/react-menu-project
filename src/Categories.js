import React from 'react'

const Categories = ({ categories, filterItems }) => {
  return (
    <section className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            className='filter-btn'
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </section>
  )
}
export default Categories
