import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./MovieNav.scss"

import Logo from '../../../assets/images/logo.png'

const MovieNav = () => {
     const navigate = useNavigate()

     const username1 = localStorage.getItem("username")

     const username = username1?.split("@")[0]

     const searchInput = () => {
          document.querySelector('.search-input').classList.add('block')
          document.querySelector('.search-input').focus()
          document.querySelector('.search-icon').classList.add('none')
     }

     return (
          <>

               <div className="d-flex nav-top">
                    <div onClick={() => navigate("/movies")} className="logo">
                         <img src={Logo} alt="logo" width={270} />
                    </div>
                    
                    <ul className='nav-ul'>

                         <li className='nav-li'>
                              <a href="/movies" className='nav-link'>Home</a>
                         </li>
                         <li className='nav-li'>
                              <a href="/movies#popular" className='nav-link'>Popular</a>
                         </li>
                         <li className='nav-li'>
                              <a href="/movies#comedy" className='nav-link'>Comedy</a>
                         </li>
                         <li className='nav-li'>
                              <a href="/movies#horror" className='nav-link'>Horror</a>
                         </li>
                         <li className='nav-li'>
                              <a href="/movies#romance" className='nav-link'>Romance</a>
                         </li>
                    </ul>

                    <div className="sign-in d-flex p-4">
                         <div onClick={() => navigate("/search")} className="search me-4">
                              <i className="fas fa-search search-icon" onClick={searchInput} aria-hidden="true"></i>
                         </div>
                         {
                              username ? <div className="search-btn user"> <i className="fa fa-user me-2" aria-hidden="true"></i>
                                   {username}</div> : <NavLink className="search-btn" to="/signup">Sign up</NavLink>
                         }

                    </div>

               </div>
          </>
     )
}

export default MovieNav