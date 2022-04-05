import './App.css';
import {movies} from './movies';

const App = () => {
    return (
        <div>
			{
				movies.map((movie) => <p>{movie.title}</p>)
			}
		<p>{movies[0].title</p>
		<p>{movies[1].title</p>
		<p>{movies[2].title</p>
		<p>{movies[3].title</p>
		<p>{movies[4].title</p>
		<p>{movies[5].title</p>
		<p>{movies[6].title</p>
		<p>{movies[7].title</p>
		<p>{movies[8].title</p>
		<p>{movies[9].title</p>
		<p>Sarah Mihm</p>
            <pre>{JSON.stringify(movies, null, 4)}</pre>
        </div>
    );
}

export default App;
