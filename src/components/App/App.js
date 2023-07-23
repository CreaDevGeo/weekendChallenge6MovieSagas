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
      <h1>The Movies Saga!</h1>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
      </nav>
      
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details">
          <Details />
        </Route>

        {/* Add Movie page */}
    </div>
      </Router>
  );
}

export default App;
