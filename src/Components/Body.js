import React from "react";
import { Link } from "react-router-dom";
import BodyCalendar from "./Calendar";

export default function Body(props) {
  return (
    <>
      <div className="calendarStyle">
        <BodyCalendar />
      </div>
      <div className="homeButtons">
        <button className="button1">Daily Check-In</button>
        <button className="button2">
          <Link to="/UpcomingAppointments">Upcoming Appointments</Link>
        </button>
        <button className="button3">
          <Link to="/AddAppointment">Schedule an Appointment</Link>
        </button>

        <button className="button4">Track Medications</button>
      </div>
    </>
  );
}
