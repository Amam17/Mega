// Firebase SDK Imports
import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getStorage }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


// Firebase Configuration
const firebaseConfig = {
apiKey:"AIzaSyAnFW4v6GLdDyCsgMwoySyss4T4Q93hVtQ",
authDomain:"meganet-5be7c.firebaseapp.com",
projectId:"meganet-5be7c",
storageBucket:"meganet-5be7c.firebasestorage.app",
messagingSenderId:"85379992133",
appId:"1:85379992133:web:8c029bc68389bd2313312c",
measurementId:"G-N3HMR7QQ90"
};


// Initialize App
const app = initializeApp(firebaseConfig);


// Export Services
export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export default app;
