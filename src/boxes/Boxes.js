import React from 'react';
import styles from './Boxes.module.css'
import Cards from '../cards/Cards.js'

export default function Boxes({ sectionName, boxId, sprint }) {
  return (
    <div>
      <div className={styles.box}>
        <Cards sectionName={sectionName} boxId={boxId} sprint={sprint}/>
      </div>
    </div>
  )
}
