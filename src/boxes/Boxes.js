import React from 'react';
import styles from './Boxes.module.css'
import Cards from '../cards/Cards.js'

export default function Boxes({ sectionName }) {
  return (
    <div>
      <h3>{sectionName}</h3>
      <div className={styles.box}>
        <Cards />
      </div>
    </div>
  )
}
