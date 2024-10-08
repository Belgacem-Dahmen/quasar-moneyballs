



// Exemple d'utilisation de Firestore pour récupérer des données
import { db } from 'src/firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
const EntriesCollection = collection(db, "entries");

export const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(EntriesCollection);
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data());
      });
    } catch (error) {
      console.error("Erreur lors de la récupération des données : ", error);
    }
  };


  
  