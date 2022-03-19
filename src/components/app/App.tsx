import { FunctionComponent } from "react";

import Navigator from "../navigator";
import MainRouter from "../router";

import { DARK_THEME_CLASS_NAME } from "../../utils/constants";

const App: FunctionComponent = () => {
  return (
    <div className={DARK_THEME_CLASS_NAME}>
      <Navigator />
      <MainRouter />
    </div>
  );
};

export default App;
