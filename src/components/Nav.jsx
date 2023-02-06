import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav id='nav-bar'>
      <Link to="/" className='nav-link'>Reviews-Home</Link>
    </nav>
  )
}

export default Nav