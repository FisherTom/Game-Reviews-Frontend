import React, { useState,useContext } from 'react'
import { UserContext } from '../contexts/UserProvider'
import { getAllUsers } from '../utils/api'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const { setLoggedInUser } = useContext(UserContext);

    function loginHandler(e) {
        e.preventDefault()
        getAllUsers().then((users) => {

            const userMatch = users.filter((user) => user.username === username)
            if(userMatch.length !== 0) {
              setLoggedInUser(userMatch[0]);
              setErrorMsg('');
              setUsername('')
              setPassword('')
            }
            else {
              setErrorMsg(<p className='login-error'>Invalid Username</p>)
            }
        })
    }

  return (
    <section id='login'>
        <form className='login-form' onSubmit={loginHandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' value={username} onChange={(e) => setUsername(e.target.value)} ></input>
            <label htmlFor='password'>Password</label>
            <input id='password'value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button className='login-button'>Login</button>
            {errorMsg !== undefined ? errorMsg : null}
        </form>
    </section>
  )
}

export default Login