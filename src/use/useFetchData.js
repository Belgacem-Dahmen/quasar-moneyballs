




import { db } from 'src/firebase/firebase';
import { collection, getDocs,onSnapshot} from 'firebase/firestore';
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

export const subscribeToData = (callback) => {
  const unsubscribe = onSnapshot(EntriesCollection, (querySnapshot) => {
    const entries = [];
    querySnapshot.forEach((doc) => {
      entries.push({ id: doc.id, ...doc.data() });
    });
    callback(entries);
  }, (error) => {
    console.error("Erreur lors de la récupération des données : ", error);
  });

  return unsubscribe; // Retourne une fonction pour se désabonner si nécessaire
};
