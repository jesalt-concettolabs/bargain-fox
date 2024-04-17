import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import WhishList from "./pages/WhishList";
import Payment from "./pages/Payment";
import ErrorPage from "./pages/ErrorPage";
import YourOrders from "./pages/YourOrders";

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
        path: "/product-lists",
        element: <ProductListing />,
      },
      {
        path: ":categoryId?/:subCategoryId?/:collectionId?/:sort_by?",
        element: <ProductListing />,
      },
      {
        path: "product-detail/:productSlug?/:productId?",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/checkout/address",
        element: <Checkout />,
      },
      {
        path: "/checkout/payment",
        element: <Payment />,
      },
      {
        path: "/search",
        element: <ProductListing />,
      },
      {
        path: "/wishlist",
        element: <WhishList />,
      },
      {
        path: "/your-orders",
        element: <YourOrders />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
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
