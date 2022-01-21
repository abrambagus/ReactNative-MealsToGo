import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCGYTTf4m1zwetz1v-PWMThxuxexyxHSRY",
  authDomain: "mealstogo-3db07.firebaseapp.com",
  projectId: "mealstogo-3db07",
  storageBucket: "mealstogo-3db07.appspot.com",
  messagingSenderId: "880032011398",
  appId: "1:880032011398:web:cf2ea2a65774b4b6cf2d07",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export const loginRequest = (email, password) => {
  return new Promise((resolve, reject) => [
    signInWithEmailAndPassword(auth, email, password)
      .then((u) => {
        resolve(u);
      })
      .catch((e) => {
        reject(e);
      }),
  ]);
};
