import { TRoutes } from "../types";

export const DARK_THEME_CLASS_NAME = "bp4-dark";
export const INVALID_VAR_NAME_PATTERN = /(?!-)\W+/g;
export const ROUTES_MAP: { [key in TRoutes]: string } = {
  "HOME": "/",
  "VARS": "variables",
  "TEMPLATE": "template",
  "OUTPUT": "output"
};
