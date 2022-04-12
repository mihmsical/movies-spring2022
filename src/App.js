import './App.css';
import {movies} from './movies';

const App = () => {
    return (
        <div>
			{
				movies.map((movie) => 
					<>
						<p>{movie.title}</p>
						<img src={movie.posterUrl}/>
					</>
				)
			}
        </div>
    );
}

export default App;
