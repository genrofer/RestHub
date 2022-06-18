import React, { useRef, useState, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import sorov from "../../../api/sorov"
import axios from "../../../api/axios"

const Kids = () => {
     const popularRef = useRef()
     const navigate = useNavigate()
     const { id } = useParams()

     const [movie, setMovie] = useState([])
     const [width, setWidth] = useState(0)

     useEffect(() => {
          const fetchMovie = async () => {
               const resData = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=13d142da634f37232d727abedb6908d7&append_to_response=credits,similar`)
               setMovie(resData.data.similar.results)
          }
          fetchMovie()
     }, [])

     useEffect(() => {
          if (window.innerWidth < 768) {
               setWidth(window.innerWidth * 10)
          } else if (window.innerWidth < 500) {
               setWidth(window.innerWidth * 15)
          } else {
               setWidth(window.innerWidth * 3.4)
          }
     }, [])
     return (
          <div id="popular">
               <motion.div ref={popularRef} className='caro'>
                    <h2 className="movie-h2">Similars</h2>
                    <motion.div
                         className='caro-item'
                         drag="x"
                         dragConstraints={{ right: 0, left: -width }}
                    >
                         {
                              movie?.map((item, index) => {
                                   return (
                                        <div className="movie-item" to={`/movie/${item.id}`} key={index}>
                                             <div className="movie-img" style={{
                                                  backgroundImage: `url("${`https://image.tmdb.org/t/p/original/${item?.poster_path}` || item.poster_path}")`,
                                             }}>
                                                  <i onClick={() => {
                                                       navigate(`/series/${item.id}`)
                                                       window.location.reload()
                                                  }} className="fas fa-play play-icon"></i>
                                             </div>
                                             <div className="movie-info">
                                                  <motion.p
                                                  >
                                                       <span>
                                                            {new Date(item?.release_date).getFullYear()}
                                                       </span>
                                                       ◆
                                                       <span>
                                                            <i className="fas fa-solid fa-star star"></i>  {item?.vote_average}
                                                       </span>
                                                       ◆
                                                       <span>
                                                            {item?.adult ? "18+" : "16+"}
                                                       </span>
                                                  </motion.p>
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

export default Kids