import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Fotter from "./components/Footer";
// import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import "../index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestuarantDetails from "./components/RestuarantDetails";
import { lazy, Suspense } from "react";
const About = lazy(() => import("./components/About.js"));
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Fotter />
    </>
  );
};
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
      {
        path: "/restuarant/:id",
        element: <RestuarantDetails />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
// root.render(<Profile />);
