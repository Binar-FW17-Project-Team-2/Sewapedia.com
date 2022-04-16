import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableDeleteUser, TableEditUser } from "./UserTableButton";

function createData(id, displayname, email, img_url, role) {
  return { id, displayname, email, img_url, role };
}

const rows = [
  createData(1, "Frozen yoghurt", "test1@gmail.com", "Unta", "User"),
  createData(2, "Ice cream sandwich", "test2@gmail.com", "Lutung", "User"),
  createData(3, "Eclair", "test3@gmail.com", "Penyu", "User"),
  createData(4, "Cupcake", "test4@gmail.com", "Gorilla", "User"),
  createData(5, "Gingerbread", "test5@gmail.com", "Hyena", "User"),
];

export default function UserList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Display Name</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.displayname}
              </TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.img_url}</TableCell>
              <TableCell align="center">{row.role}</TableCell>
              <TableCell align="center">
                <TableEditUser />
                <TableDeleteUser />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
