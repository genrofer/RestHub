import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Movies from './pages/Movies/Movies';
import Movie from './pages/Movie/Movie';
import Series from './pages/Series/Series';
import Search from './components/ForHome/Search/Search';
import NotFound from './pages/NotFound/NotFound';
import WatchList from './components/ForHome/WatchList/WatchList';

import { AnimatePresence } from 'framer-motion';

const Routers = () => {
     const location = useLocation();
     return (
          <AnimatePresence>
               <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Login />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movie/:id" element={<Movie />} />
                    <Route path="/series/:id" element={<Series />} />
                    <Route path="/search/" element={<Search />} />
                    <Route path="/watchlist/" element={<WatchList />} />
                    <Route path="/*" element={<NotFound />} />
               </Routes>
          </AnimatePresence>
     )
}

export default Routers