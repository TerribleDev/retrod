import React from 'react';
import { databaseRef } from '../store/firebase.js'
import styles from "./deleteItem.module.css";

export default function DeleteItem({ item, boxId, objectId, sprint }) {
  // const [value, setValue ] = useState("");

  const handleClick = e => {
    let retroRef;
    if(boxId === "1"){
      retroRef = databaseRef.ref(`retros/` + sprint + `/www/` + item.id);
    } else if(boxId === "2"){
      retroRef = databaseRef.ref(`retros/` + sprint + `/!www/` + item.id);
    } else if(boxId === "3"){
      retroRef = databaseRef.ref(`retros/` + sprint + `/questions/` + item.id);
    } else {
      retroRef = databaseRef.ref(`retros/1/a/` + item.id);
    }
    // const item = {
    //   completed: false,
    //   id: uuid.v4(),
    //   title: value,
    // }
    // databaseRef.ref.remove(retroRef);
    // setValue("")
    retroRef.remove()
  }
  return (
    <button className={styles.deleteButton} onClick={handleClick}>DELETE</button>
  )
}
