import React from "react";
import { useHistory, NavLink } from "react-router-dom";

import useUserState from "../../hooks/user.hook";

// import { useSelector, useDispatch } from "react-redux";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from "./navSlice";

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
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/details" activeClassName="active">
              Details
            </NavLink>
          </li>
        </ul>

        <li className="dropdown">
          Menu
          <ul className="user-menu">
            <li>Name</li>
            <li style={{ cursor: "pointer" }} onClick={logout}>
              Logout
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
