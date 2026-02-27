import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      fallback={
        <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom, #4c1d95, #000)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Arial, sans-serif" }}>
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Aman Sinha</h1>
            <p style={{ fontSize: "1.2rem", opacity: 0.8 }}>Portfolio is loading... Please refresh the page.</p>
          </div>
        </div>
      }
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
