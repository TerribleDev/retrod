import React, { useState } from 'react';
import Item from '../Items/Items.js';
import NewItem from '../NewItem/NewItem.js'
import uuid from "uuid";

export default function Cards({}) {

  const [item, setItem] = useState([
            {
                title: "item 1",
                completed: true,
                id: uuid.v4()
            },
            {
                title: "item 2",
                completed: true,
                id: uuid.v4()
            },
            {
                title: "item 3",
                completed: false,
                id: uuid.v4()
            }
        ]);

        const addItem = title => {
          const newItem = [...item, {title, completed: false, id: uuid.v4()}];
          setItem(newItem)
        }
        const deleteItem = id => {
          const deleted = item.reduce((acc, current) => {
            if(current.id !== id){
              return [...acc, current];
            }
            return [...acc, {...current, completed: true}]
          }, [])
          setItem(deleted)
        }

        return (
          <>
            {item.map((i, index) => (
                            <div key={i.id}>
                              <Item
                                  item={i}
                                  index={index}
                              />
                                <button onClick={() => deleteItem(i.id) }>x</button>
                            </div>
                        ))}
            <NewItem addItem={addItem} />
          </>
        )
      }
