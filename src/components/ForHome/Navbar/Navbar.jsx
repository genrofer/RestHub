import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../../../assets/images/logo.png'

const Navbar = () => {
  return (
    <div className='d-flex'>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="sign-in">
        <NavLink to="/signup">Sign up</NavLink>
      </div>
    </div>
  )
}

export default Navbar