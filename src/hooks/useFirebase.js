import { useState, useEffect, useMemo } from 'react';
import { databaseRef } from '../store/firebase.js'
export default function useFirebase(pathRef) {
    const [data, setData] = useState(null)
    const retroRef = useMemo(() => databaseRef.ref(pathRef), [pathRef]);
    useEffect(() => {
      retroRef.on('value', function(snapshot) {
        const values = Object.values(snapshot.val())
        setData(values)
      });
      // this will be called when our component unmounts
      return () => {
        retroRef.off();
      }
    }, [retroRef]);
    return [data]
}
