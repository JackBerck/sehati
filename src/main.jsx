import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/index.jsx";
import Login from "./pages/Auth/Login.jsx";
import "./style/index.css";
import Register from "./pages/Auth/Register.jsx";
import About from "./pages/About.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/masuk" element={<Login />} />
          <Route path="/daftar" element={<Register />} />
          <Route path="/tentang-kami" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  </StrictMode>
);
