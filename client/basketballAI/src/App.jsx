import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/teamSelect">Select Teams</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/select'/>
      </Routes>
    </Router>
  );
}

export default App;
