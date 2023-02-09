import React, { useEffect, useState } from 'react'
import CommentsBox from './CommentsBox'
import {useParams}  from 'react-router-dom'
import { getReviewById } from '../utils/api'
import VoteWidget from './VoteWidget'
import AddComment from './AddComment'
import "../styles/ReviewPage.css"

function Review() {

    const {review_id} = useParams()
    const [review, setReview] = useState({})
    const [comments, setComments] = useState([])

    useEffect(()=>{
        getReviewById(review_id).then((res) => {
            setReview(res)
        })
    },[review_id])

  if(review.title){
    return (
      <section id='full-review' className='fancy-border'>
          <h2 className='full-review-title'>{review.title}</h2>
          <h3>Category: {review.category} </h3>
          <h3>Game designer: {review.designer}</h3>
          <img className='full-review-picture' src={review.review_img_url} alt={"picture for review "+ review.title } />
          <p className='full-review-body'>{review.review_body}</p>
          <p>Author: {review.owner}</p>
          <VoteWidget review={review} setReview={setReview}/>
          <CommentsBox comments={comments} setComments={setComments} review={review}/>
          <AddComment review_id={review_id} setComments={setComments}/>
      </section>
    )
  }else{
    return <p>Loading...</p>
  }
}

export default Review