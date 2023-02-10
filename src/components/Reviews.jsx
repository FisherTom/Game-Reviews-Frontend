import React, { useEffect, useState } from 'react'
import { getAllReviews } from '../utils/api'
import ReviewList from './ReviewList'
import NotFound from './NotFound'
import { getAllCategories } from '../utils/api'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import "../styles/ReviewList.css"

function Reviews() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([])
  const [categories, setCategories] = useState([])
  const { category_name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState('created_at')
  const [order,setOrder] = useState('DESC')
  const [error, setError] = useState('')

  useEffect(() => {
    getAllCategories().then((categories) => setCategories(categories))
    getAllReviews(category_name, searchParams)
    .then((reviews) => {
      setError('')
      setReviews(reviews)
    })
    .catch((err) => {
      setError(err)
    })
  }, [category_name, searchParams])

  function handleSelectCategory(e){
    setSort('created_at')
    if(e.target.value === ""){
      navigate(`/reviews`)
    }else{
      navigate(`/reviews/categories/${e.target.value}`);
    }
  }

  function handleSort(e){
    setSort(e.target.value)
    setSearchParams({sort_by: e.target.value, order})
  }

  function handleOrder(e){
    setOrder(e.target.value)
    setSearchParams({sort_by: sort, order: e.target.value})
  }

  if(error !== ''){
    return <NotFound/>
  }

  if(reviews.length > 0){
  return (
      <section>
        <form id='select-category-form'>
          <label id='category-select-label' htmlFor='category-select'>Select category</label>

          <select id='category-select' onChange={(e)=>{handleSelectCategory(e)}}>
            <option key='allCategories' value="" >All</option>
              {categories.map((category) => {
                return <option key={category.slug} value={category.slug}>{category.slug}</option>
              })}
          </select>

          <label id='sort-by-select-label' htmlFor='sort-by-select'>Select sort by  </label>

          <select id='sort-by-select' value={sort} onChange={handleSort}>
            <option value='created_at'>Date</option>
            <option value='votes'>Votes</option>
            <option value='comment_count'>Comment Count</option>
          </select>

          <select id='sort-by-select' value={order} onChange={handleOrder}>
            <option value='DESC'>Decending</option>
            <option value='ASC'>Ascending</option>
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