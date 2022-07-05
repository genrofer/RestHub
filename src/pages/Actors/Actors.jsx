import MovieItemNav from "../../components/ForMovie/MovieItemNav/MovieItemNav"
import ActorMovie from "../../components/ForActor/ActorMovie/ActorMovie"
import ActorItem from "../../components/ForActor/ActorItem/ActorItem"
import Footer from "../../components/ForHome/Footer/Footer"

const Movie = () => {
     return (
          <>   
               <MovieItemNav />
               <ActorItem />
               <ActorMovie />
               <Footer />
          </>
     )
}

export default Movie