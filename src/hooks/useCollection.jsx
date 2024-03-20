import { useState, useEffect, useRef } from "react";
import { db } from "../Firebase/config";

//Fb imports

import { collection, onSnapshot, query, where } from "firebase/firestore";

function useCollection(c, _q) {
  const [documents, setDocuments] = useState(null);

  // för query
  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(db, c);

    if (q) {
      ref = query(ref, where(...q));
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });
    return () => {
      unsub();
    };
  }, [c, q]);
  return { documents };
}

export default useCollection;
