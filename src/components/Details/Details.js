// - IMPORTS -
import { useSelector } from "react-redux";

// Details COMPONENT
function Details() {
  // * Declaring movieDetails reducer state
  const movieDetails = useSelector((store) => store.movieDetails);

  // Logging movieDetails reducer
  console.log("'movieDetails' global state is:", movieDetails);

  // - RENDERING -
  return (
    <div>
      <h2>{movieDetails.title}</h2>

      <img src={movieDetails.poster} />

      <p>{movieDetails.description}</p>
    </div>
  );
} // - END Details COMPONENT -

// * Exporting MovieList Component
export default Details;
