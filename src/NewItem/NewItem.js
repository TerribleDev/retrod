import React, {useState} from 'react';

export default function NewItem({ addItem }) {
  const [value, setValue ] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;

    addItem(value);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="stuff"
        onChange={e => setValue(e.target.value)}
        />
    </form>
  )
}
