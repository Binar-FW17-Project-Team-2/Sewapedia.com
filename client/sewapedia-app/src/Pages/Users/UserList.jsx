import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableDeleteUser, TableEditUser } from "./UserTableButton";
import { useState, useEffect } from "react";

export default function UserList() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    // untuk url BE tinggal replace ke http://localhost:4000/api/v1/user
    // dibawah cuma untuk contoh fetch
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Display Name</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Email</TableCell>
            {/* <TableCell align="center">Image</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Actions</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="center">{user.id}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                {/* <TableCell align="center">{user.img_url}</TableCell>
              <TableCell align="center">{user.role}</TableCell> */}
                <TableCell align="center">
                  <TableEditUser />
                  <TableDeleteUser />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
