import React, { useEffect, useState } from 'react'
import { getAllReviews } from '../utils/api'
import ReviewList from './ReviewList'

function Reviews() {

const [reviews, setReviews] = useState([])

useEffect(() => {
  getAllReviews().then((reviews) => setReviews(reviews))
}, [])

if(reviews.length > 0){
return (
    <section>
        <ReviewList reviews={reviews} setReviews={setReviews}/>
    </section>
  )
} else {
  return <p>Loading...</p>
}
}

export default Reviews