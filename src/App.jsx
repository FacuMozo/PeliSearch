
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from "./search.svg";

function App() {

  const movie1= {
    "Title": "spiderman",
    "Year":"2017",
    "imdbID":"tt2586634",
    "Type":"movie",
    "Poster": "N/A"
  }

  return (
    <div className="App">
      <h1>PeliSearch...</h1>

      <div className='search'>
        <input type="text" 
          placeholder='Buscar peliculas...' 
          value='Superman'
          onChange={() => { }}  
        />

        <img 
          src={SearchIcon} 
          alt="search" 
          onClick={() => {}}
        />
      </div>

      <div className='container'>
        <MovieCard movie1={movie1}/>
      </div>
    </div>
  );
}

export default App;
