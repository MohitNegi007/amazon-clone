import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBF_cONS-Yiw7CHE4PlRAoP1Ku63GV1NkI",
  authDomain: "clone2-f771c.firebaseapp.com",
  projectId: "clone2-f771c",
  storageBucket: "clone2-f771c.appspot.com",
  messagingSenderId: "878669953099",
  appId: "1:878669953099:web:5bc97fa12187a4c471f5ce",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
