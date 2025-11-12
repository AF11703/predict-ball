import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import TeamSelect from './pages/TeamSelectPage';


function App() {
  return (
    <Router>
      <nav className="absolute flex w-md justify-self-center items-center justify-between flex-wrap brightness-90 bg-gray-700/40 from-black to-gray-700 border border-gray-400/60 shadow-2xs shadow-white rounded-2xl p-2">
        <div className="inline-flex items-center shrink-0 text-white mr-6 mt-4">
          <span className="font-semibold text-left ml-3 tracking-tight mr-3 border-r pr-2">Predict Ball</span>
        </div>
        <div className="-translate-6 w-full overflow-hidden text-right">
          <div className="lg:grow font-bold space-x-5 text-right overflow-hidden">
            <Link className="hover:underline" to="/">Home</Link>
            <Link className="hover:underline" to="/teamSelect">Teams</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teamSelect' element={<TeamSelect />} />
      </Routes>
    </Router>
  );
}

export default App;
