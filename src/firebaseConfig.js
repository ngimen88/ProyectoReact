import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyArlZQWkrAYVSmpEBRMO3E8QC6scIzIe0w",
    authDomain: "tienda-fe287.firebaseapp.com",
    projectId: "tienda-fe287",
    storageBucket: "tienda-fe287.appspot.com",
    messagingSenderId: "596902336983",
    appId: "1:596902336983:web:e52bb9bc7301367d1b9392"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtiene una instancia de Auth
const auth = getAuth(app);

export default auth;

