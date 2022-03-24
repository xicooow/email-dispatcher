import { FunctionComponent } from "react";

import { TVariable } from "../../types";

const Variables: FunctionComponent<VariablesProps> = ({
  listIndex,
  variables
}) => {
  const renderVariable = (variable: TVariable, index: number): JSX.Element => {
    return (
      <ul key={index}>
        <li>Index: {index}</li>
        <li>Name: {variable.name}</li>
        <li>Value: {variable.value}</li>
      </ul>
    );
  };

  return (
    <>
      <div>Variables index: {listIndex}</div>
      {variables.map((variable: TVariable, index: number) => {
        return renderVariable(variable, index);
      })}
    </>
  );
};

export type VariablesProps = {
  listIndex: number;
  variables: TVariable[]
};
export default Variables;
