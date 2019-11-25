import React, { useState, useEffect, useMemo } from 'react';
import { databaseRef } from '../store/firebase.js'
import Item from '../Items/Items.js';
import NewItem from '../NewItem/NewItem.js'
import DeleteItem from '../deleteItem/DeleteItem.js'

export function Cards({item, setItem, boxId}) {
  return (
    <>
      {item.map((i, index) => (
                      <div key={i.id}>
                        <Item
                            item={i}
                            index={index}
                          />
                          <DeleteItem item={i} boxId={boxId} />
                      </div>
                  ))}
      <NewItem boxId={boxId}/>
    </>
  )
}

export default function FirebaseWrapper({boxId}) {
  const [cards, setCards] = useState(null)
  let retro;
  if(boxId === "1"){
    retro = databaseRef.ref('retros/1/www');
  } else if(boxId === "2"){
    retro = databaseRef.ref('retros/1/!www');
  } else if(boxId === "3"){
    retro = databaseRef.ref('retros/1/questions');
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
  return <Cards item={cards} boxId={boxId} setItem={()=> {}}/>
}
