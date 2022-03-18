import { FunctionComponent } from "react";

import RootRoutes from "../../routes";
import Navigator from "../navigator";

const App: FunctionComponent = () => {
  return (
    <section className="bp3-dark">
      <Navigator />
      <RootRoutes />
    </section>
  );
};

export default App;
