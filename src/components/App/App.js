// - IMPORTS -
import { HashRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";

function App() {

  // - RENDERING -
  return (
    <Router>
      <div className="App">
        <header>
          <h1>
            <Link to="/">MOVIE<br/>SAGA</Link>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
              <li>
                <Link to="/">Genres</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Route path="/" exact>
            <MovieList />
          </Route>
  
          {/* Details page */}
          <Route path="/details">
            <Details />
          </Route>
  
          {/* Add Movie page */}
        </main>
        </div>
    </Router>
  );
}

export default App;
