// - IMPORTS -
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
// Components
import Details from "../Details/Details";

// - MovieItem COMPONENT -
// Taking in a movie object as property from MovieList
function MovieItem({ movie }) {
  // * Declaring useHistory as a variable
  const history = useHistory();
 
  // * Declaring useDispatch as a variable
  const dispatch = useDispatch();

  // * Function to send user to details page
  const handleMovieClick = () => {
    console.log("Movie was clicked!");

    /* Dispatch an action that sets the movieItem redux state to
     movie that was clicked */
    dispatch({
      type: "SET_MOVIE_DETAILS",
      payload: movie
    });

    // Send user to Details component with movie object as prop
    history.push("/details");
  }; // * end handleMovieClick

  // - RENDERING -
  return (
    <div key={movie.id}>
      <h3>{movie.title}</h3>
      <img onClick={handleMovieClick} src={movie.poster} alt={movie.title} />
    </div>
  );
} // - END MovieItem COMPONENT -

// * Exporting MovieItem Component
export default MovieItem;
