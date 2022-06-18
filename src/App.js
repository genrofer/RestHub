import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Movies from './pages/Movies/Movies';
import Movie from './pages/Movie/Movie';
import Series from './pages/Series/Series';
import Search from './components/ForHome/Search/Search';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/series/:id" element={<Series />} />
        <Route path="/search/" element={<Search />} />
      </Routes>
  );
}

export default App;
