import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Collection from "../pages/Collection";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import PlaceOrder from "../pages/PlaceOrder";
import Orders from "../pages/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/collection",
        element: <Collection></Collection>,
      },
      {
        path: "/product/:id",
        element: <Product></Product>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/login",
        element: <Cart></Cart>,
      },
      {
        path: "/place-order",
        element: <PlaceOrder></PlaceOrder>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
    ],
  },
]);

export default router;
