import React from "react";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage"
import { ToastContainer } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Routes>
            <Route path="/properties" element={<PropertiesPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
