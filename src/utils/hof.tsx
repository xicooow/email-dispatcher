import { FunctionComponent } from "react";

export const withMain = <P,>(Element: FunctionComponent) => {
  const MainComponent: FunctionComponent<P> = ({ children, ...rest }) => {
    return (
      <div className="main-content">
        <Element {...rest}>
          {children}
        </Element>
      </div>
    );
  };

  return MainComponent;
};
