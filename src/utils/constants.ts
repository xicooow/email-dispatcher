import { TRoutes } from "../types";

export const DARK_THEME_CLASS_NAME = "bp3-dark";
export const ROUTES_MAP: { [key in TRoutes]: string } = {
  "HOME": "/",
  "VARS": "variables",
  "TEMPLATE": "template",
  "OUTPUT": "output"
};
