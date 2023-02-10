import React from 'react'
import { useNavigate} from 'react-router-dom'

function SplashCard({review}) {
    const navigate = useNavigate();
    function goToReview(){
    navigate(`/reviews/${review.review_id}`)
}

  return (
    <div className='splash-card' onClick={goToReview}>
        <img className='splash-card-img ' src={review.review_img_url} alt="" />
        <div className='splash-card-info'>
            <h2>{review.title}</h2>
            <h3>Votes - {review.votes}</h3>
        </div>
    </div>
  )
}

export default SplashCard