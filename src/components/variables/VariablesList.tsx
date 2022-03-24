import { FunctionComponent } from "react";

import { getVariables } from "../../store/selector";
import { TVariable } from "../../types";

import Variables from "./Variables";

const VariablesList: FunctionComponent = () => {
  const variablesList = getVariables();

  return (
    <>
      {variablesList.map((variables: TVariable[], index: number) => {
        return (
          <Variables
            key={index}
            listIndex={index}
            variables={variables}
          />
        );
      })}
    </>
  );
};

export default VariablesList;
