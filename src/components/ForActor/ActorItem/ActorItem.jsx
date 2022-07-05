import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import sorov from "../../../api/sorov"
import axios from "../../../api/axios"
import watchlist from '../../../api/watchlist'

import "./ActorItem.scss"

const MovieItem = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const heading = useRef()

  const [movie, setMovie] = useState([])
  const [actorMovie, setActorMovie] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const fetchMovie = async () => {
      const resData = await axios.get(`http://api.themoviedb.org/3/person/${id}?api_key=13d142da634f37232d727abedb6908d7&language=en-US`)
      const actorMovie = await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=13d142da634f37232d727abedb6908d7&language=en-US`)
      const result = actorMovie.data.cast.sort((a, b) => Number(b.vote_count) - Number(a.vote_count));
      setActorMovie(result)
      setMovie(resData.data)

      const str = document.querySelector('.movie-heading').textContent
      const arr = str.split(' ')
      if (arr.length > 2) {
        document.querySelector(".movie-heading").classList.add("movie-heading-long")
      }
    }
    fetchMovie()
  }, [movie])

  return (
    <motion.div
      initial={{ translateX: -1000, translateY: 0 }}
      animate={{ translateX: 0, translateY: 0 }}
      transition={{ duration: 1 }}
      className='movie-item d-flex'
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0,0,0,0.6) 30%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 75%, rgba(0, 0, 0, 0.9) 100%), url("${`https://image.tmdb.org/t/p/original/${actorMovie[0]?.backdrop_path}` || actorMovie[0].backdrop_path}")`,
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
            <span className='movie-lang' >{movie.birthday ? new Date(movie.birthday).getFullYear() : movie.birthday}</span>
            <span> {movie?.gender == 1 ? "Female" : "Male"}</span>
            <span className='movie-year'>{movie?.place_of_birth}</span>
          </motion.p>

          <motion.p className='movie-overview'>
            {movie.biography ? movie.biography : "Loading..."}
          </motion.p>
        </div>
      </motion.div>
      <motion.div className='movie-item-trailer actor-post'
        animate={{
          x: [0, -150],
          opacity: [0, 1],
        }}
      >
        <img src={`https://image.tmdb.org/t/p/original/${movie?.profile_path}` || movie.profile_path} alt="Actor img" className='actor-img' />
      </motion.div>
    </motion.div >
  )
}

export default MovieItem