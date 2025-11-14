import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeamSelect from './pages/TeamSelectPage';
import PredictionPage from './pages/PredictionPage';


function App() {
  return (
    <Router>
      <nav className="absolute flex w-md justify-self-center items-center justify-between flex-wrap brightness-90 bg-gray-700/40 from-black to-gray-700 border border-gray-400/60 shadow-2xs shadow-white drop-shadow-xs drop-shadow-white/15 rounded-2xl p-2">
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
        <Route path='/' element={<HomePage />} />
        <Route path='/teamSelect' element={<TeamSelect />} />
        <Route path='/prediction' element={<PredictionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
