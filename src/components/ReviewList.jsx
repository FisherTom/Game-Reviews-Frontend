import React from 'react'
import ReviewCard from './ReviewCard'

function ReviewList({reviews, setReviews}) {
  return (
    <ul id='review-list'>
        {reviews.map((review) =>{
            return <ReviewCard key={review.review_id} review={review}/>
        })}
    </ul>
  )
}

export default ReviewList