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
               const resData = await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=13d142da634f37232d727abedb6908d7&language=en-US`)
               const result = resData.data.cast.sort((a, b) => Number(b.vote_count) - Number(a.vote_count));
               setMovie(result)
          }
          fetchMovie()
     }, [id])

     return (
          <div id="popular ">
               <motion.div ref={popularRef} id="actor-pop" className='caro'>
                    <h2 className="movie-h2">Movies</h2>

                    <motion.div
                         className='actor-movieses'
                    >
                         {
                              movie.length > 0 ?
                                   movie.map((movie, index) => {
                                        return (
                                             <div className="searched-movies-item" key={index}>
                                                  <div className='movie-img' style={{
                                                       backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 75%, rgba(1, 0, 0, 0) 100%), url("${`https://image.tmdb.org/t/p/original/${movie?.poster_path}` || movie.poster_path}")`,
                                                  }}>
                                                       <div className="searched-movies-item-info">
                                                            <i onClick={() => navigate(`/${movie.media_type === "series" ? "series" : "movie"}/${movie.id}`)} className='fas fa-play play-icon'></i>
                                                       </div>
                                                  </div>
                                             </div>
                                        )
                                   }) : null
                         }
                    </motion.div>
               </motion.div>
          </div>
     )
}

export default MovieActor