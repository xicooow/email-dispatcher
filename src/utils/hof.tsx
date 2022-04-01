import { FunctionComponent } from "react";
import { Dialog, DialogProps } from "@blueprintjs/core";

export const withMain = (Element: FunctionComponent) => {
  const MainComponent: FunctionComponent = ({ children }) => {
    return (
      <div className="main-content">
        <section className="container">
          <section className="wrapper">
            <Element>
              {children}
            </Element>
          </section>
        </section>
      </div>
    );
  };

  return MainComponent;
};

export const withDialog = () => {
  const MainDialog: FunctionComponent<DialogProps> = ({ children, ...props }) => {
    return (
      <Dialog
        /* default props */
        icon="info-sign"
        transitionDuration={250}
        canEscapeKeyClose={false}
        canOutsideClickClose={false}
        shouldReturnFocusOnClose={false}
        {...props}
      >
        {children}
      </Dialog>
    );
  };

  return MainDialog;
};
