import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchResults from './pages/SearchResults';
import Movie from './pages/Movie';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchResults />} />
          <Route path='/movie/:movieId' element={<Movie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
