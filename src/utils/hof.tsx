import { FunctionComponent } from "react";
import { Text } from "@blueprintjs/core";

export const withMain = (Element: FunctionComponent): JSX.Element => {
  return (
    <div className="main-content">
      <Element />
      <footer>
        <Text className="text-center">
          Francisco Neto <a href="https://github.com/xicooow" target="_blank" rel="noreferrer">@Github</a> - {new Date(Date.now()).getFullYear()}
        </Text>
      </footer>
    </div>
  );
};
