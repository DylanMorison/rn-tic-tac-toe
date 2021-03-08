import React, { ReactElement } from "react";
import AppBootstrap from "./app/AppBootstrap";
import Navigator from "./config/navigator";

const App = (): ReactElement => {
  return (
    <AppBootstrap>
      <Navigator />
    </AppBootstrap>
  );
};

export default App;
