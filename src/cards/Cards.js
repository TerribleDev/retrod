import React, { useState, useEffect, useMemo } from 'react';
import { databaseRef } from '../store/firebase.js'
import Item from '../Items/Items.js';
import NewItem from '../NewItem/NewItem.js'
import DeleteItem from '../deleteItem/DeleteItem.js'

export function Cards({item, setItem, boxId, sprint}) {
  return (
    <>
      {item.map((i, index) => (
                      <div key={i.id}>
                        <Item
                            item={i}
                            index={index}
                            boxId={boxId}
                            sprint={sprint}
                          />
                          <DeleteItem item={i} boxId={boxId} sprint={sprint}/>
                      </div>
                  ))}
      <NewItem sprint={sprint} boxId={boxId}/>
    </>
  )
}

export default function FirebaseWrapper({boxId, sprint}) {
  const [cards, setCards] = useState(null)
  let retro;
  if(boxId === "1"){
    retro = databaseRef.ref(`retros/` + sprint + `/www`);
  } else if(boxId === "2"){
    retro = databaseRef.ref(`retros/` + sprint + `/!www`);
  } else if(boxId === "3"){
    retro = databaseRef.ref(`retros/` + sprint + `/questions`);
  } else {
    retro = databaseRef.ref('retros/1/a');
  }
  const retroRef = useMemo(() => databaseRef.ref(retro), []);
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
  return <Cards item={cards} boxId={boxId} sprint={sprint} setItem={()=> {}}/>
}
