// import app from 'firebase/app';
import {initializeApp} from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const config = {
  apiKey: "AIzaSyBj3XzqkFma8jTcEy0Dqqop4B3dgylt0DE",
  authDomain: "marvel-quiz-c97bb.firebaseapp.com",
  projectId: "marvel-quiz-c97bb",
  storageBucket: "marvel-quiz-c97bb.appspot.com",
  messagingSenderId: "932629538648",
  appId: "1:932629538648:web:d9a580d4d192ca5117a72d",
};

class Firebase{
    constructor()
    {
       const app = initializeApp(config);
       this.auth = getAuth();
       this.db = getFirestore(app)
    }

  // Signup
  signupUser = async (email,password) =>
  {
     createUserWithEmailAndPassword(this.auth,email,password);
     return this.auth;
  }
  // Login
  loginUser = async (email,password) => 
  {
     signInWithEmailAndPassword(this.auth,email,password)
  }

  // Logout
  signoutUser = async ()=> signOut(this.auth)

//Reset password
  resetPassword = async (email)=>{
          sendPasswordResetEmail(this.auth,email)
  }

// Get user information in data base
user =  async(uid) =>
{
   this.db.doc(`users/${uid}`);
}
}


export default Firebase;