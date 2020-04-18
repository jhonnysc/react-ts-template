import React from "react";
import { RouteProps } from "./types";
import { Route } from "react-router-dom";

export default function RouteWrapper({
  path,
  component,
  exact,
  isPrivate,
}: RouteProps) {
  return (
    <Route
      path={path}
      component={component}
      exact={exact}
      private={isPrivate}
    />
  );
}
