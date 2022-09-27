import React from "react";
import CustomTable from "./Table";
import { Link } from "react-router-dom";

export default function UpcomingAppointments() {
  return (
    <div>
      <button className="add-button">
        <Link to={"/addAppointment"}>Add Appointment</Link>
      </button>
      <CustomTable />
    </div>
  );
}
