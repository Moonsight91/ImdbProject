import {useEffect} from 'react';

// ffa3efc4
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';
import { useState } from 'react';

const API_URL = 'http://www.omdbapi.com?apikey=ffa3efc4'

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies= async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(()=> {
        searchMovies('Spiderman');


    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

           <div className="search">
        <input placeholder="Search for Movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img 
                src={SearchIcon}
                alt="search"
                onClick={()=> searchMovies(searchTerm)}
            />
        </div>
        {
            
        movies?.length > 0
            ? (
            <div className="container">  
                {movies.map ((movie) => 
                <MovieCard movie={movie}/>
                )
                }
            </div>
            ):(
            <div className="empty">
                <h2> NO MOVIES FOUND</h2>
            </div>
            )
        }
    </div>
    );
}

export default App;