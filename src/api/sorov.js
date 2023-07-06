const api_key = '13d142da634f37232d727abedb6908d7';

const sorov = {
     fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
     fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
     fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
     fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
     fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
     fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
     fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
     fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
     fetchSeries: `/discover/tv?api_key=${api_key}&with_genres=10759`,
     fetchKidsMovies: `/discover/movie?api_key=${api_key}&with_genres=10751`,
     fetchPopular: `/movie/popular?api_key=${api_key}&language=en-US`,
     fetchTV: `/discover/tv?api_key=${api_key}&with_genres=10765`,
     fetchMovie: `/movie/{movie_id}?api_key=${api_key}&language=en-US`,  
     fetchSearchMovie: `/search/movie?api_key=${api_key}&language=en-US&query=`,
     fetchSearchSeries: `/search/tv?api_key=${api_key}&language=en-US&query=`,
     trailerQuery: `/videos?api_key=${api_key}&language=en-US&query=`,
     fetchActors: `/person/{person_id}/movie_credits?api_key=${api_key}&language=en-US`,
     fetchGirls: `/discover/movie?api_key=${api_key}&with_genres=10749`,
}

//    fetchTrending: `http://api.themoviedb.org/3/trending/all/week?api_key=13d142da634f37232d727abedb6908d7&language=en-US`
//    fetchNetflixOriginals: `http://api.themoviedb.org/3/discover/tv?api_key=13d142da634f37232d727abedb6908d7&language=en-US&append_to_response=credits,alternative_titles,media_type,images,credits,keywords,reviews,similar,translations,external_ids,release_dates,last_episode_to_air`
//    fetchTopRated: `http://api.themoviedb.org/3/movie/top_rated?api_key=13d142da634f37232d727abedb6908d7&language=en-US`
//    fetchActionMovies: `http://api.themoviedb.org/3/discover/movie?api_key=13d142da634f37232d727abedb6908d7&with_genres=28`
//    fetchComedyMovies: `http://api.themoviedb.org/3/discover/movie?api_key=13d142da634f37232d727abedb6908d7&with_genres=35`
//    fetchHorrorMovies: `http://api.themoviedb.org/3/discover/movie?api_key=13d142da634f37232d727abedb6908d7&with_genres=27`
//    fetchRomanceMovies: `http://api.themoviedb.org/3/discover/movie?api_key=13d142da634f37232d727abedb6908d7&with_genres=10749`
//    fetchSexyMovies: `http://api.themoviedb.org/3/discover/movie?api_key=13d142da634f37232d727abedb6908d7&with_genres=10770`
//    fetchSexualityMovies: `http://api.themoviedb.org/3/discover/movie?api_key=13d142da634f37232d727abedb6908d7&with_genres=10770`
//    fetchActor: `http://api.themoviedb.org/3/person/{actor_id}?api_key=13d142da634f37232d727abedb6908d7&language=en-US`
//    fetchDocumentaries: `http://api.themoviedb.org/3/discover/movie?api_key=13d142da634f37232d727abedb6908d7&with_genres=99`
//    fetchSearchMovie: `http://api.themoviedb.org/3/search/movie?api_key=13d142da634f37232d727abedb6908d7&language=en-US&query=`
//    fetchSearchSerials: `http://api.themoviedb.org/3/search/tv?api_key=13d142da634f37232d727abedb6908d7&language=en-US&query=`
//    fetchAll: `http://api.themoviedb.org/3/discover/movie?api_key=13d142da634f37232d727abedb6908d7&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`
//    fetchTrailer: `http://api.themoviedb.org/3/videos?api_key=13d142da634f37232d727abedb6908d7&language=en-US&query=`
//    fetchGirls: `http://api.themoviedb.org/3/discover/movie?api_key=13d142da634f37232d727abedb6908d7&with_genres=10749`
//    fetchSerialsById: `http://api.themoviedb.org/3/tv/{tv_id}?api_key=13d142da634f37232d727abedb6908d7&language=en-US`
//    fetchMovieById: `http://api.themoviedb.org/3/movie/{movie_id}?api_key=13d142da634f37232d727abedb6908d7&language=en-US`
//    fetchSearchMulti: `http://api.themoviedb.org/3/search/multi?api_key=13d142da634f37232d727abedb6908d7&language=en-US&query=`

//    http://api.themoviedb.org/3/movie/157336?api_key=13d142da634f37232d727abedb6908d7&append_to_response=videos
//    https://api.themoviedb.org/3/movie/550?api_key=13d142da634f37232d727abedb6908d7&language=en-US
//   https://api.themoviedb.org/3/movie/550?api_key=13d142da634f37232d727abedb6908d7&language=en-US&append_to_response=credits,alternative_titles,videos,images,credits,keywords,reviews,similar,translations,external_ids,release_dates
//   get actors from movie  https://api.themoviedb.org/3/movie/634649/credits?api_key=13d142da634f37232d727abedb6908d7&language=en-US
//   get movie from actor https://api.themoviedb.org/3/person/634649/movie_credits?api_key=13d142da634f37232d727abedb6908d7&language=en-US
//   get movie from search https://api.themoviedb.org/3/search/movie?api_key=13d142da634f37232d727abedb6908d7&language=en-US&query=
//   get actor from search https://api.themoviedb.org/3/search/person?api_key=13d142da634f37232d727abedb6908d7&language=en-US&query=
//   get movie from id https://api.themoviedb.org/3/movie/550?api_key=13d142da634f37232d727abedb6908d7&language=en-US

//  selected actors -  11701, 287, 10990,  2888,  2037,  90633,  72129


export default sorov