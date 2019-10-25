import React from 'react';

export default function Item({ item }) {
  return (
    <div style={{ textDecoration: item.completed ? "line-through" : "" }}>
      {item.title}
    </div>
  )
}
