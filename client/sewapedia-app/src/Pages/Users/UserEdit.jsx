import { Container, Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../Component/AdminDashboard/DashboardLayout";

function UserEdit() {
  const params = useParams();
  const id = params.id;

  const [users, setUsers] = useState({
    email: "",
    img_url: "",
  });

  const getUser = async () => {
    try {
      await fetch("http://localhost:4000/api/users/" + id);
      setUsers(users.data);
    } catch (error) {
      console.log("user tidak ditemukan");
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  return (
    <Box sx={{ display: "flex" }}>
      <DashboardLayout />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container sx={{ mt: 4, mb: 4 }}>
          {/* lanjut form edit */}
          <Typography>User edit, {id} </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default UserEdit;
