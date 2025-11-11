import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import TeamSelect from './pages/TeamSelectPage';


function App() {
  return (
    <Router>
      <nav class="flex items-center justify-between flex-wrap bg-teal-500/95 rounded-2xl border border-teal-400 shadow-xl shadow-teal-500 p-6">
        <div class="inline-flex items-center shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight mr-3.5">BasketballAI</span>
        </div>
        <div class="fixed right-0 w-full">
          <div class="text-sm lg:grow font-bold space-x-3">
            <Link to="/">Home</Link>
            <Link to="/teamSelect">Select Teams</Link>
          </div>
        </div>
      </nav>

      <nav className="">
        
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teamSelect' element={<TeamSelect />} />
      </Routes>
    </Router>
  );
}

export default App;
