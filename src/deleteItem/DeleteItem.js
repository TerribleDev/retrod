import React from 'react';
import { databaseRef } from '../store/firebase.js'

export default function DeleteItem({ item, boxId, objectId }) {
  // const [value, setValue ] = useState("");

  const handleClick = e => {
    let retroRef;
    if(boxId === "1"){
      retroRef = databaseRef.ref(`retros/1/www/` + item.id);
    } else if(boxId === "2"){
      retroRef = databaseRef.ref(`retros/1/!www/` + item.id);
    } else if(boxId === "3"){
      retroRef = databaseRef.ref(`retros/1/questions/` + item.id);
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
    <button onClick={handleClick}>x</button>
  )
}
