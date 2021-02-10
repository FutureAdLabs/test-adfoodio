import React, { useState, useContext } from "react";
import { fireAuth } from "../../firebase";
import { newUser } from "../../service/auth.service";
import "./Signin.css";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


// Signin and Login page using Firebase Auth on the client and setting it in the DDBB
const Signin = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const Auth: any = useContext(AuthContext);

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
      })
      .catch((err) => {
        fireAuth
          .signInWithEmailAndPassword(user.email, user.password)
          .then((ros) => {})
          .catch((err) => {});
      });
  };

  return (
    <>
      <br></br>
      <br></br>
      <div className="mainFormControl">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
            <Input
              id="input-with-icon-adornment"
              name="email"
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <br></br>
          <FormControl>
            <InputLabel htmlFor="input-with-icon-adornment">
              Password
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              name="password"
              type="password"
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <VpnKeyIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <br></br>
          <br></br>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            fullWidth
            onClick={handleSubmit}
            startIcon={<ExitToAppIcon />}
          >
            sing in
          </Button>
        </form>
      </div>
      {Auth.auth.isUser ? <Redirect to="/profile" /> : null}
    </>
  );
};

export default Signin;
