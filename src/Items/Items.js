import React from 'react';
import { databaseRef } from '../store/firebase.js'
import styles from "./items.module.css";

export default function Item({ item, boxId, sprint }) {
  const handleClick = e => {
    let url;
    if(boxId === "1"){
      url = `retros/` + sprint + `/www/`
    } else if(boxId === "2"){
      url = `retros/` + sprint + `/!www/`
    } else if(boxId === "3"){
      url = `retros/` + sprint + `/questions/`
    } else {
      url = 'retros/1/a/'
    }
    databaseRef.ref(url + item.id + `/completed`).set(item.completed === false ? true : false)
  }
  return (
    <div className={styles.flexItem}>
      <p style={{ textDecoration: item.completed ? "line-through" : "" }}>{item.title}</p>
      <button onClick={handleClick}>{item.completed === false ? <p className={styles.checkmark}>✓</p> : <p className={styles.redx}>x</p>}</button>
    </div>
  )
}
