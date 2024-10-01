import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import router from "./routes/routes.jsx";
import { RouterProvider } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  </StrictMode>
);
