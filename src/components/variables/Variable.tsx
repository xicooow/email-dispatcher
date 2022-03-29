import { FunctionComponent, useState } from "react";
import { Tooltip2 } from "@blueprintjs/popover2";
import { Icon } from "@blueprintjs/core";

import { TVariable } from "../../types";
import DeleteVariableDialog from "../dialogs/DeleteVariableDialog";

const Variable: FunctionComponent<VariableProps> = ({
  listIndex,
  varIndex,
  variable
}) => {
  const { id, name, value } = variable;

  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const closeDeleteDialog = () => setOpenDeleteDialog(false);

  return (
    <>
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
            <Icon icon="cross" onClick={() => setOpenDeleteDialog(!openDeleteDialog)} />
          </Tooltip2>
        </div>
      </code>
      <DeleteVariableDialog
        id={id}
        name={name}
        index={listIndex}
        isOpen={openDeleteDialog}
        close={closeDeleteDialog}
      />
    </>
  );
};

export type VariableProps = {
  varIndex: number;
  listIndex: number;
  variable: TVariable
};
export default Variable;
