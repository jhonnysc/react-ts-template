import { ComponentType } from "react";

export interface RouteProps {
  path: string;
  component: ComponentType;
  exact?: boolean;
  isPrivate?: boolean;
}
