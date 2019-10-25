import React, {useState} from 'react';

export default function DeleteItem({ deleteItem }) {

  const handleClick = e => {
    deleteItem(value);
    setValue("");
  }
  return (
    <button onClick={handleClick}>x</button>
  )
}
