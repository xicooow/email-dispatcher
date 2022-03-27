import initialState from "./state";
import {
  TState,
  TAction,
  TVariable,
  TAddVarPayload,
  TEditVarPayload,
  TRemoveVarPayload,
  TUpdateTemplatePayload,
  TRemoveVarListPayload
} from "../types";
import {
  ADD_VARIABLE,
  EDIT_VARIABLE,
  REMOVE_VARIABLE,
  ADD_VARIABLE_LIST,
  REMOVE_VARIABLE_LIST,
  UPDATE_TEMPLATE
} from "../store/actions";

const addVariable = (newState: TState, { name, value, index }: TAddVarPayload) => {
  const variablesListLength = newState.variables[index].length;
  newState.variables[index].push({
    id: `${variablesListLength + 1}`,
    name: name,
    value: value
  });

  return { ...newState };
};

const editVariable = (newState: TState, { name, value, index, varIndex }: TEditVarPayload) => {
  newState.variables[index][varIndex].name = name;
  newState.variables[index][varIndex].value = value;
  return { ...newState };
};

const removeVariable = (newState: TState, { id, index }: TRemoveVarPayload) => {
  newState.variables[index] = newState.variables[index].filter((value: TVariable) => value.id !== id);
  return { ...newState };
};

const addVariableList = (newState: TState) => {
  newState.variables.push([]);
  newState.variablesNames.push("New...");
  const newVar: TAddVarPayload = {
    index: (newState.variables.length - 1),
    name: "new-name",
    value: "New value"
  };
  return addVariable(newState, newVar);
};

const removeVariableList = (newState: TState, { index }: TRemoveVarListPayload) => {
  newState.variables.splice(index, 1);
  newState.variablesNames.splice(index, 1);
  return { ...newState };
};

const updateTemplate = (newState: TState, { value }: TUpdateTemplatePayload) => {
  return {
    ...newState,
    template: value
  };
};

const reducer = (state: TState = initialState, action: TAction): TState => {
  switch (action.type) {
    case ADD_VARIABLE:
      return addVariable(
        { ...state },
        action.payload
      );
    case EDIT_VARIABLE:
      return editVariable(
        { ...state },
        action.payload
      );
    case REMOVE_VARIABLE:
      return removeVariable(
        { ...state },
        action.payload
      );
    case ADD_VARIABLE_LIST:
      return addVariableList({ ...state });
    case REMOVE_VARIABLE_LIST:
      return removeVariableList(
        { ...state },
        action.payload
      );
    case UPDATE_TEMPLATE:
      return updateTemplate(
        { ...state },
        action.payload
      );
    default:
      return state;
  }
};

export default reducer;
