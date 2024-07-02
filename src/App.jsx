
import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from "./search.svg";
//fcc75f2d
function App() {
  const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=fcc75f2d';
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([]);


  
  
  useEffect(()=>{
    // searchMovies('Batman')
  }, [])
  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search)
    console.log("movies", movies);
  }

  return (
    <div className="App">
      <h1>PeliSearch...</h1>

      <div className='search'>
          <input type="text"
            placeholder='Buscar peliculas...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <img
            src={SearchIcon}
            alt="search"
            onClick={() => {searchMovies(searchTerm) }}
          />

  
      </div>
      {
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) :
        (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }

    </div>
  );
}

export default App;
