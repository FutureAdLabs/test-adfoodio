import React, { useEffect, useState } from "react";
import { fireAuth } from '../firebase'
export const AuthContext = React.createContext({});

export const AuthProvider: React.FC = ({ children }) => {

  const [auth, setAuth] = useState({
    userID: sessionStorage.getItem('userID') ? sessionStorage.getItem('userID') : "" ,
    userMail: sessionStorage.getItem('userMail') ? sessionStorage.getItem('userMail') : "" ,
    isUser: sessionStorage.getItem('isUser') ? sessionStorage.getItem('isUser') : false ,
  })

  useEffect(() => {
    fireAuth.onAuthStateChanged((user) => {
      if (user) {
        setAuth({
          userID: user.uid,
          userMail: user.email!,
          isUser:true
        })
        sessionStorage.setItem('userID', user.uid)
        sessionStorage.setItem('userMail', user.email!)
        sessionStorage.setItem('isUser', "true")
      } else {
        sessionStorage.removeItem('userID')
        sessionStorage.removeItem('userMail')
        sessionStorage.removeItem('isUser')
        setAuth({
          userID: "",
          userMail: "",
          isUser:false
        })

      }
    })
  }, [])

  return (
    <AuthContext.Provider value={{ auth }}>
      {children}
    </AuthContext.Provider>
  );
};