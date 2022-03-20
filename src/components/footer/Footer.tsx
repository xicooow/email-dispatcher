import ReactDOM from "react-dom";
import { FunctionComponent } from "react";

import { DARK_THEME_CLASS_NAME } from "../../utils/constants";

const Footer: FunctionComponent = () => {
  const footerDOM = document.getElementById("footer");

  return (
    <>
      {
        footerDOM &&
        ReactDOM.createPortal(
          <div className={`${DARK_THEME_CLASS_NAME} font-large`}>
            Francisco Neto <a href="https://github.com/xicooow" target="_blank" rel="noreferrer">@Github</a> - {new Date(Date.now()).getFullYear()}
          </div>,
          footerDOM
        )
      }
    </>
  );
};

export default Footer;
