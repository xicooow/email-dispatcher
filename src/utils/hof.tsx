import { FunctionComponent } from "react";

export const withMain = (Element: FunctionComponent): JSX.Element => {
  return (
    <div className="main-content">
      <Element />
    </div>
  );
};
