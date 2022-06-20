import { useNavigate } from "react-router-dom"

import Banner from "../../components/ForHome/Banner/Banner"                                                                                                                                             
import MovieNav from "../../components/ForMovie/MovieNav/MovieNav"
import HomeCarousel from "../../components/ForHome/HomeCarousel/HomeCarousel"
import Actors from "../../components/ForHome/Actors/Actors"
import Popular from "../../components/ForHome/Popular/Popular"
import Horror from "../../components/ForHome/Horror/Horror"
import Romance from "../../components/ForHome/Romance/Romance"
import Kids from "../../components/ForHome/Kids/Kids"
import Comedy from "../../components/ForHome/Comedy/Comedy"
import Documentary from "../../components/ForHome/Documentary/Documentary"
import Toprated from "../../components/ForHome/Toprated/Toprated"
import Footer from "../../components/ForHome/Footer/Footer"
import Serials from "../../components/ForSeries/Serials/Serials"

import "./Movies.scss"

const Movies = () => {

     const navigate = useNavigate()

     const ShowMore = () => {
          document.querySelector(".more-cate-items").classList.add("block")
          document.querySelector(".more-btn").classList.add("none")
          window.scrollTo({
               top: document.querySelector(".more-cate-items").offsetTop,
               behavior: "smooth"
          })
     }

     return (
          <div className="movies">
               <MovieNav />
               <Banner />
               <Actors />
               <Popular />
               <Horror /> <br /> <br />
               <HomeCarousel /> <br />
               <Serials /> 
               <Romance /> 
               <div onClick={ShowMore} className="container more-btn mb-4">
                    <button>More categories</button>
               </div>
               <div className="more-cate-items none">
                    <Comedy />
                    <Documentary />
                    <Toprated />
                    <Kids />
               </div>
               {/* <Footer /> */}
          </div>
     )
}

export default Movies