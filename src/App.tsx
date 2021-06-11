import { FC } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./components/Auth";
import ProtectedRoute from "./components/Auth/protectedRoute";

const App: FC = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <ProtectedRoute path="*">
        <Layout />
      </ProtectedRoute>
    </Switch>
  </Router>
);

export default App;
