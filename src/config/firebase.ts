import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDKNAXm2W5SvP1BRtnpuEP5Nfi1mLY9JbU",
  authDomain: "irisk-f80b6.firebaseapp.com",
  projectId: "irisk-f80b6",
  storageBucket: "irisk-f80b6.firebasestorage.app",
  messagingSenderId: "1043775489004",
  appId: "1:1043775489004:web:1646b01e11ba83a2ecb6c9",
  measurementId: "G-ZECY4M4BTL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }; 