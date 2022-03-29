import { FunctionComponent, useEffect } from "react";

import Header from "../header";
import MainRouter from "../router";
import Footer from "../footer";

import { DARK_THEME_CLASS_NAME } from "../../utils/constants";

const App: FunctionComponent = () => {
  const onMountApp = () => {
    document.body.classList.add(DARK_THEME_CLASS_NAME);
  };

  useEffect(onMountApp, []);

  return (
    <>
      <Header />
      <MainRouter />
      <Footer />
    </>
  );
};

export default App;
