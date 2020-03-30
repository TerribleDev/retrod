import React, { useState, useEffect, useMemo } from 'react';
import Boxes from "../boxes/Boxes";
import { databaseRef } from '../store/firebase.js'
import styles from "../sprintSelect/sprintSelect.module.css";

export function SprintSelect({item}) {
  const [sprint, setSprint] = useState(1);
  let sprintArray = [];
  let sortedSprint;
  sortedSprint = item.map((i, index) => (
          sprintArray.push(i.sprint_id)
        ))
        .reduce((unique, item) => {
          return unique.includes(item) ? unique : [...unique, item]
        }, [])
        .sort();
  let dropdownSprint;
  dropdownSprint = sortedSprint.map((i, index) => (
          <option onClick={() => setSprint(i)}>{i}</option>
        ));
  return (
    <div>
      <label>Choose Sprint:</label>
      <select>
      {dropdownSprint}
      </select>
      <h3>Sprint {sprint}</h3>
        <div className={styles.grid}>
          <Boxes sectionName={"What Went Well"}  sprint={sprint} boxId={'1'} />
          <Boxes sectionName={"What Could Be Better"}  sprint={sprint} boxId={'2'}/>
          <Boxes sectionName={"Questions"} sprint={sprint} boxId={'3'}/>
        </div>
    </div>
  )
}

export default function FirebaseWrapper() {
  const [cards, setCards] = useState(null)
  let retro = databaseRef.ref(`retros/1/www`);
  const retroRef = useMemo(() => databaseRef.ref(retro), []);
  useEffect(() => {
    retroRef.on('value', function(snapshot) {
      const values = Object.values(snapshot.val())
      setCards(values)
    });
    return () => {
      retroRef.off();
    }
  }, [retroRef]);
  if(!cards) {
    return <div>loading...</div>;
  };
  return <SprintSelect item={cards} setItem={()=> {}}/>
}
