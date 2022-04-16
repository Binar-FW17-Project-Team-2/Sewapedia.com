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
    <div>
      <div>
        <DashboardLayout />
      </div>
      <div>
        <Box component="main" sx={{ display: "flex", flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Container>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>Dashboard</Button>
              <Button onClick={() => navigate("/users")}>Users</Button>
              <Button onClick={() => navigate("/products")}>Products</Button>
              <Button onClick={() => navigate("/transactions")}>
                Transactions
              </Button>
              <Button onClick={() => navigate("/categories")}>Category</Button>
            </ButtonGroup>
          </Container>
        </Box>
      </div>
    </div>
  );
}
