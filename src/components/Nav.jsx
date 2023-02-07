import React from 'react'
import { Link } from 'react-router-dom'
import UserWidget from './UserWidget'

function Nav() {
  return (
    <nav id='nav-bar'>
      <Link to="/" className='nav-link'>Reviews-Home</Link>
      <Link to="/login" className='nav-link'>Login</Link>
      <UserWidget/>
    </nav>
  )
}

export default Nav