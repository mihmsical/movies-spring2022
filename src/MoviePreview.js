import './App.css';
const MoviePreview = (props) => {
	
	const {movieToPreview, setCurrentMovie} = props;
	
	return (
		<>
			<p>{movieToPreview.title}</p>
			<img 
				src={movieToPreview.posterUrl} 
				alt={movieToPreview.title}
				onClick = {() => setCurrentMovie(movieToPreview)}
			/>
		</>
	)
}

export default MoviePreview;