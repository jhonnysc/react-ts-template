import React from "react";
import { Switch, Router } from "react-router-dom";
import RouteWrapper from "./route";
import Home from "../containers/home";
import history from "../services/history";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <RouteWrapper path={"/"} component={Home} isPrivate exact />
      </Switch>
    </Router>
  );
}
