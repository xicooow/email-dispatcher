import { FunctionComponent } from "react";

import Navigator from "../navigator";
import MainRouter from "../router";
import Footer from "../footer";

import { DARK_THEME_CLASS_NAME } from "../../utils/constants";

const App: FunctionComponent = () => {
  return (
    <>
      <div className={DARK_THEME_CLASS_NAME}>
        <Navigator />
        <MainRouter />
      </div>
      <Footer />
    </>
  );
};

export default App;
