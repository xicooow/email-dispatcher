import { ChangeEvent, FunctionComponent, useState } from "react";
import { ControlGroup, FormGroup, InputGroup, NonIdealState } from "@blueprintjs/core";

import Variable from "./Variable";
import { AppToaster } from "../toaster";
import { TVariable } from "../../types";
import { useStore } from "../../store";
import { getVariablesNames } from "../../store/selector";
import { ADD_VARIABLE, UPDATE_VARIABLE_LIST_NAME } from "../../store/actions";
import { INVALID_VAR_NAME_PATTERN } from "../../utils/constants";

const Variables: FunctionComponent<VariablesProps> = ({
  listIndex,
  variables
}) => {
  const { dispatch } = useStore();
  const variablesNames = getVariablesNames();

  const [newVarName, setNewVarName] = useState<string>("");
  const [newVarValue, setNewVarValue] = useState<string>("");

  const clearInputs = () => {
    setNewVarName("");
    setNewVarValue("");
  };

  const validate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    if (!newVarName || !newVarValue) {
      AppToaster.show({
        message: "New variable must have \"Name\" and \"Value\"!",
        icon: "warning-sign",
        intent: "warning"
      });
      return;
    }

    if (INVALID_VAR_NAME_PATTERN.test(newVarName)) {
      AppToaster.show({
        message: "Variables \"Name\" should not have spaces or special characters!",
        icon: "warning-sign",
        intent: "warning"
      });
      return;
    }

    dispatch({
      type: ADD_VARIABLE,
      payload: {
        index: listIndex,
        name: newVarName,
        value: newVarValue
      }
    });

    clearInputs();
  };

  return (
    <>
      <div className="variables-container">
        <FormGroup
          subLabel="Edit the name of the list"
        >
          <InputGroup
            fill
            round
            leftIcon="bookmark"
            placeholder="List name"
            value={variablesNames[listIndex]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: UPDATE_VARIABLE_LIST_NAME,
                payload: {
                  index: listIndex,
                  value: e.target.value
                }
              });
            }}
          />
        </FormGroup>
        <FormGroup
          subLabel="Provide name and value then press Enter to add new variable"
        >
          <ControlGroup className="variables-inputs">
            <InputGroup
              round
              maxLength={20}
              leftIcon="variable"
              placeholder="Name"
              value={newVarName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setNewVarName(e.target.value)}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => validate(e)}
            />
            <InputGroup
              fill
              round
              leftIcon="highlight"
              placeholder="Value"
              className="variables-value-input"
              value={newVarValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setNewVarValue(e.target.value)}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => validate(e)}
            />
          </ControlGroup>
        </FormGroup>
      </div>
      <h2>Variables</h2>
      {
        variables.length === 0
          ? (
            <NonIdealState
              icon="moon"
              className="font-large"
              description="There are no variables to list, add some in the form above"
            />
          )
          : (
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
          )
      }
    </>
  );
};

export type VariablesProps = {
  listIndex: number;
  variables: TVariable[]
};
export default Variables;
