import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import AboutUs from "./src/components/AboutUs.js";
import { Error } from "./src/components/Error.js";
import ContactUs from "./src/components/ContactUs.js";

const AppLayout = () => {
  console.log(<Body />);
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
