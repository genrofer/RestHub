import MovieItem from "../../components/ForMovie/MovieItem/MovieItem"
import MovieItemNav from "../../components/ForMovie/MovieItemNav/MovieItemNav"
import MovieActor from "../../components/ForMovie/MovieActor/MovieActor"
import MovieTrailer from "../../components/ForMovie/MovieTrailer/MovieTrailer"
import MovieSimilars from "../../components/ForMovie/MovieSimilars/MovieSimilars"

const Movie = () => {
     return (
          <>
               <MovieItemNav />
               <MovieItem />
               <MovieActor />
               <MovieTrailer />
               <MovieSimilars />
          </>
     )
}

export default Movie