import React, { useRef, useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import actors from "../../../api/actors"
import Logo from '../../../assets/images/logo1.png'

import "./Actors.scss"

const Horror = () => {
     const popularRef = useRef()
     const navigate = useNavigate()

     const [movie, setMovie] = useState([])
     const [width, setWidth] = useState(0)
     const [input, setInput] = useState("")


     useEffect(() => {
          const fetchMovie = () => {
               const resData = actors
               setMovie(resData)
          }
          fetchMovie()
     }, [])

     useEffect(() => {
          if (window.innerWidth < 768) {
               setWidth(window.innerWidth * 2.3)
          } else if (window.innerWidth < 500) {
               setWidth(window.innerWidth * 0.5)
          } else {
               setWidth(window.innerWidth * 0.8)
          }
     }, [])

     const searchClicked = (e) => {
          localStorage.setItem("searchInput", "sfsf")
          navigate("/search")
     }

     return (
          <div id="popular ">
               <motion.div ref={popularRef} id="actor-pop" className='caro'>
                    <div className="actor-heading d-flex">
                         <div className='d-flex align-items-center'>
                              <div className="logo">
                                   <img src={Logo} alt="logo" /> <h2>Original</h2>
                              </div>
                              <ul className='nav-ul d-flex'>
                                   <li className='nav-li'>
                                        <NavLink to="/movies" className='nav-link'>All</NavLink>
                                   </li>
                                   <li className='nav-li'>
                                        <a href="#popular" className='nav-link'>Popular</a>
                                   </li>
                                   <li className='nav-li'>
                                        <a href="#series" className='nav-link'>Series</a>

                                   </li>
                                   <li className='nav-li'>
                                        <a href="#horror" className='nav-link'>Horror</a>

                                   </li>
                                   <li className='nav-li'>
                                        <a href="#romance" className='nav-link'>Romance</a>

                                   </li>
                              </ul>
                         </div>
                         <div className='actor-search d-flex align-items-center'>
                              <input type="text" placeholder='Search' onChange={(e) => setInput(e.target.value)} />
                              <i onClick={searchClicked} className='fas fa-search'></i>
                         </div>
                    </div>
                    <motion.div
                         className='caro-item'
                         drag="x"
                         dragConstraints={{ right: 0, left: -width }}
                    >
                         {
                              movie?.map((item, index) => {
                                   return (
                                        <div className="actor-item" to={`/movie/${item.id}`} key={index}>
                                             <div className="actor-img" style={{
                                                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 75%, rgba(1, 0, 0, 1) 100%), url("${`https://image.tmdb.org/t/p/original/${item?.profile_path}` || item.profile_path}")`,
                                             }}>
                                                  <motion.div onClick={() => navigate(`/actor/${item.id}`)} className="fullview">Full View</motion.div>

                                                  <div className="actor-info">
                                                       <motion.p
                                                       >
                                                            {item.name}
                                                       </motion.p>
                                                  </div>
                                             </div>
                                        </div>
                                   )
                              })
                         }
                    </motion.div>
               </motion.div>
          </div>
     )
}

export default Horror