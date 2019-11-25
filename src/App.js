import React, {useState} from "react";
import { Provider } from "react-redux";
import Boxes from "./boxes/Boxes";
import styles from "./App.module.css";
import setupStore from "./store/setupStore.js";

function App() {
  const [sprint, setSprint] = useState(1)
  return (
    <Provider store={setupStore()}>
    <button onClick={() => setSprint(sprint + 1)}>Sprint (+))</button>
    <h3>Sprint {sprint}</h3>
      <div className={styles.grid}>
        <Boxes sectionName={"What Went Well"}  sprint={sprint} boxId={'1'}/>
        <Boxes sectionName={"What Could Be Better"}  sprint={sprint} boxId={'2'}/>
        <Boxes sectionName={"Questions"} sprint={sprint} boxId={'3'}/>
      </div>
    </Provider>
  );
}

export default App;
