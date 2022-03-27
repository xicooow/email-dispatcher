import { FunctionComponent } from "react";

import Variable from "./Variable";
import { TVariable } from "../../types";

const Variables: FunctionComponent<VariablesProps> = ({
  listIndex,
  variables
}) => {
  return (
    <>
      {
        variables.map((variable: TVariable, index: number) => {
          return (
            <Variable
              key={`var-${index}`}
              variable={variable}
              listIndex={listIndex}
              varIndex={index}
            />
          );
        })
      }
    </>
  );
};

export type VariablesProps = {
  listIndex: number;
  variables: TVariable[]
};
export default Variables;
