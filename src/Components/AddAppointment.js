import React, { useState } from "react";
import { Button, TextField, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddAppointment = (props) => {
  const { addAppointment, appointments } = props;
  console.log("this is appointment props", props);
  const [appointmentInfo, setAppointmentInfo] = useState({
    date: "",
    time: "",
    last_name: "",
  });

  const navigate = useNavigate();

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setAppointmentInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const createNewAppointment = (e) => {
    e.preventDefault();
    let listObj = {
      id: appointments.length + 1,
      date: appointmentInfo.date,
      time: appointmentInfo.time,
      last_name: appointmentInfo.last_name,
    };
    console.log("list object", listObj);
    addAppointment(listObj);
    navigate("/UpcomingAppointments");
  };

  return (
    <>
      <Container maxWidth="sm">
        <form className="add-form" onSubmit={createNewAppointment}>
          <TextField
            required
            fullWidth
            margin="normal"
            onChange={handleTextChange}
            value={appointmentInfo.date}
            name="date"
            label="Date"
            type="text"
            variant="standard"
            className="date"
          />
          <TextField
            required
            fullWidth
            margin="normal"
            onChange={handleTextChange}
            value={appointmentInfo.time}
            name="time"
            label="Time"
            type="text"
            variant="standard"
          />
          <TextField
            required
            fullWidth
            margin="normal"
            onChange={handleTextChange}
            value={appointmentInfo.last_name}
            name="last_name"
            label="Doctor"
            type="text"
            variant="standard"
          />
          <Button
            type="submit"
            className="submit-button"
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "grey", width: "10vw", margin: "10px" }}
          >
            Save Appointment
          </Button>
        </form>
      </Container>
    </>
  );
};

export default AddAppointment;
