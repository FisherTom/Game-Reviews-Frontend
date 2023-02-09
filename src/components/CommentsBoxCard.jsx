import React, { useEffect, useState } from 'react'
import { getUserbyUsername } from '../utils/api'
import { useContext } from 'react';
import { UserContext } from '../contexts/UserProvider'
import { deleteComment } from '../utils/api';



function CommentsBoxCard({comment, setComments}) {
  
  const { loggedInUser} = useContext(UserContext);
  const [authorImg, setAuthorImg] = useState('')
  const [deleteErr, setDeleteErr] = useState(false)

   useEffect(() => {
    getUserbyUsername(comment.author).then((user) => {
        setAuthorImg(user.avatar_url)
    })
   }, [comment.author])

   function handleDeleteComment(e) {

    setDeleteErr(false)
    deleteComment(comment.comment_id)
    .then(() => {
      setComments((currentComments) => {
        return currentComments.filter((filterComment) => filterComment != comment )
      })
    })
    .catch(() => {
       setDeleteErr(true)
    })
   
   }

  return (
    <li className='comment-card'>
        <p className='delete-error-msg'>{deleteErr? `Network Error`:``}</p>
        <img className='comment-card-img' src={authorImg} alt="" />
        <p className='comment-card-body'>{comment.body}</p>
        {comment.author === loggedInUser.username ? 
        <button className='comment-delete-button' onClick={handleDeleteComment}>❌</button>
      :<></>}
    </li>
  )
}

export default CommentsBoxCard