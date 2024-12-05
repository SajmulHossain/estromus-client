import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import auth from '../firebase/firebase.init'

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logout = () => {
    return signOut(auth);
  }

  const signinWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(()=> {
    const unmount = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    })

    return () => {
      unmount();
    }
  },[])

  const data = {
    user,
    setUser,
    createUser,
    loginUser,
    logout,
    signinWithGoogle,
    loading
  };
  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;