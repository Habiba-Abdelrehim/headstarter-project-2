import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "MY_API_KEY",
  authDomain: "MY_PROJECT_ID.firebaseapp.com",
  projectId: "MY_PROJECT_ID",
  storageBucket: "MY_PROJECT_ID.appspot.com",
  messagingSenderId: "MY_MESSAGING_SENDER_ID",
  appId: "MY_APP_ID"
  };

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
const analytics = getAnalytics(app);