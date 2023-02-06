import React from 'react'
import { Link } from 'react-router-dom'

function ReviewCard({review}) {

  
    return (
      <li className='review-card'>
      <img className='review-card-img' src={review.review_img_url} alt={"picture for review "+ review.title }></img>
      <section className='review-info'>
        <h3 className='review-card-title'>{review.title}</h3>
        <h4 className='review-card-category'>Category: {review.category}</h4>
        <h4 className='review-card-votes'>Votes: {review.votes}</h4>
        <Link to={`/reviews/${review.review_id}`} className='review-link'>Full Review</Link>
      </section>
    </li>
  )

}

export default ReviewCard