import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import PromoModal from "./pages/PromoModal";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/promomodal" element={<PromoModal />} />
      </Routes>

      {/* Only display the following components on the home page */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/" element={<Features />} />
        <Route path="/" element={<Reviews />} />
        <Route path="/" element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;
