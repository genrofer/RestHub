import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import banner from '../../../api/banner'

import "./HomeCarousel.scss"

const MovieItem = () => {
     const navigate = useNavigate()
     const { id } = useParams()
     const heading = useRef()

     const [movie, setMovie] = useState([])
     const [year, setYear] = useState()
     const [rating, setRating] = useState()

     useEffect(() => {
          const fetchMovie = async () => {
               const resData = banner[0]
               setMovie(resData)
               if (new Date(movie?.release_date).getFullYear() >= (new Date().getFullYear() - 2)) {
                    setYear(true)
               } else {
                    setYear(false)
               }

               if (movie?.vote_average > 0 && movie?.vote_average < 7.5) {
                    setRating(false)
               } else {
                    setRating(true)
               }
          }
          fetchMovie()


     }, [])

     return (
          <div className='movie-item d-flex inner-carousel containers'
               style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url("${`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` || movie.backdrop_path}")`,
               }}
          >
               <motion.div
                    className='movie-item-info container'
                    animate={{
                         x: [-150, -50],
                         opacity: [0, 1],
                         transition: {
                              duration: 0.5,
                              ease: "easeInOut",
                              delay: 0.5,
                         }
                    }}
               >
                    <div className='movie-item-info-top'>

                         <motion.h1 ref={heading} className="movie-heading">
                              {movie.name ? movie.name : "Loading..."}
                         </motion.h1>

                         <motion.p className='d-flex item-settings'>
                              <span className='movie-lang' >{movie.original_language ? movie.original_language : "Loading..."}</span>
                              ●
                              <span><img src="http://preview.gentechtreedesign.com/streamlab/red-demo/wp-content/plugins/streamlab-core/public/img/imdb.png" /> {movie?.vote_average}</span>
                              ●
                              <span className='movie-year'>{year ? "New" : "Action"}</span>
                         </motion.p>

                         <motion.div className='movie-genre d-flex'>
                              <motion.div className='movie-genre-list d-flex'>
                                   {movie?.genres?.map((genre, index) => {
                                        if (index < 3) {
                                             return (
                                                  <motion.div key={genre.id} className='movie-genre-item'>
                                                       <motion.p>{genre.name ? genre.name : "Loading..."}</motion.p>
                                                  </motion.div>
                                             )
                                        }
                                   }
                                   )}
                              </motion.div>
                         </motion.div>

                         <motion.p className='movie-overview'>
                              {movie.overview ? movie.overview : "Loading..."}
                         </motion.p>
                    </div>


                    <motion.div className='watch-trailer-icon d-flex'>
                         <motion.a onClick={() => navigate(`/series/${movie?.id}`)} className='fas fa-play'></motion.a>
                         <motion.p>Watch Trailer</motion.p>
                    </motion.div>

                    <motion.div className='movie-cast d-flex'>
                         <motion.h2 className='movie-cast-heading' >
                              Actors:
                         </motion.h2>
                         <motion.div className='movie-cast-list d-flex'>

                              <motion.div className='movie-cast-item'>
                                   <motion.p>Lomon</motion.p>
                              </motion.div>
                              <motion.div className='movie-cast-item'>
                                   <motion.p>Cho Yi-Hyun</motion.p>
                              </motion.div>
                              <motion.div className='movie-cast-item'>
                                   <motion.p>Chang-Young Yon</motion.p>
                              </motion.div>

                         </motion.div>
                    </motion.div>

               </motion.div>

               <motion.div className='movie-item-trailer movie-inner-trailer'
                    style={{
                         backgroundImage: `url("${`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` || movie.backdrop_path}`,
                    }}
                    animate={{
                         x: [0, -150],
                         opacity: [0, 1],
                    }}
               >
                    <motion.a onClick={() => navigate(`/series/${movie?.id}`)} className='fas fa-play movie-item-trailer-icon'></motion.a>
               </motion.div>
          </div >
     )
}

export default MovieItem