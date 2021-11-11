import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Navigation.css";

/** Navigation bar for site. Shows up on every page.
 *
 * When user is logged in, shows links to main areas of site. When not,
 * shows link to Login and Signup forms.
 *
 * Rendered by App.
 */

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);

  function loggedInNav() {
    return (
        <ul className="navbar-nav">
          <li className="nav-item mr-4">
            <NavLink className="nav-link-logged-in" to="/famousquotes">
              Famous Quotes
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link-logged-in" to="/famousauthors">
              Famous Authors
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link-logged-in" to="/quoteoftheday">
              Quote of the Day
            </NavLink>
          </li>
          {/* <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/quotelist">
              Quote List
            </NavLink>
          </li> */}
          <li className="nav-item mr-4">
            <NavLink className="nav-link-logged-in" to="/communityquotes">
              Community Quotes
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link-logged-in" to="/profile">
              Profile
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link-logged-in" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link-logged-in" to="/" onClick={logout}>
              Log out {currentUser.first_name || currentUser.username}
            </Link>
          </li>
        </ul>
    );
  }

  function loggedOutNav() {
    return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item-logged-out">
            <NavLink className="nav-link" to="/quoteoftheday">
              Quote of The Day
            </NavLink>
          </li>
          <li className="nav-item-logged-out">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item-logged-out">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item-logged-out">
            <NavLink className="nav-link" to="/signup">
              Sign Up
            </NavLink>
          </li>
        </ul>
    );
  }

  return (
      <nav className="Navigation navbar navbar-expand-md">
        <Link className="navbar-brand" to="/">
          Quotable
        </Link>
        {currentUser ? loggedInNav() : loggedOutNav()}
      </nav>
  );
}

export default Navigation;
