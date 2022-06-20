import './App.css';


import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Movies from './pages/Movies/Movies';
import Movie from './pages/Movie/Movie';
import Series from './pages/Series/Series';
import Search from './components/ForHome/Search/Search';
import NotFound from './pages/NotFound/NotFound';
import Routers from './Routers';

function App() {
  return (
      <Routers />
    );
}

export default App;
