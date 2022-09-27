import React from "react";
import { Link } from "react-router-dom";
import cookie from "cookie";

const Navigation = (props) => {
  const { loggedInBool, setLoggedInBool } = props;
  return (
    <ul className="nav-list">
      <li className="nav-list-item">
        <Link to="/">HOME</Link>
      </li>
      <li className="nav-list-item2">
        <Link to="/about">ABOUT</Link>
      </li>
      {loggedInBool ? (
        <li className="nav-list-item">
          <Link
            style={{ color: "white" }}
            to="/login"
            onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              });
              document.cookie = cookie.serialize("userName", null, {
                maxAge: 0,
              });
              setLoggedInBool(false);
            }}
          >
            LOGOUT
          </Link>
        </li>
      ) : (
        <li className="nav-list-item">
          <Link style={{ color: "black" }} to="/login">
            LOGIN
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
