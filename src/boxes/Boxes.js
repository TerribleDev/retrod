import React from 'react';
import styles from './Boxes.module.css'

export default function Boxes({ sectionName }) {
  return (
    <div>
      <h3>{sectionName}</h3>
      <div className={styles.box}>
        <ul>
          <li>
          </li>
        </ul>
      </div>
    </div>
  )
}
