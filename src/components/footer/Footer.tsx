import ReactDOM from "react-dom";
import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  const footerDOM = document.getElementById("footer");

  return (
    <>
      {
        footerDOM &&
        ReactDOM.createPortal(
          <div className="font-large">
            Francisco Neto <a href="https://github.com/xicooow" target="_blank" rel="noreferrer">@Github</a> - {new Date(Date.now()).getFullYear()}
          </div>,
          footerDOM
        )
      }
    </>
  );
};

export default Footer;
