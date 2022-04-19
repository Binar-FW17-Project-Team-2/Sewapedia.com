import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { TableDeleteUser, TableEditUser } from "./UserTableButton";
import { useState, useEffect } from "react";

export default function UserList() {
  const navigate = useNavigate();
  const [users, setUser] = useState([]);

  const handleEdit = (id) => {
    navigate("/user/edit/" + id);
  };

  const handleDelete = (id) => {
    alert("iya ini mau di ddelete " + id);
    // fetch("http://localhost:5000/api/users/" + id, {
    //   method: "DELETE",
    //   credentials: "include",
    // });
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await (
      await fetch("http://localhost:4000/api/v1/user", {
        credentials: "include",
      })
    ).json();

    setUser(data);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{user.id}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.img_url}</TableCell>
                <TableCell align="center">{user.role}</TableCell>
                <TableCell align="center">
                  <TableEditUser id={user.id} handleEdit={handleEdit} />
                  <TableDeleteUser id={user.id} handleDelete={handleDelete} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
