"use client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landingpage from "./landingpage";
import Web from "./web";
import About from "./about";

export default function Home() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landingpage />,
    },
    {
      path: "/home",
      element: <Web />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return <RouterProvider router={router} />;
}
