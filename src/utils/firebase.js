import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnA6bIbxY43hjuaVh-o2N7-zqFHTtYF98",
  authDomain: "netflix-1-cd4e8.firebaseapp.com",
  projectId: "netflix-1-cd4e8",
  storageBucket: "netflix-1-cd4e8.appspot.com",
  messagingSenderId: "630736271135",
  appId: "1:630736271135:web:d87d34d6b5228d73a4e22a",
  measurementId: "G-V6Z14N6GY7",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
