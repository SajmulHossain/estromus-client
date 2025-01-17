import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import AddMovies from "../pages/AddMovies";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivetRoute from "./PrivetRoute";
import Error from "../pages/Error";
import Details from "../components/Details";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import EditMovie from "../components/EditMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/add_movies",
        element: (
          <PrivetRoute>
            <AddMovies />
          </PrivetRoute>
        ),
      },
      {
        path: "/favorites",
        element: (
          <PrivetRoute>
            <Favorites />
          </PrivetRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/details/:id",
        element: (
            <Details />
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <EditMovie />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
