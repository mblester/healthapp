import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import cookie from "cookie";

const Login = (props) => {
  const navigate = useNavigate();
  const { setUser, setLoggedInBool } = props;

  const [userState, setUserState] = useState({
    userName: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setUserState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    // set cookie here loggedIn=true;max-age=60*1000
    //if we use the cookie module maxAge- the set time is in seconds, not milliseconds
    document.cookie = cookie.serialize("loggedIn", "true", { maxAge: 7200 });
    document.cookie = cookie.serialize("userName", userState.userName, {
      maxAge: 7200,
    });
    // set loggedIn = true and max-age = 60*1000 (one minute)

    let newUser = {
      userName: userState.userName,
      email: "newemail.mail",
    };
    setUser(newUser);
    setLoggedInBool(true);
    navigate("/");
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={handleTextChange}
            value={userState.username}
            name="username"
            label="Username"
            type="text"
            className="login-fill"
          />
          <br></br>
          <TextField
            required
            onChange={handleTextChange}
            value={userState.password}
            name="password"
            label="Password"
            type="password"
            className="login-fill"
          />
          <br></br>
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
