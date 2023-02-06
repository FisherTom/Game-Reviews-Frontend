import React, { useEffect, useState } from 'react'
import { getAllReviews } from '../utils/api'
import ReviewList from './ReviewList'

function Reviews() {

const [reviews, setReviews] = useState([])

useEffect(() => {
  getAllReviews().then((reviews) => setReviews(reviews))
}, [])

return (
    <section>
        <ReviewList reviews={reviews} setReviews={setReviews}/>
    </section>
  )
}

export default Reviews