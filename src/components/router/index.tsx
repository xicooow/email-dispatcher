import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../home";
import VariablesList from "../variables";
import Template from "../template";
import Output from "../output";

import { withMain } from "../../utils/hof";
import { ROUTES_MAP } from "../../utils/constants";

const MainHome = withMain(Home);
const MainVariablesList = withMain(VariablesList);
const MainTemplate = withMain(Template);
const MainOutput = withMain(Output);

const MainRouter: FunctionComponent = () => {
  return (
    <Routes>
      <Route path={ROUTES_MAP.HOME} element={<MainHome />} />
      <Route path={ROUTES_MAP.VARS} element={<MainVariablesList />} />
      <Route path={ROUTES_MAP.TEMPLATE} element={<MainTemplate />} />
      <Route path={ROUTES_MAP.OUTPUT} element={<MainOutput />} />
    </Routes>
  );
};

export default MainRouter;
