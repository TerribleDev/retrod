import React, { useState, useEffect, useMemo } from 'react';
import { databaseRef } from '../store/firebase.js'
import Item from '../Items/Items.js';
import NewItem from '../NewItem/NewItem.js'
import uuid from "uuid";

export function Cards({item, setItem}) {

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

export default function FirebaseWrapper() {
  const [cards, setCards] = useState(null)
  const retroRef = useMemo(() => databaseRef.ref('retros/1'), []);
  useEffect(() => {
    retroRef.on('value', function(snapshot) {
      const values = Object.values(snapshot.val())
      setCards(values)
    });
    // this will be called when our component unmounts
    return () => {
      retroRef.off();
    }
  }, [retroRef]);
  if(!cards) {
    return <div>loading...</div>;
  };
  return <Cards item={cards} setItem={()=> {}}/>
}
