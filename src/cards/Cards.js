import React, { useState } from 'react';
import Item from '../Items/Items.js';
import NewItem from '../NewItem/NewItem.js'

export default function Cards({}) {

  const [item, setItem] = useState(['']);

        const addItem = title => {
          const newItem = [...item, {title, completed: false}];
          setItem(newItem)
        }

  return (
    <div>
      {item.map((item, index) => (
                      <Item
                          item={item}
                          index={index}
                          key={index}
                      />
                  ))}
      <NewItem addItem={addItem} />
    </div>
  )
}
