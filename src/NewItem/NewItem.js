import React, {useState} from 'react';
import { databaseRef } from '../store/firebase.js'
import uuid from "uuid";

export default function NewItem({ addItem, boxId, sprint }) {
  const [value, setValue ] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    let retroRef;
    let url;
    if(boxId === "1"){
      url = `retros/` + sprint + `/www`;
      retroRef = databaseRef.ref(url);
    } else if(boxId === "2"){
      url = `retros/` + sprint + `/!www`;
      retroRef = databaseRef.ref(url);
    } else if(boxId === "3"){
      url = `retros/` + sprint + `/questions`;
      retroRef = databaseRef.ref(url);
    } else {
      url = 'retros/1/a';
      retroRef = databaseRef.ref(url);
    }
    const item = {
      completed: false,
      id: uuid.v4(),
      title: value,
    }
    let objectId = retroRef.push(item);
    databaseRef.ref(url + `/` + objectId.key + `/id`).set(objectId.key)
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
