import React, { useEffect} from 'react'
import { getReviewComments } from '../utils/api'
import CommentsBoxCard from './CommentsBoxCard'
import "../styles/Comments.css"

function CommentsBox({review, comments, setComments}) {
    
    
  useEffect(()=>{
    getReviewComments(review.review_id).then((comments) => { 
    return setComments(comments)})
  },[review.review_id, setComments])
    
  return (
    <section id='comments-box'>
        <h3>Comments:</h3>
        <ol className='comments-box-list'>
            {comments.length>0 ?  comments.map((comment) => {
                return <CommentsBoxCard key={comment.comment_id} comment={comment}/>
            }):<li className='comment-card'><p className='comment-card-body'>no comments yet</p></li> }
        </ol>
    </section>
  )
}

export default CommentsBox