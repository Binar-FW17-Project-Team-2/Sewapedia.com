import React, { useState } from "react";
import NavBarAdmin from "./NavbarAdmin";
import SideDrawer from "./SideDrawer";
import CssBaseline from "@mui/material/CssBaseline";

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CssBaseline />
      <NavBarAdmin open={open} setOpen={setOpen} />
      <SideDrawer open={open} setOpen={setOpen} />
    </>
  );
}
