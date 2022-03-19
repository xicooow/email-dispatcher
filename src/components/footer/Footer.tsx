import ReactDOM from "react-dom";
import { FunctionComponent, useEffect } from "react";

import { DARK_THEME_CLASS_NAME } from "../../utils/constants";

const element = document.createElement("div");
element.setAttribute("class", `${DARK_THEME_CLASS_NAME} font-large`);
const footer = document.getElementById("root-footer");

const Footer: FunctionComponent = () => {
  const unmountFC = () => {
    footer?.removeChild(element);
  };

  const mountFC = () => {
    footer?.appendChild(element);
    return unmountFC;
  };

  useEffect(mountFC, []);

  return (
    <>
      {
        ReactDOM.createPortal(
          <>
            Francisco Neto <a href="https://github.com/xicooow" target="_blank" rel="noreferrer">@Github</a> - {new Date(Date.now()).getFullYear()}
          </>,
          element
        )
      }
    </>
  );
};

export default Footer;
