import { useState, useEffect } from "react";
import Table from "../Containers/Table";
import { Link } from "react-router-dom";

export default function UpcomingAppointments() {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://capstone-backend-jet.vercel.app/api/appointments"
      );
      const json = await data.json();
      setAppointments(json);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(appointments);
  }, [appointments]);
  return (
    <div>
      <button className="add-button">
        <Link to={"/addAppointment"}>Add Appointment</Link>
      </button>
      <Table />
    </div>
  );
}
