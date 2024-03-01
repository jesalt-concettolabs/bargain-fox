import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product-list",
        element: <ProductListing />,
      },
      {
        path: "/product-detail",
        element: <ProductDetails />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
