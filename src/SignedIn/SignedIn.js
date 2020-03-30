import React from "react";
import firebase from'firebase';
import SprintSelect from "../sprintSelect/SprintSelect"
import styles from "./signedIn.module.css";

export default function SignedIn() {
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
      <SprintSelect />
    </div>
  )
}
