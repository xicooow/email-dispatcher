import { IconName } from "@blueprintjs/core";

export type TState = {
  variables: TVariable[][],
  template: string,
  output: string[]
};

export type TVariable = {
  id: string,
  name: string,
  value: string
};

export type TVariablesIndex = {
  listIndex: number,
  variableIndex: number
};

export type TUpdateTemplatePayload = { value: string };

export type TAction =
  | { type: "add-variable", payload: TAddVarPayload }
  | { type: "remove-variable", payload: TRemoveVarPayload }
  | { type: "edit-variable", payload: TEditVarPayload }
  | { type: "update-template", payload: TUpdateTemplatePayload }
  | { type: "update-output" };

export type TStoreContext = {
  state: TState,
  dispatch: React.Dispatch<TAction>
};

export type TNavigatorItem = {
  icon: IconName,
  text: string,
  dest: string
};

export type TRoutes = "HOME" | "VARS" | "TEMPLATE" | "OUTPUT";
export type TAddVarPayload = Omit<TVariablesIndex, "variableIndex"> & Omit<TVariable, "id">;
export type TRemoveVarPayload = TVariablesIndex & Omit<TVariable, "name" | "value">;
export type TEditVarPayload = TVariablesIndex & Omit<TVariable, "id">;
