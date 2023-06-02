import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Menu from "./Components/Pages/Menu";
import Shop from "./Components/Pages/Shop";

function App() {
  return (
    <div>
      <Router>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/Contact" element={<Contact />} />
              <Route exact path="/Menu" element={<Menu />} />
              <Route exact path="/Shop" element={<Shop />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
