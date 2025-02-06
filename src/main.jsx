import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Layout from "./layouts/index.jsx"
import "./style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Layout>
    </Router>
  </StrictMode>
);
