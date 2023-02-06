import React, { useEffect, useState } from 'react'

import {useParams}  from 'react-router-dom'
import { getReviewById } from '../utils/api'

function Review() {

    const {review_id} = useParams()
    const [review, setReview] = useState({})

    useEffect(()=>{
        getReviewById(review_id).then((res) => {
            console.log(res);
            setReview(res)
        })
    },[])

  if(review.title){
    return (
      <section className='full-review'>
          <h2 className='full-review-title'>{review.title}</h2>
          <h3>Category: {review.category}</h3>
          <h3>Game designer: {review.designer}</h3>
          <img className='full-review-picture' src={review.review_img_url} alt="" />
          <p className='full-review-body'>{review.review_body}</p>
          <p>Author: {review.owner}</p>
          <h3>Votes: {review.votes}</h3>
      </section>
    )
  }else{
    return <p>Loading...</p>
  }
}

export default Review