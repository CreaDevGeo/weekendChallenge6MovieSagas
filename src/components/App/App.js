// - IMPORTS -
import { HashRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
// CSS
import "./App.css";
import "../Details/Details.css";
// Components
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";
import HeroSection from "../HeroSection/HeroSection";
import Favorites from "../Favorites/Favorites";
import Genres from "../Genres/Genres";

function App() {
  // - RENDERING -
  return (
    <Router>
      <header>
        <Link to="/">
          <h2>
            MOVIE
            <br />
            SAGA
          </h2>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/genres">Genres</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="App">
        <main>
          <section className="hero-section">
            <Route path="/" exact>
              <HeroSection />
            </Route>
          </section>

          <section>
            <Route path="/favorites">
              <Favorites />
            </Route>
          </section>

          <section>
            <Route path="/genres">
              <Genres />
            </Route>
          </section>

          <section>
            <Route path="/" exact>
              <MovieList />
            </Route>
          </section>

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
