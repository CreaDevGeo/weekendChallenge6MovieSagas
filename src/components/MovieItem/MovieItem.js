// - IMPORTS -
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
// Material UI
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
      payload: movie,
    });

    /* Dispatch an action with movie title to make GET request of movie genre */
    dispatch({
      type: "FETCH_MOVIE_GENRE",
      payload: movie.title,
    });

    // Send user to Details component with movie object as prop
    history.push("/details");
  }; // * end handleMovieClick

  // - RENDERING -
  return (
    <div key={movie.id} className="movieItems">
      <Card sx={{ width: 235, maxHeight: 500 }}>
        <CardMedia
          sx={{ height: 350 }}
          image={movie.poster}
          onClick={handleMovieClick}
          title={movie.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            onClick={handleMovieClick}
          >
            {movie.title}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Favorite</Button>
        </CardActions> */}
      </Card>
    </div>
  );
} // - END MovieItem COMPONENT -

// * Exporting MovieItem Component
export default MovieItem;
