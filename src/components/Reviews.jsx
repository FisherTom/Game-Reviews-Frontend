import React, { useEffect, useState } from 'react'
import { getAllReviews } from '../utils/api'
import ReviewList from './ReviewList'
import { getAllCategories } from '../utils/api'
import { useNavigate, useParams } from 'react-router-dom'

function Reviews() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([])
  const [categories, setCategories] = useState([])
  const { category_name } = useParams();

  useEffect(() => {
    getAllReviews(category_name).then((reviews) => setReviews(reviews))
    getAllCategories().then((categories) => setCategories(categories))
  }, [category_name])

  function handleSelectCategory(e){
    navigate(`/reviews/categories/${e.target.value}`);
  }

  if(reviews.length > 0){
  return (
      <section>
        <form id='select-category-form'>
          <label id='category-select-label' htmlFor='category-select'>Select category  </label>
          <select id='category-select'  onChange={(e)=>{handleSelectCategory(e)}}>
            <option key='allCategories' value={null}>All</option>
              {categories.map((category) => {
                return <option key={category.slug} value={category.slug}>{category.slug}</option>
              })}
          </select>
        </form>
          <ReviewList reviews={reviews} setReviews={setReviews}/>
      </section>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default Reviews