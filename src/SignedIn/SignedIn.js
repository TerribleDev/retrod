import React, { useState } from "react";
import firebase from'firebase'
import { Link } from "@reach/router";
import Boxes from "../boxes/Boxes";
import styles from "./signedIn.module.css";

export default function SignedIn() {
  const [sprint, setSprint] = useState(1);
  return (
    <div>
      <div className={styles.alignRight}>
        <div className={styles.marginRight}>
          <p>{firebase.auth().currentUser.displayName}</p>
          <div>
            <img align="right" className={styles.profilePicture} alt='user profile' src={firebase.auth().currentUser.photoURL} />
          </div>
          <button className={styles.signOutButton} onClick={() => firebase.auth().signOut()}>Sign Out</button>
        </div>
      </div>
      <nav>
      <Link onClick={() => setSprint(sprint + 1)} to={`/` + sprint}>Sprint (+))</Link>
      {console.log(sprint)}
      </nav>
      <h3>Sprint {sprint}</h3>
        <div className={styles.grid}>
          <Boxes sectionName={"What Went Well"}  sprint={sprint} boxId={'1'}/>
          <Boxes sectionName={"What Could Be Better"}  sprint={sprint} boxId={'2'}/>
          <Boxes sectionName={"Questions"} sprint={sprint} boxId={'3'}/>
        </div>
    </div>
  )
}
