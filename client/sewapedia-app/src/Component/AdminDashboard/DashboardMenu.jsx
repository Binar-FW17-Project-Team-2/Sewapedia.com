import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DashboardLayout from "./DashboardLayout";
import { Toolbar } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function DashboardMenu() {
  const navigate = useNavigate();

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
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Dashboard</Button>
            <Button onClick={() => navigate("/user")}>Users</Button>
            <Button onClick={() => navigate("/products")}>Products</Button>
            <Button onClick={() => navigate("/transactions")}>
              Transactions
            </Button>
            <Button onClick={() => navigate("/categories")}>Category</Button>
          </ButtonGroup>
        </Container>
      </Box>
    </Box>
  );
}
