import { Container } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import DashboardLayout from "../../Component/AdminDashboard/DashboardLayout";
import UserList from "./UserList";

function Users() {
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
          <UserList />
        </Container>
      </Box>
    </Box>
  );
}

export default Users;
