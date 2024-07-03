import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import AboutUs from "./src/components/AboutUs.js";
import RestaurantMenu from "./src/components/RestaurantMenu.js";
import { Error } from "./src/components/Error.js";
import ContactUs from "./src/components/ContactUs.js";
import Shimmer from "./src/utils/Shimmer.js";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore.js";
import Cart from "./src/components/Cart.js";

const Grocery = lazy(() => import("./src/components/Grocery.js"));

const AppLayout = () => {
  // console.log(<Body />);
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
