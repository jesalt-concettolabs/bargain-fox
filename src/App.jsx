import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
// import WhishList from "./pages/WhishList";

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
        path: "",
        children: [
          {
            path: ":categoryId?/:subCategoryId?/:collectionId?/:sort_by?",
            element: <ProductListing />,
          },
        ],
      },
      {
        path: "/product-detail",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/search-result",
        element: <ProductListing />,
      },
      // {
      //   path: "/wishlist",
      //   element: <WhishList />,
      // },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
