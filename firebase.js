// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// SUAS CONFIGURAÇÕES DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCnB1GzUIyDvSbO48eqbxqrncaNuLUK99Q",
  authDomain: "silv-con.firebaseapp.com",
  projectId: "silv-con",
  storageBucket: "silv-con.firebasestorage.app",
  messagingSenderId: "279439742066",
  appId: "1:279439742066:web:ced100ab3d6c5312ebdeeb",
  measurementId: "G-24C3SW8YP7"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Authentication
const auth = getAuth(app);

// Inicializar Firestore
const db = getFirestore(app);

// Exportar auth e db
export { auth, db };
