import React from "react";
import { Redirect, Route } from "react-router-dom";

// redux
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const userState = useSelector(selectUser);

  return (
    <Route
      {...restOfProps}
      render={(props) => {
        return userState.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default ProtectedRoute;
