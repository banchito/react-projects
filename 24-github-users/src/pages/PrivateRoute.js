import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...otherProps }) => {
  const { isAutenticated: isAuthenticated, user } = useAuth0();
  const isLoggedIn = isAuthenticated && user;
  return (
    <Route
      {...otherProps}
      render={() => {
        return isLoggedIn ? children : <Redirect to="/login"></Redirect>;
      }}
    ></Route>
  );
};
export default PrivateRoute;
