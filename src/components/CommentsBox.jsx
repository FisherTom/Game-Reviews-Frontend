import React, { useEffect, useState } from 'react'
import { getReviewComments } from '../utils/api'
import CommentsBoxCard from './CommentsBoxCard'

function CommentsBox({review}) {
    const [comments, setComments] = useState([])
    
  useEffect(()=>{
    getReviewComments(review.review_id).then((comments) => { 
    return setComments(comments)})
  },[review.review_id])
    
  return (
    <section id='comments-box'>
        <h3>Comments:</h3>
        <ol className='comments-box-list'>
            {comments.map((comment) => {
                return <CommentsBoxCard key={comment.comment_id} comment={comment}/>
            })}
        </ol>
    </section>
  )
}

export default CommentsBox