import React ,{useState, useEffect}from 'react'
import { Link } from 'react-router-dom'
import { getUserbyUsername } from '../utils/api'
function ReviewCard({review}) {

  const [ownerImg, setOwnerImg] = useState('')

  useEffect(() => {
   getUserbyUsername(review.owner).then((user) => {
       setOwnerImg(user.avatar_url)
   })
  }, [review.owner])
  
    return (
      <li className='review-card'>
        <div className='review-card-img-box'>
          <img className='review-card-img' src={review.review_img_url} alt={"picture for review "+ review.title }></img>
          <img className='review-owner-img' src={ownerImg} alt="" />
        </div>
      <section className='review-info'>
        <h3 className='review-info-title'>{review.title}</h3>
        <Link className='review-link' to={`/reviews/${review.review_id}`}>Full Review</Link>
      </section>
    </li>
  )

}

export default ReviewCard