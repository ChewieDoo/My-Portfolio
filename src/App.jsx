import HomePage from "./components/HomePage";
import Gallery from "./components/Gallery";
import Resume from "./components/Resume";
import ZaraCaseStudy from "./components/content/Zara";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/frictionless' element={<ZaraCaseStudy />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
