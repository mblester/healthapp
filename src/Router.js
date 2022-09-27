import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import UpcomingAppointments from "./Containers/UpcomingAppointments";
import Table from "./Containers/Table";
import cookie from "cookie";
import AddAppointment from "./Containers/AddAppointment";

export const checkAuth = () => {
  let cookieObj = cookie.parse(document.cookie);
  let cookieBool = cookieObj.loggedIn;
  if (cookieBool === "true") {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;

  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/table" element={<Table />} />
      <Route path="/UpcomingAppointments" element={<UpcomingAppointments />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/addAppointment"
        element={<ProtectedRoute component={AddAppointment} />}
      />

    </Routes>
  );
}
