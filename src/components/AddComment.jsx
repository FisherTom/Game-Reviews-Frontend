import React ,{useState, useContext} from 'react'
import { postComment } from '../utils/api'
import { UserContext } from '../contexts/UserProvider';


function AddComment({setComments, review_id}) {
  const { loggedInUser } = useContext(UserContext);
  const [comment, setComment] = useState('')
  const [error, setError] = useState('')

  function handleAddComment(e){
    e.preventDefault()
    setComments((currentComments) => {
      return [{body:comment, author:loggedInUser.username} ,...currentComments]
    })
    postComment(review_id, loggedInUser.username, comment)
    .then((res) => {
      if(Object.keys(res).length > 0){
        setComment('') // wait for successful post before reseting state to allow catch block to filter with comment state
      }
    })
    .catch((err) => {
      setError("Somthing went wrong!")
      setComments((currentComments) => {
          return currentComments.filter((listComment) => listComment.body !== comment)
      })
    })
  }
  if(Object.keys(loggedInUser).length === 0){
    return <p>Please Login to post comments.</p>
}
  return (
    <div id='add-comment-box'>
      <p className='add-comment-error'>{error}</p>
        <form className='add-comment-form' onSubmit={(e) => {handleAddComment(e)}}>
            <button className='add-comment-button' >Comment</button>
            <textarea className='add-comment-input' value={comment} onChange={(e)=>{setComment(e.target.value)}}></textarea>
        </form>
    </div>
  )
}

export default AddComment