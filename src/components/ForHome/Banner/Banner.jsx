import { useEffect, useState } from "react"
import sorov from "../../../api/sorov"
// import watchlist from "../../../api/watchlist"
import axios from "../../../api/axios"
import "./Banner.scss"
import { NavLink, useNavigate } from "react-router-dom"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import banner from "../../../api/banner"

const Banner = () => {


     const navigate = useNavigate()

     const [movie, setMovie] = useState([])
     // const watchlist = localStorage.getItem("watchlist")

     useEffect(() => {
          const str = `${movie?.original_title || movie?.original_name || movie?.name}`
          const arr = str.split(' ')
          if (arr.length > 2) {
               document.querySelector(".movie-heading").classList.add("movie-heading-long")
          }
     }, [movie])

     useEffect(() => {
          if (localStorage.getItem("watchlist")) {

          } else {
               localStorage.setItem("watchlist", JSON.stringify([]))
          }
          const fetchMovie = () => {
               const resData = banner

               setMovie(
                    resData[Math.floor(Math.random() * resData.length)]
               )
          }
          fetchMovie()
     }, [])

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
          <header>

               <div className="banner">
                    <SwiperSlide className="slide-bg" style={{
                         backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(1, 0, 0, 1) 100%),
                         url("${`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` || movie?.backdrop_path}")`,
                    }}>
                         <div className="hr"></div>
                         <div className="text container">
                              <h1 className="movie-heading">{`${movie.original_title ? movie.original_title : "Loading..."}`}</h1>
                              <p className="overview">{`${movie.overview ? movie.overview : "Loading..."}`}</p>

                              <div className="year d-flex">
                                   <p className="lang me-3">{`${movie.original_language ? movie.original_language : "Loading"}`}</p>
                                   <p className="me-3">{`${new Date(movie.first_air_date ? movie.first_air_date : movie.release_date).getFullYear()}`}</p>
                                   <p className="over me-3">{`${18}`}+</p>
                                   <p className="vote"><i className="fas fa-solid fa-star me-1"></i> {`${movie?.vote_average}`}</p>
                              </div>

                              <div className="watch d-flex">
                                   <div className="watch-btn me-4">
                                        <div onClick={() => navigate(`/${movie.media_type == "tv" ? 'series' : 'movie'}/${movie.id}`)} className="button-container-2">
                                             <span className="mas"><i className="fas fa-solid fa-play me-1"></i> Watch now</span>
                                             <button type="button" name="Hover"><i className="fas fa-solid fa-play me-1"></i> Watch now</button>
                                        </div>
                                   </div>
                                   <div>
                                        <div onClick={addToList} className="button-container-2 mas-class">
                                             <span className="mas"><i className="fas fa-solid fa-plus me-1"></i> Add to list</span>
                                             <button type="button" name="Hover"><i className="fas fa-solid fa-plus me-1"></i> Add to list</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </SwiperSlide>
               </div>

          </header>
     )
}

export default Banner