import * as React from "react";
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

export default function table(props) {
  console.log("this is props", props);
  // const [appointments, setAppointments] = useState([
  //   {
  //     date: "11/08/2022",
  //     id: "4:41 PM",
  //     last_name: "Drews",
  //   },
  //   {
  //     date: "12/03/2022",
  //     id: "12:57 PM",
  //     last_name: "De Giovanni",
  //   },
  //   {
  //     date: "11/15/2022",
  //     id: "1:54 PM",
  //     last_name: "Knappe",
  //   },
  //   {
  //     date: "12/18/2022",
  //     id: "12:29 PM",
  //     last_name: "Ambroziak",
  //   },
  //   {
  //     date: "11/02/2022",
  //     id: "9:46 AM",
  //     last_name: "Taffie",
  //   },
  //   {
  //     date: "12/25/2022",
  //     id: "11:39 AM",
  //     last_name: "Somerville",
  //   },
  //   {
  //     date: "12/23/2022",
  //     id: "4:13 PM",
  //     last_name: "Gooble",
  //   },
  //   {
  //     date: "11/03/2022",
  //     id: "9:21 AM",
  //     last_name: "Greenwood",
  //   },
  //   {
  //     date: "11/30/2022",
  //     id: "11:43 AM",
  //     last_name: "Loughney",
  //   },
  //   {
  //     date: "11/05/2022",
  //     id: "4:02 PM",
  //     last_name: "Bloodworthe",
  //   },
  // ]);

  console.log("this is state", props.state);
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
            {props.appointments.map((row, idx) => (
              <TableRow
                key={row.Date}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.last_name}</TableCell>
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
