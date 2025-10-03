import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCuXw8g2843k_ldd1Omcxi5_jRItNjGlg0",
  authDomain: "battlezone-1da3e.firebaseapp.com",
  projectId: "battlezone-1da3e",
  storageBucket: "battlezone-1da3e.firebasestorage.app",
  messagingSenderId: "721441315865",
  appId: "1:721441315865:web:05f303f10ec2bbb10ade88",
  measurementId: "G-G5PXHD0Q6E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
