import React, {useState} from 'react';
import { databaseRef } from '../store/firebase.js'
import uuid from "uuid";

export default function NewItem({ addItem, boxId }) {
  const [value, setValue ] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    let retroRef = databaseRef.ref('retros/1/questions');

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
