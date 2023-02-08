import React ,{useState, useContext} from 'react'
import { postComment } from '../utils/api'
import { UserContext } from '../contexts/UserProvider';
import { Link } from 'react-router-dom';

function AddComment({setComments, review_id}) {
  const { loggedInUser } = useContext(UserContext);
  const [comment, setComment] = useState('')
  const [error, setError] = useState('')
  const [postInProgress, setPostInProgress] = useState(false)

  function handleAddComment(e){
    e.preventDefault()
    setError("")
    if(comment === ""){
      setError("No Comment body!")
      return
    }
    setPostInProgress(true)
    setComments((currentComments) => {
      return [{body:comment, author:loggedInUser.username} ,...currentComments]
    })
    postComment(review_id, loggedInUser.username, comment)
    .then((res) => {
      // wait for successful post before reseting 
      //state to allow catch block to filter with comment state
      if(Object.keys(res).length > 0){
        setComment('') 
        setPostInProgress(false)
        setError('Comment posted')
      }
    })
    .catch((err) => {
      setError("Somthing went wrong!")
      setPostInProgress(false)
      setComments((currentComments) => {
          return currentComments.filter((listComment) => listComment.body !== comment)
      })
    })
  }
  if(Object.keys(loggedInUser).length === 0){
    return <div>
            <p className='login-prompt'>Please Login to post comments.</p>
            <Link to="/login" className='nav-link'>Login</Link>
          </div>
}
  return (
    <div id='add-comment-box'>
      <p className='add-comment-error'>{error}</p>
        <form className='add-comment-form' onSubmit={(e) => {handleAddComment(e)}}>
            <button className='add-comment-button' disabled={postInProgress}>Post</button>
            <textarea className='add-comment-input' value={comment} onChange={(e)=>{setComment(e.target.value)}}></textarea>
        </form>
    </div>
  )
}

export default AddComment