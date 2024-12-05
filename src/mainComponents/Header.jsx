import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../contextProvider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('logging out');
    logout().then(() => {
      navigate('/login');
    })
    .catch(err=> {
      console.log(err.code);
    })
  }



  const links = <>
    <li>
      <NavLink to='/'>Home</NavLink>
    </li>
    <li>
      <NavLink to='/movies'>All Movies</NavLink>
    </li>
    <li>
      <NavLink to='/add_movies'>Add Movies</NavLink>
    </li>
    <li>
      <NavLink to='/favorites'>My Favorites</NavLink>
    </li>
  </>
  return (
    <header className="max-w-screen-xl mx-auto px-4">
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="font-bold text-xl ml-2 lg:ml-0">
            Estromus
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
          <div>
            {user ? (
              <img src={user?.photoURL} className="h-10 w-10 rounded-full" alt={`${user.displayName}'s photo`} />
            ) : (
              <FaRegUserCircle size={30} />
            )}
          </div>
          <div>
            {user ? (
              <button onClick={handleLogout} className="btn">
                Log Out
              </button>
            ) : (
              <Link to="/login" className="btn">
                Log in
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;