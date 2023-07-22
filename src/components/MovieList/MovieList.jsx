// - IMPORTS -
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
// Components
import MovieItem from '../MovieItem/MovieItem';

// - MovieList COMPONENT -
function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  // - RENDERING -
  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map((movie) => {
          return <MovieItem movie={movie} />;
        })}
      </section>
    </main>
  );
} // - END MovieList COMPONENT -

// * Exporting MovieList Component
export default MovieList;