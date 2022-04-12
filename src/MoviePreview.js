import './App.css';
const MoviePreview = (props) => {
	
	const {movieToPreview} = props;
	
	return (
		<>
			<p>{movieToPreview.title}</p>
			<img src={movieToPreview.posterUrl} alt={movieToPreview.title}/>
		</>
	)
}

export default MoviePreview;