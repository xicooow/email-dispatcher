import { FunctionComponent } from "react";
import { Button, Classes, ControlGroup, FormGroup } from "@blueprintjs/core";

import { useStore } from "../../store";
import { withDialog } from "../../utils/hof";
import { REMOVE_VARIABLE } from "../../store/actions";
import { TRemoveVarPayload } from "../../types";

const DialogWrapper = withDialog();

const DeleteVariableDialog: FunctionComponent<DeleteVariableDialogProps> = ({
  id,
  name,
  index,
  close,
  isOpen
}) => {
  const { dispatch } = useStore();

  return (
    <DialogWrapper
      isOpen={isOpen}
      onClose={close}
      title="Delete Variable"
    >
      <div className={Classes.DIALOG_BODY}>
        Are you sure you want to delete variable {`"${name}"`}?
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <FormGroup>
          <ControlGroup className="delete-dialog-buttons">
            <Button onClick={close}>
              Cancel
            </Button>
            <Button
              intent="danger"
              onClick={() => {
                dispatch({
                  type: REMOVE_VARIABLE,
                  payload: { id, index }
                });

                setTimeout(close, 100);
              }}
            >
              Yes
            </Button>
          </ControlGroup>
        </FormGroup>
      </div>
    </DialogWrapper>
  );
};

export type DeleteVariableDialogProps = TRemoveVarPayload & {
  name: string,
  isOpen: boolean,
  close: () => void,
};
export default DeleteVariableDialog;
