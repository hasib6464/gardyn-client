import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { logOut, user } = use(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allPlants">All Plants</NavLink>
      </li>
      <li>
        <NavLink to="/addPlant">Add Plant</NavLink>
      </li>
      <li>
        <NavLink to="/myPlants">My Plants</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar  shadow-sm px-6  ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navMenu}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gardyn</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div
                className="avatar mr-5 tooltip tooltip-bottom"
                data-tip={user.email}
              >
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-outline btn-primary"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline btn-primary">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
