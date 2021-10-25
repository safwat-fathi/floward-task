import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/auth/authSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

export default function Nav() {
  const userState = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <nav>
      <ul className="container">
        <ul className="nav-menu">
          {!userState.isLoggedIn && (
            <li>
              <NavLink to="/login" activeClassName="active">
                Login
              </NavLink>
            </li>
          )}
          {userState.isLoggedIn && (
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
          )}
          {/* {userState.isLoggedIn && (
            <li>
              <NavLink to="/details" activeClassName="active">
                Details
              </NavLink>
            </li>
          )} */}
        </ul>

        {userState.isLoggedIn && (
          <li className="dropdown">
            <FontAwesomeIcon icon={faBars} />
            <ul className="user-menu">
              <li>{userState.email}</li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Logout
              </li>
            </ul>
          </li>
        )}
      </ul>
    </nav>
  );
}
