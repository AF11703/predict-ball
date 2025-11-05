import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import TeamSelect from './pages/TeamSelect';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/teamSelect">Select Teams</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teamSelect' element={<TeamSelect />} />
      </Routes>
    </Router>
  );
}

export default App;
