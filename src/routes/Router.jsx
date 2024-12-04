import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import AddMovies from '../pages/AddMovies'
import Favorite from '../pages/Favorite'
import Login from "../pages/Login";
import Register from "../pages/Register";



const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/movies',
      element: <Movies />
    },
    {
      path: '/add_movies',
      element: <AddMovies />
    },
    {
      path: '/favorites',
      element: <Favorite />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ]
}])

export default router;