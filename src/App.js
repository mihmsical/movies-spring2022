import './App.css';
import {movies} from './movies';
import MoviePreview from "./MoviePreview";

const App = () => {
    return (
        <div className="movie-container">
			{
				movies.map((movie) => 
					<>
						<MoviePreview
							movieToPreview={movie}
						/>
					</>
				)
			}
        </div>
    );
}

export default App;
