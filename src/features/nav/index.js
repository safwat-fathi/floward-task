import React from "react";
import { useHistory, NavLink } from "react-router-dom";

import useUserState from "../../hooks/user.hook";

// import { useSelector, useDispatch } from "react-redux";
// import { } from "./navSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

export default function Nav() {
  const history = useHistory();
  const [user, setUser] = useUserState();

  const logout = () => {
    setUser(false);
    // remove user info
    localStorage.removeItem("user");
    // redirect to login
    history.push("/login");
  };

  return (
    <nav>
      <ul className="container">
        <ul className="nav-menu">
          {!user && (
            <li>
              <NavLink to="/login" activeClassName="active">
                Login
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink to="/details" activeClassName="active">
                Details
              </NavLink>
            </li>
          )}
          <li></li>
        </ul>

        {user && (
          <li className="dropdown">
            <FontAwesomeIcon icon={faBars} />
            <ul className="user-menu">
              <li>{user.email}</li>
              <li style={{ cursor: "pointer" }} onClick={logout}>
                Logout
              </li>
            </ul>
          </li>
        )}
      </ul>
    </nav>
  );
}
