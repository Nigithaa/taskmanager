import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvsoeEci3BikmXKxZI9A7TpVn-KnzP4Qk",
  authDomain: "task-409d5.firebaseapp.com",
  projectId: "task-409d5",
  storageBucket: "task-409d5.appspot.com",
  messagingSenderId: "422879604960",
  appId: "1:422879604960:web:804de23160087683ea2085",
  measurementId: "G-1J53YDRPZ3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
