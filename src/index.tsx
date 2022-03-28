import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { FocusStyleManager } from "@blueprintjs/core";
FocusStyleManager.onlyShowFocusOnTabs();

import Store from "./store";
import App from "./components/app/App";

import "./index.scss";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Store>
        <App />
      </Store>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
