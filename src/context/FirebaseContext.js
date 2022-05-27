import { auth, db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const user_email = "";

export const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      user_email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
    
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
}
