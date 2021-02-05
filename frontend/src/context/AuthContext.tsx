import React, { useEffect, useState } from "react";
import { fireAuth } from '../firebase'
export const AuthContext = React.createContext({});

export const AuthProvider: React.FC = ({ children }) => {

  const [auth, setAuth] = useState({})

  useEffect(() => {
    fireAuth.onAuthStateChanged((user) => {
      console.log('HAY USER')
      if (user) {
        setAuth({
          userName: user.displayName,
          userID: user.uid,
          userMail: user.email,
          userPhoto: user.photoURL
        })
      } else {
        console.log('NO HAY USER!')
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={{ auth }}>
      {children}
    </AuthContext.Provider>
  );
};