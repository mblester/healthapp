import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//import { useState } from "react";
//import state from "../redux/state";
import DeleteIcon from "@mui/icons-material/Delete";
//import { removeAppointment } from "../redux/actions";

export default function CustomTable(props) {
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
    console.log("this is table appointments", appointments);
  }, [appointments]);
  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="tableHeader">
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Doctor</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((row, idx) => (
              <TableRow
                key={row.Date}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.appointment_date}</TableCell>
                <TableCell align="right">{row.appointment_time}</TableCell>
                <TableCell align="right">{row.LastName}</TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    onClick={() => props.removeAppointment(idx)}
                    sx={{ cursor: "pointer" }}
                  ></DeleteIcon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
