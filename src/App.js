import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import "./css/style.css"
import NationalSearch from "./components/NationalSearch";
import InternationalSearch from "./components/InternationalSearch"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nationalScholarship" element={<NationalSearch />} />
          <Route path="/internationalScholarship" element={<InternationalSearch />} />
          <Route path="/messageUs" element={<div className="test-class">
            Hello Oral
          </div>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;