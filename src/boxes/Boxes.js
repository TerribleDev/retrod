import React from 'react';
import styles from './Boxes.module.css'
import Cards from '../cards/Cards.js'

export default function Boxes({ sectionName, boxId }) {
  return (
    <div>
      <h3>{sectionName}</h3>
      <div className={styles.box}>
        <Cards sectionName={sectionName} boxId={boxId}/>
      </div>
    </div>
  )
}
