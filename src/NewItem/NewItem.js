import React, {useState} from 'react';
import { databaseRef } from '../store/firebase.js'
import uuid from "uuid";

export default function NewItem({ addItem, boxId }) {
  const [value, setValue ] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    let retroRef;
    if(boxId === "1"){
      retroRef = databaseRef.ref('retros/1/www');
    } else if(boxId === "2"){
      retroRef = databaseRef.ref('retros/1/!www');
    } else if(boxId === "3"){
      retroRef = databaseRef.ref('retros/1/questions');
    } else {
      retroRef = databaseRef.ref('retros/1/a');
    }
    const item = {
      completed: false,
      id: uuid.v4(),
      title: value,
    }
    retroRef.push(item);
    setValue("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="stuff"
          onChange={e => setValue(e.target.value)}
          />
      </form>
    </div>
  )
}
