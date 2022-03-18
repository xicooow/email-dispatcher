import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../components/home";
import Variables from "../components/variables";
import Template from "../components/template";
import Output from "../components/output";

import { withMain } from "../utils/hof";

const MainHome = withMain(Home);
const MainVariables = withMain(Variables);
const MainTemplate = withMain(Template);
const MainOutput = withMain(Output);

const RootRoutes: FunctionComponent = () => {
  return (
    <Routes>
      <Route path={ROUTES_MAP.HOME} element={MainHome} />
      <Route path={ROUTES_MAP.VARS} element={MainVariables} />
      <Route path={ROUTES_MAP.TEMPLATE} element={MainTemplate} />
      <Route path={ROUTES_MAP.OUTPUT} element={MainOutput} />
    </Routes>
  );
};

type IRouteMap = "HOME" | "VARS" | "TEMPLATE" | "OUTPUT";

export const ROUTES_MAP: { [route in IRouteMap]: string } = {
  "HOME": "/",
  "VARS": "vars",
  "TEMPLATE": "template",
  "OUTPUT": "output"
};

export default RootRoutes;
