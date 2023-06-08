import React from 'react';
import { Route,Routes, Link } from "react-router-dom";

import Home from './home';
import About from './about';
import Project from './project';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      { <Route path="/projects" element={<projects />} />}
    </Routes>
  );
}

export default App;
