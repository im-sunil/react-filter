import React from "react";
import { render } from "react-dom";
import Search from "./Search";

const App = () => (
  <div>
    <Search />
  </div>
);

render(<App />, document.getElementById("root"));
