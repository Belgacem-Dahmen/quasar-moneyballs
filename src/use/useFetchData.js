




import { db } from 'src/firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
const EntriesCollection = collection(db, "entries");

export const fetchData = async () => {
  try {
    const querySnapshot = await getDocs(EntriesCollection);
    const entries = [];

    querySnapshot.forEach((doc) => {
      
      entries.push({ id: doc.id, ...doc.data() }); 
    });
    
    
    return entries;   
  } catch (error) {
    console.error("Erreur lors de la récupération des données : ", error);
    throw error; 
  }
};



  
  