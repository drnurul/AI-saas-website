import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Instacaption from "./Components/Instacaption";
import Paragraph from "./Components/Paragraph";
import Main from "./Components/Main";

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/instacaption" element={<Instacaption />} /> 
          <Route path="/paragraph" element={<Paragraph/>} />
          <Route path="/main" element={<Main/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
