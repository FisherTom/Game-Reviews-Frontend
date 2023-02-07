import React, { useEffect, useState } from 'react'
import { getUserbyUsername } from '../utils/api'

function CommentsBoxCard({comment}) {

    const [authorImg, setAuthorImg] = useState('')

   useEffect(() => {
    getUserbyUsername(comment.author).then((user) => {
        setAuthorImg(user.avatar_url)
    })
   }, [comment.author])

  return (
    <li className='comment-card'>
        <img className='comment-card-img' src={authorImg} alt="" />
        <p className='comment-card-body'>{comment.body}</p>
    </li>
  )
}

export default CommentsBoxCard