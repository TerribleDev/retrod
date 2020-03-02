import React, {useState, useEffect} from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from'firebase'
import { Provider } from "react-redux";
import { Router, Link } from "@reach/router";
import Boxes from "./boxes/Boxes";
import styles from "./App.module.css";
import setupStore from "./store/setupStore.js";
const config = {
  apiKey: "AIzaSyC5krz4RBiT87RK7cEidh3n-A4H63uGcyM",
  authDomain: "retrod-7e2cd.firebaseapp.com",
};
const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/signedIn',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};
function App() {
  const [sprint, setSprint] = useState(1);
  const [isSignedIn, setSignIn] = useState(false)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setSignIn(!!user)
    })
  })
  return (
    <Provider store={setupStore()}>
    <Router>
      <Boxes exact path={`/` + sprint} />
    </Router>
    <div>
    {isSignedIn ? (
      <>
      <h1>You're Signed In</h1>
      <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
      <nav>
      <Link onClick={() => setSprint(sprint + 1)} to={`/` + sprint}>Sprint (+))</Link>
      </nav>
      <h3>Sprint {sprint}</h3>
        <div className={styles.grid}>
          <Boxes sectionName={"What Went Well"}  sprint={sprint} boxId={'1'}/>
          <Boxes sectionName={"What Could Be Better"}  sprint={sprint} boxId={'2'}/>
          <Boxes sectionName={"Questions"} sprint={sprint} boxId={'3'}/>
        </div>
      </>
    ) : (
      <>
      <h1>You're Not Signed In</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </>
    )
    }
    </div>
    </Provider>
  );
}

export default App;
