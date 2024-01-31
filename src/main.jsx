import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("/service-worker.js", { scope: "/" })
//     .then(() => console.log("Service Worker registered"))
//     .catch((err) => console.log("Service Worker not registered", err));
// }
