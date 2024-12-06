import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import AddMovies from '../pages/AddMovies'
import Favorite from '../pages/Favorite'
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivetRoute from "./PrivetRoute";
import Error from "../pages/Error";
import Details from "../components/Details";



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
        loader: () =>
          fetch("https://ph-assignment-10-server-gray.vercel.app/movies"),
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
            <Favorite />
          </PrivetRoute>
        ),
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
          <PrivetRoute>
            <Details />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/movies/${params.id}`),
      },
    ],
  },
]);

export default router;