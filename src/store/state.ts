import { TState } from "../types";

const initialState: TState = {
  variables: [
    [
      { id: "1-name", name: "name", value: "World" }
    ]
  ],
  variablesNames: [
    "Placeholder"
  ],
  template: "Hello ${name}!",
  output: [
    "Hello World!"
  ]
};

export default initialState;
