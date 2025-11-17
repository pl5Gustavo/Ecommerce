// firebase.js — coloque na pasta raiz do projeto

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";


// ===== SEU CONFIG CORRETO =====
const firebaseConfig = {
  apiKey: "AIzaSyDIi2Jw47fjlQ16G8qAMIFnfqNrKttLigs",
  authDomain: "ecommerce-e7f84.firebaseapp.com",
  projectId: "ecommerce-e7f84",
  storageBucket: "ecommerce-e7f84.appspot.com",
  messagingSenderId: "747354700150",
  appId: "1:747354700150:web:66ab6bba6a9c3b436fe257",
  measurementId: "G-NZ3R9TCYZK"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Exporta globalmente
window.firebaseApp = app;
window.auth = auth;
window.db = db;

console.log("🔥 Firebase carregado com sucesso");
