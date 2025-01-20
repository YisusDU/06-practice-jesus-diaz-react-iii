import React from "react";
import { Routes, Route } from "react-router-dom";
import Continents from "./components/Continents/index.tsx";
import CountryList from "./components/CountryList/index.tsx";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/continents" element ={<Continents />} />
      </Routes>
    </div>
  );
}

export default App;
