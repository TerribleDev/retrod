import React from "react";
import { Provider } from "react-redux";
import setupStore from "./store/setupStore.js";

function App() {
  return (
    <Provider store={setupStore()}>
      <div>Yoooooo</div>
    </Provider>
  );
}

export default App;
