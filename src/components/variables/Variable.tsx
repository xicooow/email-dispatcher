import { FunctionComponent } from "react";
import { Icon } from "@blueprintjs/core";
import { Tooltip2 } from "@blueprintjs/popover2";

import { TVariable } from "../../types";

const Variable: FunctionComponent<VariableProps> = ({
  // listIndex,
  varIndex,
  variable
}) => {
  const { name, value } = variable;

  return (
    <code className="variable-container font-large">
      <div className="variable-item">
        {`${varIndex + 1}. `}({name}{" => "}{value})
      </div>
      <div className="variable-actions">
        <Tooltip2
          minimal
          content={`Edit variable "${name}"`}
          position="top"
        >
          <Icon icon="edit" />
        </Tooltip2>
        <span className="variable-spacer" />
        <Tooltip2
          minimal
          content={`Delete variable "${name}"`}
          position="top"
        >
          <Icon icon="cross" />
        </Tooltip2>
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
