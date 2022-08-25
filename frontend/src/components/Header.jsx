import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser, FaCheckCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>
                <FaCheckCircle /> GoalSetter
            </Link>
        </div>
        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser /> Register
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header