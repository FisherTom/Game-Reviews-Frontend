import React, { useEffect, useState } from 'react'
import { patchReviewVotes } from '../utils/api'

function VoteWidget({review, setReview}) {

    const [error, setError] = useState(null)
    const [reviewVotes, setReviewVotes] = useState()

    useEffect(() => {
        setReviewVotes(review.votes)
    },[review.votes]) 

    function handleReviewVote(e) {
        setReviewVotes((currentVote) => {
            return (+currentVote) + (+e.target.value)
        })

        patchReviewVotes(review.review_id, (+e.target.value))
        .catch((err) => {
            setError("Somthing went wrong!")
            setReviewVotes((currentVote) => {
                return (+currentVote) - (+e.target.value)
            })
        })
    }

  return (
    <section className='vote-widget'>
        <h3 className='vote-widget-count'>Votes: {reviewVotes}</h3>
        <div className='vote-widget-button-box'>
            <p>{error}</p>
            <button className='vote-widget-button' value={-1} onClick={(e)=>{handleReviewVote(e)}}>-</button>
            <button className='vote-widget-button' value={1} onClick={(e)=>{handleReviewVote(e)}}>+</button>
        </div>
    </section>
  )
}

export default VoteWidget