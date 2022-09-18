import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"

function App() {
  return(
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
  </Router>
  )
}

export default App;
