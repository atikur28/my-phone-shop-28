import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Favorites from "../Favorites/Favorites";
import Login from "../Login/Login";
import PhoneDetails from "../Home/PhoneDetails";

const createdRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("/phones.json"),
        element: <Home></Home>,
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/phones/:id",
        loader: () => fetch("/phones.json"),
        element: <PhoneDetails></PhoneDetails>,
      },
    ],
  },
]);

export default createdRouter;
