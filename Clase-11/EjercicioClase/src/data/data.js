import 'dotenv/config'; //trae la libreria de las variables de entorno dentro de .env
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

//vonfiguracion de firebase con claves que vienen del archivo .env
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "back-node-2025",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "338768976844",
  appId: process.env.FIREBASE_APP_ID
};
 // Metodo que inicializa dentro de nuestra api Firebase
  const app = initializeApp(firebaseConfig);
  // creacion de base de datos pasando la api creada
  const db = getFirestore(app); //dentro de esta variable es donde se encuentra guardada la referencia a mi base de datos firestore para manejar desde modelos 
  export { db }; //aca exportamos la variable para poder usarla en otras partes



