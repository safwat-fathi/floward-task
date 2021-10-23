import React from "react";
import { Redirect, Route } from "react-router-dom";

import useUserState from "../../hooks/user.hook";

const ProtectedRoute = ({ component, ...restOfProps }) => {
  const [user] = useUserState();

  return (
    <Route
      {...restOfProps}
      render={(props) => {
        return user ? <component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

export default ProtectedRoute;
