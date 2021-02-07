import React, { useState } from "react";
import { fireAuth } from "../../firebase";
import { newUser } from "../../service/auth.service";

const Signin = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  // const Auth = useContext(AuthContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    fireAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        newUser({ email: user.email });
        //service
      })
      .catch((err) => {
        fireAuth
          .signInWithEmailAndPassword(user.email, user.password)
          .then((ros) => {
          })
          .catch((err) => {
          });
      });
  };

  return (
    <>
      <input
        type="text"
        placeholder="EMAIL"
        name="email"
        onChange={handleChange}
      ></input>
      <br></br>
      <input
        type="text"
        placeholder="PASS"
        name="password"
        onChange={handleChange}
      ></input>
      <br></br>
      <button onClick={handleSubmit}>PALANTE</button>
      <br></br>
      <br></br>
      <button onClick={() => fireAuth.signOut()}>LOGOUT</button>
    </>
  );
};

export default Signin;
