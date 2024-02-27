import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Layout from "./components/Layout/Layout.jsx";
// import HomePage from "./pages/HomePage.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
