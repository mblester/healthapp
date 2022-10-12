import React, { useState, useEffect } from "react";
import { Button, TextField, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddAppointment = (props) => {
  const { addAppointment, appointments } = props;
  console.log("this is appointment props", props);
  const [appointmentInfo, setAppointmentInfo] = useState({
    appointment_date: "",
    appointment_time: "",
    LastName: "",
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
  useEffect(() => {
    console.log("this is add appointments", appointments);
    axios({
      method: 'PUT',
      url:  `https://capstone-backend-jet.vercel.app/api/appointments/${appointments.id}`,
      data: {
        appointment_date: appointments.date,
        appointment_time: appointments.time,
        LastName: appointments.last_name,
      }
      })
      .then((res)=> {
        //retrieve titles again so this title
        //displays on the list
     console.log("this is res", res)
      })
  }, [appointments]);

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
