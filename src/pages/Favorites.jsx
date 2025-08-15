import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id}></MovieCard>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h1>No Favorite Movies Yet</h1>
      <p>Start adding movies to your favorites and they will apeear here</p>
    </div>
  );
}

export default Favorites;
