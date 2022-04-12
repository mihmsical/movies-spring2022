import './App.css';
import {movies} from './movies';
import MoviePreview from "./MoviePreview";
import {useState} from "react";

const App = () => {
	
	/* function useState(startingState) {
		some logic goes here
		
		return [variable, setVariableFunction];
	}
	*/
	
	const [currentMovie, setCurrentMovie] = useState(null);
	
	console.log(currentMovie);
	
    return (
        <div className="movie-container">
			{
				movies.map((movie) => 
					<>
						<MoviePreview
							movieToPreview={movie}
							setCurrentMovie={setCurrentMovie}
						/>
					</>
				)
			}
        </div>
    );
}

export default App;
