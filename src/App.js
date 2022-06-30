import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CharacterFilter from "./components/CharacterFilter";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="" element={<LandingPage />} />
            <Route path="results" element={<CharacterFilter/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
