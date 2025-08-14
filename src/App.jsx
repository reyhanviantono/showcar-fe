import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TentangKami from "./pages/TentangKamiPage";

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<AboutPage />} />
        <Route path="/register/users" element={<RegisterPage />} />
        <Route path="/login/users" element={<LoginPage />} />
        <Route path="/tentang-kami" element={<TentangKami />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
