import { TAction, TAddVarPayload, TEditVarPayload, TState } from "../types";

const addVariable = (newState: TState, { name, value, listIndex }: TAddVarPayload) => {
  const variablesListLength = newState.variables[listIndex].length;
  newState.variables[listIndex].push({
    id: `${variablesListLength + 1}`,
    name: name,
    value: value
  });

  return newState;
};

const editVariable = (newState: TState, { name, value, listIndex, variableIndex }: TEditVarPayload) => {
  newState.variables[listIndex][variableIndex].name = name;
  newState.variables[listIndex][variableIndex].value = value;
  return newState;
};

const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case "add-variable":
      return addVariable(
        { ...state },
        action.payload
      );
    case "edit-variable":
      return editVariable(
        { ...state },
        action.payload
      );
    default:
      return state;
  }
};

export default reducer;
