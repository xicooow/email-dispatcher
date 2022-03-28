import { TState } from "../types";

const initialState: TState = {
  variables: [
    [
      { id: "1-variable-name", name: "variable-name", value: "Dummy Variable" }
    ]
  ],
  variablesNames: [
    "Change me"
  ],
  template: "This is the template for the ${variable-name}!",
  output: [
    "This is the template for the Dummy Variable!"
  ]
};

export default initialState;
