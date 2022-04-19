import { Container } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DashboardLayout from "../../Component/AdminDashboard/DashboardLayout";

function Products() {
  return (
    <div>
      <div>
        <DashboardLayout />
      </div>
      <div>
        <Box component="main" sx={{ display: "flex", flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Container>
            <Typography paragraph>Ini dari Products</Typography>
          </Container>
        </Box>
      </div>
    </div>
  );
}

export default Products;
