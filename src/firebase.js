import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB2lVM99hk7Yqz5lIkxOveOaFWJxeQUc8I",
  authDomain: "lost-and-found-5b6da.firebaseapp.com",
  projectId: "lost-and-found-5b6da",
  storageBucket: "lost-and-found-5b6da.appspot.com",
  messagingSenderId: "1359970225",
  appId: "1:1359970225:web:422b430c5677e8452e4790"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();