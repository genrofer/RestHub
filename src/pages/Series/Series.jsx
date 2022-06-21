import MovieItemSeries from "../../components/ForSeries/MovieItemSeries/MovieItemSeries"
import MovieItemNav from "../../components/ForMovie/MovieItemNav/MovieItemNav"
import MovieActor from "../../components/ForSeries/MovieActor/MovieActor"
import MovieTrailer from "../../components/ForSeries/MovieTrailer/MovieTrailer"
import SeriesSimilars from "../../components/ForSeries/SeriesSimilars/SeriesSimilars"
import Footer from "../../components/ForHome/Footer/Footer"

const Movie = () => {
     return (
          <>   
               <MovieItemNav />
               <MovieItemSeries />
               <MovieActor />
               <MovieTrailer />
               <SeriesSimilars />
               <Footer />
          </>
     )
}

export default Movie