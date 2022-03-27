import { FunctionComponent } from "react";
import { Icon } from "@blueprintjs/core";

import { TVariable } from "../../types";

const Variable: FunctionComponent<VariableProps> = ({
  // listIndex,
  varIndex,
  variable
}) => {
  return (
    <code className="variable-container font-large">
      <div className="variable-item">
        {`${varIndex + 1}. `}{variable.name}{" => "}{variable.value}
      </div>
      <div className="variable-actions">
        <Icon icon="edit" />
        <span className="variable-spacer" />
        <Icon icon="cross" />
      </div>
    </code>
  );
};

export type VariableProps = {
  varIndex: number;
  listIndex: number;
  variable: TVariable
};
export default Variable;
