import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DashboardLayout from "../../Component/AdminDashboard/DashboardLayout";
import UserList from "./UserList";

function Users() {
  return (
    <div>
      <div>
        <DashboardLayout />
      </div>
      <div>
        <Box component="main" sx={{ display: "flex", flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Container>
            <UserList />
          </Container>
        </Box>
      </div>
    </div>
  );
}

export default Users;
