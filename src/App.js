import React from "react";
import { Provider } from "react-redux";
import Boxes from "./boxes/Boxes";
import styles from "./App.module.css";
import setupStore from "./store/setupStore.js";

function App() {
  return (
    <Provider store={setupStore()}>
      <div className={styles.grid}>
        <Boxes sectionName={"What Went Well"} />
        <Boxes sectionName={"What Could Be Better"} />
        <Boxes sectionName={"Questions"} />
      </div>
    </Provider>
  );
}

export default App;
