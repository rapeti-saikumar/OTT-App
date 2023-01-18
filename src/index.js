import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "./CSS/index.css";
import "./CSS/Navbar.css";
import "./CSS/MainPage.css";
import "./CSS/Details.css";
import "./CSS/Login.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
