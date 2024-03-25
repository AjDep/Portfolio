
import Home from './Pages/HomePage/home'; // Corrected filename
import '../src/App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
