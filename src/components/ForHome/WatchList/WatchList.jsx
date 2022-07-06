import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import axios from '../../../api/axios'

import "./WatchList.scss"

const WatchList = () => {
     const navigate = useNavigate()

     const watchlist = JSON.parse(localStorage.getItem("watchlist"));

     const [movie, setMovie] = useState("");
     const [search, setSearch] = useState("");

     useEffect(() => {
          const fetchMovie = () => {
               const searchMovie = JSON.parse(localStorage.getItem("watchlist"));
               setMovie(searchMovie)
               console.log(searchMovie)
          } 
          fetchMovie()
     }, [])

     const trashWatchList = () => {
          localStorage.removeItem("watchlist");
          navigate("/movies")
     }

     return (
          <motion.div
               className='search-bar'
          >
               <div className="search-bar-h">
                    <div className="search-bar-top watchlist-top">
                         <h1 className='watch-heading first-child'>Your Watch List</h1>
                    </div>
                    <i className='fas fa-trash times trash' onClick={trashWatchList}></i>
                    <i onClick={() => navigate("/movies")} className='fas fa-times times'></i>
               </div>
               <motion.div
                    initial={{ translateX: -200 }}
                    animate={{ translateX: 0 }}
                    className="searched-movies"
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
                                                       <i onClick={() => navigate(`/${movie.media_type == "tv" ? "series" : "movie"}/${movie.id}`)} className='fas fa-play play-icon'></i>
                                                  </div>
                                             </div>
                                        </div>
                                   )
                              }) : <div className="searched-movies-item">
                                   <div className="searched-movies-item-info">
                                        <h1 className='watch-heading'>Your watchlist is empty</h1>
                                   </div>
                              </div>
                    }
               </motion.div>
          </motion.div>
     )
}

export default WatchList