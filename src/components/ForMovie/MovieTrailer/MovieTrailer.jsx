import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "../../../api/axios"

import "./MovieTrailer.scss"

const MovieTrailer = () => {
     const { id } = useParams()

     const [movie, setMovie] = useState([])

     const [trailer, setTrailer] = useState([])
     const [behindTheScenes, setBehindTheScenes] = useState([])
     const [clip, setClip] = useState([])
     const [featurette, setFeaturette] = useState([])

     useEffect(() => {
          const fetchMovie = async () => {
               const resData = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=13d142da634f37232d727abedb6908d7&language=en-US&append_to_response=credits,alternative_titles,videos,similar`)
               setMovie(resData.data.videos.results)
               setTrailer(resData.data.videos.results.filter(video => video.type == "Trailer"))
               setBehindTheScenes(resData.data.videos.results.filter(video => video.type == "Behind the Scenes"))
               setClip(resData.data.videos.results.filter(video => video.type == "Clip"))
               setFeaturette(resData.data.videos.results.filter(video => video.type == "Featurette"))
          }
          fetchMovie()
     }, [id])


     return (
          <div className='trailer-heading'>
               <br /> <br />
               {
                    trailer.length > 0 ?
                         <div id='trailer'>
                              <h2 className='movie-h2'>{trailer[0].name ? trailer[0].name + " - official trailer": "Loading..."}</h2>
                              <iframe className='iframe' src={`https://www.youtube-nocookie.com/embed/${trailer[0].key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                         </div>
                         : <h2 className='movie-h2'>No Trailer - -</h2>
               }
               <br /> <br />
               {
                    clip.length > 0 ?
                         <div className='clip-heading' id='clip'>
                              <h2 className='movie-h2'>{clip[0].name ? clip[0].name + " - short movie" : "Loading..."}</h2>
                              <iframe className='iframe' src={`https://www.youtube-nocookie.com/embed/${clip[0].key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                         </div>
                         : null
               }
               <br /> <br />
               {
                    behindTheScenes.length > 0 ?
                         <div className='behindTheScenes-heading' id='behindTheScenes'>
                              <h2 className='movie-h2'>{behindTheScenes[0].name ? behindTheScenes[0].name + " - behind the science": "Loading..."}</h2>
                              <iframe className='iframe' src={`https://www.youtube-nocookie.com/embed/${behindTheScenes[0].key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                         </div>
                         : null
               }
               <br /> <br />
               {
                    featurette.length > 0 ?
                         <div className='featurette-heading' id='featurette'>
                              <h2 className='movie-h2'>{featurette[0].name ? featurette[0].name + " - featurette" : "Loading..."}</h2>
                              <iframe className='iframe' src={`https://www.youtube-nocookie.com/embed/${featurette[0].key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                         </div>
                         : null
               }
          </div>
     )
}

export default MovieTrailer