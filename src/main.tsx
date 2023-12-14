import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound.tsx";
import Home from "./components/layout/Home.tsx";
import Analysis from "./pages/Analysis.tsx";
import Counsel from "./pages/Counsel.tsx";
import Test from "./pages/Test.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "Analysis", element: <Analysis /> },
      { path: "Counsel", element: <Counsel /> },
      { path: "Test", element: <Test /> },

      // { path: "/contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
