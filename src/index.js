// - IMPORTS -
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// * Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("FETCH_MOVIE_GENRE", fetchMovieGenre);
}

// * Gen function to get all movies from the DB
function* fetchAllMovies() {
  try {
    const movies = yield axios.get("/movie-saga/movie");
    console.log("GET all movies:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch {
    console.log("\nError getting all movies.");
  }
}

// * Gen function to get all movies from the DB
function* fetchMovieGenre(action) {
  try {
    // Declaring movie title as payload
    const movieTitle = action.payload
    // Declaring response as movie genres
    const movieGenre = yield axios.get(`/movie-saga/genres/${movieTitle}`);
    console.log("GET all movie genres:", movieGenre.data);
    // Dispatch action to send genres as a payload to genres reducer
    yield put({ type: "SET_GENRES", payload: movieGenre.data });
  } catch {
    console.log("\nError getting movie genres.");
  }
}

// * Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// * Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// * Used to store the movie genres
const movieGenres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// * Used to set the movie object for display on 'Details' component
const movieDetails = (state = {}, action) => {
  switch (action.type) {
    case "SET_MOVIE_DETAILS":
      return action.payload;
    default:
      return state;
  }
}; // * end movieDetail

// * Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    movieGenres,
    movieDetails,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// * Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
