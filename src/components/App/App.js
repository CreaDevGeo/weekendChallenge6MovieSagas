// - IMPORTS -
import { HashRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import "./App.css";
// Components
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";
import HeroSection from "../HeroSection/HeroSection";

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
              <Link to="/">Genres</Link>
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
