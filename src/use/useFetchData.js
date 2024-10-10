import { db } from "src/firebase/firebase";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";

const EntriesCollection = collection(db, "entries");

/**
 * Récupérer les données
 * @returns
 */
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

/**
 * Insérer une nouvelle entrée
 * @param {*} newEntry
 */
export const insertData = async (newEntry) => {
  await setDoc(doc(db, "entries", newEntry.id), newEntry);
};

/**
 * Supprimer une entrée par ID
 * @param {*} id
 */
export const deleteData = async (id) => {
  try {
    await deleteDoc(doc(db, "entries", id));
  } catch (error) {
    console.log("error : impossible de supprimer la donnée ", error, id);
  }
};
