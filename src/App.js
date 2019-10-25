import React from 'react';
import Boxes from './boxes/Boxes'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.grid}>
      <Boxes sectionName={'What Went Well'} />
      <Boxes sectionName={'What Could Be Better'} />
      <Boxes sectionName={'Questions'} />
    </div>
  );
}

export default App;
