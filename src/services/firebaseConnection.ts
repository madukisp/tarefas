import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBVpV3XGnxm53C8rTqbHsVk3wjqyNV-YtU",
  authDomain: "tarefas-51b97.firebaseapp.com",
  projectId: "tarefas-51b97",
  storageBucket: "tarefas-51b97.appspot.com",
  messagingSenderId: "30478710517",
  appId: "1:30478710517:web:0cf18f3ea6a06d2932f7bc"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };