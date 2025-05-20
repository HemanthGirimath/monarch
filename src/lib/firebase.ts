import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD2EryYfcrhHRMZfneqdb8gaQmelHTh8EY",
  authDomain: "monarch-500e9.firebaseapp.com",
  databaseURL: "https://monarch-500e9-default-rtdb.firebaseio.com",
  projectId: "monarch-500e9",
  storageBucket: "monarch-500e9.firebasestorage.app",
  messagingSenderId: "993258417751",
  appId: "1:993258417751:web:d06874ef41984ead247d12"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
