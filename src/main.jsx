import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/index.jsx";
import Login from "./pages/Auth/Login.jsx";
import "./style/index.css";
import Register from "./pages/Auth/Register.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/masuk" element={<Login />} />
          <Route path="/daftar" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  </StrictMode>
);
