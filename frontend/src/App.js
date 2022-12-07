import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import FindBloodCentre from './pages/FindBloodCentre';

function App() {

  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/find-centre" element={<FindBloodCentre />} />
      </Routes>

    </Router>

  );
}

export default App;
