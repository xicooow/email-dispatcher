import { Dispatch } from "react";
import { IconName } from "@blueprintjs/core";

import {
  ADD_VARIABLE,
  EDIT_VARIABLE,
  REMOVE_VARIABLE,
  ADD_VARIABLE_LIST,
  REMOVE_VARIABLE_LIST,
  UPDATE_VARIABLE_LIST_NAME,
  UPDATE_OUTPUT,
  UPDATE_TEMPLATE
} from "../store/actions";

export type TState = {
  variables: TVariable[][],
  variablesNames: string[],
  template: string,
  output: string[]
};

export type TVariable = {
  id: string,
  name: string,
  value: string
};

export type TVariablesIndex = {
  index: number,
  varIndex: number
};

export type TUpdateTemplatePayload = { value: string };

export type TAction =
  | { type: typeof ADD_VARIABLE, payload: TAddVarPayload }
  | { type: typeof REMOVE_VARIABLE, payload: TRemoveVarPayload }
  | { type: typeof EDIT_VARIABLE, payload: TEditVarPayload }
  | { type: typeof ADD_VARIABLE_LIST }
  | { type: typeof REMOVE_VARIABLE_LIST, payload: TRemoveVarListPayload }
  | { type: typeof UPDATE_VARIABLE_LIST_NAME, payload: TUpdateVarListName }
  | { type: typeof UPDATE_TEMPLATE, payload: TUpdateTemplatePayload }
  | { type: typeof UPDATE_OUTPUT };

export type TStoreContext = {
  state: TState,
  dispatch: Dispatch<TAction>
};

export type TNavigatorItem = {
  icon: IconName,
  text: string,
  dest: string
};

export type TRoutes = "HOME" | "VARS" | "TEMPLATE" | "OUTPUT";
export type TAddVarPayload = Omit<TVariablesIndex, "varIndex"> & Omit<TVariable, "id">;
export type TRemoveVarPayload = Omit<TVariablesIndex, "varIndex"> & Omit<TVariable, "name" | "value">;
export type TRemoveVarListPayload = Omit<TVariablesIndex, "varIndex">;
export type TUpdateVarListName = Omit<TVariablesIndex, "varIndex"> & Omit<TVariable, "id" | "name">;
export type TEditVarPayload = TVariablesIndex & Omit<TVariable, "id">;
