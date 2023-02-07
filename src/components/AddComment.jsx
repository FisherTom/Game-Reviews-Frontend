import React from 'react'
import { postComment } from '../utils/api'

function AddComment() {

  //! PICK UP HERE, POSTCOMMENT() HAS BEEN ADDED TO AIP.JS BUT NOT TESTED

  return (
    <div id='add-comment-box'>
        <form className='add-comment-form'>
            <button className='add-comment-button'>Comment</button>
            <textarea className='add-comment-input'></textarea>
        </form>
    </div>
  )
}

export default AddComment