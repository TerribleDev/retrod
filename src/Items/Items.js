import React from 'react';
import { databaseRef } from '../store/firebase.js'

export default function Item({ item, boxId }) {
  const handleClick = e => {
    let url;
    if(boxId === "1"){
      url = 'retros/1/www/'
    } else if(boxId === "2"){
      url = 'retros/1/!www/'
    } else if(boxId === "3"){
      url = 'retros/1/questions/'
    } else {
      url = 'retros/1/a/'
    }
    databaseRef.ref(url + item.id + `/completed`).set(item.completed === false ? true : false)
  }
  return (
    <div style={{ textDecoration: item.completed ? "line-through" : "" }}>
      {item.title}
      <button onClick={handleClick}>{item.completed === false ? 'done' : 'undo'}</button>
    </div>
  )
}
