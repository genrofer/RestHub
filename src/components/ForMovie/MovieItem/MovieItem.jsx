import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import sorov from "../../../api/sorov"
import axios from "../../../api/axios"
// import watchlist from '../../../api/watchlist'

import "./MovieItem.scss"

const MovieItem = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const heading = useRef()

  const watchlist = localStorage.getItem("watchlist")
  const [movie, setMovie] = useState([])
  const [year, setYear] = useState()
  const [rating, setRating] = useState()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const fetchMovie = async () => {
      const resData = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=13d142da634f37232d727abedb6908d7&language=en-US&append_to_response=credits,alternative_titles,videos,images,credits,keywords,reviews,similar,translations,external_ids,release_dates`)
      setMovie(resData.data)
      const str = document.querySelector('.movie-heading').textContent
      const arr = str.split(' ')
      if (arr.length > 2) {
        document.querySelector(".movie-heading").classList.add("movie-heading-long")
      }

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


  }, [movie])

  const addToList = () => {
    const existingEntries = JSON.parse(localStorage.getItem("watchlist"));
    if (existingEntries == null) existingEntries = []
    if (existingEntries.find(item => item.id === movie.id)) {
      alert("Already in watchlist ❗")
    } else {
      existingEntries.unshift(movie);
      localStorage.setItem("watchlist", JSON.stringify(existingEntries));
      alert("Added to watchlist ✅")
    }
  }

  return (
    <motion.div
      initial={{ translateX: -1000, translateY: 0 }}
      animate={{ translateX: 0, translateY: 0 }}
      transition={{ duration: 1 }}
      className='movie-item d-flex'
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0,0,0,0.6) 30%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 75%, rgba(0, 0, 0, 0.9) 100%), url("${`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` || movie.backdrop_path}")`,
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
            {movie.title ? movie.title : "Loading..."}
          </motion.h1>

          <motion.p className='d-flex item-settings'>
            <span className='movie-lang' >{movie.original_language ? movie.original_language : movie.name}</span>
            ●
            <span><img src="https://preview.gentechtreedesign.com/streamlab/red-demo/wp-content/plugins/streamlab-core/public/img/imdb.png" /> {movie?.vote_average}</span>
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

        <div className="d-flex then-block">
          <motion.div className='watch-trailer-icon d-flex me-5'>
            <motion.a href='#trailer' className='fas fa-play'></motion.a>
            <motion.p>Watch Trailer</motion.p>
          </motion.div>

          <motion.div className='watch-trailer-icon d-flex'>
            <motion.a onClick={addToList} className='fas fa-plus'></motion.a>
            <motion.p>Add Watchlist</motion.p>
          </motion.div>
        </div>

        <motion.div className='movie-cast d-flex'>
          <motion.h2 className='movie-cast-heading' >
            Actors:
          </motion.h2>
          <motion.div className='movie-cast-list d-flex'>
            {movie?.credits?.cast?.map((cast, index) => {
              if (index <= 2) {
                return (
                  <motion.div key={cast.id} className='movie-cast-item'>
                    <motion.p>{cast.name ? cast.name : "Loading"}</motion.p>
                  </motion.div>
                )
              }
            }
            )}
          </motion.div>
        </motion.div>

      </motion.div>

      <motion.div className='movie-item-trailer'
        style={{
          backgroundImage: `url("${`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` || movie.backdrop_path}`,
        }}
        animate={{
          x: [0, -150],
          opacity: [0, 1],
        }}
      >
        <motion.a href='#clip' className='fas fa-play movie-item-trailer-icon'></motion.a>
      </motion.div>
    </motion.div >
  )
}

export default MovieItem