import React from 'react'

function ReviewCard({review}) {
console.log(review);
  return (
    <li className='review-card'>
      <img className='review-card-img' src={review.review_img_url} alt={"picture for review "+ review.title }></img>
      <section className='review-info'>
        <h3 className='review-card-title'>{review.title}</h3>
        <h4 className='review-card-category'>Category: {review.category}</h4>
        <p className='review-card-body'>{review.review_body}</p>
        <h4 className='review-card-votes'>Votes: {review.votes}</h4>
      </section>
    </li>
  )
}

export default ReviewCard