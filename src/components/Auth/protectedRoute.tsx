import { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

const ProtectedRoute: FC<RouteProps> = (props) => {
  const auth = window.localStorage.getItem("authToken");
  if (auth) {
    return <Route {...props} />;
  } else {
    return (
      <Route>
        <Redirect to="/login" />
      </Route>
    );
  }
};

export default ProtectedRoute;
