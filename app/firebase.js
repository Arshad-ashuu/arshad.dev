
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdr5iG0ghywCLiOKsEyEKK0q3Pg_q36iw",
  authDomain: "myweb-blog-81bca.firebaseapp.com",
  projectId: "myweb-blog-81bca",
  storageBucket: "myweb-blog-81bca.appspot.com",
  messagingSenderId: "520142975313",
  appId: "1:520142975313:web:839ea32265c53205f9a370"
};


const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export {db}