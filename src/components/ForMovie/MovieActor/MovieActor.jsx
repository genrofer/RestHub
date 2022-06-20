import React, { useRef, useState, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from "../../../api/axios"
import sorov from "../../../api/sorov"
import actors from "../../../api/actors"
import Logo from '../../../assets/images/logo1.png'


const MovieActor = () => {
     const popularRef = useRef()
     const navigate = useNavigate()
     const { id } = useParams()

     const [movie, setMovie] = useState([])
     const [width, setWidth] = useState(0)


     useEffect(() => {
          const fetchMovie = async () => {
               const resData = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=13d142da634f37232d727abedb6908d7&append_to_response=credits`)
               setMovie(resData.data.credits.cast)
          } 
          fetchMovie()   
     }, [id])

     useEffect(() => {
          if (window.innerWidth < 768) {
               setWidth(window.innerWidth * 2.3)
          } else if (window.innerWidth < 500) {
               setWidth(window.innerWidth * 0.6)
          } else {    
               if(movie.length < 27){
                    setWidth(window.innerWidth * 3)
               } else {
                    setWidth(window.innerWidth * 63.6)
               }
          }
     }, [])
     return (
          <div id="popular ">
               <motion.div ref={popularRef} id="actor-pop" className='caro'>
                    <h2 className="movie-h2">Actors</h2>

                    <motion.div
                         className='caro-item'
                         drag="x"
                         dragConstraints={{ right: 0, left: -width }}
                    >
                         {
                              movie?.map((item, index) => {
                                   return (
                                        <div className="actor-item" to={`/movie/${item.id}`} key={index}>
                                             <div className="actor-img actor-img" style={{
                                                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 75%, rgba(1, 0, 0, 1) 100%), url("${`https://image.tmdb.org/t/p/original/${item?.profile_path}` || item.profile_path}")`,
                                             }}>
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

export default MovieActor