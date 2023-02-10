import React from 'react'
import { Link } from 'react-router-dom'
import UserWidget from './UserWidget'
import { useContext } from 'react';
import { UserContext } from '../contexts/UserProvider'

function Nav() {
  const { loggedInUser } = useContext(UserContext);

  return (
    <nav id='nav-bar'>
      <Link to="/" className='nav-link'>Home</Link>
      <Link to="/reviews"className='nav-link'>Reviews</Link>
      {loggedInUser.username ? <></>:
      <Link to="/login" className='nav-link'>Login</Link>
      }
      <UserWidget/>
    </nav>
  )
}

export default Nav