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
