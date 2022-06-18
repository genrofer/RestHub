import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../../api/axios'

import Logo from '../../../assets/images/logo.png'


import "./Search.scss"

const Search = () => {
     const navigate = useNavigate()

     const [movie, setMovie] = useState("");
     const [search, setSearch] = useState("");

     const enter = (e) => {
          if (e.key === 'Enter') {
               const fetchMovie = async () => {
                    const searchMovie = await axios.get(`http://api.themoviedb.org/3/search/multi?api_key=13d142da634f37232d727abedb6908d7&language=en-US&query=${e.target.value}&page=1`)
                    setMovie(searchMovie.data.results)
                    if (searchMovie.data.results.length === 0) {
                         alert("No results found")
                    }
               }
               fetchMovie()
          }
     }

     const enterI = () => {
          const fetchMovie = async () => {
               const searchMovie = await axios.get(`http://api.themoviedb.org/3/search/multi?api_key=13d142da634f37232d727abedb6908d7&language=en-US&query=${search}&page=1`)
               setMovie(searchMovie.data.results)
               if (searchMovie.data.results.length === 0) {
                    alert("No results found")
               }
          }
          fetchMovie()
     }


     return (
          <div className='search-bar'>
               <div className="search-bar-h">

                    <div className="search-bar-top">
                         <input
                              type="text"
                              className='search-bar-input'
                              placeholder='Search a movie, serial or tv show'
                              onKeyUp={(e) => enter(e)}
                              onChange={(e) => setSearch(e.target.value)}
                         />
                         <i onClick={enterI} className='fas fa-search search-ico'></i>
                    </div>

                    <i onClick={() => navigate("/movies")} className='fas fa-times times'></i>
               </div>
               <div className="searched-movies">
                    {
                         movie.length > 0 ?
                              movie.map((movie, index) => {
                                   return (
                                        <div className="searched-movies-item" key={index}>
                                             <div className='movie-img' style={{
                                                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 75%, rgba(1, 0, 0, 0) 100%), url("${`https://image.tmdb.org/t/p/original/${movie?.poster_path}` || movie.poster_path}")`,
                                             }}>
                                                  <div className="searched-movies-item-info">
                                                       <i onClick={() => navigate(`/${movie.media_type === "movie" ? "movie" : "series"}/${movie.id}`)} className='fas fa-play play-icon'></i>
                                                  </div>
                                             </div>
                                        </div>
                                   )
                              }) : null
                    }
               </div>
          </div >
     )
}

export default Search