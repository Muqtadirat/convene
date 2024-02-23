import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import "./styles/globals.css";
import "./styles/variables.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <Router>
        <App />
      </Router>
    </MantineProvider>
  </React.StrictMode>
);
