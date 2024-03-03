import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import "./styles/globals.css";
import "./styles/variables.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
      <Router>
        <App />
      </Router>
    </MantineProvider>
  </React.StrictMode>
);
