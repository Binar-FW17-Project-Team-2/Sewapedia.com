import { Container } from "@mui/material";
import React, { useState } from "react";
import NavBarAdmin from "./NavbarAdmin";
import SideDrawer from "./SideDrawer";

export default function DashboardLayout() {
  return (
    <div>
      <div>
        <NavBarAdmin />
      </div>
      <div>
        <SideDrawer />
      </div>
    </div>
  );
}
